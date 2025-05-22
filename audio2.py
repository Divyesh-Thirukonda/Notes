import numpy as np
import pyaudio
import wave
from pydub import AudioSegment
import time

# Convert mp3 to wav using pydub
def mp3_to_wav(mp3_path):
    sound = AudioSegment.from_mp3(mp3_path)
    wav_path = mp3_path.replace(".mp3", ".wav")
    sound.export(wav_path, format="wav")
    return wav_path

# Calculate loudness of the chunk (RMS)
def calculate_loudness(chunk):
    eee = np.mean(np.square(chunk))
    if eee < 0:
        eee = 0
    rms = np.sqrt(eee)  # Root Mean Square (RMS)
    return rms

# Play audio and analyze loudness
def play_and_analyze_audio(wav_path):
    # Open wav file
    wf = wave.open(wav_path, 'rb')
    
    # Set up pyaudio stream
    p = pyaudio.PyAudio()
    stream = p.open(format=pyaudio.paInt16,
                    channels=1,
                    rate=wf.getframerate(),
                    output=True,
                    frames_per_buffer=1024)
    
    # Read and play the audio
    chunk_size = 1024  # Audio chunk size for each 30 ms
    data = wf.readframes(chunk_size)
    
    while len(data) > 0:
        # Stream audio data
        stream.write(data)
        
        # Convert the raw audio data to numpy array
        audio_chunk = np.frombuffer(data, dtype=np.int16)
        
        # Calculate loudness
        loudness = calculate_loudness(audio_chunk)
        
        # Output loudness as a percentage of maximum RMS
        loudness_percentage = (loudness / np.max(audio_chunk)) * 10000

        # Print loudness every 30 ms
        print(f"Loudness: [{'#' * int(loudness_percentage // 10)}{' ' * (10 - int(loudness_percentage // 10))}] {loudness_percentage:.1f}%")
        
        # Sleep for 30 ms before getting the next chunk
        time.sleep(0.03)
        data = wf.readframes(chunk_size)
    
    # Close the stream
    stream.stop_stream()
    stream.close()
    p.terminate()

# Run the program
if __name__ == "__main__":
    mp3_path = "playlists/Ed Sheeran - Castle on the Hill.mp3"  # Path to your MP3 file
    
    # Convert MP3 to WAV
    wav_path = mp3_to_wav(mp3_path)
    
    # Play and analyze audio
    play_and_analyze_audio(wav_path)
