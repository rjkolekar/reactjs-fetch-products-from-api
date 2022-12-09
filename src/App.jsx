import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Components/Products'
import Navigation from './Components/Navigation'
function App() {
 

  return (
    <>
    <Router>
      <Navigation />
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
