/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface headerProps {
  author: {
    name: string
    avatar: string
    url: string
  }
}

const BlogHeaderDetail: React.FC<headerProps> = (props) => {
  const {author} = props
  return (
    <dl className="pt-6 pb-10 lg:pt-11 lg:border-b lg:border-gray-200">
        <ul className="flex justify-center lg:block space-x-8 sm:space-x-12 lg:space-x-0 lg:space-y-8">
          <li className="flex space-x-2">
            <div className="">
              <img
                className="rounded-[50%] max-w-[50px] max-h-[50px] mb-2 mr-1"
                src={author.avatar}
                alt="author pfp"
              />
            </div>
            <dl className="flex-1 text-sm font-medium leading-5 mt-2">
              <p className="">Vu Nguyen</p>
              <p>Web Developer</p>
            </dl>
          </li>
        </ul>
    </dl>
  )
}

export default BlogHeaderDetail
