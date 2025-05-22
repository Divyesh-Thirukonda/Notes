import sys
import subprocess
import shutil
import datetime
import os
from mutagen.mp3 import MP3
from pydub import AudioSegment

def check_requirements():
    """Ensure the required libraries and tools are installed."""
    try:
        subprocess.run(["spotdl", "--version"], check=True)
    except FileNotFoundError:
        print("Error: 'spotdl' is not installed. Please install it with 'pip install spotdl'.")
        sys.exit(1)

    try:
        import mutagen
        from pydub import AudioSegment
    except ImportError:
        print("Error: Required Python libraries 'mutagen' and 'pydub' are not installed.")
        print("Please install them using 'pip install mutagen pydub'.")
        sys.exit(1)

def create_directory(path):
    """Create a directory if it doesn't exist."""
    if not os.path.exists(path):
        os.makedirs(path)

def download_playlist(playlist_url):
    """Download the playlist using spotdl if not already downloaded."""
    playlist_name = playlist_url.split("/")[-1]  # Extract playlist name from URL
    playlist_path = os.path.join("playlists", playlist_name)
    if not os.path.exists(playlist_path):
        print(f"Downloading playlist: {playlist_name}")
        p = subprocess.Popen(["spotdl", "download", playlist_url], cwd="playlists")
        p.wait()
    else:
        print(f"Playlist {playlist_name} already downloaded. Skipping download.")
    return playlist_name

def main():
    # Ensure required tools and libraries are available
    check_requirements()

    # Get playlist URL from arguments
    if len(sys.argv) < 2:
        print("Usage: python script.py <playlist_url>")
        sys.exit(1)

    playlist_url = sys.argv[1]

    # Create the playlist directory if it doesn't exist
    create_directory("playlists")

    # Download the playlist
    playlist_name = download_playlist(playlist_url)
    print(f"Downloaded playlist: {playlist_name}")

if __name__ == "__main__":
    main()
    
#  python audio.py https://open.spotify.com/track/3bC1ahPIYt1btJzSSEyyrF