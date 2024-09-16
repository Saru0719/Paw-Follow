import React from 'react'
import ReactPlayer from 'react-player/youtube'

interface Props {
    url: string
    title: string
    description: string
}
function videoComponent(props: Props) {
    const { url, title, description } = props
  return (
    <>
      <section className='w-full flex flex-col rounded-lg bg-white shadow-md shadow-gray-300'>
        <div className='w-full'>
            <ReactPlayer
                url={url}
                width='100%'
                controls
            />
        </div>
        <div className='flex flex-col gap-2 p-2'>
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p>{description}</p>
        </div>
      </section>
    </>
  )
}

export default videoComponent