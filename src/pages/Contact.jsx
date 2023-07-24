import { useEffect } from "react"

function Contact() {
  useEffect(() => {
    document.title = 'Contact'
  }, [])
  return (
    <>
      <h3> This is Contact page</h3> 
    </>
  )
}

export default Contact