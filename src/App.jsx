
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductGallery from "./pages/ProductGallery"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import { Provider } from "react-redux"
import { store } from "./store/Store"
import Checkout from "./component/Checkout"

function App() {
    return (
    <> 
      <Provider store={store}>          
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> }/> 
          <Route path="/products" element={ 
          <>
            <Checkout />
            <ProductGallery /> 
          </>
        }/>
          <Route path="/contact" element={ <Contact /> }/> 
        </Routes>
        <Footer />
        </BrowserRouter> 
      </Provider>       
    </>
  )
}

export default App
