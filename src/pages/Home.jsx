import React, { useState, useEffect} from 'react'
import { Loader, Card, FormField } from '../components'

function Home() {

  const [loading, setLoading] = useState(false);
  const [allpost, setAllPosts] = useState(null);

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          The Community Showcase
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
          Browse through a collection of imaginative and visually stunning images generated by DALL-E AI
        </p>
      </div>
    </section>
 
  )
}

export default Home