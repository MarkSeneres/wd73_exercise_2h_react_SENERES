import { useEffect } from "react"
import "./Home.css"

function Home() {
  const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgDHcconcHx5Bwu8cHhV5GrF2P2C8jhpv5A&usqp=CAU'
  useEffect(() => {
    document.title = 'Home'
  }, [])
  return (
    <>
      <div className="m-3">
        <div className="text-center">
        <img style={{width: '40rem'}} src={imageUrl} />
          <h3> You want to buy some let's go</h3>
          <p>"Shopping is a delightful experience that allows individuals to explore a diverse array of products and indulge in the satisfaction of acquiring desired items."</p>
         </div>
      </div>
    </>
  )
}

export default Home