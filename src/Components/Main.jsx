
import {AiFillLinkedin , AiFillFacebook,AiFillGithub ,AiFillTwitterCircle} from "react-icons/Ai"

function Main() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                I'm B SURYA SAI
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                "I am a highly skilled web developer with expertise in MERN
                STACK. I am proficient in creating responsive and dynamic
                websites and have a solid understanding of web development
                principles. I have a passion for staying up-to-date with the
                latest web technologies and enjoy the process of turning ideas
                into reality."
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <a
                  href="/"
                  className="inline-block rounded-lg   text-base font-semibold leading-7  shadow-sm  "
                >
                   <AiFillGithub  size="2rem"></AiFillGithub>
                </a>
                <a
                  href="/"
                  className="inline-block rounded-lg   text-base font-semibold leading-7  shadow-sm  "
                >
                   <AiFillLinkedin size="2rem"></AiFillLinkedin>
                </a>
                <a
                  href="/"
                  className="inline-block rounded-lg   text-base font-semibold leading-7  shadow-sm  "
                >
                   <AiFillTwitterCircle size="2rem"></AiFillTwitterCircle>
                </a>
                <a
                  href="/"
                  className="inline-block rounded-lg  text-base font-semibold leading-7  shadow-sm  "
                >
                   <AiFillFacebook size="2rem"></AiFillFacebook>
                </a>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC"></stop>
                    <stop offset="1" stopColor="#FF80B5"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
