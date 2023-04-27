import React from 'react';

const Register = () => {
    return (
        <div className='relative   flex items-center justify-center '>
            <div className='absolute z-20 '>
                <div className='flex flex-col gap-6  w-[98%] mx-auto'>
                    <div className='bg-white py-3 px-5 grid grid-cols-3 gap-5'>
                        <h3 className='p-2 lg:py-1 lg:px-8 bg-green-600 text-white text-center'>Name</h3>
                        <input type="text" className='outline-none lg:w-72 col-span-2' placeholder='Enter your name' />
                    </div>
                    <div className='bg-white py-3 px-5 grid grid-cols-3 gap-5'>
                        <h3 className='p-1 lg:py-1 bg-blue-600 text-white text-center'>Email</h3>
                        <input type="email" className='outline-none lg:w-72 col-span-2' placeholder='Enter your email' />
                    </div>
                    <div className='bg-white py-3 px-5 grid grid-cols-3 gap-5'>
                        <h3 className='p-1 lg:py-1 bg-purple-600 text-white text-center'>Password</h3>
                        <input type="password" className='outline-none lg:w-72 col-span-2' placeholder='Enter your password' />
                    </div>
                    <div className='mt-8 text-center'>
                        <button className='border border-white bg-yellow-600 text-white rounded px-5 py-1'>Sign up</button>
                    </div>
                </div>
            </div>
            <div className='relative top-0 z-0 bg-gray-600'>
                <img className='opacity-50 w-[100vw] h-[95vh] object-cover' src="https://s3-alpha-sig.figma.com/img/d0d9/6a82/6b12dd0716cdc48849034a2a5d786d04?Expires=1681084800&Signature=RM-xvs42TUCyQMfXjnIXP~oCFYLUwCRm2aN03RW6DlnaJ3CK8laqtV4crWi2bKD~yMMXeMQHeIkPKzmijVmrhqRlVleY6CFgUdopF87gBtMAoS3xGALj34AYCKD2gWXg5bPZRwiCMrj0X-BIuW6QrL1eGhSaicIcB7MF-ND4A6k92N0B5hzK2uFogKLf0U8wOrCEoVp0KsPg43Wi4zqtlWoKDhjyoG2Ihj0yMZvIoy8f6sVa7EF2ZfFyyyEpuN7v3yF3iknOEXAUQ03VaiVZYoHkU6pNGYn8P7dLKwxAHBaAlDROSaulQj2RXGQJTnK2ZLZQ8y14dDzAdsxHJjvZCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
        </div>
    );
};

export default Register;
