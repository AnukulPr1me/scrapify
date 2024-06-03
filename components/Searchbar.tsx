"use client"
import React, { FormEvent, useState } from 'react'
const isValidAmazonProductURL =(url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;
    if(
      hostname.includes('amazon.in')||
      hostname.includes('amazon.') ||
      hostname.includes('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
}
const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const inValidLink = isValidAmazonProductURL(searchPrompt)
      alert(inValidLink ? 'valid link' : 'invalid link')
    }
  return (
    <form className='flex flex-wrap gap-4 mt-12' 
        onSubmit={handleSubmit}
    
    >
        <input 
            type="text" 
            value={searchPrompt}
            onChange={(e) => setSearchPrompt(e.target.value)}
            placeholder='Enter the product link here'
            className='searchbar-input'
        
        />
        <button className='searchbar-btn'>Search</button>
    </form>
  )
}

export default Searchbar