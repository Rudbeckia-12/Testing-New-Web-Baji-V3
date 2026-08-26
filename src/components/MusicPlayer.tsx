import { useEffect, useRef, useState } from 'react'
import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from '@phosphor-icons/react'

import { songs } from '../data/songs'

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const currentSong = songs[currentSongIndex]

  const progress =
    duration > 0 ? (currentTime / duration) * 100 : 0

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return '0:00'

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handlePlayPause = async () => {
    const audio = audioRef.current

    if (!audio) return

    try {
      if (audio.paused) {
        await audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    } catch (error) {
      console.error('Audio playback failed:', error)
    }
  }

  const handleNext = () => {
    setCurrentSongIndex((index) => (index + 1) % songs.length)
    setCurrentTime(0)
    setDuration(0)
  }

  const handlePrevious = () => {
    setCurrentSongIndex(
      (index) => (index - 1 + songs.length) % songs.length,
    )

    setCurrentTime(0)
    setDuration(0)
  }

  const handleSeek = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const audio = audioRef.current

    if (!audio || duration <= 0) return

    const rect = event.currentTarget.getBoundingClientRect()
    const clickPosition = event.clientX - rect.left
    const percentage = clickPosition / rect.width
    const newTime = percentage * duration

    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    audio.load()

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error('Audio playback failed:', error)
        setIsPlaying(false)
      })
    }
  }, [currentSongIndex])

  return (
    <div className="mx-auto mt-16 max-w-[760px] rounded-3xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onLoadedMetadata={(event) =>
          setDuration(event.currentTarget.duration)
        }
        onEnded={handleNext}
      />

      <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
        Now Listening
      </p>

      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center">
        <div className="aspect-square w-full shrink-0 overflow-hidden rounded-2xl bg-neutral-200 md:w-[180px]">
          {/* <img
            src={currentSong.cover}
            alt={`${currentSong.title} cover`}
            className="h-full w-full object-cover"
          /> */}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-[28px] font-bold">
            {currentSong.title}
          </h2>

          <p className="mt-1 text-[15px] text-neutral-500">
            {currentSong.artist}
          </p>

          <div className="mt-8">
            <div
              onClick={handleSeek}
              className="h-[6px] w-full cursor-pointer overflow-hidden rounded-full bg-neutral-200"
            >
              <div
                className="h-full rounded-full bg-neutral-900"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-2 flex justify-between text-[12px] text-neutral-500">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-5">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous song"
              className="flex h-10 w-10 items-center justify-center"
            >
              <SkipBackIcon size={22} weight="fill" />
            </button>

            <button
              type="button"
              onClick={handlePlayPause}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:scale-105"
            >
              {isPlaying ? (
                <PauseIcon size={22} weight="fill" />
              ) : (
                <PlayIcon size={22} weight="fill" />
              )}
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next song"
              className="flex h-10 w-10 items-center justify-center"
            >
              <SkipForwardIcon size={22} weight="fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer