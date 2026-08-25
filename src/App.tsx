import { Link, Route, Routes } from 'react-router'
import Header from './Header'
import Listening from './Pages/Listening'
import Footer from './Footer'

function Home() {
  return (
    <main>
      <section id='home' className="flex min-h-[650px] items-center justify-center px-6 py-[60px] max-md:min-h-0 max-md:px-5 max-md:py-20">
        <div className="w-full max-w-[720px]">
          <h1 className="text-[80px] font-bold leading-none max-md:text-[56px]">
          Baji & Ru
          </h1>

          <p className='mt-[30px] text-[22px] font-bold max-md:text-[18px]'>
            VSinger . Music Streamer
          </p>

          <div className='mt-[28px] space-y-5 text-[17px] leading-[1.7] max-md:text-[16px]'>
            <p>
              Bajiru, A goddess? A rabbit? Who knows!
            </p>

            <p>
              She's been here so long that she may be a little bit off...
            </p>
          </div>

          <div className='mt-[28px] flex flex-wrap gap-4 max-md:flex-col'>
            <a href="https://www.twitch.tv/bajiru_en" target='_blank' rel='noopener noreferrer'
            className='flex h-12 min-w-[170px] items-center justify-center rounded-full border border-gray-300 px-6 text-black no-underline transition duration-200 hover:border-black hover: bg-black hover: text-white max-md:w-full max-md:min-w-0'>
              Watch on Twitch
            </a>

            <a href="https://www.youtube.com/@bajiru_EN" target='_blank' rel='noopener noreferrer'
            className='flex h-12 min-w-[170px] items-center justify-center rounded-full border border-gray-300 px-6 text-black no-underline transition duration-200 hover:border-black hover: bg-black hover: text-white max-md:w-full max-md:min-w-0'>
              Listen on Youtube
            </a>

            <a href="/songs"
            className='flex h-12 min-w-[170px] items-center justify-center rounded-full border border-gray-300 px-6 text-black no-underline transition duration-200 hover:border-black hover: bg-black hover: text-white max-md:w-full max-md:min-w-0'>
              Song List
            </a>
          </div>
        </div>
      </section>
      {/* About Section */}

      <section id='about' className='scroll-mt-24 bg-neutral-50 px-6 py-24 md:py-32'>
        <div className='mx-auto w-full max-w-[1000px]'>

          <h2 className='mb-12 text-center text-[40px] font-bold'>
            About Bajiru
          </h2>

          <div className='flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12'>

            <div className='w-full max-w-[360px] shrink-0 md:-mt-6'>
              <img src='/Buffjiru.webp' alt='Bajiru' className='block h-auto w-full object-contain'></img>
            </div>

            <div className='w-full flex-1 text-[16px] leading-[1.7] md:pt-6'>
              <p className='mb-7  border-black text-[22px] italic'>
                A Goddess? A Rabbit? Who Knows! (She's A Catgirl)
              </p>
            
              <p className="mb-5">
                Bajiru_EN, known online as Baji, is an American English-speaking Virtual YouTuber. 
                She specializes in vocal covers, blind improv singing, and chaotic variety streams infused with whimsical humor and high-note challenges.
              </p>

              <p className="mb-7">
                She's been here so long that she may be a little bit off...
              </p>

            {/* Personal Table */}
            <div className='mt-10 overflow-hidden rounded-2xl border border-neutral-200'>

                <div className='border-b border-neutral-200 bg-neutral-100 px-5 py-3'>
                  <h3 className='text-[18px] font-bold'>Personal Details</h3>
                </div>
                
              <div className='grid grid-cols-1 md:grid-cols-2'>

                <div className='border-b border-neutral-200 p-5 md:border-r'>
                  <p className='text-[12px] font-bold uppercase tracking-wide text-neutral-500'>Gender</p>
                  <p className='mt-1'>Female</p>
                </div>
                
                <div className='border-b border-neutral-200 p-5'>
                  <p className='text-[12px] font-bold uppercase tracking-wide text-neutral-500'>Age</p>
                    <p className='mt-1'>14,179 Years old as of 18 Aug 2026</p>
                </div>

                <div className='border-b border-neutral-200 p-5 md:border-r'>
                  <p className='text-[12px] font-bold uppercase tracking-wide text-neutral-500'>Birthday</p>
                    <p className='mt-1'>23 September</p>
                </div>
                
                <div className='border-b border-neutral-200 p-5'>
                  <p className='text-[12px] font-bold uppercase tracking-wide text-neutral-500'>Height</p>
                    <p className='mt-1'>153 cm (5'0")</p>
                </div>

                <div className='border-b border-neutral-200 p-5 md:border-r'>
                  <p className='text-[12px] font-bold uppercase tracking-wide text-neutral-500'>Weight</p>
                    <p className='mt-5'>
                      166 Kg (366 lb)
                    </p>
                </div>

                <div className='border-b border-neutral-200 p-5'>
                  <p className='text-[12px] font-bold uppercase tracking-wide text-neutral-500'>Blood Type</p>
                    <p className='mt-1'>Red
                      <br />
                      AB+
                    </p>
                </div>

                <div className='border-b border-neutral-200 p-5 md:border-r'>
                  <p className='text-[12px] font-bold uppercase tracking-wide text-neutral-500'>Zodiac Sign</p>
                    <p className='mt-1'>Libra</p>
                </div>

                <div className='border-b border-neutral-200 p-5'>
                  <p className='text-[12px] font-bold uppercase tracking-wide text-neutral-500'>Fan Name</p>
                    <p className='mt-1'>Tomobaji</p>
                </div>

                <div className='p-5 md:md-col-span-2'>
                  <p className='text-[12px] font-bold uppercase tracking-wide text-neutral-500'>Emoji</p>
                    <p className='mt-1'>🌱🎀</p>
                </div>

              </div>
            </div>
            </div>
          </div>
        
        </div>

      </section>
      
      {/* Listening Section */}
      <section id="listening" className='scroll-mt-24 px-6 py-24 md:py-32'>
        <div className='mx-auto w-full max-w-[1000px]'>

          <div className='mx-auto max-w-[650px] text-center'>
            <p className='mb-3 text-[14px] uppercase tracking-[0.2em] text-neutral-500'>
              Music & Stream
            </p>

            <h2 className='text-[40px] font-bold'>
              Listening
            </h2>

            <p className='mt-6 text-[16px] leading-[1.7] text-neutral-700'>
              Listen to Baji's singing streams, covers song, and original music.
              Find past performances or catch her live
            </p>
            
          </div>

          <div className='mt-12 grid gap-5 md:grid-cols-2'>
            {/* Twitch */}
            <a href="https://www.twitch.tv/bajiru_en" target='_blank' rel='noopener noreferrer'
            className='flex h-full flex-col rounded-2xl border border-neutral-200 p-6 text-black no-underline transition duration-200 hover:-translate-y-1 hover:border-neutral-400'>
            
              <p className='text-[14px] text-neutral-500'>
                Live Stream
              </p>
                
              <h3 className='mt-2 text-[24px] font-bold'>
                Twitch
              </h3>

              <p className='mt-3 text-[15px] leading-[1.7] text-neutral-600'>
                Watch Bajiru live for singing, chatting, and degenerate therapy session streams
              </p>

              <p className='mt-6 font-semibold'>
                Watch on Twitch 
              </p>
            </a>

            {/* Youtube */}
            <a href="https://www.youtube.com/@bajiru_EN" target='_blank' rel='noopener noreferrer'
            className='flex h-full flex-col rounded-2xl border border-neutral-200 p-6 text-black no-underline transition duration-200 hover:-translate-y-1 hover:border-neutral-400'>
            
              <p className='text-[14px] text-neutral-500'>
                Music & Vods Fan Uploads 
              </p>
                
              <h3 className='mt-2 text-[24px] font-bold'>
                Youtube
              </h3>

              <p className='mt-3 text-[15px] leading-[1.7] text-neutral-600'>
                Explore Bajiru's music, covers, and previous performance uploaded by her archiver
              </p>

              <p className='mt-6 font-semibold'>
                Listen on Youtube
              </p>
            </a>

          </div>
        </div>
      </section>

        {/* Home Music */}
        <section className='bg-neutral-50 px-6 py-25 md:py-32'>
          <div className='mx-auto w-full max-w-[1000px]'>
            <div className='mb-10'>
              <p className='mb-3 text-[14px] uppercase tracking-[0.2em] text-neutral-500'>
                Song Archive
              </p>

              <h2 className='text-[40px] font-bold'>
                Songs
              </h2>

              <p className='mt-4 max-w-[650px] text-[16px] leading-[1.7] text-neutral-600'>
                Find the songs performed by Bajiru, from covers to original music.
              </p>
            </div>

            <div className='rounded-3xl border-border-neutral-200 bg-white p-6 md:p-8'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>

                {/* cards 1 */}
                
                <Link to='/songs' className='rounded-2xl border border-neutral-200 p-5 text-black no-underline transition duration-200 hover:translate-y-1 hover:border0neutral-400'>
                  <p className='text-[13px] font-semibold tracking-wide text-neutral-500'>
                    Song Detail
                  </p>
                  <h3 className='mt-2 text-[19px] font-bold'>
                    Autumn Picnic
                  </h3>
                  <p className='mt-2 text-[14px] text-neutral-500'>
                    Baji's Original
                  </p>
                </Link>

                {/* cards 2 */}
                
                <Link to='/songs' className='rounded-2xl border border-neutral-200 p-5 text-black no-underline transition duration-200 hover:translate-y-1 hover:border0neutral-400'>
                  <p className='text-[13px] font-semibold tracking-wide text-neutral-500'>
                    Song Detail
                  </p>
                  <h3 className='mt-2 text-[19px] font-bold'>
                    Fantasy
                  </h3>
                  <p className='mt-2 text-[14px] text-neutral-500'>
                    Baji's Original
                  </p>
                </Link>

                {/* cards 3 */}
                
                <Link to='/songs' className='rounded-2xl border border-neutral-200 p-5 text-black no-underline transition duration-200 hover:translate-y-1 hover:border0neutral-400'>
                  <p className='text-[13px] font-semibold tracking-wide text-neutral-500'>
                    Song Detail
                  </p>
                  <h3 className='mt-2 text-[19px] font-bold'>
                    Ocean Song
                  </h3>
                  <p className='mt-2 text-[14px] text-neutral-500'>
                    Baji's Original
                  </p>
                </Link>

                {/* cards 4  */}
                
                <Link to='/songs' className='rounded-2xl border border-neutral-200 p-5 text-black no-underline transition duration-200 hover:translate-y-1 hover:border0neutral-400'>
                  <p className='text-[13px] font-semibold tracking-wide text-neutral-500'>
                    Song Detail
                  </p>
                  <h3 className='mt-2 text-[19px] font-bold'>
                    Rot
                  </h3>
                  <p className='mt-2 text-[14px] text-neutral-500'>
                    Baji's Original
                  </p>
                </Link>

                {/* cards 5 */}
                
                <Link to='/songs' className='rounded-2xl border border-neutral-200 p-5 text-black no-underline transition duration-200 hover:translate-y-1 hover:border0neutral-400'>
                  <p className='text-[13px] font-semibold tracking-wide text-neutral-500'>
                    Song Detail
                  </p>
                  <h3 className='mt-2 text-[19px] font-bold'>
                    Naivety
                  </h3>
                  <p className='mt-2 text-[14px] text-neutral-500'>
                    Baji's Original
                  </p>
                </Link>

                {/* cards 6 */}
                
                <Link to='/songs' className='rounded-2xl border border-neutral-200 p-5 text-black no-underline transition duration-200 hover:translate-y-1 hover:border0neutral-400'>
                  <p className='text-[13px] font-semibold tracking-wide text-neutral-500'>
                    Song Detail
                  </p>
                  <h3 className='mt-2 text-[19px] font-bold'>
                    Lust
                  </h3>
                  <p className='mt-2 text-[14px] text-neutral-500'>
                    Baji's Original
                  </p>
                </Link>

                <div className='mt-6 flex justify-end'>
                  <Link to='/songs' className='font-semibold text-black no-underline transition-opacity hover:opacity-60'>
                  View All Songs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

    </main>
  )
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listening" element={<Listening />} />
    </Routes>
      <Footer />
    
    </>
  )
}


export default App