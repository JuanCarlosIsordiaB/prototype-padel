

export default function Home() {
  return (
    <div>
      
  
  <body>
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center bg-white p-4 pb-2 justify-between max-w-6xl mx-auto">
          <div className="hidden md:flex items-center gap-4">
            <button className="text-[#181411]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            </button>
            <h1 className="text-[#181411] text-lg font-bold">Galileo Sports</h1>
          </div>
          
          <h2 className="text-[#181411] text-lg font-bold leading-tight tracking-[-0.015em] md:flex-1 md:text-center">Tournaments</h2>
          
          <div className="flex w-12 items-center justify-end">
            <button className="md:hidden text-[#181411]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      
      <main className="flex-1 max-w-6xl w-full mx-auto px-4">
        <div className="md:flex md:gap-8">
          
          <aside className="hidden md:block w-64 flex-shrink-0 pt-8">
            <div className="sticky top-20 space-y-6">
              <div className="space-y-1">
                <h3 className="text-[#8a7560] text-sm font-medium uppercase tracking-wider px-4">Sports</h3>
                <a href="#" className="block px-4 py-2 text-[#181411] font-medium rounded-lg bg-[#f5f2f0]">Paddle Tennis</a>
                <a href="#" className="block px-4 py-2 text-[#8a7560] hover:text-[#181411] rounded-lg">Tennis</a>
                <a href="#" className="block px-4 py-2 text-[#8a7560] hover:text-[#181411] rounded-lg">Soccer</a>
                <a href="#" className="block px-4 py-2 text-[#8a7560] hover:text-[#181411] rounded-lg">Basketball</a>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-[#8a7560] text-sm font-medium uppercase tracking-wider px-4">Filters</h3>
                <a href="#" className="block px-4 py-2 text-[#8a7560] hover:text-[#181411] rounded-lg">Upcoming</a>
                <a href="#" className="block px-4 py-2 text-[#8a7560] hover:text-[#181411] rounded-lg">Live</a>
                <a href="#" className="block px-4 py-2 text-[#8a7560] hover:text-[#181411] rounded-lg">Completed</a>
              </div>
            </div>
          </aside>

          
          <div className="flex-1 pb-8">
            <h2 className="text-[#181411] text-[22px] md:text-2xl font-bold leading-tight tracking-[-0.015em] py-5 md:pt-8">Paddle Tennis</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-[#181411] text-lg font-bold leading-tight tracking-[-0.015em] pb-2">Today</h3>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="flex items-center gap-4 p-4 hover:bg-[#f9f8f7] cursor-pointer">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/f8714b44-c45f-4b8a-a48f-3f35814541a9.png")' }}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#181411] text-base font-medium leading-normal truncate">Central City Paddle Tennis Open</p>
                      <p className="text-[#8a7560] text-sm font-normal leading-normal">8:00 AM • Central City Club</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a7560" viewBox="0 0 256 256">
                      <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 hover:bg-[#f9f8f7] cursor-pointer">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/36e56650-13bf-4afc-b929-4621c5639984.png")' }}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#181411] text-base font-medium leading-normal truncate">Metroplex Paddle Tennis Challenge</p>
                      <p className="text-[#8a7560] text-sm font-normal leading-normal">9:30 AM • Metroplex Arena</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a7560" viewBox="0 0 256 256">
                      <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 hover:bg-[#f9f8f7] cursor-pointer">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/279887e4-a81a-4fa8-8840-a9110d1c0d2b.png")' }}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#181411] text-base font-medium leading-normal truncate">National Paddle Tennis Tournament</p>
                      <p className="text-[#8a7560] text-sm font-normal leading-normal">10:00 AM • National Sports Center</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a7560" viewBox="0 0 256 256">
                      <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-[#181411] text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4">Tomorrow</h3>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="flex items-center gap-4 p-4 hover:bg-[#f9f8f7] cursor-pointer">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/f70ec45f-3aad-46f2-8cc1-81eae6bb7c0a.png")' }}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#181411] text-base font-medium leading-normal truncate">Regional Paddle Tennis Series</p>
                      <p className="text-[#8a7560] text-sm font-normal leading-normal">8:30 AM • Regional Sports Complex</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a7560" viewBox="0 0 256 256">
                      <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 hover:bg-[#f9f8f7] cursor-pointer">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/5a128d15-7689-4174-ab94-d3364b800b99.png")' }}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#181411] text-base font-medium leading-normal truncate">Amateur Paddle Tennis Cup</p>
                      <p className="text-[#8a7560] text-sm font-normal leading-normal">10:30 AM • Community Courts</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a7560" viewBox="0 0 256 256">
                      <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 hover:bg-[#f9f8f7] cursor-pointer">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/48f0f666-c2a0-4928-85b1-a41a86a0e0ae.png")' }}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#181411] text-base font-medium leading-normal truncate">Interstate Paddle Tennis Tournament</p>
                      <p className="text-[#8a7560] text-sm font-normal leading-normal">11:00 AM • Interstate Arena</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8a7560" viewBox="0 0 256 256">
                      <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      
      <footer className="md:hidden sticky bottom-0 bg-white border-t border-[#f5f2f0]">
        <div className="flex gap-2 bg-white px-4 pb-3 pt-2">
          <a className="flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#181411]" href="#">
            <div className="text-[#181411] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p className="text-[#181411] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#8a7560]" href="#">
            <div className="text-[#8a7560] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
              </svg>
            </div>
            <p className="text-[#8a7560] text-xs font-medium leading-normal tracking-[0.015em]">Play</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#8a7560]" href="#">
            <div className="text-[#8a7560] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
              </svg>
            </div>
            <p className="text-[#8a7560] text-xs font-medium leading-normal tracking-[0.015em]">Schedule</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#8a7560]" href="#">
            <div className="text-[#8a7560] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
              </svg>
            </div>
            <p className="text-[#8a7560] text-xs font-medium leading-normal tracking-[0.015em]">Chat</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-[#8a7560]" href="#">
            <div className="text-[#8a7560] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
            <p className="text-[#8a7560] text-xs font-medium leading-normal tracking-[0.015em]">Profile</p>
          </a>
        </div>
        <div className="h-5 bg-white"></div>
      </footer>
    </div>
  </body>

      
    </div>
  );
}
