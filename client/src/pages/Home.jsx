import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard.jsx'
import { getposts } from '../redux/post-slice'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
  const { posts } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  //getPosts
  useEffect(() => {
    dispatch(getposts())
  }, [dispatch])
  return (
    <>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Blog</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        <div className='flex flex-col justify-center items-center mb-5'>
          <h1 className='text-xl mt-5'>Recent Posts</h1>
          <div className='flex flex-wrap gap-5 mt-5 justify-center'>
            {posts && posts.length > 0
              ? posts.map((post) => <PostCard key={post._id} post={post} />)
              : null}
          </div>
          <Link
            to={'/search'}
            className='text-lg text-teal-500 hover:underline text-center mt-4'
          >
            View all posts
          </Link>
        </div>
        {/* {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='sm:grid-cols-2 grid gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )} */}
      </div>
    </>
  )
}
