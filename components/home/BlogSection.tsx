import { link } from 'fs';
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const BlogSection = () => {
  const posts = [
    {
      title: "Web3 Lending Circles",
      desc: "A New Era of Decentralized Finance",
      image: "https://miro.medium.com/v2/resize:fit:1024/format:webp/1*PPJVLvkwIm4igOFF4bvsew.png",
      link: "https://medium.com/piltonet/web3-lending-circles-7e489cfa3b5d",
    },
    {
      title: "Blockchain-Based ROSCA",
      desc: "Implementing On-Chain Verification for Secure Fund Claims",
      image: "https://miro.medium.com/v2/resize:fit:1280/format:webp/1*B4pb8iOBBwRE9a36Rs5-XQ.jpeg",
      link: "https://coinsbench.com/blockchain-based-rosca-implementing-on-chain-verification-for-secure-fund-claims-b9e9b4607eac",
    }
  ]

  return (
    <section className="antialiased w-full" id="Blog">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mt-14 md:mt-0">
            Blog
          </h2>
          <p className="mt-1 text-lg font-normal tracking-tight text-slate-500">
            Stay informed with expert insights from industry leaders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((item, index) => (
            <div
              className="group p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              key={index}
            >
              <a
                href={item.link}
                target="_blank"
                className="group"
              >
                <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                  <img
                    className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="mt-7">
                  <h3
                    className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-800 dark:text-neutral-200">
                    {item.desc}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-x-1 text-orange-500 decoration-2 group-hover:underline font-medium">
                    Read more
                    <FaAngleRight />
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection