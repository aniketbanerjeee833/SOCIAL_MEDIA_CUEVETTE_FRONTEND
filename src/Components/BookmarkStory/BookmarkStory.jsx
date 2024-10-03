import React, { useEffect } from 'react'
import "./BookmarkStory.css"
import { useDispatch, useSelector } from 'react-redux'
import { bookmarkSingleSlide, setBookmarkSlideOpen } from '../../redux/slice/storySlice'
export default function BookmarkStory() {
    const{bookmarkStories,bookmarkStoryloading,user}=useSelector((state)=>state.user)
    const{story}=useSelector((state)=>state.story)
   
    console.log(bookmarkStories)
    const dispatch=useDispatch()

    let curUser=user;
    let Stories=story
    let storiesBookmarked=[];
    let slidesBookmarked=[]
    console.log(curUser,Stories)
//     function filterStories(){
//       for(let i=0;i<curUser.bookmarks.length;i++)
//         {

//          storiesBookmarked=Stories.map((curStory)=>
//           {

//          return  curStory.slidesInStory.filter((curSlide)=>curSlide)
//           })
//           //console.log(storiesBookmarked) 

//       }
    
//    console.log(storiesBookmarked) 
   
//     // for(let i=0;i<1;i++)
//     //   {

//     //    storiesBookmarked?.map((curSlide)=>
//     //     {
        

//     //       if(curSlide._id==curUser.bookmarks[i].toString()){
//     //         slidesBookmarked.push(curSlide)
//     //       }
//     //   //     console.log(curSlide,curUser.bookmarks[i])
//     //   //  return  curSlide[i]._id === curUser.bookmarks[i]
//     //     })
//     //     console.log(slidesBookmarked) 

//     // }
//     // console.log(curUser.bookmarks)
//     // slidesBookmarked = storiesBookmarked.filter((obj,index) => 
//     // {
//     //   console.log(obj)
//     //  return  obj._id=="66f8776edf975f96e4d16f17"
//     // })
//     //  slidesBookmarked=storiesBookmarked[1].map((curSlide)=>curSlide=="66f8776edf975f96e4d16f17")
  
// console.log(slidesBookmarked)
  
//    }
  
    console.log(storiesBookmarked,slidesBookmarked)
// useEffect(()=>
// {
// filterStories()
// },[])
const handleBookmarkSlideOpen=(slideId)=>
{
  dispatch(bookmarkSingleSlide(slideId))
  dispatch(setBookmarkSlideOpen(true))

}

  return (
    <section className='bookmark-story-section'>
        <div className='bookmark-story-heading'>
      <h1>Your Bookmarks</h1>
        </div>
        {bookmarkStoryloading && <div>
            <h1>Loading...</h1>
        </div>}
        <div className='bookmark-story-div'>
           {bookmarkStories?.map((curStory,index)=>
        {
            return(
                <>
                 {curStory.imageUrl=="image"&&(<div className=' bookmark-story-div-cards'
                  key={index} onClick={()=>handleBookmarkSlideOpen(curStory._id)}
                        style={{ backgroundImage: `url(${curStory.imageOrVideoUrl})` ,
                        backgroundRepeat: 'no-repeat', backgroundSize:"400px 300px"}}>
                   
                  

              {curStory.heading.length>15?(<div className=' bookmark-story-div-cards-heading'>
                   {curStory.heading.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' bookmark-story-div-cards-heading'>
                   {curStory.heading}
                   </div>
                    </>
                   )}
                  
                      {curStory.description.length>15?(<div className=' bookmark-story-div-cards-description'>
                   {curStory.description.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' bookmark-story-div-cards-description'>
                   {curStory.description}
                   </div>
                    </>
                   )}
                   
                    </div>)}
                         {curStory.imageUrl=="video"&&(
                          <div className='middle-home-section-content-div-everything'key={index}
                          onClick={()=>handleBookmarkSlideOpen(curStory._id)}  >
                      <video  className='video' autoPlay loop muted>
                      <source src={`${curStory.imageOrVideoUrl}`}
                   
                      />
                      </video>

                      {/* <img src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}  className='view-middle-home-section-image'
                    onClick={()=>viewStory(curStory._id,curStory.slidesInStory[0]._id,
                curStory.slidesInStory[0].id1)} /> */}
                 <div className=' middle-home-section-content-div'  >
                        {/* // style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` , */}
                        {/* // backgroundRepeat: 'no-repeat', backgroundSize:"200px 250px"}}> */}
                   
                   {curStory.heading.length>10?(<div className=' middle-home-section-content-div-heading'>
                   {curStory.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-heading'>
                   {curStory.heading}
                   </div>
                    </>
                   )}
                 
                 {curStory.description?.length>15?(<div className=' middle-home-section-content-div-description'>
                   {curStory.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-description'>
                   {curStory.description}
                   </div>
                    </>
              )}
                   

                  
                 
                 </div>  
                </div>     
             
                )}
              </>
            )
        })}
        </div>
    </section>
   
  )
}
