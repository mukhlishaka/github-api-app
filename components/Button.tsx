import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

function Button({ type, isLoading }: Props) {

    const Loading = () => {
        return (
            <div className='flex justify-center'>
                <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'>

                </div>
            </div>
        )
    }
    return (
        <button type={type} className='bg-black text-white hover:bg-zinc-800 p-[20px] rounded-[8px] aspect-square align-middle'>
            {isLoading ? <Loading /> : <MagnifyingGlassIcon className='w-6 h-6' />}
        </button>
    )
}

export default Button

interface Props {
    type?: 'button' | 'submit' | 'reset' | undefined;
    isLoading?: boolean;
}