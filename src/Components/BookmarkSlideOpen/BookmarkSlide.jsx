import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CiHeart } from "react-icons/ci"
import { setBookmarkSlideOpen } from '../../redux/slice/storySlice'
import "./BookmarkSlide.css"
export default function BookmarkSlide() {
    const { hasLiked, bookmarkSingleSlide } = useSelector((state) => state.story)
    const { likedSlidesCount, } = useSelector((state) => state.user)
    const [viewMore, setViewMore] = useState(false)
    const dispatch = useDispatch()
    console.log(bookmarkSingleSlide)
    const handleBookmarkSlideClose = () => {
        dispatch(setBookmarkSlideOpen(false))
    }
    return (
        <section className='bookmark-slide-display-section'>
            
            {bookmarkSingleSlide[0]?.imageUrl=="image"&&(<div className='bookmark-slide-display-div' 
                
                style={{ backgroundImage: `url(${bookmarkSingleSlide[0]?.imageOrVideoUrl
                })` , backgroundRepeat: 'no-repeat', backgroundSize:"20rem 40rem"
                }}>
                <div className='bookmark-story-div-heading'>
                    <span onClick={() => handleBookmarkSlideClose()}>X</span>

                </div>

                {/* <div></div> */}

                <div className='bookmark-second-div'>
                    <div className=' bookmark-story-content-heading'>
                        {bookmarkSingleSlide[0].heading}
                    </div>
                    {viewMore ? (<div className=' bookmark-story-content-description'>

                        {bookmarkSingleSlide[0].description}
                    </div>) : (
                        <>
                            {<div className=' bookmark-story-content-description'>
                                <span>
                                    {bookmarkSingleSlide[0].description.substring(0, 15)}
                                </span>

                            </div>}
                        </>
                    )}


                    {bookmarkSingleSlide[0].description.length > 20 &&
                        <div className=' bookmark-story-content-description-1' onClick={() => setViewMore(!viewMore)}>
                            {viewMore ? "...Less" : ".....More"}
                        </div>}

                    
                </div>
                </div>)} 

                {bookmarkSingleSlide[0]?.imageUrl=="video"&&(
                    <div className='bookmark-slide-display-div' >
                <video  className='video-1' autoPlay>
                <source src={bookmarkSingleSlide[0]?.imageOrVideoUrl} />             
              </video>
               
                  
                 
                 
               

                  <div className='bookmark-story-div-heading'>
                  <span onClick={()=>handleBookmarkSlideClose()}>X</span>
                
                  </div>
                  
                 
                  
               <div className='bookmark-second-div'>
               <div className=' bookmark-story-content-heading'>
                   {bookmarkSingleSlide[0].heading}
                   </div>
                   {viewMore?(<div className=' bookmark-story-content-description'>

                    {bookmarkSingleSlide[0].description}
                    </div>):(
                    <>
            {<div className=' bookmark-story-content-description'>
              <span>
              {bookmarkSingleSlide[0].description.substring(0,15)}
                </span>
           
              </div>}
              </>
                    )}
                 

                    {bookmarkSingleSlide[0].description.length>20&&
                    <div className=' bookmark-story-content-description' onClick={()=>setViewMore(!viewMore)}>
               {viewMore ? "...Less" : ".....More"}
                    </div>}

                 
            </div>
            </div>)}

            
        </section>
    )
}
