
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Checkout } from './Pages/Checkout';
import { Blog } from './Pages/Blog';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      {/* <Checkout /> */}
      {/* <Blog /> */}
    </div>
  )
}

export default App;