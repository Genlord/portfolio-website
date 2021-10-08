import React, { useEffect, useRef } from 'react'


export default function Work(props) {
    const workDiv = useRef()

    useEffect(() => {
        if (props.workScroll === true) {
            workDiv.current.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"})
            props.setWorkScroll(false)
        }
    }, [props.workScroll])


    return (
        <div ref={workDiv} className='flex justify-center mt-40 flex-col text-center'>
            <div className='font-bold text-5xl'>
                Projects
            </div>
            <div className='font-bold projectTitle text-xl'>
                Anime DB
            </div>
            <div className='font-bold projectTitle2 text-xl'>
                E-Commerce
            </div>
            <div className='font-bold projectTitle3 text-xl'>
                NFT-Tracker
            </div>
            <div className='flex justify-center mt-6 gap-x-12 projectContainer relative'>

                
                <div className='w-1/4 absolute h-full left-one overlayOne flex justify-center gap-x-10'>
                    
                    <div className='mt-32 opacity-100'>
                        <a href='https://mal-anime-db.netlify.app' className='font-bold'>Live</a>
                    </div>
                    <div className='mt-32'>
                        <a href='https://github.com/Genlord/anime-app' className='font-bold'>Github</a>
                    </div>
                </div>

                <div className='w-1/4 absolute h-full right-two overlayOne flex justify-center gap-x-10'>
                    <div className='mt-32 opacity-100'>
                        <a href='https://compparts.netlify.app' className='font-bold'>Live</a>
                    </div>
                    <div className='mt-32'>
                        <a href='https://github.com/Genlord/e-commerce' className='font-bold'>Github</a>
                    </div>
                </div>

                

                <a className='w-1/4 relative transform duration-150 ease-in-out hover:scale-105 projectOne' href='https://mal-anime-db.netlify.app'><img src='/animedbss.png' className='rounded'/></a>
                <a className='w-1/4 transform duration-150 ease-in-out hover:scale-105 projectTwo' href='https://compparts.netlify.app'><img src='/e-commercess.png' className='rounded'/></a>
                <a className='w-1/4 transform duration-150 ease-in-out hover:scale-105 projectTwo' href='https://compparts.netlify.app'><img src='/e-commercess.png' className='rounded'/></a>
            </div>
            
        </div>
    )
}
