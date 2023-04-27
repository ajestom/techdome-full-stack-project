import React from 'react';
import { FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';

const Blog = () => {
  return (
    <div className='mb-32'>
      <div className='relative'>
        <div className='absolute w-full h-full z-20 flex flex-col gap-5 justify-center items-center'>
          <h2 className='text-white text-center text-4xl md:text-6xl lg:text-8xl tracking-widest'>Blog Your Own Thoughts</h2>
          <div className='flex scale-50 lg:scale-100 gap-20 items-center justify-center'>
            {[...Array(5)].map((_, index) => (
              <svg key={index} width='60' height='57' viewBox='0 0 60 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M30 0L36.9599 21.4205H59.4827L41.2614 34.6591L48.2213 56.0795L30 42.8409L11.7787 56.0795L18.7386 34.6591L0.517248 21.4205H23.0401L30 0Z' fill='#FFF510' />
              </svg>
            ))}
          </div>
          <p className='text-white font-semibold text-xl'>Welcome to the Blog</p>
        </div>
        <div className='bg-black'>
          <img className='w-full object-cover h-96 opacity-30' src='https://s3-alpha-sig.figma.com/img/c739/8520/d9db5706dc37d5ee4e605283efbcf58d?Expires=1681084800&Signature=b8DAyvJ-i6NTb5VMQocKclDWqFCcYlaNcdPTfZdcOIPPQsC714kyKZtE5qkAjKTscWH1kRV5ayDm6O8zfKaeVHM3ZVBCCYFo5Kc2~ZvVtM7ESLQt3mUO~1c4ZSQnat5kRkyazRGOlaX6ZPtxIq6e3pLHk8E237XA7GZO9jrY3yxD63bzK3tpHCRMBRymsKZO8dAZhO4Ncnx6VBmy9DjLr2DrM6Rnsllh3ylM8orP9WTWJkXglqErb7vo4Pf~XmOuw7GjZweSTr3tpVwN6KiUw70jIZAV3jYJdFh2oWq4jw9gOQCpEBnth5qc4IwdPfQ9oftTboX-3DQBaSPzp3F03...' alt='Blog background' />
        </div>
        <div className='absolute z-30 bottom-8 left-8'>
          <FiArrowLeftCircle size={30} color='#FFF510' />
        </div>
        <div className='absolute z-30 bottom-8 right-8'>
          <FiArrowRightCircle size={30} color='#FFF510' />
        </div>
      </div>
    </div>
  );
};

export default Blog;
