import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./ViewStory.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllMyStories, likeOrDislikeStory, setIsViewStoryOpen, setLiked } from '../../redux/slice/storySlice'
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci"
import { FiSend } from "react-icons/fi";
import axios from 'axios'
import { FaArrowAltCircleDown } from "react-icons/fa";
// import{ like }from "../../assets/like.png"
import { toast } from 'react-toastify';
import { TiTick } from "react-icons/ti"

import { fetchUser, getLikesCount, setCurrentState, setIsLogin, setLinkStoryOpen, setRedirectToLogin } from '../../redux/slice/userSlice';
import { Link } from 'react-router-dom';

export default function ViewStory() {
  const token = JSON.parse(localStorage.getItem("APP-TOKEN"))
  const { isViewStoryOpen, singleStoryId, liked, hasLiked } = useSelector((state) => state.story)
  const { likedSlidesCount, user, isAuthenticated } = useSelector((state) => state.user)
  //console.log(isViewStoryOpen,singleStoryId)
  
  const [singleStory, setSingleStory] = useState([])
  const [slides, setSlides] = useState("")
  const [imageOrVideoUrl, setImageOrVideoUrl] = useState("")
  const [imageUrlTrue, setImageUrlTrue] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [heading, setHeading] = useState("")
  const [description, setDescription] = useState("")
  const [length, setLength] = useState("")
  const [id, setId] = useState("")
  const [newLikesCount, setNewLikesCount] = useState("")
  const [slideId, setSlideId] = useState("")
  const [myIds, setMyIds] = useState("")
  let time = 5


  const [timer, setTimer] = useState(time)
  const [viewMore, setViewMore] = useState(false)
  const videoRef = useRef(null);
  const videoRef1 = useRef(null);
  const dispatch = useDispatch()

  const getSingleStory = async () => {
    console.log(singleStoryId)

    try {
      const response = await axios.get(`https://social-media-cuevette.onrender.com/api/v1/story/singleStory/${singleStoryId}`);
      //console.log(response);

      setSingleStory(response.data.singleStory)
      setId(response.data.singleStory._id)
      setLength(response.data.singleStory.slidesInStory.length)
      setSlides(response.data.singleStory.slidesInStory[currentIndex])
      setImageOrVideoUrl(response.data.singleStory.slidesInStory[currentIndex].imageOrVideoUrl)
      setHeading(response.data.singleStory.slidesInStory[currentIndex].heading)
      setDescription(response.data.singleStory.slidesInStory[currentIndex].description)
      setSlideId(response.data.singleStory.slidesInStory[currentIndex]._id)
      setMyIds(response.data.singleStory.slidesInStory[currentIndex].id1)
      setImageUrlTrue(response.data.singleStory.slidesInStory[currentIndex].imageUrl)
      setNewLikesCount(response.data.singleStory.slidesInStory[currentIndex].likesCount)


    } catch (error) {
      console.log(error)
    }
  };

  console.log(slides)

  const [newUser, setNewUser] = useState([])
  const [newBookmarks, setNewBookmarks] = useState(user.bookmarks)
  const [userName, setuserName] = useState(user.userName)
  const [likes, setLikes] = useState(user.likes)
  const [password, setPassword] = useState(user.password)
  const [id1, setId1] = useState(user._id)


  let newUser1 = []
  let newBookmarks1 = [];
  let hasBookmarked = ""
  const [resetPlayback, setResetPlayback] = useState(1);
  const [currentBookmarks, setCurrentBookmarks] = useState([])

//const [resetNextVideo, setResetNextVideo] = useState(false);
  const handleNextSlide = () => {
    console.log(id, slideId, singleStory)
 
    setCurrentIndex((prev) => prev + 1)
    setResetPlayback((prev)=>prev+1)
  
   
 

  }

  const handlePrevSlide = (id, slideId) => {
    setCurrentIndex((prev) => prev - 1)
    setResetPlayback((prev)=>prev-1)
   
   
  }
 
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to the beginning
      videoRef.current.play(); // Start playback
    }
  }, [resetPlayback]);

  console.log(videoRef1)
  useEffect(() => {
    if (videoRef1.current) {
    
      videoRef1.current.currentTime = 0; // Reset video to the beginning
      videoRef1.current.play(); // Start playback
    }
  }, [resetPlayback]);


  const handleLikeIcon = (slideId) => {
    console.log("hello")
    console.log(myIds, "myIds")

    if (isAuthenticated == true) {
      dispatch(likeOrDislikeStory(singleStoryId, slideId))
      dispatch(getLikesCount(id, slideId))
    } else if (isAuthenticated == false) {
      toast.error("Please login to like")
      dispatch(setIsViewStoryOpen(false))
      dispatch(setRedirectToLogin(true))
      dispatch(setIsLogin(true))
      dispatch(setCurrentState("login"))

    }







  }
  const handleSlides = () => {
    // if(myIds==1){
    //   dispatch(getLikesCount(id,slideId))
    // } if(myIds==2){
    //   dispatch(getLikesCount(id,slideId))
    // } if(myIds==3){
    //   dispatch(getLikesCount(id,slideId))
    // } if(myIds==4){
    //   dispatch(getLikesCount(id,slideId))
    // }
    // if(myIds==5){
    //   dispatch(getLikesCount(id,slideId))
    // }
    // if(myIds==6){
    //   dispatch(getLikesCount(id,slideId))
    // }
    dispatch(getLikesCount(id, slideId))

  }


  // console.log(newBookmarks,id1,singleStory)
  const handleBookmarkIcon = async () => {
    if (isAuthenticated == true) {


      if (!newBookmarks.includes(slideId)) {

        setNewBookmarks((prevState) => [...prevState, slideId])
        //setNewUser((prevState)=>[...prevState,slides])
        //console.log(newBookmarks)
        // newBookmarks1.push(slideId)
        newBookmarks1 = [...newBookmarks, slideId]
        setCurrentBookmarks(newBookmarks1)
        // newUser1=[...newUser,slides]
        // newUser1=[...newUser,slides]
        // console.log(newBookmarks1,newBookmarks)
        // hasBookmarked=true;
        console.log(newBookmarks1, newBookmarks)

      } else if (newBookmarks.includes(slideId)) {

        //newBookmarks1.pull(slideId)
        setNewBookmarks((prevState) => prevState.filter((curBookmark) => curBookmark !== slideId))
        //newBookmarks1=[...newBookmarks,slideId]
        newBookmarks1 = newBookmarks



        let index = newBookmarks1.indexOf(slideId)
        if (index !== -1) {
          newBookmarks1?.splice(index, 1)
        }
        setCurrentBookmarks(newBookmarks1)

        console.log(newBookmarks1, newBookmarks)

      }


      const token = JSON.parse(localStorage.getItem("APP-TOKEN"))



      try {
        const response = await axios.patch(`https://social-media-cuevette.onrender.com/api/v1/story/bookmarkSingleSlide/${slideId}`,
          { newBookmarks1 },
          {
            headers: {
              Authorization: `Bearer ${token} `
            }
          });
        console.log(response);
        toast.success(response.data.message);


      } catch (error) {
        console.log(error)
        toast.error(error.response.data.message);

      }
    } else if (isAuthenticated == false) {
      toast.error("Please login to bookmark")
      dispatch(setIsViewStoryOpen(false))
      dispatch(setRedirectToLogin(true))
      dispatch(setIsLogin(true))
      dispatch(setCurrentState("login"))
    }
  }

  const handleViewStoryClose = () => {

    dispatch(setIsViewStoryOpen(false))
  
    dispatch(fetchUser())
    dispatch(getAllMyStories())

  }
  console.log(slideId, "hello")
  // dispatch(bookmarkStory(slideId))



  console.log(currentIndex)

  const handleShareStory = () => {
    console.log(singleStoryId)
    // navigator.clipboard.writeText(`http://localhost:5173/singleStory/${singleStoryId}/${currentIndex}`)
    navigator.clipboard.writeText(`https://social-media-cuevette-frontend-three.vercel.app//${singleStoryId}/${currentIndex}`)
    toast.success("link Copied to clipboard")
    //dispatch(setLinkStoryOpen(true))
  }
