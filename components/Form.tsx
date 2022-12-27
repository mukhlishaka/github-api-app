import React from 'react'

function Form({ value, onChange }: Props) {
    return (
        <input placeholder='Cari user di Github'
            className='border border-zinc-100 p-[20px] w-full rounded-[8px] align-middle'
            value={value}
            onChange={onChange}
        />
    )
}

export default Form

interface Props {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}