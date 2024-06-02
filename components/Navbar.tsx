import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const navIcons = [
    {src: 'assets/icons/search.svg', alt: 'search'},
    {src: 'assets/icons/black-heart.svg', alt: 'heart'},
    {src: 'assets/icons/user.svg', alt: 'user'},
]
const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href='/' className='flex item-center gap-1'>
                <Image 
                    src={'/assets/icons/logo.svg'}
                    width={27}
                    height={27}
                    alt='logo'
                
                />

                <p className='nav-logo'>
                    <span>Scrapify</span>
                </p>
            
            </Link>

            <div className='flex div-center gap-5'>
                {navIcons.map((icons) => (
                    <Image 
                        key={icons.alt}
                        src={icons.src}
                        alt={icons.alt}
                        width={28}
                        height={28}
                        className='object-contain'

                    
                    />
                ))}

            </div>

        </nav>
    </header>
  )
}

export default Navbar