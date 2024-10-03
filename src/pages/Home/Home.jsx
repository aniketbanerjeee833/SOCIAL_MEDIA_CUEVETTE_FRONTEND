import React, { useEffect, useState } from 'react'
import Login from '../../Components/Login/Login';
import "./Home.css"
import { useDispatch, useSelector } from "react-redux"
import {
    fetchUser, getRefresh, getUser, logoutFailed, logoutSuccess,
    setCurrentState, setIsAuthenticated, setIsBookmarkStoryOpen, setIsCreateStory,
    setIsLogin, setLoginError, setRegisterError, setResponsiveDiv, setToken,
    viewBookmarkStories,
} from '../../redux/slice/userSlice';
import CreateStory from '../../Components/CreateStory/CreateStory';
import MyStories from '../../Components/MyStories/MyStories';
import {
    getAllMyStories, getCategoriesHighlighted, getCategoryInStories,
    getEducation, getFood, getHealthandfitness, getMovie, getStoriesByCategory,
    getTravel, setCategoryArray4, setIsCategorySectionOpen
} from '../../redux/slice/storySlice';
import ViewStory from '../../Components/ViewStory/ViewStory';
import EditStory from '../../Components/EditStory/EditStory';
import BookmarkStory from '../../Components/BookmarkStory/BookmarkStory';
import StoriesByCategory from '../../Components/StoriesByCategory/StoriesByCategory';
import { GiHamburgerMenu } from "react-icons/gi"
import { CiBookmark } from "react-icons/ci"
import axios from 'axios';
import { toast } from 'react-toastify';
import all from "../../assets/all.png"
import healthcare from "../../assets/Healthcares.png"
import travel from "../../assets/travels.png"
import food from "../../assets/Food.png"
import education from "../../assets/Education.png"
import BookmarkSlide from '../../Components/BookmarkSlideOpen/BookmarkSlide';
export default function Home() {
    const token = JSON.parse(localStorage.getItem("APP-TOKEN"))
    //const [currState, setCurrentState] = useState("");
    const { isLogin, isAuthenticated, user, isCreateStory, isBookmarkStoryOpen, refresh, redirectToLogin,
        linkStoryOpen, firstLoading, loginLoading, responsiveDiv

    } = useSelector((state) => state.user)
    const { isViewStoryOpen, isEditStoryOpen, initialLoading,
        isCategorySectionOpen, categoryInStories, categoriesHighlighted, categoryArray4, bookmarkSlideOpen } = useSelector((state) => state.story)
    const [title, setTitle] = useState("")
    const [categoryArray3, setCategoryArray3] = useState([])
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

    const [logoutOpen, setLogoutOpen] = useState(false)
    //const [isResponsiveDiv, setResponsiveDiv] = useState(false)
    console.log(categoryInStories)
    const categories = [
        { title: "all", image: all },
        { title: "food", image: food },
        { title: "healthandfitness", image: healthcare },
        { title: "travel", image: travel },
        { title: "movie", image: travel },
        { title: "education", image: education },

    ];
    const dispatch = useDispatch()
    const handleRegister = () => {


        dispatch(setCurrentState("sign-up"));
        //console.log(currState)
        dispatch(setIsLogin(true));
        dispatch(setLoginError(""))
        dispatch(setRegisterError(""))

    }
    const handleLogin = () => {
        dispatch(setCurrentState("login"));
        //console.log(currState)
        dispatch(setIsLogin(true));
        dispatch(setLoginError(""))
        dispatch(setRegisterError(""))

    }

    const handleStory = () => {
        dispatch(setIsCreateStory(true))
    }
    const handleBookmarkStory = () => {
        dispatch(setIsBookmarkStoryOpen(!isBookmarkStoryOpen))
        dispatch(viewBookmarkStories())
    }
    // console.log(isAuthenticated)

    const handleCategorySection = (category) => {
        //getRefresh(false)
        //setTitle(category)
        let categoryArray = []
        console.log(category)
        if (category == "all") {

            // if((Object.keys(user).length !== 0)||Object.keys(user).length == 0){
            //     dispatch(getAllStories())
            // }
            categoryArray = [...categoryArray3, category]
            //dispatch(getCategoryInStories([]))
            dispatch(setIsCategorySectionOpen(true))
            dispatch(getCategoriesHighlighted(categoryArray))
            console.log(categoryArray)
            dispatch(getStoriesByCategory(categoryArray))
            setCategoryArray3([])
        } else {
            setCategoryArray3((prevState) => {
                // if(prevState.includes("all")){

                //     return prevState.filter((curElem)=>curElem!=="all")
                // }
                return !prevState.includes(category) ? [...prevState, category] : prevState
            })
            // setCategoryArray4((prevState)=>{
            //              if(prevState.includes("all")){

            //         return prevState.filter((curElem)=>curElem!=="all")
            //     }
            //     return !prevState.includes(category)?[...prevState,category]:prevState   
            // })
            dispatch(setIsCategorySectionOpen(true))
            //let categoryArray=[]
            //dispatch(setCategoryArray4(categoryArray3))
            if (!categoryArray.includes(category)) {
                categoryArray = [...categoryArray3, category]
            }
            //     if(!categoryArray4.includes(category)){
            //         categoryArray=[...categoryArray4,category]
            //    }

            dispatch(getCategoriesHighlighted(categoryArray))
            console.log(categoryArray)
            dispatch(getStoriesByCategory(categoryArray))

        }


    }


    const handleHamburgerMenuOpen = () => {

        setIsHamburgerMenuOpen(!isHamburgerMenuOpen)
    }
    console.log(categoryArray3, categoryArray4, categoriesHighlighted, isHamburgerMenuOpen)

    //console.log(refresh)

    const handleLogout = async () => {
        ///
        try {
            const response = await axios.get("https://social-media-cuevette.onrender.com/api/v1/user/logout", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response)

            //dispatch(userSlice.actions.logoutSuccess());
            //dispatch(userSlice.actions.getRefresh())
            if (response.data.success == true) {
                setToken("")
                localStorage.removeItem("APP-TOKEN")
                toast.success(response.data.message);
                //setLogoutOpen((true))
                dispatch(logoutSuccess())
                dispatch(setIsAuthenticated(false))

                dispatch(getUser({}))
                setIsHamburgerMenuOpen(false)
                dispatch(setIsCategorySectionOpen(false))
                setCategoryArray3([])
                //dispatch(getStoriesByCategory(""))
                //dispatch(getRefresh(true)) 
                dispatch(getCategoryInStories([]))
                dispatch(getCategoriesHighlighted([]))
                // dispatch(getStoriesByCategoryRequest())
                dispatch(getHealthandfitness([]))
                dispatch(getFood([]))
                dispatch(getMovie([]))
                dispatch(getEducation([]))
                dispatch(getTravel([]))


                //setLogoutOpen(true)
            }



        } catch (error) {
            //dispatch(logoutFailed());
            toast.error(error?.response?.data?.message);
            // dispatch(userSlice.actions.clearAllErrors());
        }

    };
    //console.log(categoryArray3, categoriesHighlighted)
    console.log(logoutOpen, isAuthenticated)


    const handleYourStory = () => {
        setResponsiveDiv(false)
        dispatch(setIsBookmarkStoryOpen(false))
        dispatch(getCategoryInStories([]))
        dispatch(getCategoriesHighlighted([]))
        // dispatch(getStoriesByCategoryRequest())
        dispatch(getHealthandfitness([]))
        dispatch(getFood([]))
        dispatch(getMovie([]))
        dispatch(getEducation([]))
        dispatch(getTravel([]))

    }
    const openResponsiveDiv = () => {
        dispatch(setResponsiveDiv(true))
    }
    const closeResponsiveDiv = () => {
        dispatch(setResponsiveDiv(false))
    }



    useEffect(() => {
        dispatch(getAllMyStories())
        // setCategoryArray3([])


    }, [isAuthenticated])
    return (
        <>
            <section className='home-section'>
                <div className='home-section-div'>

                    <div className='top-home-section'>
                        <div className='login-signup-button-div'>

                            {Object.keys(user).length == 0 ?
                                (<button className="common-home-button-register"
                                    onClick={() => handleRegister()}>Signup</button>) : (
                                    <>
                                        <button type="button" className='common-home-button ' onClick={() => handleBookmarkStory()}><CiBookmark className='home-bookmark-icon' />

                                            Bookmark

                                        </button>
                                    </>
                                )}


                            {Object.keys(user).length == 0 ?
                                (<button className="common-home-button-login"
                                    onClick={() => handleLogin()}>Login</button>) : (
                                    <>
                                        <button className='common-home-button ' onClick={() => handleStory()}>Add Story</button>
                                    </>
                                )}
                            {Object.keys(user).length !== 0 && <>
                                <GiHamburgerMenu onClick={() => handleHamburgerMenuOpen()} className='hamburger-icon' />

                            </>}
                            {isHamburgerMenuOpen && isAuthenticated &&
                                <div className='open-logout-div'>
                                    <span>{user.userName}</span>
                                    <button type="button" className='common-home-button ' onClick={() => handleLogout()} >Logout</button>
                                </div>}



                        </div>
                    </div>

                    <div className='hamburger-icon-div-1'>



                        <GiHamburgerMenu onClick={() => openResponsiveDiv()} className='hamburger-icon-1' />



                    </div>

                    {responsiveDiv && <div className='login-signup-button-div-responsive'>
                        <div className='hamburger-div-name-close'>
                            {(Object.keys(user).length !== 0) &&
                                (

                                    <h2>{user.userName}</h2>


                                )
                            }

                            <button className='hamburger-icon-div-close' onClick={() => closeResponsiveDiv()}>
                                X
                            </button>

                        </div>

                        {/* <div className='hamburger-icon-div-close'>
                            {/* {Object.keys(user).length!==0&&  
                <GiHamburgerMenu onClick={()=>openResponsiveDiv()} className='hamburger-icon' />
                    
                    } */}


                        <div className='four-rows'>
                            {Object.keys(user).length == 0 ?
                                (<button className="common-home-button-register"
                                    onClick={() => handleRegister()}>Signup</button>) : (
                                    <>
                                        <button type="button" className='common-home-button ' onClick={() => handleBookmarkStory()}><CiBookmark className='home-bookmark-icon' />

                                            Bookmark

                                        </button>
                                    </>
                                )}


                            {Object.keys(user).length == 0 ?
                                (<button className="common-home-button-login"
                                    onClick={() => handleLogin()}>Login</button>) : (
                                    <>
                                        <button className='common-home-button ' onClick={() => handleStory()}>Add Story</button>
                                    </>
                                )}
                            {/* {Object.keys(user).length!==0&&  <>
        <GiHamburgerMenu onClick={()=>handleHamburgerMenuOpen()} className='hamburger-icon' />
           
            </>} */}
                            {Object.keys(user).length !== 0 &&


                                <button type="button" className='common-home-button ' onClick={() => handleLogout()} >Logout</button>

                            }

                            {Object.keys(user).length !== 0 &&
                                (<button className="common-home-button-register"
                                    onClick={() => handleYourStory()}>Your Story</button>)}
                        </div>
                    </div>}




                    {!isBookmarkStoryOpen && <div className='top-home-section-div'>
                        {categories.map((currState, index) => {

                            return (

                                <div onClick={() => handleCategorySection(currState.title)}

                                    // style={{
                                    //     backgroundImage: `${currState.image}`,
                                    //     backgroundRepeat: 'no-repeat', backgroundSize: "4rem 4rem"}}
                                    key={index}

                                    className={` top-home-section-div-cards
                   ${categoryInStories.length > 0 && categoryInStories?.includes(currState.title) ? "top-home-section-div-cards-active" : ""}
                       ${categoryInStories.length > 0 && categoryInStories?.includes("all") ? "top-home-section-div-cards-active" : ""}
                   `} >

                                    <img src={`${currState.image}`} />
                                    <span>{currState.title}</span>

                                </div>

                            )
                        })}


                    </div>}
                    <div className='middle-home-section'>

                        {(initialLoading==true && isBookmarkStoryOpen==false) && (Object.keys(user).length !== 0) &&

                            <div className='loader'>
                                <h1>Loading.....</h1>
                            </div>
                        }
                        {Object.keys(user).length !== 0 && !isBookmarkStoryOpen && (<MyStories />)}

                        {Object.keys(user).length == 0 && isCategorySectionOpen && (<StoriesByCategory />)}

{/* 
                        {(isBookmarkStoryOpen==false && firstLoading == true) && Object.keys(user).length !== 0 &&

                            <div className='loader'>
                                <h1>Loading.....</h1>
                            </div>

                        } */}
                        {Object.keys(user).length !== 0 && isBookmarkStoryOpen && (<BookmarkStory />)}
                    </div>

                    {Object.keys(user).length !== 0 && !isBookmarkStoryOpen && isCategorySectionOpen &&
                        <div className='bottom-home-section-div'>
                            <StoriesByCategory />
                        </div>}
                </div>
            </section>

            {(isLogin || redirectToLogin) && <Login />}
            {isCreateStory && <CreateStory />}
            {isViewStoryOpen && <ViewStory />}
            {isEditStoryOpen && <EditStory />}
            {bookmarkSlideOpen && <BookmarkSlide />}
            {/* //{linkStoryOpen&& <ViewStory/>} */}

        </>
    )
}
