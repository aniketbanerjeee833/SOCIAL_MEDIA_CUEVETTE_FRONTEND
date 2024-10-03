import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import axios from "axios"
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUser, setIsAuthenticated, setIsLogin, setLoginError, setLoginLoading, setRedirectToLogin, setRegisterError, setResponsiveDiv, setToken } from '../../redux/slice/userSlice';
import { getAllMyStories, getCategoriesHighlighted, getCategoryInStories, getEducation, getFood, getHealthandfitness, getMovie, getStoriesByCategory, getTravel } from '../../redux/slice/storySlice';



export default function Login() {
 
  const { loading, isLogin, loginError, registerError, token, redirectToLogin,currState } = useSelector((state) => state.user)
  const [userName, setuserName] = useState("")

  const [password, setPassword] = useState("")
  const [passwordVisibility, setPasswordVisibility] = useState(true)
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const handleNameChange = (event) => {
    setuserName(event.target.value)

  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)

  }
  const handleClose = () => {
    setPassword("")
    setuserName("")
    dispatch(setIsLogin(false))
  }

  // const[loginError,setLoginError]=useState("")
  //   //const[loginPasswordError,setLoginPasswordError]=useState("")
  //   const[registerError,setRegisterError]=useState("")


  console.log(currState)
  const handleSubmit = async (e) => {
    e.preventDefault();
    //dispatch(setIsLogin(false))

    if (currState === "login") {

      try {

        const response = await axios.post(`https://social-media-cuevette.onrender.com/api/v1/user/login`, { userName, password },
          { headers: { "Content-Type": "application/json" }, withCredentials: true, }
        )



        if (response?.data?.success === true) {

          console.log(response)
          dispatch(setToken(response?.data?.token))
          localStorage.setItem("APP-TOKEN", JSON.stringify(response?.data?.token))
          dispatch(getUser(response.data.user))
          dispatch(setIsAuthenticated(true))
          dispatch(getAllMyStories())
          dispatch(fetchUser());
          //dispatch(setLoginLoading(true))
          // 
          dispatch(getStoriesByCategory(""))
          dispatch(getCategoriesHighlighted([]))
          dispatch(getCategoryInStories([]))

          dispatch(getHealthandfitness([]))
          dispatch(getFood([]))
          dispatch(getMovie([]))
          dispatch(getEducation([]))
          dispatch(getTravel([]))
          dispatch(setIsLogin(false))
          setuserName("")
          setPassword("")
          dispatch(setLoginError(""))
          
          dispatch(setResponsiveDiv(false))
          navigateTo("/");




          toast.success(response?.data?.message);
        }
      }
      catch (error) {
        console.log(error)

        toast.error(error?.response?.data?.message);
        dispatch(setLoginError(error?.response?.data?.message))

        //setLoginPasswordError(error?.response?.data?.message)
        console.log(error?.response?.data?.message);
        setuserName("")
        setPassword("")


      }


    }
    else {


      try {
        const response = await axios.post(`https://social-media-cuevette.onrender.com/api/v1/user/register`, { userName, password },
          { withCredentials: true, headers: { "Content-Type": "application/json" } }
        )
        console.log(response)

        if (response?.data?.success === true) {
          dispatch(setToken(response?.data?.token))
          localStorage.setItem("APP-TOKEN", JSON.stringify(response?.data?.token))
          dispatch(setIsAuthenticated(true))
          toast.success(response.data.message);
          dispatch(setIsLogin(false))
          setuserName("")
          setPassword("")
          setLoginError("")
          dispatch(setRegisterError(""))
          //setLoginPasswordError("")
          //alert(response.data.message)

        }
      } catch (error) {

        dispatch(setRegisterError(error?.response?.data?.message))
        console.log(error);
        setuserName("")
        setPassword("")
      }



    }
  }
  const handlePasswordVisibility = (e) => {
    setPasswordVisibility(!passwordVisibility)
    var x = document.getElementById("password");
    console.log(x)
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    console.log(e)
  }
const handleRedirectClose=()=>
{
  dispatch(setRedirectToLogin(false))
  dispatch(setIsLogin(false))
}
  console.log(loginError, registerError, userName, password, userName.length,redirectToLogin,isLogin)
  return (
    <>
      {isLogin && (<section className='login-section'>
        <div className='login-div'>
          <div className='login-heading'>
            <span onClick={() => handleClose()}>X</span>
          </div>


          <form className='form-div' onSubmit={(e) => handleSubmit(e)}>


            {currState === "sign-up" ? (
              <>
                <div className='top-heading'>
                  {currState === "sign-up" && (<h1>Register</h1>)}
                </div>
                <div className='common-div '>

                  <label htmlFor="name">Username</label>


                  {/* {userName.length<12?(<input type="text" value={userName} onChange={handleNameChange}/>):(
                      <>
                      <input type="text" value={userName + "...."} onChange={handleNameChange}/>
                      </>
                    )} */}

                  <input type="text" value={userName} onChange={handleNameChange} />


                </div>



                <div className='common-div'>

                  <label htmlFor="password">Password</label>


                  <input type="password" value={password.substring(0, 10)} id="password"
                    onChange={handlePasswordChange} />




                </div>
                <FaEye
                  className={`${passwordVisibility == true ? "eye-icon-active" : "eye-icon "}`}
                  onClick={(e) => handlePasswordVisibility(e)} />
              </>) : (
              <>
                <div className='top-heading'>
                  {currState === "login" && (<h1>Login</h1>)}
                </div>

                <div className='common-div'>


                  <label htmlFor="name">UserName</label>


                  <input type="text" value={userName} onChange={handleNameChange}
                  />


                </div>


                <div className='common-div'>

                  <label htmlFor="password">Password</label>


                  <input type="password" value={password} id="password"
                    onChange={(e) => setPassword(e.target.value)} />

                </div>


                <FaEye className={`${passwordVisibility == true ? "eye-icon-active" : "eye-icon "}`} onClick={(e) => handlePasswordVisibility(e)} />
              </>
            )}
            {(registerError) && (<div className='login-register-errors'>



              {registerError && <span className='error-text'>{registerError}</span>}




            </div>)}

            {(loginError) && (<div className='login-register-errors'>



              {loginError && <span className='error-text'>{loginError}</span>}




            </div>)}
            <div className='common-submit-button-div'>
              <button type="submit" className={`common-submit-button `} >{currState === "login" ? "Login" : "SignUp"}</button>
            </div>

          </form>
        </div>

      </section>)}

     
    </>
  )


}