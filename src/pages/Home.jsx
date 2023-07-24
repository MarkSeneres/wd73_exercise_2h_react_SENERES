import { useEffect } from "react"


function Home() {
  useEffect(() => {
    document.title = 'Home'
  }, [])
  return (
    <>
      <h3> This is home page</h3> 
    </>
  )
}

export default Home