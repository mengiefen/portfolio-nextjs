import React from 'react'

const ForwardButton = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" 
          className="prev" width="28.4" 
          height="45.5" viewBox="0 0 56.898 91">
          <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" 
          transform="translate(0 91) rotate(-90)" fill="#222"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" 
          className="next" width="28.4" height="45.5" 
          viewBox="0 0 56.898 91">
          <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
          transform="translate(56.898) rotate(90)" fill="#222"/>
      </svg>
    </div>
  )
}

export default ForwardButton