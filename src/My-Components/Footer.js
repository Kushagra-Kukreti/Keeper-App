import React from 'react'

const Footer = () => {
  const footerStyle = {
    position: "relative",
    top: "40vh",
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
      <p className='text-center pt-3'>This is the copyright &copy; of Todos list</p>
    </footer>
  )
}

export default Footer
