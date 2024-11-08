import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import flag from './nigeria.svg'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Coderecur
              </span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/kinghennry'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
           
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <a
            target='_blank'
            href='https://henry-ogbu.netlify.app'
            rel='noreferrer'
            className='flex items-center text-sm text-[#6b7280]'
          >
            &copy;&nbsp;
            {new Date().getFullYear()} Made in &nbsp;
            <span>
              <img style={{ width: '22px' }} src={flag} alt='nigeria' />
            </span>
            &nbsp;by Henry Ogbu .
          </a>
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon
              href='https://www.github.com/kinghennry'
              icon={BsGithub}
            />
            <Footer.Icon href='#' icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  )
}
