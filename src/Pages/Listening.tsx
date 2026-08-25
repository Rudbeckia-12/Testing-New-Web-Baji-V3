import { useRef, useState } from "react"


function Listening() {
    const [isPlaying, setIsPlaying] =useState(false)
    const [currentTime, setCurrentTime] = useState (0)
    const [duration, setDuration] = useState(0)

    const audioRef = useRef<HTMLAudioElement>(null)


    const handlePlayPause = async () => {
        const audio = audioRef.current

        if (!audio) return
        if (isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
          try {
            await audio.play()
            setIsPlaying(true)
          } catch (error) {
            console.error('Audio Failed', error)
          }
        }
    }

    const progress =
        duration > 0 ? (currentTime / duration)*100:0

    const formatTime = (time: number) => {
        if (!Number.isFinite(time)) return '0:00'
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
        const audio = audioRef.current
        if (!audio || duration <= 0) return
        const bar = event.currentTarget
        const react = bar.getBoundingClientRect()
        const clickPosition = event.clientX - react.left
        const percentage = clickPosition / react.width
        const newTime = percentage*duration
        audio.currentTime = newTime
        setCurrentTime(newTime)
    }

    return (
        <main>
            <section className="px-6 py-24 md:py-32">
                <div className="mx-auto w-full max-w-[1000px]">
                    <div className="text-center">
                        <p className="mb-3 text-[14px] uppercase tracking-[0.2em] text-neutral-500">
                            Music & Stream  
                        </p>
                        <h1 className="text-[48px] font-bold">
                            Listening
                        </h1>

                        <p className="mx-auto mt-6 max-w-[650px] text-[16px] leading-[1.7] text-neutral-500">
                            Listen to Bajiru's Music Sample
                        </p>
                    </div>

                    {/* the player thingy */}
                    <div className="mx-auto mt-16 max-w-[760px] rounded-3xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
                        
                        <audio ref={audioRef}
                        src="/Audio/autumn picnic.mp3"
                        onTimeUpdate={(event) => {
                            setCurrentTime(event.currentTarget.currentTime)
                        }}
                        onLoadedMetadata={(event) => {
                            setDuration(event.currentTarget.duration)
                        }}
                        onEnded={() => {
                            setIsPlaying(false)
                        }}/>
                        
                        <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                            Now Listening
                        </p>

                        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center">
                        
                            {/* cover */}
                            <div className="aspect-square w-full shrink-0 rounded-2xl bg-neutral-200 md:w-[180px]">
                            </div>

                            {/* Song Information */}
                            <div className="min-w-0 flex-1">
                                <h2 className="text-[28px] font-bold">
                                    Autumn Picnic
                                </h2>
                                <p className="mt-1 text-[15px] text-neutral-500">
                                    Bajiru
                                </p>
                            
                            {/* Progress thingy test */}
                            <div className="mt-8">
                                <div
                                 onClick={handleSeek}
                                 className="h-[6px] w-full cursor-pointer overflow-hidden rounded-full bg-neutral-200">
                                    <div className="h-full rounded-full bg-neutral-900"
                                    style={{width: `${progress}%`}}/>  
                                </div>

                                <div className="mt-2 flex justify-between text-[12px] text-neutral-500">
                                    <span>{formatTime(currentTime)}</span>
                                    <span>{formatTime(duration)}</span>
                                </div>
                            </div>

                            {/* Control thingy */}
                            <div className="mt-6 flex items-center gap-5">
                                <button type="button" className="text-[20px]">
                                    ←
                                </button>

                                <button 
                                type="button" 
                                onClick={handlePlayPause}
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white">
                                    {isPlaying ? '⏸' : '▶'}
                                </button>

                                <button type="button" className="text-[20px]">
                                    →
                                </button>                                

                            </div>


                            </div>
                       
                       
                       
                        </div>
                    </div>
                 </div>






               
          </section>
        </main>
    )

}

export default Listening