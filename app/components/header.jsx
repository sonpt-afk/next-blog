'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavLink = ({ menu }) => {
  return <Link
    key={menu.link}
    href={menu.link}
    target={menu.target || '_self'}
    rel='noreferrer'
    className={`font-normal p-2 ${menu.disabled ? 'text-gray-300 cursor-not-allowed' : ' text-gray-700 hover:text-blue-500 '}`}
    aria-disabled={menu.disabled}
  >
    {menu.name}
  </Link>
}

export default function Header() {
  const menusLeft = [
    {
      name: 'Bài viết',
      link: '/'
    },
    {
      name: 'Khóa học',
      link: '#',
      disabled: true
    },
    {
      name: 'Youtube',
      link: 'https://youtube.com/c/anhdangcode',
      target: '_blank'
    }
  ]

  const menusRight = [
    {
      name: "Tiện ích",
      link: "/tools",
    },
    {
      name: "Giới thiệu",
      link: 'https://cv.anhdangcode.com',
      target: '_blank'
    },
    {
      name: "Liên hệ",
      link: "/contact",
    },
  ]


  return (
    <div className='flex items-center justify-center gap-8'>
      {
        menusLeft.map((menu) => <NavLink menu={menu} />)
      }
      <Image priority src='/images/logo.avif' width={170} height={170} alt='logo' />
      {
        menusRight.map((menu) => <NavLink menu={menu} />)
      }
    </div>
  )
}
