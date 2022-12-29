import React from 'react'
import { SearchRes } from '../types/SearchRes'
import UserItem from './UserItem'

function UserList({ result }: Props) {
    return (
        <div className='border rounded-[8px] w-full space-y-3'>
            <p className='text-center p-[20px]'>Hasil Pencarian : <span className='font-bold'>Mukhlis</span></p>
            {result?.users.map((user, index) => (
                <UserItem key={index} user={user} />
            ))}
        </div>
    )
}

export default UserList

interface Props {
    result?: SearchRes
}