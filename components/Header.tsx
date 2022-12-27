import Image from 'next/image'
import React from 'react'

export const Header = () => {
    return (
        <div className='flex flex-row justify-center items-center'>
            <Image alt='logo' src={"/hakalogodark.png"} width={90} height={90} />
            <div className='ml-4'>
                <p className='text-5xl font-light'>Github App</p>
                <p className='text-3xl font-bold'>Search Users</p>

            </div>
        </div>
    )
}
