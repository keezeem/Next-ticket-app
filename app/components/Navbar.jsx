import React from 'react'
import Link from 'next/link'
import Logo from './Agent.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Agent logo'
        width={50}
        quality={100}
        placeholder='blur'
      />
    <h1>Agent</h1>
    <Link href="/">Dashboard</Link>
    <Link href="/tickets">Tickets</Link>
    <Link href="/CreateForm">Create Form</Link>
  </nav>
  )
}
