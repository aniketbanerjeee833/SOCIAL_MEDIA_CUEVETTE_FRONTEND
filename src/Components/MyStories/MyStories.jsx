import React, { useEffect, useState } from 'react'
import "./MyStories.css"
import { useDispatch, useSelector } from 'react-redux'
import {  getSingleStoryId, setIsEditStoryOpen, setIsViewStoryOpen } from '../../redux/slice/storySlice';
import { BsPencilSquare } from "react-icons/bs"
import { getLikesCount } from '../../redux/slice/userSlice';

export default function MyStories() {
    const{story,isViewStoryOpen}=useSelector((state)=>state.story)
    const{user}=useSelector((state)=>state.user)
    const [viewAll, setViewAll] = useState(false);
    const[isImage,setIsImage]=useState(true)
    console.log(story)
    // console.log(isViewStoryOpen,user)
    const dispatch=useDispatch()

 
    const viewStory=(storyId,slideId,id1)=>
    {
        console.log(storyId,slideId)
        dispatch(getSingleStoryId(storyId))
        dispatch(setIsViewStoryOpen(true))
      if(id1==1){
        dispatch(getLikesCount(storyId,slideId))
      }
        
    }
    const handleEditSlide=(e,storyId)=>
    {
        e.stopPropagation()
        console.log(storyId)
        dispatch(getSingleStoryId(storyId))
        dispatch(setIsEditStoryOpen(true))
        dispatch(setIsViewStoryOpen(false))
    }
    console.log(isImage)

    // useEffect(()=>
    // {
    //   checkForImage(story?.slidesInStory[0].imageOrVideoUrl)
    // },[])
  return (
    <>
     <div className='middle-home-section-heading'>
     <h1>Your Stories</h1>
     </div>
     
    
        <div className='middle-home-section-content'>
        
        {viewAll?(story&&story.map((curStory,index)=>       
        {
          
            return(
              <>
             {curStory.slidesInStory[0]?.imageUrl=="image"&&(<div className='middle-home-section-content-div-everything'
             key={curStory._id} >
             
              <img src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}  className='view-middle-home-section-image'
               onClick={()=>viewStory(curStory._id,curStory.slidesInStory[0]._id,
                curStory.slidesInStory[0].id1)} />
                 <div className=' middle-home-section-content-div'  >
                        {/* // style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` , */}
                        {/* // backgroundRepeat: 'no-repeat', backgroundSize:"200px 250px"}}> */}
                   
                   {curStory.slidesInStory[0]?.heading.length>10?(<div className=' middle-home-section-content-div-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                 
                 {curStory.slidesInStory[0]?.description?.length>15?(<div className=' middle-home-section-content-div-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    
                    <div className=' middle-home-section-content-div-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    
                   )}
                   

                    {Object.keys(user).length!==0 &&<div className='edit-button-div-1'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>
                 Edit </button>
                 </div>}

                    </div>
                  
                    </div>)}

                    {curStory.slidesInStory[0]?.imageUrl==="video"&&
                    (<div className='middle-home-section-content-div-everything' 
                      onClick={()=>viewStory(curStory._id,curStory.slidesInStory[0]._id, curStory.slidesInStory[0].id1)} 
                    key={curStory._id} >
                      <video  className='video' autoPlay loop muted>
                      <source src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}
                     
                      />
                      </video>

                      {/* <img src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}  className='view-middle-home-section-image'
                    onClick={()=>viewStory(curStory._id,curStory.slidesInStory[0]._id,
                curStory.slidesInStory[0].id1)} /> */}
                 <div className=' middle-home-section-content-div'  >
                        {/* // style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` , */}
                        {/* // backgroundRepeat: 'no-repeat', backgroundSize:"200px 250px"}}> */}
                   
                   {curStory.slidesInStory[0]?.heading.length>10?(<div className=' middle-home-section-content-div-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                 
                 {curStory.slidesInStory[0]?.description?.length>15?(<div className=' middle-home-section-content-div-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
              )}
                   

                    {Object.keys(user).length!==0 &&<div className='edit-button-div-1'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>
                 Edit </button>
                 </div>}
                 
                 </div>  
                </div>     
             
                )}
             
                          
          </>
        )}

        )):(story&&story.slice(0,4).map((curStory,index)=>
        
                {
                   
                  
                    return(
                      <>
                      {curStory.slidesInStory[0]?.imageUrl=="image"&&<div className='middle-home-section-content-div-everything' key={curStory._id}>
                     
                      <img src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}  
                      onClick={()=>viewStory(curStory._id,curStory.slidesInStory[0]._id,curStory.slidesInStory[0].id1)}
                      className='view-middle-home-section-image' media="(min-width: 500px)" />

                        <div className=' middle-home-section-content-div' key={index} > 
                        {/* // style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` , */}
                        {/* // backgroundRepeat: 'no-repeat', backgroundSize:"200px 250px"}}> */}
                        {/* <div className='middle-home-section-content-div-image'>
                       
                       
                        <img src= {curStory.slidesInStory[0].imageOrVideoUrl} alt="image"/>
                        </div> */}
                       
                    
                    
                  
                
                   {curStory?.slidesInStory[0]?.heading?.length>10?(<div className=' middle-home-section-content-div-heading'>
                   {curStory?.slidesInStory[0]?.heading?.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-heading'>
                   {curStory?.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                 
                 {curStory?.slidesInStory[0]?.description?.length>15?(<div className=' middle-home-section-content-div-description'>
                   {curStory?.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-description'>
                   {curStory?.slidesInStory[0]?.description}
                   </div>
                    </>
                   )}
                 {Object.keys(user).length!==0 && <div className='edit-button-div-1'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>Edit </button>
                 </div>}

               
                        </div>
                       
                        </div>}
                        {curStory.slidesInStory[0]?.imageUrl=="video"&&(
                          <div className='middle-home-section-content-div-everything'key={index}
                          onClick={()=>viewStory(curStory._id,curStory.slidesInStory[0]._id, curStory.slidesInStory[0].id1)}  >
                      <video  className='video' autoPlay loop muted>
                      <source src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}
                   
                      />
                      </video>

                      {/* <img src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}  className='view-middle-home-section-image'
                    onClick={()=>viewStory(curStory._id,curStory.slidesInStory[0]._id,
                curStory.slidesInStory[0].id1)} /> */}
                 <div className=' middle-home-section-content-div'  >
                        {/* // style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` , */}
                        {/* // backgroundRepeat: 'no-repeat', backgroundSize:"200px 250px"}}> */}
                   
                   {curStory.slidesInStory[0]?.heading.length>10?(<div className=' middle-home-section-content-div-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                 
                 {curStory.slidesInStory[0]?.description?.length>15?(<div className=' middle-home-section-content-div-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
              )}
                   

                    {Object.keys(user).length!==0 &&<div className='edit-button-div-1'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>
                 Edit </button>
                 </div>}
                 
                 </div>  
                </div>     
             
                )}
                        </>  
                    ) 
            }))}
       
    </div>
    {story && story.length > 4 && (
                    <div className="see-more-content">
                        <button  onClick={() => setViewAll(!viewAll)}>
                            {viewAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}

     
    {/* {isImage==false &&<div className='middle-home-section-content'>
        
        {viewAll?(story&&story.map((curStory,index)=>
        
        {
          let a=checkForImage(curStory.slidesInStory[0]?.imageOrVideoUrl)
            return(
              <>
            {isImage==false && <div className='middle-home-section-content-div-everything'key={index} >
              <img 
              src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`} onClick={()=>viewStory(curStory._id,curStory.slidesInStory[0]._id,
                curStory.slidesInStory[0].id1)}
              className='view-middle-home-section-image'/>
                 <div className=' middle-home-section-content-div'  >
                        {/* // style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` , */}
                        {/* // backgroundRepeat: 'no-repeat', backgroundSize:"200px 250px"}}> */}
                   
                   {/* {curStory.slidesInStory[0]?.heading.length>10?(<div className=' middle-home-section-content-div-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                  */}
                 {/* {curStory.slidesInStory[0]?.description?.length>15?(<div className=' middle-home-section-content-div-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
                   )} */}
                   

                    {/* {Object.keys(user).length!==0 &&<div className='edit-button-div-1'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>
                 Edit </button>
                 </div>}

                    </div>
                    </div>}
                    </> */}
       
   
    </>
  
  )
}
