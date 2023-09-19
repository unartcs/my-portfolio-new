import React from 'react'

function Footer() {
  return (
    <div className='footer-wrapper flex items-center justify-center  bg-[#121118] py-8 text-white relative flex-col gap-2 mt-auto'>
        <button className='absolute bottom-[80%] z-[10] bg-white text-black p-1'>Go back to top</button>
        <span>© 2023 Daniel Cohen.</span>
    </div>
  )
}

export default Footer