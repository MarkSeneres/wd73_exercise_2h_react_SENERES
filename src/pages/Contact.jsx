import { useEffect } from "react"

function Contact() {
  useEffect(() => {
    document.title = 'Contact'
  }, [])
  return (
    <>
      <div className="d-flex align-items-center justify-content-evenly mt-3">
        <div>
          <h3>CONTACT</h3><br />
          <h3>PHONE NUMBER</h3>
           <p>+639935597120</p>
           <h3>EMAIL</h3>
           <p>watachiwa@gmail.com</p>
           <h3>INSTRAGRAM</h3>
           <p>Watachiwa</p>
        </div>
        <div>
          <h3>WHAT WE DO</h3>
          <p>Marketing Service</p>
          <p>Get Support</p>
        </div>
        <div>
          <h3>LINKS</h3>
          <p>Home</p>
          <p>Products</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  )
}

export default Contact