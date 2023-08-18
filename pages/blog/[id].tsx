import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next'
import BlogHeader from '../../components/BlogHeader'
import {getBlogDetail} from '../../server/blogs'
import parse from 'html-react-parser'
import detail from './id.module.css'
import BlogHeaderDetail from "../../components/BlogHeaderDetail";

const BlogPost: NextPage = ({
  blogData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {author, bodyHTML, createdAt, title} = blogData
  return (
    <section className="layout">
      <div className="max-w-[70%]">
        <h2 className="mt-16 text-center font-normal text-[1rem] text-gray-500"> {new Date(createdAt).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })} </h2>
        <h1 className="text-center text-[2rem] font-bold"> {title} </h1>
        <div className="divide-y lg:divide-y-0 divide-gray-200 lg:grid lg:grid-cols-4 lg:col-gap-6 pb-16 lg:pb-20">
          <div className="flex">
            <BlogHeaderDetail author={author} />
          </div>
          <div className={`${detail.html} flex flex-col divide-y divide-gray-200 lg:pb-0 lg:col-span-3 lg:row-span-2 pt-10 pb-8`}>{parse(bodyHTML)}</div>
        </div>
      </div>
    </section>
  )
}

export default BlogPost

export const getServerSideProps: GetServerSideProps = async (context) => {
  const route: string[] | string | undefined = context.query.id
  const id = Number(route)
  let blogDetail = await getBlogDetail(id)
  return {
    props: {
      blogData: blogDetail,
    },
  }
}
