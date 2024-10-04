
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/slice/userSlice";
import LinkStory from "./pages/LinkStoryView/LinkStory";


export default function App() {
  const dispatch=useDispatch()
  const{isAuthenticated}=useSelector((state)=>state.user)
  useEffect(() => {

    dispatch(fetchUser())

}, []);


    return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/singleStory/:id/:currentIndex" element={<LinkStory/>}/>
      
  
  
     </Routes>
     <ToastContainer position="bottom-right" theme="dark" />
     </BrowserRouter>
    )
  }

