import React from 'react'

const Footer = () => {
    const today = new Date();

  return (
    <footer className='footer bg-dark d-flex justify-content-center text-white w-100'>
       <p>Copyright &copy; { today.getFullYear() } </p>
    </footer>
  )
}

export default Footer