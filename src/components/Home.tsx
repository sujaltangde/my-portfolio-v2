// import React from 'react'

export const Home = () => {
  return (
    <>
      <div className="min-h-screen pt-12 dark:text-white bg-white dark:bg-gray-900">
        <div className="flex items-center justify-center pt-28">
          <div className="w-1/2 flex flex-col pl-36 gap-2 font-bold pt-12 text-5xl ">
            <div>Hi👋,</div>
            <div>My name is</div>
            <div>Sujal Tangde </div>
            <div>I build things for web</div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img src="/images/profile.jpg" className="rounded-full border-gradient-pink-to-neon " alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
