#!/usr/bin/env python3
"""
stock_signal.py – 2nd edition
================================================
Robust buy/sell screener combining three classic momentum indicators:

  • **Moving‑Average crossover** – default 50‑day vs 200‑day SMAs
  • **MACD** – (12 ⁄ 26 EMA) zero‑line cross with 9‑EMA signal
  • **Stochastic Oscillator** – 14 ⁄ 3 %K/%D overbought / oversold crosses

A decisive **BUY** or **SELL** is printed **only when *all three* indicators agree**; otherwise we output HOLD.

*Free data source*: Yahoo Finance via the *yfinance* package.

USAGE EXAMPLE
-------------
```bash
pip install yfinance pandas numpy
python stock_signal.py --ticker AAPL --start 2023-01-01
```
Optional flags   `--sma_short 20`   `--sma_long 100`  let you customise the MA lengths.

DISCLAIMER
----------
This script is for educational use only and **not** investment advice. Markets carry risk; always do your own due diligence.
"""

from __future__ import annotations

import argparse
import datetime as dt
from typing import Literal

import numpy as np
import pandas as pd
import yfinance as yf

# ────────────────────────────────────────────────────────────────────────────────
# Data acquisition
# ────────────────────────────────────────────────────────────────────────────────

def fetch_ohlc(ticker: str, start: str) -> pd.DataFrame:
    """Download daily OHLC data from Yahoo Finance (via yfinance)."""
    return yf.download(
        ticker,
        start=start,
        auto_adjust=False,  # keep raw OHLC for indicators that need High/Low
        progress=False,
    ).dropna(how="all")


# ────────────────────────────────────────────────────────────────────────────────
# Indicator calculations
# ────────────────────────────────────────────────────────────────────────────────

def add_indicators(df: pd.DataFrame, sma_short: int, sma_long: int) -> pd.DataFrame:
    """Append MA, MACD, and Stochastic columns to *df*, dropping initial NaNs."""

    # Moving Averages
    df["SMA_short"] = df["Close"].rolling(sma_short).mean()
    df["SMA_long"] = df["Close"].rolling(sma_long).mean()

    # MACD (12/26 EMA) and 9‑period signal
    df["EMA12"] = df["Close"].ewm(span=12, adjust=False).mean()
    df["EMA26"] = df["Close"].ewm(span=26, adjust=False).mean()
    df["MACD"] = df["EMA12"] - df["EMA26"]
    df["MACD_signal"] = df["MACD"].ewm(span=9, adjust=False).mean()

    # Stochastic Oscillator (14‑period, 3‑period smoothing)
    low14 = df["Low"].rolling(14).min()
    high14 = df["High"].rolling(14).max()
    df["%K"] = 100 * (df["Close"] - low14) / (high14 - low14)
    df["%D"] = df["%K"].rolling(3).mean()

    return df.dropna()


# ────────────────────────────────────────────────────────────────────────────────
# Signal logic
# ────────────────────────────────────────────────────────────────────────────────

Signal = Literal["buy", "sell", "hold"]


def ma_signal(df: pd.DataFrame) -> Signal:
    """Golden‑cross / death‑cross on the two SMAs."""
    if len(df) < 2:
        return "hold"
    prev, curr = df.iloc[-2], df.iloc[-1]

    bull_cross = (prev["SMA_short"] < prev["SMA_long"]).any() and (
        curr["SMA_short"] >= curr["SMA_long"]
    ).any()
    bear_cross = (prev["SMA_short"] > prev["SMA_long"]).any() and (
        curr["SMA_short"] <= curr["SMA_long"]
    ).any()

    if bull_cross:
        return "buy"
    if bear_cross:
        return "sell"
    return "hold"


def macd_signal(df: pd.DataFrame) -> Signal:
    """Zero‑line crosses on the raw MACD (not the signal)."""
    if len(df) < 2:
        return "hold"
    prev, curr = df.iloc[-2], df.iloc[-1]

    if (prev["MACD"] < 0).any() and (curr["MACD"] >= 0).any():
        return "buy"
    if (prev["MACD"] > 0).any() and (curr["MACD"] <= 0).any():
        return "sell"
    return "hold"


def stoch_signal(df: pd.DataFrame) -> Signal:
    """Overbought/oversold crosses for the Stochastic oscillator."""
    if len(df) < 2:
        return "hold"
    prev, curr = df.iloc[-2], df.iloc[-1]

    # %K rises through %D while still oversold (<20) → BUY
    bull = (prev["%K"] < prev["%D"]).any() and (curr["%K"] >= curr["%D"]).any() and (
        curr["%K"] < 20
    ).any()
    # %K falls through %D while still overbought (>80) → SELL
    bear = (prev["%K"] > prev["%D"]).any() and (curr["%K"] <= curr["%D"]).any() and (
        curr["%K"] > 80
    ).any()

    if bull:
        return "buy"
    if bear:
        return "sell"
    return "hold"


def aggregate(ma: Signal, macd: Signal, stoch: Signal) -> Signal:
    """Return BUY/SELL only if all three inputs match, else HOLD."""
    if ma == macd == stoch and ma in {"buy", "sell"}:
        return ma
    return "hold"


# ────────────────────────────────────────────────────────────────────────────────
# Command‑line interface
# ────────────────────────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(description="Triple‑momentum trading signals")
    parser.add_argument("--ticker", required=True, help="Yahoo Finance symbol, e.g. MSFT")
    parser.add_argument(
        "--start", default="2020-01-01", help="First date to download – YYYY‑MM‑DD"
    )
    parser.add_argument("--sma_short", type=int, default=50, help="Short SMA length")
    parser.add_argument("--sma_long", type=int, default=200, help="Long SMA length")
    args = parser.parse_args()

    # Pull & enrich data
    df = fetch_ohlc(args.ticker, args.start)
    if df.empty:
        print("Error: no data returned – check ticker or start date.")
        return
    df = add_indicators(df, args.sma_short, args.sma_long)

    # Generate signals
    ma_sig = ma_signal(df)
    macd_sig = macd_signal(df)
    stoch_sig = stoch_signal(df)
    action = aggregate(ma_sig, macd_sig, stoch_sig)

    today = df.index[-1].date()
    close_price = df["Close"].iloc[-1]

    print("  • MA crossover     :", ma_sig.upper())
    print("  • MACD zero‑line   :", macd_sig.upper())
    print("  • Stochastic osc   :", stoch_sig.upper())
    print("────────────────────────────────────────────────────────")
    print("➡️   OVERALL ACTION  :", action.upper())


if __name__ == "__main__":
    main()