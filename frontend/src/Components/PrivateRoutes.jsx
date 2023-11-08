import Cookies from 'js-cookie';
import Login from '../Pages/Login';

const PrivateRoutes = ({children}) => {
    const userId=Cookies.get("userId");
    console.log("pr",userId);
    if(!userId){
       return <Login />
    }
    else{
       return children
    }
}

export default PrivateRoutes