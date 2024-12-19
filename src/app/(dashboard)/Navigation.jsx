import Link from 'next/link'
import React from 'react'

export default function Navigation() {
    return (
        <header className='bg-blue-500 py-2'>
            <div className="container mx-auto">
                <Link href={'/dashboard'} className='px-2 bg-blue-700 py-1 text-white ml-1'>Dashboard</Link>
                <Link href={'/categories'} className='px-2 bg-blue-700 py-1 text-white ml-1'>Categories</Link>
            </div>
        </header>
    )
}
