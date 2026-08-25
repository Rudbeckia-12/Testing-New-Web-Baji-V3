import { useRef, useState } from "react"


function Listening() {
    const [isPlaying, setIsPlaying] =useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    return (
        <main>
            <section className="px-6 py-24 md:py-32">
                <div className="mx-auto w-full max-w-[1000px]">
                    <div className="text-center">
                        <p className="mb-3 tex-[14px] uppercase tracking-[0.2em] text-neutral-500">
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
                    <div className="mx-auto mt-16 max-w-[760px] rounded-3xl border border-neutral-200 bg neutral-50 p-6 md:p-8">
                        <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                            Now Listening
                        </p>

                        <div className="mt-6 flex-col gap-6 md:flex-row md:items-center">
                        
                            {/* cover container */}
                            <div className="aspect-square w-full shrink-0 rounded-2xl bg-neutral-200 md:w-[180px]">
                            </div>

                            {/* Song Information */}
                            <div className="min-w-0 flex-1">
                                <h2 className="=text-[28px] font-bold">
                                    Autumn Picnic
                                </h2>
                                <p className="mt-1 text-[15px] text-neutral-500">
                                    Bajiru
                                </p>
                            
                            {/* Progress thingy test */}
                            <div className="mt-8">
                                <div className="h-[4px] w-full overflow-hidden rounded-full bg-neutral-200">
                                    <div className="h-full w-1/3 rounded-full bg-neutral-900"/>  
                                </div>

                                <div className="mt-2 flex justify-between text-[12px] text-neutral-500">
                                    <span>1:31</span>
                                    <span>3:41</span>
                                </div>
                            </div>

                            {/* Control thingy */}
                            <div className="mt-6 flex items-center gap-5">
                                <button type="button" className="text-[20px]">
                                    ←
                                </button>

                                <button 
                                type="button" 
                                onClick={() => setIsPlaying(!isPlaying)}
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