import React, { useEffect, useState } from 'react'
import"./StoriesByCategory.css"
import { useDispatch, useSelector } from 'react-redux'
import { getSingleStoryId, setIsEditStoryOpen, setIsViewStoryOpen } from '../../redux/slice/storySlice';
import { BsPencilSquare } from "react-icons/bs"

export default function StoriesByCategory() {
    const{storiesByCategory,categorySectionLoading,isCategorySectionOpen,categoryInStories,
        food,travel,movie,education, healthandfitness}=useSelector((state)=>state.story)
        
    const [viewAll, setViewAll] = useState(false);
    const{user}=useSelector((state)=>state.user)
    console.log(storiesByCategory,categoryInStories,food,travel,movie,education, healthandfitness)
    const dispatch=useDispatch()
   
    // let healthandfitness=[]



    const viewStory=(storyId)=>
        {
            console.log(storyId)
            dispatch(getSingleStoryId(storyId))
            dispatch(setIsViewStoryOpen(true))
        }
    const handleEditSlide=(e,storyId)=>
        {
            e.stopPropagation()
            console.log(storyId)
            dispatch(getSingleStoryId(storyId))
            dispatch(setIsEditStoryOpen(true))
            dispatch(setIsViewStoryOpen(false))
        }

        console.log(user,healthandfitness)
  return (
    <>
   
   <>
   {healthandfitness.length>0?(<div>


    <div className='bookmark-story-heading'>
      <h1>Top Stories about Health&Fitness</h1>
        </div>
        {categorySectionLoading && <div>
            <h1>Loading...</h1>
        </div>}
    <div className='category-home-story-section-div'>
     {viewAll?(healthandfitness&&healthandfitness.map((curStory,index)=>
        
        {
          
            return(
                <>
                {curStory.slidesInStory[0]?.imageUrl=="image"&&(<div className=' category-home-section-content-cards'  key={index} 
                onClick={()=>viewStory(curStory._id)}
                        style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` ,
                        backgroundRepeat: 'no-repeat', backgroundSize:"400px 300px"}}>
                   
                  
                   {curStory.slidesInStory[0]?.heading.length>10?(<div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' middle-home-section-content-div-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                     {curStory.slidesInStory[0]?.description?.length>15?(<div className='category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
                   )}
                    {user._id==curStory._id&&(<div className='edit-button-div'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>Edit </button>
                 </div>)}
                    </div>)}
                    {curStory.slidesInStory[0]?.imageUrl=="video"&&(
                        <div className='middle-home-section-content-div-everything'
                        key={index}  onClick={()=>viewStory(curStory._id)}>
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
                   

                    {Object.keys(user).length!==0 &&user._id==curStory._id&&<div className='edit-button-div-1'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>
                 Edit </button>
                 </div>}
                 
                 </div>  
                </div>     
             
                )}

                    </> 
            )
        })):(healthandfitness&&healthandfitness.slice(0,4).map((curStory,index)=>
        
                {
                  
                    return(
                        <>
                        {curStory.slidesInStory[0]?.imageUrl=="image"&&(<div className=' category-home-section-content-cards' key={index} onClick={()=>viewStory(curStory._id)}
                        style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` ,
                        backgroundRepeat: 'no-repeat', backgroundSize:"400px 300px"}}>
                        {/* <div className='middle-home-section-content-div-image'>
                       
                       
                        <img src= {curStory.slidesInStory[0].imageOrVideoUrl} alt="image"/>
                        </div> */}
                       
                    
                    
                       {curStory.slidesInStory[0]?.heading.length>10?(<div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                     {curStory.slidesInStory[0]?.description?.length>15?(<div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
                   )}
                   
                 
                 {user._id==curStory._id&&(<div className='edit-button-div'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>Edit </button>
                 </div>)}

               
                        </div>)}
                        {curStory.slidesInStory[0]?.imageUrl=="video"&&(
                            <div className='middle-home-section-content-div-everything'     onClick={()=>viewStory(curStory._id)}
                            key={index} >
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
                   

                    {Object.keys(user)?.length!==0 && user._id==curStory._id&&(<div className='edit-button-div-1'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>
                 Edit </button>
                 </div>)}
                 
                 </div>  
                </div>     
             
                        )}

                       </> 
                    ) 
            }))}
       
    </div>
    {healthandfitness && healthandfitness.length > 4 && (
                    <div className="see-more-content">
                        <button  onClick={() => setViewAll(!viewAll)}>
                            {viewAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
       </div>):(
(categoryInStories.includes("healthandfitness")||categoryInStories.includes("all"))&&
<div className='no-stories-div'>
<h1>Top stories about health&&fitness</h1>
<h1>No stories Available</h1>
</div>
       )}
</>


<>
{travel.length>0?(<div>
    <div className='bookmark-story-heading'>
      <h1>Top Stories about Travel</h1>
        </div>
        {categorySectionLoading && <div>
            <h1>Loading...</h1>
        </div>}
    <div className='category-home-story-section-div'>
     {viewAll?(travel&&travel.map((curStory,index)=>
        
        {
          
            return(
                <>
                {curStory.slidesInStory[0]?.imageUrl=="image"&&(<div className=' category-home-section-content-cards'  key={index} onClick={()=>viewStory(curStory._id)}
                        style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` ,
                        backgroundRepeat: 'no-repeat', backgroundSize:"400px 300px"}}>
                   
                   {curStory.slidesInStory[0]?.heading.length>10?(<div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className='category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                     {curStory.slidesInStory[0]?.description?.length>15?(<div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
                   )}
                   
                   {user._id==curStory._id&&(<div className='edit-button-div'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>Edit </button>
                 </div>)}
                    </div>
                
                    )}
                   {curStory.slidesInStory[0]?.imageUrl=="video"&&(
                    <div className='middle-home-section-content-div-everything'    onClick={()=>viewStory(curStory._id)}
                    key={index} >
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
                   

                    {Object.keys(user).length!==0 && user._id==curStory._id&&(<div className='edit-button-div-1'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>
                 Edit </button>
                 </div>)}
                 
                 </div>  
                </div>     
             
                    )}
            </>
            )
        })):(travel&&travel.slice(0,4).map((curStory,index)=>
        
                {
                  
                    return(
                        <>
                        {curStory.slidesInStory[0]?.imageUrl=="image"&&(<div className=' category-home-section-content-cards' key={index} onClick={()=>viewStory(curStory._id)}
                        style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` ,
                        backgroundRepeat: 'no-repeat', backgroundSize:"400px 300px"}}>
                        {/* <div className='middle-home-section-content-div-image'>
                       
                       
                        <img src= {curStory.slidesInStory[0].imageOrVideoUrl} alt="image"/>
                        </div> */}
                       
                    
                    
                  
                       {curStory.slidesInStory[0]?.heading.length>10?(<div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                     {curStory.slidesInStory[0]?.description?.length>15?(<div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
                   )}
                 {user._id==curStory._id&&(<div className='edit-button-div'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>Edit </button>
                 </div>)}

               
                        </div>)}
                        {curStory.slidesInStory[0]?.imageUrl=="video"&&(
                            <div className='middle-home-section-content-div-everything'key={index}
                            onClick={()=>viewStory(curStory._id)} >
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
                   

                    {Object.keys(user).length!==0 && user._id==curStory._id&&(<div className='edit-button-div-1'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>
                 Edit </button>
                 </div>)}
                 
                 </div>  
                </div>     
             
                )}
                        </>
                    ) 
            }))}
       
    </div>
    {travel && travel.length > 4 && (
                    <div className="see-more-content">
                        <button  onClick={() => setViewAll(!viewAll)}>
                            {viewAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
   </div>):
    ((categoryInStories.includes("travel")||categoryInStories.includes("all"))&&
    <div className='no-stories-div'>
        <h1>Top stories about travel</h1>
    <h1>No stories Available</h1>
    </div>
)}
   
</>
<>
{movie.length>0?(<div>
    <div className='bookmark-story-heading'>
      <h1>Top Stories about Movie</h1>
        </div>
        {categorySectionLoading && <div>
            <h1>Loading...</h1>
        </div>}
    <div className='category-home-story-section-div'>
     {viewAll?(movie&&movie.map((curStory,index)=>
        
        {
          
            return(
                <>
                 {curStory.slidesInStory[0]?.imageUrl=="image"&&(<div className=' category-home-section-content-cards'  key={index} onClick={()=>viewStory(curStory._id)}
                        style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` ,
                        backgroundRepeat: 'no-repeat', backgroundSize:"400px 300px"}}>
                   
                  
                   {curStory.slidesInStory[0]?.heading.length>10?(<div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                     {curStory.slidesInStory[0]?.description?.length>15?(<div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
                   )}
                   {user._id==curStory._id&&(<div className='edit-button-div'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>Edit </button>
                 </div>)}
                    </div>)}
                    {curStory.slidesInStory[0]?.imageUrl=="video"&&(
                          <div className='middle-home-section-content-div-everything'key={index}
                          onClick={()=>viewStory(curStory._id)} >
                    <video  className='video' autoPlay loop muted>
                    <source src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}
                 
                    />
                    </video>

                    
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
                   

                    {Object.keys(user).length!==0 && user._id==curStory._id && (<div className='edit-button-div-1'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>
                 Edit </button>
                 </div>)}
                 
                 </div>  
                </div>     
             
                )}
                    </>
            )
        })):(movie&&movie.slice(0,4).map((curStory,index)=>
        
                {
                  
                    return(
                        <>
                        {curStory.slidesInStory[0]?.imageUrl=="image"&&(<div className=' category-home-section-content-cards' key={index} onClick={()=>viewStory(curStory._id)}
                        style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` ,
                        backgroundRepeat: 'no-repeat', backgroundSize:"400px 300px"}}>
                        {/* <div className='middle-home-section-content-div-image'>
                       
                       
                        <img src= {curStory.slidesInStory[0].imageOrVideoUrl} alt="image"/>
                        </div> */}
                       
                    
                    
                       {curStory.slidesInStory[0]?.heading.length>10?(<div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                     {curStory.slidesInStory[0]?.description?.length>15?(<div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
                   )}
                {user._id==curStory._id&&(<div className='edit-button-div'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>Edit </button>
                 </div>)}

               
                        </div>)}
                            {curStory.slidesInStory[0]?.imageUrl=="video"&&( <div className='middle-home-section-content-div-everything'key={index}
                          onClick={()=>viewStory(curStory._id)} >
                    <video  className='video' autoPlay loop muted>
                    <source src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}
                 
                    />
                    </video>
          
                               
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
                             
          
                              {Object.keys(user).length!==0 && user._id==curStory._id&&(<div className='edit-button-div-1'>
                           <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                           <BsPencilSquare className='edit-icon'/>
                           Edit </button>
                           </div>)}
                           
                           </div>  
                          </div>     
                       
                          )}
                        </>
                    ) 
            }))}
       
    </div>
    {movie && movie.length > 4 && (
                    <div className="see-more-content">
                        <button  onClick={() => setViewAll(!viewAll)}>
                            {viewAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
   </div>):
((categoryInStories.includes("movie")||categoryInStories.includes("all"))&&
<div className='no-stories-div'>
<h1>Top stories about movie</h1>
<h1>No stories Available</h1>
</div>)}

   
</>
<>
{education.length>0&&(<div>

    
    <div className='bookmark-story-heading'>
      <h1>Top Stories about Education</h1>
        </div>
        {categorySectionLoading && <div>
            <h1>Loading...</h1>
        </div>}
    <div className='category-home-story-section-div'>
     {viewAll?(education&&education.map((curStory,index)=>
        
        {
          
            return(
                <>
                 {curStory.slidesInStory[0]?.imageUrl=="image"&&(<div className=' category-home-section-content-cards'  key={index}
                  onClick={()=>viewStory(curStory._id)}
                        style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` ,
                        backgroundRepeat: 'no-repeat', backgroundSize:"200px 250px"}}>
                   
                  
                   {curStory.slidesInStory[0]?.heading.length>10?(<div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                     {curStory.slidesInStory[0]?.description?.length>15?(<div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
                   )}
                  {user._id==curStory._id&&(<div className='edit-button-div'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>Edit </button>
                 </div>)}
                    </div>)}
                    {curStory.slidesInStory[0]?.imageUrl=="video"&&(<div className='middle-home-section-content-div-everything'key={index}
                          onClick={()=>viewStory(curStory._id)} >
                    <video  className='video' autoPlay loop muted>
                    <source src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}
                 
                    />
                    </video>
          
                                
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
                             
          
                              {Object.keys(user).length!==0 && user._id==curStory._id&&<div className='edit-button-div-1'>
                           <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                           <BsPencilSquare className='edit-icon'/>
                           Edit </button>
                           </div>}
                           
                           </div>  
                          </div>     
                       
                          )}

                    </>
            )
        })):(education&&education.slice(0,4).map((curStory,index)=>
        
                {
                  
                    return(
                        <>
                        {curStory.slidesInStory[0]?.imageUrl=="image"&&(<div className=' category-home-section-content-cards' key={index} onClick={()=>viewStory(curStory._id)}
                        style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` ,
                        backgroundRepeat: 'no-repeat', backgroundSize:"400px 300px"}}>
                        {/* <div className='middle-home-section-content-div-image'>
                       
                       
                        <img src= {curStory.slidesInStory[0].imageOrVideoUrl} alt="image"/>
                        </div> */}
                       
                    
                    
                  
                       {curStory.slidesInStory[0]?.heading.length>10?(<div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                     {curStory.slidesInStory[0]?.description?.length>15?(<div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
                   )}
                  {user._id==curStory._id&&(<div className='edit-button-div'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>Edit </button>
                 </div>)}

               
                        </div>)}
                        {curStory.slidesInStory[0]?.imageUrl=="video"&&(  <div className='middle-home-section-content-div-everything'key={index}
                          onClick={()=>viewStory(curStory._id)} >
                    <video  className='video' autoPlay loop muted>
                    <source src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}
                 
                    />
                    </video>
          
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
                             
          
                              {Object.keys(user).length!==0 && user._id==curStory._id&&<div className='edit-button-div-1'>
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
    {education && education.length > 4 && (
                    <div className="see-more-content">
                        <button  onClick={() => setViewAll(!viewAll)}>
                            {viewAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
   </div>)}
{(categoryInStories.includes("education")||categoryInStories.includes("all"))&&(<div className='no-stories-div'>
<h1>Top Stories about education</h1>
<h1>No stories Available</h1>
</div>)}
   
</>

<>
{food.length>0?(<div>
    <div className='bookmark-story-heading'>
      <h1>Top Stories about Food</h1>
        </div>
        {categorySectionLoading && <div>
            <h1>Loading...</h1>
        </div>}
    <div className='category-home-story-section-div'>
     {viewAll?(food&&food.map((curStory,index)=>
        
        {
          
            return(
                <>
                 {curStory.slidesInStory[0]?.imageUrl=="image"&&(<div className=' category-home-section-content-cards'  key={index} onClick={()=>viewStory(curStory._id)}
                        style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` ,
                        backgroundRepeat: 'no-repeat', backgroundSize:"400px 300px"}}>
                   
                  
                   {curStory.slidesInStory[0]?.heading.length>10?(<div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                     {curStory.slidesInStory[0]?.description?.length>15?(<div className='category-home-section-content-cards-description '>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
                   )}
                 {user._id==curStory._id&&(<div className='edit-button-div'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>Edit </button>
                 </div>)}
                    </div>)}
                    {curStory.slidesInStory[0]?.imageUrl=="video"&&(
                        <div className='middle-home-section-content-div-everything'key={index}
                        onClick={()=>viewStory(curStory._id)} >
                  <video className='video' autoPlay  loop muted>
                  <source src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}/>
                                
                                </video>
          
                               
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
                             
          
                              {Object.keys(user).length!==0 && user._id==curStory._id&&<div className='edit-button-div-1'>
                           <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                           <BsPencilSquare className='edit-icon'/>
                           Edit </button>
                           </div>}
                           
                           </div>  
                          </div>     
                       
                          )}
                    </>
            )
        })):(food&&food.slice(0,4).map((curStory,index)=>
        
                {
                  
                    return(
                        <>
                        {curStory.slidesInStory[0]?.imageUrl=="image"&&(<div className=' category-home-section-content-cards' key={index} onClick={()=>viewStory(curStory._id)}
                        style={{ backgroundImage: `url(${curStory.slidesInStory[0]?.imageOrVideoUrl})` ,
                        backgroundRepeat: 'no-repeat', backgroundSize:"400px 300px"}}>
                      
                       
                    
                    
                       {curStory.slidesInStory[0]?.heading.length>10?(<div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading.substring(0,10)+"..."
                   }
                   </div>):(
                    <>
                    <div className=' category-home-section-content-cards-heading'>
                   {curStory.slidesInStory[0]?.heading}
                   </div>
                    </>
                   )}
                     {curStory.slidesInStory[0]?.description?.length>15?(<div className='category-home-section-content-cards-description '>
                   {curStory.slidesInStory[0]?.description?.substring(0,15)+"..."
                   }
                   </div>):(
                    <>
                    <div className='category-home-section-content-cards-description'>
                   {curStory.slidesInStory[0]?.description}
                   </div>
                    </>
                   )}
                {user._id==curStory._id&&(<div className='edit-button-div'>
                 <button type="button" onClick={(e)=>handleEditSlide(e,curStory._id)}>
                 <BsPencilSquare className='edit-icon'/>Edit </button>
                 </div>)}

               
                        </div>)}
                        {curStory.slidesInStory[0]?.imageUrl=="video"&&(
                             <div className='middle-home-section-content-div-everything'key={index}
                             onClick={()=>viewStory(curStory._id)} >
                       <video className='video' autoPlay  loop muted>
                       <source src={`${curStory.slidesInStory[0]?.imageOrVideoUrl}`}/>
                                     
                                     </video>
          
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
                             
          
                              {Object.keys(user).length!==0 && use._id==curStory._id&&<div className='edit-button-div-1'>
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
    {food && food.length > 4 && (
                    <div className="see-more-content">
                        <button  onClick={() => setViewAll(!viewAll)}>
                            {viewAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
   </div>):
((categoryInStories.includes("food")||categoryInStories.includes("all"))&&
<div className='no-stories-div'>
<h1>Top stories about food</h1>
<h1>No stories Available</h1>
</div>  
   )}
</>

</>

  )
}
