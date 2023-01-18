import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top:"4vh",
    width:"100%",
    height:"7.5rem"
  }
  return (
    <>
    <div className='bg-dark text-light text-center p-5' style={footerStyle}>
      Copyright &copy; Onefactorial Co.
    </div>
    </>
  )
}
