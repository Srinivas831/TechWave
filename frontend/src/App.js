
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Checkout } from './Pages/Checkout';
import { Blog } from './Pages/Blog';
import { Courses } from './Pages/Courses';
import { Admin } from './Pages/Admin';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      {/* <Admin /> */}
      {/* <Courses /> */}
      {/* <Checkout /> */}
      {/* <Blog /> */}
    </div>
  )
}

export default App;