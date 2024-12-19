'use client'
import React from 'react'

export default function CategoryItem({category}) {
  return (
    <li className='bg-green-200 mt-1 rounded-sm' key={category.id}>{category.name}</li>

)
}
