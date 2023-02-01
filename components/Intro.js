import React from 'react'

export default function Intro(props) {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center mt-14 md:mt-20 border-b-8 rounded-lg py-8 w-11/12 md:w-3/4 self-center drop-shadow-lg bg-gradient-to-t from-[#485a9670] ${
        props.lightMode ? 'bg-[#052033] text-white rounded-lg' : ''
      }`}
    >
      <h1 className="font-bold text-4xl sm:tracking-wide pb-6">
        Hi, I&apos;m Brandon
      </h1>
      {/* <img
        src="/pfp.webp"
        className="h-52 sm:h-72 w-52 sm:w-72 self-center mt-8 "
        alt="profile picture"
      /> */}
      <div className="flex justify-center mt-4">
        <p className="md:text-4xl text-2xl md:w-3/4 text-center font-bold  tracking-wide">
          I am a Frontend Developer who enjoys solving interesting problems and
          building websites people love to use.
        </p>
      </div>
    </div>
  )
}