const[downloading,setIsDownloading]=useState(false)
const[initialDownload,setInitilDownload]=useState("not-downloaded")

  const handleDownload = async(url) => {
    // const link = document.createElement("a");
    // <a href="/images/myw3schoolsimage.jpg" download="w3logo"></a>
    // if (!url) {
    //   toast.error("No image URL available for download.");
    //   return;
    // }

    // try {
    //   setIsDownloading(true);

    //   // Fetch the image as a blob
    //   const response = await fetch(url, {
    //     mode: "cors", // Ensure the request allows CORS
    //   });
    //   console.log(response)
    //   // If the response is not ok, handle the error
    //   if (!response.ok) {
    //     throw new Error("Failed to fetch the image.");
    //   }

    //   const blob = await response.blob();
    //   const blobUrl = URL.createObjectURL(blob);

    //   // Create a download link
    //   const link = document.createElement("a");
    //   link.href = blobUrl;
    //   link.download = url.split("/").pop();
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link)
    //   URL.revokeObjectURL(blobUrl);

    //   toast.success("Download successfully.");
    //   setIsDownloading(false);
    // } catch (error) {
    //   console.error("Error downloading the image:", error);
    //   toast.error("Failed to download the image.");
    //   setIsDownloading(false);
}

const handleDownload1=async(url)=>
{
console.log("url",url)
//   try{
//     const url1=url
// //const url1=`http://localhost:5173/singleStory/${url}`
//   console.log(url1)
//   const response = await axios.get('https://social-media-cuevette.onrender.com/story/handleDownload',{url1} ,{
    
//     headers:{
//       Authorization:`Bearer ${token}`
//     }
// });
// console.log(response)
// if (response.ok){
//   const blob = await response.blob(); // Get the file as a blob
//   const url = window.URL.createObjectURL(blob); // Create a URL for the blob
//   const link = document.createElement('a'); // Create a link element
//   link.style.display = 'none';
//   link.href = url;
//   link.download = 'downloadedFile.txt'; // Specify the file name
//   document.body.appendChild(link);
//   link.click(); // Programmatically click the link to trigger the download
//   window.URL.revokeObjectURL(url);
// }else {
//   toast.error("Failed to download file")
//   console.error('Failed to download file');
// }
//   }catch(error){
//     console.log(error)
//   } 
   
if (!url) {
  toast.error("No image URL available for download.");
  return;
}

try {
  setIsDownloading(true);

  // Fetch the image as a blob
  const response = await fetch(url, {
    mode: "cors", // Ensure the request allows CORS
  });
console.log(response)
  // If the response is not ok, handle the error
  if (!response.ok) {
    throw new Error("Failed to fetch the image.");
  }

  const blob = await response.blob();
  const blobUrl = URL.createObjectURL(blob);

  // Create a download link
  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = url.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Cleanup the blob URL
  URL.revokeObjectURL(blobUrl);

  toast.success("Download successfully.");
  setIsDownloading(false);
  setInitilDownload("downloaded")
} catch (error) {
  console.error("Error downloading the image:", error);
  toast.error("Failed to download the image.");
  setIsDownloading(false);
}

}

  
  // let interval;
  // function startTimer(){
  //   if(time!==0){


  //     setTimer(time)
  //      interval=setInterval(()=>{
  //             setTimer((cT)=>
  //             {
  //                 if(cT==0){
  //                     // setDisabledButton(true)
  //                     clearInterval(interval);
  //                     return 0
  //                 }
  //                 return cT-1
  //             })
  //             },1000)
  //         }    
  //     }
  // console.log(timer)
  // useEffect(()=>
  //   {
  //       startTimer();
  //       return()=>{
  //           clearInterval(interval)
  //       }

  //   },[currentIndex])

  //   useEffect(()=>{
  //     if(time!=0){
  //         if( timer===0 ){
  //             if(currentIndex!==length-1){

  //                     setCurrentIndex((prev)=>prev+1)

  //             } else{

  //                 clearInterval(interval)
  //                 dispatch(setIsViewStoryOpen(false))

  //             }
  //         }   
  //     }
  //   },[timer])





  useEffect(() => {
    getSingleStory()
    if (isAuthenticated) {
      dispatch(fetchUser())
    }

  }, [currentIndex + 1])

  useEffect(() => {
    handleSlides()
  }, [myIds])

 

  console.log(currentBookmarks)
  return (
    <>


      <section className='view-story-section'>



        {/* {                
                 <h1 onClick={()=>handleClose()}>X</h1> } */}
        <button type="button" className="common-arrow-button-back"
          onClick={() => handlePrevSlide()} disabled={currentIndex == 0}>
          <IoIosArrowBack className={`${currentIndex == 0 ? "back-icon" : "back-icon-active "}`} /></button>

        <button type="button" className="common-arrow-button-forward"
          onClick={() => handleNextSlide()} disabled={currentIndex == (singleStory?.slidesInStory?.length - 1)}>
          <IoIosArrowForward className={`${currentIndex == singleStory?.slidesInStory?.length - 1 ? "forward-icon" : "forward-icon-active "}`} /></button>

        {imageUrlTrue == "image" && (<div className='view-story-form'

          style={{
            backgroundImage: `url(${imageOrVideoUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: "20rem 25rem"
          }}>
          <div className='first-div'>
            {length == 3 && <div className='view-story-div-dash-3'>
              {length == 3 && singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (

                  <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>___</h1>

                )

              })
              }
            </div>}
            {length == 4 && <div className='view-story-div-dash-4'>
              {length == 4 && singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (

                  <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>



                )

              })
              }
            </div>}
            {length == 6 && <div className='view-story-div-dash-6'>
              {singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (
                  <>
                    <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>

                  </>

                )

              })
              }
            </div>}
            {length == 5 && <div className='view-story-div-dash-5'>
              {singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (
                  <>
                    <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>

                  </>

                )

              })
              }
            </div>}

            <div className='view-story-div-heading'>
              <span onClick={() => handleViewStoryClose()}>X</span>
              <span onClick={() => handleShareStory()}><FiSend /></span>
            </div>
          </div>
          <div></div>

          <div className='second-div'>
            <div className=' view-story-content-heading'>
              {heading}
            </div>
              <div className=' view-story-content-description'>
            {viewMore ? (

              <div className='view-story-content-description-content'>

              {description}
            </div >) : (
              <>
                
                  <div className='view-story-content-description-content'>
                    {description.substring(0, 15)}
                  </div>

                
              </>
            )}
             {description.length > 20 &&
              <div className=' view-story-content-description-more-button' onClick={() => setViewMore(!viewMore)}>
                {viewMore ? "...Less" : ".....More"}
              </div>}
            </div>


           

            <div className='view-story-div-bookmark-like' >

              <div className='view-story-div-bookmark-like-first'>

                <button type="button" onClick={() => handleBookmarkIcon(slideId)}>
                  <CiBookmark className={`  ${currentBookmarks.includes(slideId) || user.bookmarks?.includes(slideId)
                    ? "bookmark-icon-active" : "bookmark-icon"}`} />
                </button>
              </div>

              {initialDownload=="not-downloaded"&& <button className="download-icon"
              onClick={()=>handleDownload1(imageOrVideoUrl)}>
                <FaArrowAltCircleDown  className='d-icon'/>
              </button>}

              {initialDownload=="downloaded"&& <button className="download-over-icon"
              onClick={()=>handleDownload1(imageOrVideoUrl)}>
               <TiTick className='d-icon'/>
              </button>}
              <div className='view-story-div-bookmark-like-second'>
                {<button type="button" onClick={() => handleLikeIcon(slideId)}>
                  <CiHeart className={`  ${hasLiked.includes(slideId) || user.likes?.includes(slideId) ? "icon-active" : "icon"}`}
                  />
                </button>}


                <span className='liked-slides-count'>{likedSlidesCount}</span>
              </div>


            </div>
          </div>
        </div>)}

        {imageUrlTrue == "video" && (<div className='view-story-form-1'>
          <video className='video-1' loop autoplay ref={videoRef1} >
            <source src={imageOrVideoUrl} />
          </video>

          <div className='first-div-1'>
            {length == 3 && <div className='view-story-div-dash-3'>
              {length == 3 && singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (

                  <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>___</h1>



                )

              })
              }
            </div>}
            {length == 4 && <div className='view-story-div-dash-4'>
              {length == 4 && singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (

                  <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>



                )

              })
              }
            </div>}
            {length == 6 && <div className='view-story-div-dash-6'>
              {singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (
                  <>
                    <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>

                  </>

                )

              })
              }
            </div>}
            {length == 5 && <div className='view-story-div-dash-5'>
              {singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (
                  <>
                    <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>

                  </>

                )

              })
              }
            </div>}

            <div className='view-story-div-heading'>
              <span onClick={() => handleViewStoryClose()}>X</span>
              <span onClick={() => handleShareStory()}><FiSend /></span>
            </div>
          </div>


          <div className='second-div-1'>
            <div className=' view-story-content-heading-1'>
              {heading}
            </div>
            <div className=' view-story-content-description-1'>
            {viewMore ? (

              <div className='view-story-content-description-content-1'>

              {description}
            </div >) : (
              <>
                
                  <div className='view-story-content-description-content-1'>
                    {description.substring(0, 15)}
                  </div>

                
              </>
            )}
             {description.length > 20 &&
              <div className=' view-story-content-description-more-button-1' onClick={() => setViewMore(!viewMore)}>
                {viewMore ? "...Less" : ".....More"}
              </div>}
            </div>



            <div className='view-story-div-bookmark-like-1' >

              <div className='view-story-div-bookmark-like-first'>

              <button type="button" onClick={() => handleBookmarkIcon(slideId)}>
                  <CiBookmark className={`  ${currentBookmarks.includes(slideId) || user.bookmarks?.includes(slideId)
                    ? "bookmark-icon-active" : "bookmark-icon"}`} />
                </button>
              </div>

              <div className='view-story-div-bookmark-like-second'>
               
              {<button type="button" onClick={() => handleLikeIcon(slideId)}>
                  <CiHeart className={`  ${hasLiked.includes(slideId) || user.likes?.includes(slideId) ? "icon-active" : "icon"}`}
                  />
                </button>}

                <span className='liked-slides-count'>{likedSlidesCount}</span>
              </div>


            </div>
          </div>
        </div>)}

        {imageUrlTrue == "image" && <div className='view-story-form-responsive-1'>

          <img src={`${imageOrVideoUrl}`} className='view-story-image' />
          <div className='first-div-1'>
            {length == 3 && <div className='view-story-div-dash-3'>
              {length == 3 && singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (

                  <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>___</h1>



                )

              })
              }
            </div>}
            {length == 4 && <div className='view-story-div-dash-4'>
              {length == 4 && singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (

                  <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>



                )

              })
              }
            </div>}
            {length == 6 && <div className='view-story-div-dash-6'>
              {singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (
                  <>
                    <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>

                  </>

                )

              })
              }
            </div>}
            {length == 5 && <div className='view-story-div-dash-5'>
              {singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (
                  <>
                    <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>

                  </>

                )

              })
              }
            </div>}
            <div className='view-story-div-heading'>
              <span onClick={() => handleViewStoryClose()}>X</span>
              <span onClick={() => handleShareStory()}><FiSend /></span>
            </div>
          </div>
          <div></div>
          <div className='second-div-1'>
            <div className=' view-story-content-heading-1'>
              {heading}
            </div>
            <div className=' view-story-content-description-1'>
            {viewMore ? (

              <div className='view-story-content-description-content-1'>

              {description}
            </div >) : (
              <>
                
                  <div className='view-story-content-description-content-1'>
                    {description.substring(0, 15)}
                  </div>

                
              </>
            )}
             {description.length > 20 &&
              <div className=' view-story-content-description-more-button-1' onClick={() => setViewMore(!viewMore)}>
                {viewMore ? "...Less" : ".....More"}
              </div>}
            </div>

            <div className='view-story-div-bookmark-like-1' >

              <div className='view-story-div-bookmark-like-first'>

                <button type="button"   className={`  ${currentBookmarks.includes(slideId) || user.bookmarks?.includes(slideId)
                      ? "bookmark-icon-active" : "bookmark-icon"}`}
                onClick={() => handleBookmarkIcon()}>
                  <CiBookmark className='b-icon'

                   />
                </button>

              </div>

              {initialDownload=="not-downloaded"&& <button className="download-icon"
              onClick={()=>handleDownload1(imageOrVideoUrl)}>
                <FaArrowAltCircleDown  className='d-icon'/>
              </button>}

              {initialDownload=="downloaded"&& <button className="download-over-icon"
              onClick={()=>handleDownload1(imageOrVideoUrl)}>
               <TiTick className='d-icon'/>
              </button>}
              <div className='view-story-div-bookmark-like-second'>
                {<button type="button" className={`  ${hasLiked.includes(slideId) || user.likes?.includes(slideId) ? "icon-active" : "icon"}`}
                 onClick={() => handleLikeIcon(slideId)}>
                  <CiHeart className='l-icon'
                  />
                </button>}


                <span className='liked-slides-count'>{likedSlidesCount}</span>
              </div>


            </div>

          </div>
        </div>}
        {imageUrlTrue == "video" && (<div className='view-story-form-responsive-1'>
          <video className='video-responsive-1' loop autoPlay ref={videoRef}   >
            <source src={imageOrVideoUrl} />
          </video>

          <div className='first-div-1'>
            {length == 3 && <div className='view-story-div-dash-3'>
              {length == 3 && singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (

                  <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>___</h1>



                )

              })
              }
            </div>}
            {length == 4 && <div className='view-story-div-dash-4'>
              {length == 4 && singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (

                  <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>



                )

              })
              }
            </div>}
            {length == 6 && <div className='view-story-div-dash-6'>
              {singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (
                  <>
                    <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>

                  </>

                )

              })
              }
            </div>}
            {length == 5 && <div className='view-story-div-dash-5'>
              {singleStory && singleStory?.slidesInStory?.map((curStory, index) => {
                return (
                  <>
                    <h1 key={index} className={`${currentIndex + 1 == curStory.id1 ? "dash-active" : "dash "}`}>____</h1>

                  </>

                )

              })
              }
            </div>}

            <div className='view-story-div-heading'>
              <span onClick={() => handleViewStoryClose()}>X</span>
              <span onClick={() => handleShareStory()}><FiSend /></span>
            </div>
          </div>


          <div className='second-div-1'>
            <div className=' view-story-content-heading-1'>
              {heading}
            </div>
            <div className=' view-story-content-description-1'>
            {viewMore ? (

              <div className='view-story-content-description-content-1'>

              {description}
            </div >) : (
              <>
                
                  <div className='view-story-content-description-content-1'>
                    {description.substring(0, 15)}
                  </div>

                
              </>
            )}
             {description.length > 20 &&
              <div className=' view-story-content-description-more-button-1' onClick={() => setViewMore(!viewMore)}>
                {viewMore ? "...Less" : ".....More"}
              </div>}
            </div>

            <div className='view-story-div-bookmark-like-1' >

              <div className='view-story-div-bookmark-like-first'>

                <button type="button"    className={`  ${currentBookmarks.includes(slideId) || user.bookmarks?.includes(slideId)
                      ? "bookmark-icon-active" : "bookmark-icon"}`}  
                onClick={() => handleBookmarkIcon()}>
                  <CiBookmark  className='b-icon'
                 />
                </button>
              </div>
              {initialDownload=="not-downloaded"&& <button className="download-icon"
              onClick={()=>handleDownload1(imageOrVideoUrl)}>
                <FaArrowAltCircleDown  className='d-icon'/>
              </button>}

              {initialDownload=="downloaded"&& <button className="download-over-icon"
              onClick={()=>handleDownload1(imageOrVideoUrl)}>
               <TiTick className='d-icon'/>
              </button>}
              <div className='view-story-div-bookmark-like-second'>
                {<button type="button" className={`  ${hasLiked.includes(slideId) || user.likes?.includes(slideId) ? "icon-active" : "icon"}`}
                 onClick={() => handleLikeIcon(slideId)}>
                  <CiHeart  className='l-icon'
                  />
                </button>}


                <span className='liked-slides-count'>{likedSlidesCount}</span>
              </div>


            </div>
          </div>
        </div>)}


      </section>
    </>
  )
}
{/*              
                  
                  {myIds==2&&<button  type="button" onClick={()=>handleLikeIcon()}>
                  <CiHeart   className= {`  ${liked2==true?"icon-active":"icon"}`} 
               />
             
                  </button>}
                  {myIds==3&&<button  type="button" onClick={()=>handleLikeIcon()}>
                  <CiHeart   className= {`  ${liked3==true?"icon-active":"icon"}`} 
               />
             
                  </button>}

                  {myIds==4&&<button  type="button" onClick={()=>handleLikeIcon()}>
                  <CiHeart   className= {`  ${liked4==true?"icon-active":"icon"}`} 
               />
             
                  </button>}
                  {myIds==5&&<button  type="button" onClick={()=>handleLikeIcon()}>
                  <CiHeart   className= {`  ${liked5==true?"icon-active":"icon"}`} 
               />
             
                  </button>}
                  {myIds==6&&<button  type="button" onClick={()=>handleLikeIcon()}>
                  <CiHeart   className= {`  ${liked6==true?"icon-active":"icon"}`} 
               />
             
                  </button>} */}
