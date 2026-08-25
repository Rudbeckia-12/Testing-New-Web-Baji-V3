

function Footer(){
    return (
        <footer className='bg-neutral-900 px-6 py-20 text-white md:py-24'>
            <div className="mx-auto w-full max-w-[1000px]">
                <div className="text-center">
                    <h2 className="mt-4 text-[40px] font-bold text-neutral-400">
                        All Links</h2>

                    <p className="mt-4 text-[16px] text-neutral-400"> 
                        Find Bajiru_EN across her platform and archive by Jako
                    </p>
                </div>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <a href="https://www.twitch.tv/bajiru_en" target='_blank' rel='noopener noreferrer'
                    className=" rounded-2xl border border-white/15 bg-white/5 p-5 text-white no-underline transition duration-200 hover:-translate-y-1 hover:bg-white/10">
                
                    <h3 className="text-[17px] font-bold">Twitch</h3>
                    <p className="mt-1 text-[14px] text-neutral-400"> Watch Livestream</p>
                </a>

                <a href="https://www.youtube.com/@bajiru_EN" target='_blank' rel='noopener noreferrer'
                    className=" rounded-2xl border border-white/15 bg-white/5 p-5 text-white no-underline transition duration-200 hover:-translate-y-1 hover:bg-white/10">
                    <h3 className="text-[17px] font-bold">Youtube</h3>
                    <p className="mt-1 text-[14px] text-neutral-400">Bajiru Offical Youtube ChanneL</p>
                </a>
                
                <a href="https://x.com/bajiru_en" target='_blank' rel='noopener noreferrer'
                    className=" rounded-2xl border border-white/15 bg-white/5 p-5 text-white no-underline transition duration-200 hover:-translate-y-1 hover:bg-white/10">
                    <h3 className="text-[17px] font-bold">X </h3>
                    <p className="mt-1 text-[14px] text-neutral-400">She only use it to repost art</p>
                </a>

                <a href="https://throne.com/bajiru_en" target='_blank' rel='noopener noreferrer'
                    className=" rounded-2xl border border-white/15 bg-white/5 p-5 text-white no-underline transition duration-200 hover:-translate-y-1 hover:bg-white/10">
                    <h3 className="text-[17px] font-bold">Throne </h3>
                    <p className="mt-1 text-[14px] text-neutral-400">Buy her Something</p>
                </a>

                <a href="https://discord.com/invite/ADkUAM4ZUx" target='_blank' rel='noopener noreferrer'
                    className=" rounded-2xl border border-white/15 bg-white/5 p-5 text-white no-underline transition duration-200 hover:-translate-y-1 hover:bg-white/10">
                    <h3 className="text-[17px] font-bold">Discord </h3>
                    <p className="mt-1 text-[14px] text-neutral-400">Jakocord Community</p>
                </a>
                
            </div>
                <div className="mt-16 text-center">
                    <h3 className="text-[26px] font-bold">Baji & Ru 🌱🎀</h3>
                    <p className="mt-3 text-[14px] text-neutral-400">Made by Jako </p>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8 text-center">
                <p className="text-[13px] text-neutral-500">© 2026 Baji & Ru fan-made website.</p>
            </div>

            </div>

        </footer>
    )
}

export default Footer