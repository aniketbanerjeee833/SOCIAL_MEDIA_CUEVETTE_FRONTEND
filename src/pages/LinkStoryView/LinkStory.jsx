
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../../Components/ViewStory/ViewStory.css"

//import {  bookmarkStory, getAllMyStories, likeOrDislikeStory, setIsViewStoryOpen, setLiked } from '../../redux/slice/storySlice'
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci"
import { FiSend } from "react-icons/fi";
import axios from 'axios'
// import{ like }from "../../assets/like.png"
import { toast } from 'react-toastify';
import { GoDash } from "react-icons/go";

import '../../index.css';
import {  getAllMyStories, likeOrDislikeStory, setIsViewStoryOpen } from '../../redux/slice/storySlice'
import { getLikesCount, setCurrentState, setIsLogin, setRedirectToLogin } from '../../redux/slice/userSlice'
import { useNavigate, useParams } from 'react-router-dom'

//import { getLikesCount, setCurrentState, setIsLogin, setLinkStoryOpen, setRedirectToLogin } from '../../redux/slice/userSlice';

export default function LinkStory() {
    const token=JSON.parse(localStorage.getItem("APP-TOKEN"))
      const{isViewStoryOpen,liked,hasLiked}=useSelector((state)=>state.story)
      const{likedSlidesCount,user,isAuthenticated}=useSelector((state)=>state.user)
      //console.log(isViewStoryOpen,singleStoryId)
  
      const[singleStory,setSingleStory]=useState([])
      const[slides,setSlides]=useState("")
      const[imageOrVideoUrl,setImageorVideoUrl]=useState("")
      const [currentIndex, setCurrentIndex] = useState(0)
      const[imageUrlTrue,setImageUrlTrue]=useState("")
      const[heading,setHeading]=useState("")
      const[description,setDescription]=useState("")
      const[length,setLength]=useState("")
      const[id,setId]=useState("")
      const[slideId,setSlideId]=useState("")
      const[myIds,setMyIds]=useState("")
      let time=5
  
      const[timer,setTimer]=useState(time)
     const[viewMore,setViewMore]=useState(false)
  
      const dispatch=useDispatch()
      const navigate=useNavigate()

      const a = useParams()

      console.log(a,currentIndex)
      const singleStoryId=a.id
   
    console.log(currentIndex)
   
     const getSingleStory = async()=> {
          console.log(singleStoryId)
         
          try {
            const response = await axios.get(`http://localhost:5000/api/v1/story/singleStory/${singleStoryId}` );
            //console.log(response);
      
            setSingleStory(response.data.singleStory)
            setId(response.data.singleStory._id)
            setLength(response.data.singleStory.slidesInStory.length)
            setSlides(response.data.singleStory.slidesInStory[currentIndex])
           setImageorVideoUrl(response.data.singleStory.slidesInStory[currentIndex].imageOrVideoUrl)
           setHeading(response.data.singleStory.slidesInStory[currentIndex].heading)
           setDescription(response.data.singleStory.slidesInStory[currentIndex].description)
           setSlideId(response.data.singleStory.slidesInStory[currentIndex]._id)
           setMyIds(response.data.singleStory.slidesInStory[currentIndex].id1)
           setImageUrlTrue(response.data.singleStory.slidesInStory[currentIndex].imageUrl)
          
          } catch (error) {
           console.log(error)
          }
          };
  
          //console.log(slides,slideId,likedSlidesCount,id,myIds,singleStory,hasLiked)
      
          const handleViewStoryClose=()=>
            {
              
              //dispatch(setIsViewStoryOpen(false))
                navigate("/")
              dispatch(getAllMyStories())
             
            }
          const handleNextSlide=()=>
          {
            console.log(id,slideId)
            //dispatch(getLikesCount(id,slideId))
  
              setCurrentIndex((prev)=>prev+1)
             
          }
          const handlePrevSlide=(id,slideId)=>
              {
                  setCurrentIndex((prev)=>prev-1)
                  //dispatch(getLikesCount(id,slideId))
              }
  
             
               
             
             
             
             
  
                
              
              const handleSlides=()=>
              {
                
                dispatch(getLikesCount(id,slideId))
                
              }
            
                  
                //  const handleShareStory=()=>
                // {
                //   console.log(singleStoryId)
                //   // navigator.clipboard.writeText(`http://localhost:5173/singleStory/${singleStoryId}`)
                //   // toast.success("link Copied to clipboard")
                //   //dispatch(setLinkStoryOpen(true))
                // }
                
                let interval;
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
  


                
                useEffect(()=>
                    {
                        let curIndex=Number(a.currentIndex)
                        setCurrentIndex(curIndex)
                    },[])
          useEffect(() => {
              getSingleStory()
              
          }, [currentIndex + 1])
      
           useEffect(()=>{
           handleSlides()
           },[myIds ])
  
          console.log(currentIndex,length)
    return (
      <>
     
  
          <section className='view-story-section'>
        
            
                  
  {/* {                
                   <h1 onClick={()=>handleClose()}>X</h1> } */}
          <button type="button"  className="common-arrow-button-back"
           onClick={()=>handlePrevSlide()} disabled={currentIndex == 0}>
            <IoIosArrowBack  className= {`${currentIndex==0?"back-icon":"back-icon-active "}`} /></button>
  
          <button type="button"  className="common-arrow-button-forward" 
          onClick={()=>handleNextSlide()} disabled={currentIndex == (singleStory?.slidesInStory?.length - 1)}>
          <IoIosArrowForward  className= {`${currentIndex==singleStory?.slidesInStory?.length - 1?"forward-icon":"forward-icon-active "}`}/></button>   
        
                  {imageUrlTrue=="image"&&(<div className='view-story-form' 
                  
                  style={{ backgroundImage: `url(${imageOrVideoUrl})` , backgroundRepeat: 'no-repeat', backgroundSize:"20rem 25rem"
                  }}>
                     <div className='first-div'>
                     {length==3&& <div className='view-story-div-dash-3'>
                    {length==3 && singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                  {
                    return(
                      
                        <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>___</h1>
  
                      
                    
                    )
                   
                  })
                }
                    </div>}
                    {length==4&& <div className='view-story-div-dash-4'>
                    {length==4 && singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                  {
                    return(
                      
                        <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>
  
                      
                    
                    )
                   
                  })
                }
                    </div>}
                    {length==6 &&<div className='view-story-div-dash-6'>
                    {singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                  {
                    return(
                      <>
                        <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>
  
                      </>
                    
                    )
                   
                  })
                  }
                    </div>}
                    {length==5 &&<div className='view-story-div-dash-5'>
                    {singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                  {
                    return(
                      <>
                        <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>
  
                      </>
                    
                    )
                   
                  })
                  }
                    </div>}
                    <div className='view-story-div-heading'>
                    <span onClick={()=>handleViewStoryClose()}>X</span>
                    
                    </div>
                    </div>
                    <div></div>
                 <div className='second-div'>
                  <div className=' view-story-content-heading'>
                     {heading}
                     </div>
                     {viewMore?(<div className=' view-story-content-description'>
  
                   {description}
                      </div>):(
                      <>
              {<div className=' view-story-content-description'>
                <span>
                {description.substring(0,15)}
                  </span>
             
                </div>}
                </>
                      )}
                   
  
                      {description.length>20&&
                      <div className=' view-story-content-description' onClick={()=>setViewMore(!viewMore)}>
                 {viewMore ? "...Less" : ".....More"}
                      </div>}
  
                    
              </div>
              </div>)}
             
              {imageUrlTrue=="video"&&(<div className='view-story-form-1'> 
                <video  className='video-1' autoPlay>
                <source src={imageOrVideoUrl} />             
              </video>
               
                   <div className='first-div-1'>
                   {length==3&& <div className='view-story-div-dash-3'>
                  {length==3 && singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>___</h1>

                    
                  
                  )
                 
                })
              }
                  </div>}
                  {length==4&& <div className='view-story-div-dash-4'>
                  {length==4 && singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>

                    
                  
                  )
                 
                })
              }
                  </div>}
                  {length==6 &&<div className='view-story-div-dash-6'>
                  {singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    <>
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>

                    </>
                  
                  )
                 
                })
                }
                  </div>}
                  {length==5 &&<div className='view-story-div-dash-5'>
                  {singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    <>
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>

                    </>
                  
                  )
                 
                })
                }
                  </div>}

                  <div className='view-story-div-heading'>
                  <span onClick={()=>handleViewStoryClose()}>X</span>
                  <span onClick={()=>handleShareStory()}><FiSend /></span>
                  </div>
                  </div>
                 
                  
               <div className='second-div-1'>
                <div className=' view-story-content-heading-1'>
                   {heading}
                   </div>
                   {viewMore?(<div className=' view-story-content-description-1'>

                 {description}
                    </div>):(
                    <>
            {<div className=' view-story-content-description-1'>
              <span>
              {description.substring(0,15)}
                </span>
           
              </div>}
              </>
                    )}
                 

                    {description.length>20&&
                    <div className=' view-story-content-description-1' onClick={()=>setViewMore(!viewMore)}>
               {viewMore ? "...Less" : ".....More"}
                    </div>}

                 
            </div>
            </div>)}

            {imageUrlTrue=="image"&& <div className='view-story-form-responsive-1'>

           <img src={`${imageOrVideoUrl}`} className='view-story-image'/>
           <div className='first-div-1'>
                   {length==3&& <div className='view-story-div-dash-3'>
                  {length==3 && singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>___</h1>

                    
                  
                  )
                 
                })
              }
                  </div>}
                  {length==4&& <div className='view-story-div-dash-4'>
                  {length==4 && singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>

                    
                  
                  )
                 
                })
              }
                  </div>}
                  {length==6 &&<div className='view-story-div-dash-6'>
                  {singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    <>
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>

                    </>
                  
                  )
                 
                })
                }
                  </div>}
                  {length==5 &&<div className='view-story-div-dash-5'>
                  {singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    <>
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>

                    </>
                  
                  )
                 
                })
                }
                  </div>}
                  <div className='view-story-div-heading-1'>
                  <span onClick={()=>handleViewStoryClose()}>X</span>
                  <span onClick={()=>handleShareStory()}><FiSend /></span>
                  </div>
                  </div>
                  <div></div>
               <div className='second-div-1'>
                <div className=' view-story-content-heading-1'>
                   {heading}
                   </div>
                   {viewMore?(<div className=' view-story-content-description-1'>

                 {description}
                    </div>):(
                    <>
            {<div className=' view-story-content-description-1'>
              <span>
              {description.substring(0,15)}
                </span>
           
              </div>}
              </>
                    )}
                 

                    {description.length>20&&
                    <div className=' view-story-content-description-1' onClick={()=>setViewMore(!viewMore)}>
               {viewMore ? "...Less" : ".....More"}
                    </div>}

                
           
           </div>
           </div> } 
           {imageUrlTrue=="video"&&(<div className='view-story-form-responsive-1'> 
                <video className='video-responsive-1' autoPlay>
                <source src={imageOrVideoUrl} />             
              </video>
               
                   <div className='first-div-1'>
                   {length==3&& <div className='view-story-div-dash-3'>
                  {length==3 && singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>___</h1>

                    
                  
                  )
                 
                })
              }
                  </div>}
                  {length==4&& <div className='view-story-div-dash-4'>
                  {length==4 && singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>

                    
                  
                  )
                 
                })
              }
                  </div>}
                  {length==6 &&<div className='view-story-div-dash-6'>
                  {singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    <>
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>

                    </>
                  
                  )
                 
                })
                }
                  </div>}
                  {length==5 &&<div className='view-story-div-dash-5'>
                  {singleStory&&singleStory?.slidesInStory?.map((curStory,index)=>
                {
                  return(
                    <>
                      <h1 key={index} className= {`${currentIndex+1==curStory.id1?"dash-active":"dash "}`}>____</h1>

                    </>
                  
                  )
                 
                })
                }
                  </div>}

                  <div className='view-story-div-heading'>
                  <span onClick={()=>handleViewStoryClose()}>X</span>
                  <span onClick={()=>handleShareStory()}><FiSend /></span>
                  </div>
                  </div>
                 
                  
               <div className='second-div-1'>
                <div className=' view-story-content-heading-1'>
                   {heading}
                   </div>
                   {viewMore?(<div className=' view-story-content-description-1'>

                 {description}
                    </div>):(
                    <>
            {<div className=' view-story-content-description-1'>
              <span>
              {description.substring(0,15)}
                </span>
           
              </div>}
              </>
                    )}
                 

                    {description.length>20&&
                    <div className=' view-story-content-description-1' onClick={()=>setViewMore(!viewMore)}>
               {viewMore ? "...Less" : ".....More"}
                    </div>}

                 
            </div>
            </div>)}
           
              
            
      </section>
      </>
    )
  }
