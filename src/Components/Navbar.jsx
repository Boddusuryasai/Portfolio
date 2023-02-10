import React from 'react'
import { Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
<div className="isolate bg-white">
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
    <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
      <defs>
        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9089FC"></stop>
          <stop offset="1" stopColor="#FF80B5"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div className="px-6 pt-6 lg:px-8">
    <div>
      <nav className="flex h-9 items-center justify-between" aria-label="Global">
        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="/" className="inline-block rounded-lg bg-blue-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 bg-blue-500 hover:bg-blue-600 hover:bg-blue-600">
            My Portfolio
          </a>
        </div>
        <div className="border-2 rounded-xl p-2 border-blue-500">suryasaichanti@gmail.com</div>
      </nav>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar