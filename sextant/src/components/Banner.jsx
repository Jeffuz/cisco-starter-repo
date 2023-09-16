import React from 'react'

const Banner = ({ title }) => {
    return (
        <div className='text-[#049fd9] font-mono text-5xl antialiased font-bold tracking-wide uppercase'>
            <div className='bg-white rounded-lg shadow-lg p-4 m-4 flex justify-center'>
                {title}
            </div>
        </div>
    )
}

export default Banner