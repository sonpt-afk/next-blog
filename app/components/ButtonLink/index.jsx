'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ButtonLink({ href, children }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(href)
    }

    return (
        <button onClick={handleClick} className='bg-blue-300 py-1 px-3 hover:bg-blue-500 rounded-md'>
            {children}
        </button>
    )
}
