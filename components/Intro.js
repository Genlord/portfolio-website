import React from 'react'


export default function Intro(props) {
  return (
    <div className={`flex flex-col justify-center items-center text-center mt-14 md:mt-20 bg-gradient-to-t from-[#13385c]/50 to-[#01101f43] py-8 md:w-3/4 self-center rounded-xl drop-shadow-lg ${props.lightMode ? 'bg-[#052033] text-white' : ''}`}>
      <h1 className="font-bold text-4xl tracking-wide pb-6">Hi, I&apos;m Brandon</h1>
      <img
        src="/pfp.webp"
        className="h-52 sm:h-72 w-52 sm:w-72 self-center mt-8 "
        alt="profile picture"
      />
      <div className="flex justify-center mt-4">
        <p className="md:text-4xl text-2xl md:w-3/4 text-center font-bold  tracking-wide">
          I am a Frontend Developer who enjoys solving interesting problems and
          building websites people love to use.
        </p>
      </div>
      
    </div>
  )
}
