import Link from 'next/link'

const Headers = () => {
  return (
    <div className='w-full absolute z-10 text-white'>
      <nav className='container relative flex flex-wrap items-center justify-between p-6 mx-auto'>
      <Link href="/" className='font-bold text-4xl'>Home</Link>
      <div className='flex text-3xl font-bold gap-8'>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scale</Link>
      </div>
      </nav>
    </div>
  )
}

export default Headers
