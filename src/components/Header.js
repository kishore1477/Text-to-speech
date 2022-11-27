import React from 'react'

const Header = () => {
  return (

    <header className="text-gray-600 body-font md:shadow-md">
    <div className="container mx-auto flex flex-wrap   flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          
      <img  className="w-14 h-14  text-white  rounded-full" src='https://developer-blogs.nvidia.com/wp-content/uploads/2019/12/text-to-speech.png'></img>
      
       
        
        <span className="ml-3 text-2xl font-bold  ">Text To Speech</span>
      </a>
     
      
    </div>
  </header>
  
  )
}

export default Header