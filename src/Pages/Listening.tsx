import MusicPlayer from "../components/MusicPlayer"

function Listening() {
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

                    <MusicPlayer />
                </div>
          </section>
        </main>
    )

}

export default Listening