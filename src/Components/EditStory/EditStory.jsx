import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./EditStory.css"
import { editStoryFailed, editStoryRequest, editStorySuccess, getAllMyStories, setIsEditStoryOpen } from '../../redux/slice/storySlice'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function EditStory() {
  const token=JSON.parse(localStorage.getItem("APP-TOKEN"))
    const{isEditStoryOpen,singleStoryId}=useSelector((state)=>state.story)
   
    const dispatch=useDispatch()
    const [currentIndex, setCurrentIndex] = useState(1)
    const[slides,setSlides]=useState([])
    //const [slidesD,setSlidesD]=useState([])
    let slidesD=[]
    const[imageOrVideoUrl11,setimageOrVideoUrl11]=useState("")
    const[heading1,setHeading1]=useState("")
    const[description1,setDescription1]=useState("")
    const[likesCount1,setLikesCount1]=useState("")
    const[imageUrl1,setImageUrl1]=useState("")

    const[imageOrVideoUrl12,setimageOrVideoUrl12]=useState("")
    const[heading2,setHeading2]=useState("")
    const[description2,setDescription2]=useState("")
    const[likesCount2,setLikesCount2]=useState("")
    const[imageUrl2,setImageUrl2]=useState("")

    const[imageOrVideoUrl13,setimageOrVideoUrl13]=useState("")
    const[heading3,setHeading3]=useState("")
    const[description3,setDescription3]=useState("")
    const[likesCount3,setLikesCount3]=useState("")
 const[imageUrl3,setImageUrl3]=useState("")

    const[imageOrVideoUrl14,setimageOrVideoUrl14]=useState("")
  
    const[heading4,setHeading4]=useState("")
    const[description4,setDescription4]=useState("")
    const[likesCount4,setLikesCount4]=useState("")
    const[imageUrl4,setImageUrl4]=useState("")

    const[imageOrVideoUrl15,setimageOrVideoUrl15]=useState("")
   
    const[heading5,setHeading5]=useState("")
    const[description5,setDescription5]=useState("")
    const[likesCount5,setLikesCount5]=useState("")
    const[imageUrl5,setImageUrl5]=useState("")

    const[imageOrVideoUrl16,setimageOrVideoUrl16]=useState("")
    const[heading6,setHeading6]=useState("")
    const[description6,setDescription6]=useState("")
    const[likesCount6,setLikesCount6]=useState("")
    const[imageUrl6,setImageUrl6]=useState("")

    const[addSlides,setAddSlides]=useState([])
    const[category,setCategory]=useState("")
    const[ids,setIds]=useState([])
    const [createQuizErrors, setCreateQuizErrors] = useState({
      slides1: "",
      slides2: "",
     
      emptySlides3:"",
      emptySlides4:"",
      emptySlides5:"",
      emptySlides6:"",
      emptySlides:""
      
    });
    // const slidesC=["1","2","3"]
 
    const handleClose=()=>
        {
            dispatch(setIsEditStoryOpen(false))
        }

     
   const getEditStory = async()=> {
        console.log(singleStoryId)
      
        try {
          const response = await axios.get(`http://localhost:5000/api/v1/story/singleStory/${singleStoryId}` ,
            {
              headers:{
                Authorization:`Bearer ${token}`
              }
            });
          console.log(response);
    
         
          setSlides(response.data.singleStory.slidesInStory)
          setimageOrVideoUrl11(response.data.singleStory.slidesInStory[0]?.imageOrVideoUrl)
         setHeading1(response.data.singleStory.slidesInStory[0]?.heading)
         setDescription1(response.data.singleStory.slidesInStory[0].description)
        setLikesCount1(response.data.singleStory.slidesInStory[0]?.likesCount)
        setImageUrl1(response.data.singleStory.slidesInStory[0]?.imageUrl)

        setimageOrVideoUrl12(response.data.singleStory.slidesInStory[1]?.imageOrVideoUrl)
         setHeading2(response.data.singleStory.slidesInStory[1].heading)
         setDescription2(response.data.singleStory.slidesInStory[1]?.description)
         setLikesCount2(response.data.singleStory.slidesInStory[1]?.likesCount)
         setImageUrl2(response.data.singleStory.slidesInStory[1]?.imageUrl)

         setimageOrVideoUrl13(response.data.singleStory.slidesInStory[2]?.imageOrVideoUrl)
         setHeading3(response.data.singleStory.slidesInStory[2]?.heading)
         setDescription3(response.data.singleStory.slidesInStory[2]?.description)
         setLikesCount3(response.data.singleStory.slidesInStory[2]?.likesCount)
         setImageUrl3(response.data.singleStory.slidesInStory[2]?.imageUrl)

         setimageOrVideoUrl14(response?.data?.singleStory?.slidesInStory[3]?.imageOrVideoUrl)
         setHeading4(response?.data?.singleStory?.slidesInStory[3]?.heading)
         setDescription4(response?.data?.singleStory?.slidesInStory[3]?.description)
         setLikesCount4(response.data.singleStory.slidesInStory[3]?.likesCount)
         setImageUrl4(response.data.singleStory.slidesInStory[3]?.imageUrl)

         setimageOrVideoUrl15(response?.data?.singleStory?.slidesInStory[4]?.imageOrVideoUrl)
         setHeading5(response?.data?.singleStory?.slidesInStory[4]?.heading)
         setDescription5(response?.data?.singleStory?.slidesInStory[4]?.description)
         setLikesCount5(response.data.singleStory.slidesInStory[4]?.likesCount)
     setImageUrl5(response.data.singleStory.slidesInStory[4]?.imageUrl)

         setimageOrVideoUrl16(response?.data?.singleStory?.slidesInStory[5]?.imageOrVideoUrl)
         setHeading6(response?.data?.singleStory?.slidesInStory[5]?.heading)
         setDescription6(response?.data?.singleStory?.slidesInStory[5]?.description)
         setLikesCount6(response.data.singleStory.slidesInStory[5]?.likesCount)
         setImageUrl6(response.data.singleStory.slidesInStory[5]?.imageUrl)
         setCategory(response.data.singleStory.category)


        } catch (error) {
         console.log(error)
        }
        };
        let image_extension=[
          "ase","art","bmp","blp","cd5","cit","cpt","cr2","cut",
          "dds","dib","djvu",  "egt",  "exif", "gif", "gpl", "grf",
         
          "icns","ico", "iff",  "jng", "jpg",
          "jfif", "jp2","jps","lbm",
            
          "max",  "miff",   "mng",  "msp",  "nef",  "nitf",  "ota","pbm",
          "pc1",
      
          "pc2","pc3","pcf","pcx","pdn",
          "pgm","PI1","PI2","PI3","pict","pct","pnm","pns","ppm","psb","psd","pdd","psp","px","pxm",
          "pxr","qfx","raw","rle","sct","sgi","rgb","int","bw","tga","tiff","tif",
          "vtf","xbm","xcf","xpm","3dv",
          "amf","ai","awg","cgm","cdr","cmx","dxf","e2d","egt",
          "eps",
          "fs",
          "gbr",
          "odg",
          "svg",
          "stl",
          "vrml",
          "x3d",
          "sxd",
          "v2d",
          "vnd",
          "wmf",
          "emf",
          "art",
          "xar",
          "png",
          "webp",
          "jxr",
          "hdp",
          "wdp",
          "cur",
          "ecw",
          "iff",
          "lbm",
          "liff",
          "nrrd",
          "pam",
          "pcx",
          "pgf",
          "sgi",
          "rgb",
          "rgba","bw","int",
          "inta",
          "sid",
          "ras",
          "sun",
          "tga",
          "heic",
          "heif"
        ]
       let video_extensions =
        ['webm', 'mkv', 'flv', 'vob', 'ogv', 'ogg', 'rrc', 'gifv', 'mng', 
          'mov', 'avi', 'qt', 'wmv', 'yuv', 'rm', 'asf', 'amv', 'mp4', 'm4p', 
          'm4v', 'mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'm4v', 'svi', '3gp', '3g2',
           'mxf', 'roq', 'nsv', 'flv', 'f4v', 'f4p', 'f4a', 'f4b', 'mod',"youtube","vimeo","dailymotion"] 
      
       
  let image1=""
  let image2=""
  let image3=""
  let image4=""
  let image5=""
  let image6=""

          
  let newSlides1={
    heading:heading1,

    description:description1,
    imageOrVideoUrl:imageOrVideoUrl11,
    likesCount:likesCount1,
    imageUrl:imageUrl1,
    id1:1
  }
  //const[newSlides11,newSlides11]=useState({newSlides1})
 
  let newSlides2={
    heading:heading2,
    likesCount:likesCount2,
    description: description2,
    imageOrVideoUrl:imageOrVideoUrl12,
    id1:2,
    imageUrl:imageUrl2,
  }

  let newSlides3={
    heading:heading3,
    description: description3,
    imageOrVideoUrl:imageOrVideoUrl13,
    likesCount:likesCount3,
    id1:3,
    imageUrl:imageUrl3,
  }
    
    let newSlides4={
      heading:heading4,
  
      description: description4,
      imageOrVideoUrl:imageOrVideoUrl14,
      likesCount:likesCount4,
      id1:4,
      imageUrl:imageUrl4,
    }
    let newSlides5={
      heading:heading5,
  
      description: description5,
      imageOrVideoUrl:imageOrVideoUrl15,
      likesCount:likesCount5,
      id1:5,
      imageUrl:imageUrl5,
    }
    let newSlides6={
      heading:heading6,
  
      description: description6,
      imageOrVideoUrl:imageOrVideoUrl16,
      likesCount:likesCount6,
      id1:6,
      imageUrl:imageUrl6,
    }
    // const [newSlides5, setNewSlides5] = useState({
    //   heading:heading5,
  
    //   description: description5,
    //   imageOrVideoUrl:imageOrVideoUrl15,
    //   likesCount:likesCount5,
    //   id1:5,
    //   imageUrl:imageUrl5,
    // })
    // const [newSlides6, setNewSlides6] = useState({
    //      heading:heading6,
  
    //   description: description6,
    //   imageOrVideoUrl:imageOrVideoUrl16,
    //   likesCount:likesCount6,
    //   id1:6,
    //   imageUrl:imageUrl6,
    // });
   
   
    // if(imageUrl2=="video"){
    //   const[lengthOk2,setLengthOk2]=useState(true)
    //   const[image22,setImage22]=useState(false)
    // }else{
    //   const[lengthOk2,setLengthOk2]=useState(false) 
    //   const[image22,setImage22]=useState(true)
    // }
   

    // if(imageUrl4=="video"){
    //   const[lengthOk4,setLengthOk4]=useState(true)
    //   const[image42,setImage42]=useState(false)
    // }else{
    //   const[lengthOk4,setLengthOk4]=useState(false) 
    //   const[image42,setImage42]=useState(true)
    // }
    // if(imageUrl5=="video"){
    //   const[lengthOk5,setLengthOk5]=useState(true)
    //   const[image52,setImage52]=useState(false)
    // }else{
    //   const[lengthOk5,setLengthOk5]=useState(false) 
    //   const[image52,setImage52]=useState(true)
    // }
    // if(imageUrl6=="video"){
    //   const[lengthOk6,setLengthOk6]=useState(true)
    //   const[image62,setImage62]=useState(false)
    // }else{
    //   const[lengthOk6,setLengthOk6]=useState(false) 
    //   const[image62,setImage62]=useState(true)
    // }


    const[lengthOk1,setLengthOk1]=useState(false)
    const[lengthOk2,setLengthOk2]=useState(false)
    const[lengthOk3,setLengthOk3]=useState(false)
    const[lengthOk4,setLengthOk4]=useState(false)
    const[lengthOk5,setLengthOk5]=useState(false)
    
    const[lengthOk6,setLengthOk6]=useState(false)

    const[image12,setImage12]=useState(false)
      
    const[image22,setImage22]=useState(false)
     
    const[image32,setImage32]=useState(false)
     
    const[image42,setImage42]=useState(false)
     
    const[image52,setImage52]=useState(false)
     
    const[image62,setImage62]=useState(false)
    const isValidVideoDuration = async(url) => {

      try{
  
      
      return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.src = url;
        video.preload = "metadata";
    
        const onLoadedMetadata = () => {
          const duration = video.duration;
          if (duration <20) {
            resolve(true);
            if(url==imageOrVideoUrl11){
              setLengthOk1(true)
               setImageUrl1("video")
              newSlides1.imageUrl="video"
               setImage12(false)
           
            
            }
            if(url==imageOrVideoUrl12){
              setLengthOk2(true)
         
               setImageUrl2("video")
               newSlides2.imageUrl="video"
              setImage22(false)
           
            
            } if(url==imageOrVideoUrl13){
              setLengthOk3(true)
              setImage32(false)
                     newSlides3.imageUrl="video"
               setImageUrl3("video")
              
           
            } if(url==imageOrVideoUrl14){
              setLengthOk4(true)
              setImage42(false)
                  newSlides4.imageUrl="video"
              setImageUrl4("video")
              
             
            } if(url==imageOrVideoUrl15){
              setLengthOk5(true)
              setImage52(false)
               newSlides5.imageUrl="video"
               setImageUrl5("video")
              // length5=true
              // image51=true
            
            }
           if(url==imageOrVideoUrl16){
            setLengthOk6(true)
            setImage62(false)
                 newSlides6.imageUrl="video"
            setImageUrl6("video")
            // length6=true
            // image61=true
           
          }
           
          } 
        else {
            
            resolve(false);
            if(url==imageOrVideoUrl11){
              setLengthOk1(false)
                newSlides1.imageUrl=""
                setImageUrl1("")
              // length1=false
            
            }
            if(url==imageOrVideoUrl12){
              setLengthOk2(false)
             newSlides2.imageUrl=""
             setImageUrl2("")
              // length2=false
            } if(url==imageOrVideoUrl13){
              setLengthOk3(false)
                newSlides3.imageUrl=""
                setImageUrl3("")
              // length3=false
            } if(url==imageOrVideoUrl14){
              setLengthOk4(false)
                newSlides4.imageUrl=""
                setImageUrl4("")
              // imageUrl4==""
              // length4=false
            } if(url==imageOrVideoUrl15){
              setLengthOk5(false)
      newSlides5.imageUrl=""
      setImageUrl5("")
              // imageUrl5==""
              // length5=false
            }
           if(url==imageOrVideoUrl16){
            setLengthOk6(false)
             newSlides6.imageUrl=""
             setImageUrl6("")
              // imageUrl6==""
            // length6=false
  
          }
        }
          // Clean up
          video.removeEventListener("loadedmetadata", onLoadedMetadata);
          video.removeEventListener("error", onError);
          document.body.removeChild(video);
        };
    
        const onError = () => {
          reject("Invalid video URL or unable to load video.");
          // Clean up
          video.removeEventListener("loadedmetadata", onLoadedMetadata);
          video.removeEventListener("error", onError);
          document.body.removeChild(video);
        };
    
        video.addEventListener("loadedmetadata", onLoadedMetadata);
        video.addEventListener("error", onError);
        document.body.appendChild(video);
      });
    }catch(error){
      console.log(error)
    }
    };
  
    function checkForImage1 (url){

      if(url===imageOrVideoUrl11){
      
        for(let j=0;j<image_extension.length;j++){
          if(url?.includes(image_extension[j])){
       
        
      
         // image11=true
         setLengthOk1(false)
         setImage12(true)
          //  imageUrl1=="image"
            setImageUrl1("image")
                 newSlides1.imageUrl="image"
                  slidesD[0].imageUrl="image"
           //setImage(true)
           
          }else{
          
            setImageUrl1("")
        

          }
        }
        for(let i=0;i<video_extensions.length;i++){
         
          // const isValid = await isValidVideoDuration(videoUrl);
          //   setLengthOk(isValid);
    
          if(url?.includes(video_extensions[i])){
            
                   let p=  isValidVideoDuration(imageOrVideoUrl11)

             if(lengthOk1== true ){
             
              setImage12(false)
              setImageUrl1("video")
               newSlides1.imageUrl="video"
        
              // imageUrl1=="video"
           
             }
           
       
          }
        }
      }
   
  }
   function checkForImage2(url){
    if(url===imageOrVideoUrl12 ){
       
        for(let j=0;j<image_extension.length;j++){
          if(url?.includes(image_extension[j])){
       
            //image21=true
          // setImage2("image")
          // setImage22(true)
             //newSlides2({ ...newSlides2, imageUrl:"image" })
            //  imageUrl2=="image"
            // imageUrl2="image"
           //setImage(true)
            setLengthOk2(false)
           setImage22(true)
           newSlides2.imageUrl="image"
           setImageUrl2("image")
             slidesD[1].imageUrl="image"
        
          }else{
          
            setImageUrl2("")
         
          }
        }
        for(let i=0;i<video_extensions.length;i++){
          if(url?.includes(video_extensions[i])){
            let q=  isValidVideoDuration(imageOrVideoUrl12)
            
          
            if(lengthOk2==true   ){
             
              setImage22(false)
              // setImage2("video")
              //  newSlides2({ ...newSlides2, imageUrl:"video" })
              //  imageUrl2=="video"
                  newSlides2.imageUrl="video"
               setImageUrl2("video")
                  //  imageUrl2="video"
             }
         
            //x=true
            
        }
      }
   
    }
   }
    function checkForImage3(url){

      if(url==imageOrVideoUrl13 ){
        for(let j=0;j<image_extension.length;j++){
          if(url?.includes(image_extension[j])){
         
         
          //  image31=true
          // setImage3("image")
          // setImage32(true)
             
            //  imageUrl3=="image"
        //  imageUrl3="image"
         setLengthOk3(false)
        setImage32(true)
        setImageUrl3("image")
        slidesD[2].imageUrl="image"
       //newSlides3.imageUrl="image"
       
           //setImage(true)
           
          }else{
          
            setImageUrl3("")
           
          }
        }
        for(let i=0;i<video_extensions.length;i++){
          if(url?.includes(video_extensions[i])){
            isValidVideoDuration(imageOrVideoUrl13)
           
            //
          
      
            //x=true
            
            if(lengthOk3==true   ){
             
              setImage32(false)
              //  imageUrl4="video"
               //newSlides3.imageUrl="video"
               setImageUrl3("video")
              // imageUrl3=="video"
             
             }
           
          }
        }
      } 
    
  }
    function checkForImage4(url){

      if(url==imageOrVideoUrl14){
        for(let j=0;j<image_extension.length;j++){
          if(url?.includes(image_extension[j])){
      
          //   image41=true
          // setImage4("image")
          // setImage42(true)
          // newSlides4({ ...newSlides4, imageUrl:"image" })
          //  imageUrl4="image"
            //  imageUrl4="image"
             setLengthOk4(false)
            setImageUrl4("image")
            setImage42(true)
            //newSlides4.imageUrl="image"
          slidesD[3].imageUrl="image"
           //setImage(true)
            // return "image"
          }else{
          
            setImageUrl4("")
          
          }
        }
        for(let i=0;i<video_extensions.length;i++){

          if(url?.includes(video_extensions[i])){
              let u=isValidVideoDuration(imageOrVideoUrl14)
  
            //
             if( lengthOk4==true){
             
              setImage42(false)
               //newSlides4.imageUrl="video"
               setImageUrl4("video")
                //  imageUrl4="video"
             
             }
          
            //x=true
            // return "video"
          }
        }
      } 
   
  }
   function checkForImage5(url){

      if(url==imageOrVideoUrl15 ){
        for(let j=0;j<image_extension.length;j++){
          if(url?.includes(image_extension[j])){
         
          //  setImage5("image")
          //  setImage52(true)
          // image51=true
           //setImage(true)
          //  newSlides5({ ...newSlides5, imageUrl:"image" })
            //  imageUrl5="image"
            // imageUrl5="image"
            setImage52(true)
            setLengthOk5(false)
            newSlides5.imageUrl="image"
             setImageUrl5("image")
              slidesD[4].imageUrl="image"
          
          }else{
            
            setImageUrl5("")
          
          }
        }
        for(let i=0;i<video_extensions.length;i++){
          if(url?.includes(video_extensions[i])){
            //
            let v=  isValidVideoDuration(imageOrVideoUrl15)
          
            if( lengthOk5==true){
              
              setImage52(false)
            //  imageUrl5="video"
              newSlides5.imageUrl="video"
             setImageUrl5("video")
              // imageUrl5="video"
             }
          
            //x=true
        
          }
        }
      } 
    
    }
  
  function checkForImage6(url){

      if(url==imageOrVideoUrl16 ){
        for(let j=0;j<image_extension.length;j++){
          if(url?.includes(image_extension[j])){
        
        
          //  imageUrl6="image"
          // imageUrl6="image"
           setLengthOk6(false)
          setImage62(true)
            newSlides6.imageUrl="image"
           setImageUrl6("image")
            slidesD[5].imageUrl="image"
           //setImage(true)
            // return "image"
          }else{
           
            setImageUrl6("")
            
          }
        }
        for(let i=0;i<video_extensions.length;i++){
          if(url?.includes(video_extensions[i])){
            // setImage6("")
            let w=  isValidVideoDuration(imageOrVideoUrl16)
          
            if( lengthOk6==true){
              setImage62(false)
              //  imageUrl6="video"
                //  imageUrl6="video"
                 newSlides6.imageUrl="video"
                 setImageUrl6("video")
            }
          
         
          }
        }
      }
    
  }
// if(currentIndex==2){
//     slidesD=[newSlides1,newSlides2]
//   }
  // if(currentIndex==3){
  //   slidesD=[newSlides1,newSlides2,newSlides3]
  // }
  if((slides.length==3)){
    slidesD=[newSlides1,newSlides2,newSlides3]
  }
  if((slides.length==4)){
    slidesD=[newSlides1,newSlides2,newSlides3,newSlides4]
  }
  if((slides.length==5)){
    slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5]
  }
  if((slides.length==6)){
    slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5,newSlides6]
  }

  if(addSlides.includes(4)){

   

    slidesD=[newSlides1,newSlides2,newSlides3,newSlides4]
  }
  if(addSlides.includes(5)){
   
   
    slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5]
  }
  
  if(addSlides.includes(6)){
  
    slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5,newSlides6]
  }

console.log(imageUrl1,imageUrl2,imageUrl3,imageUrl4,imageUrl5,imageUrl6)
  console.log(lengthOk1,lengthOk2,lengthOk3,lengthOk4,lengthOk5,lengthOk6)
  console.log(image12,image22,image32,image42,image52,image62)        

function checkErrors(){
  let newErrors1={...createQuizErrors}

if(newSlides1.heading===""||newSlides1.description===""||imageOrVideoUrl11==="" && lengthOk1==false&& image12==false
 ){
    newErrors1.slides1="Please fill all details or enter valid image or url" 
    toast("Please fill all details or enter valid image or video url ")
  }else{
    newErrors1.slides1=""
 }


 if(newSlides2.heading===""||newSlides2.description===""||imageOrVideoUrl12==="" && lengthOk1==false&&image12==false
){
  newErrors1.slides2="Please fill all details or enter valid image or video url "
  toast("Please fill all details or enter valid image or video url  " )
}else{
  
  newErrors1.slides2=""
}

if(slides.length==3){
  if(  newSlides1.heading=="" || newSlides1.description=="" || imageOrVideoUrl11==""||
    newSlides2.heading=="" || newSlides2.description=="" || imageOrVideoUrl12==""||
    newSlides3.heading=="" || newSlides3.description=="" || imageOrVideoUrl13==""
     ||imageUrl1==""||imageUrl2==""||imageUrl3==""
    
  ){
    newErrors1.emptySlides3="Please fill all details upto slide3"
    toast("Please fill all Details upto slide3")
  }else{
    newErrors1.emptySlides3=""
  }
}

if(slidesD.length==4){
  if(  newSlides1.heading=="" || newSlides1.description=="" || imageOrVideoUrl11==""||
    newSlides2.heading=="" || newSlides2.description=="" || imageOrVideoUrl12==""||
    newSlides3.heading=="" || newSlides3.description=="" || imageOrVideoUrl13==""||
    newSlides4.heading=="" || newSlides4.description=="" || imageOrVideoUrl14==""
     ||imageUrl1==""||imageUrl2==""||imageUrl3==""||imageUrl4==""
  ){
    newErrors1.emptySlides4="Please fill all details upto slide4"
    toast("Please fill all Details upto slide4")
  }else{
    newErrors1.emptySlides4=""
  }
}
if(slidesD.length==5){
  if(  newSlides1.heading=="" || newSlides1.description=="" || imageOrVideoUrl11==""||
    newSlides2.heading=="" || newSlides2.description=="" || imageOrVideoUrl12==""||
    newSlides3.heading=="" || newSlides3.description=="" || imageOrVideoUrl13==""||
    newSlides4.heading=="" || newSlides4.description=="" || imageOrVideoUrl14==""||
     newSlides5.heading=="" || newSlides5.description=="" || imageOrVideoUrl15=="" 
     ||imageUrl1==""||imageUrl2==""||imageUrl3==""||imageUrl4==""||imageUrl5==""
    
  ){
    newErrors1.emptySlides5="Please fill all details upto slide5"
    toast("Please fill all Details upto slide 5")
  }else{
    newErrors1.emptySlides5=""
  }
}

if(slidesD.length==6){
  if(  newSlides1.heading=="" || newSlides1.description=="" || imageOrVideoUrl11==""||
    newSlides2.heading=="" || newSlides2.description=="" || imageOrVideoUrl12==""||
    newSlides3.heading=="" || newSlides3.description=="" || imageOrVideoUrl13==""||
    newSlides4.heading=="" || newSlides4.description=="" || imageOrVideoUrl14==""||
     newSlides5.heading=="" || newSlides5.description=="" || imageOrVideoUrl15==""||
        newSlides6.heading=="" || newSlides6.description=="" || imageOrVideoUrl16==""
           ||imageUrl1==""||imageUrl2==""||imageUrl3==""||imageUrl4==""||imageUrl5==""||
           imageUrl6==""
    
  ){
    newErrors1.emptySlides6="Please fill all details upto slide6"
    toast("Please fill all Details upto slide 6")
  }else{
    newErrors1.emptySlides6=""
  }
}



 if(
   newErrors1.slides1==="" &&
   newErrors1.slides2===""&&
  
   newErrors1.emptySlides3=="" &&
   newErrors1.emptySlides4=="" &&
   newErrors1.emptySlides5=="" &&
   newErrors1.emptySlides6=="" &&
   newErrors1.emptySlides==""
)
{
  return true
}else{
 
  return false
}
}
const handleNextQuestion=()=>
{
  setCurrentIndex((currentIndex)=>currentIndex+1)

            setSlides((prevState)=>
            prevState.map((elem)=>
            {
             
              if(elem.id1==1){
                return{...elem,heading:newSlides1.heading,description:newSlides1.description,imageOrVideoUrl1:imageOrVideoUrl11}
              }
              if(elem.id1==2){
                return{...elem,heading:newSlides2.heading,description:newSlides2.description,imageOrVideoUrl1:newSlides2.imageOrVideoUrl1}
              }      
              if(elem.id1==3){
                return{...elem,heading:newSlides3.heading,description:newSlides3.description,imageOrVideoUrl1:newSlides3.imageOrVideoUrl1}
              }if(elem.id1==4){
                return{...elem,heading:newSlides4.heading,description:newSlides4.description,imageOrVideoUrl1:newSlides4.imageOrVideoUrl1}
              }
              if(elem.id1==5){
                return{...elem,heading:newSlides5.heading,description:newSlides5.description,imageOrVideoUrl1:newSlides5.imageOrVideoUrl1}
              }
              if(elem.id1==6){
                return{...elem,heading:newSlides6.heading,description:newSlides6.description,imageOrVideoUrl1:newSlides6.imageOrVideoUrl1}
              }
             else return elem
            })
          
          )


}
const handlePreviousQuestion=()=>
    {
        setCurrentIndex((prev)=>prev-1)
    }
const handleAddOption=()=>
      {
        if((slides.length==3)&&(!addSlides.includes(4)&&!addSlides.includes(5)&&!addSlides.includes(6))){
          setAddSlides((prevState)=>[...prevState,4])

        }
        if((slides.length===4)&&(!addSlides.includes(5)&&!addSlides.includes(6))){
          setAddSlides((prevState)=>[...prevState,5])
        }
        if((slides.length==5)&&(!addSlides.includes(6))){
          setAddSlides((prevState)=>[...prevState,6])
        }
        // else if( slides.length==4 && !addSlides.includes(4)||!addSlides.includes(5)){
       
        //   setAddSlides((prevState)=>[...prevState,5])

         
        // }
        //  if( slides.length==3 && !addSlides.includes(4)){
      
        //   setAddSlides((prevState)=>[...prevState,4])

        // }
        
        if(  addSlides.includes(4)&&!addSlides.includes(5)&&addSlides.length>=1){
       
          setAddSlides((prevState)=>[...prevState,5])

         
        }
        // else if(!addSlides.includes(4)||!addSlides.includes(5)){
        //   setAddSlides((prevState)=>[...prevState,5])
        // }
      //  if(addSlides.includes(5)){
      //   setAddSlides((prevState)=>[...prevState,6])
      //  }
       
        //   if((addSlides.includes(5)||!addSlides.includes(6))&&(addSlides.length>=1)){
         
        //   setAddSlides((prevState)=>[...prevState,6])
         
        // }
        if((addSlides.includes(5))&&(addSlides.length>=1)){
         
          setAddSlides((prevState)=>[...prevState,6])
         
        }
      }   
      console.log(addSlides) 
const handleDeleteSlide=(e,i)=>
    {
      e.stopPropagation()
      let elemIndex;
      console.log(i)
      if(i==4){
        slidesD.splice(i-1,1)
         elemIndex=addSlides.indexOf(i)
         if(elemIndex!==-1){
          addSlides.splice(elemIndex,1)
        
         }
        
        //slidesD.splice(i-1,2)
        // ids.splice(2,1)
        // setDelete4(true)
      }
      if(i==5){
        // ids.splice(3,1)
        slidesD.splice(i-1,1)
        elemIndex=addSlides.indexOf(i)
        if(elemIndex!==-1){
         addSlides.splice(elemIndex,1)

        }
      }
      if(i==6){
        // ids.splice(4,1)
        slidesD.splice(i-1,1)
      
        elemIndex=addSlides.indexOf(i)
        if(elemIndex!==-1){
         addSlides.splice(elemIndex,1)
        }
      
      }
  setCurrentIndex((prev)=>prev-1)

slides.splice(i-1,1)
slidesD.splice(i-1,1)
    }
console.log(slidesD,addSlides)

    useEffect(()=>
      {
        // setImageUrl1("")
        // setImageUrl2("")
        // setImageUrl3("")
        // setImageUrl4("")
        // setImageUrl5("")
        // setImageUrl6("")
        if(lengthOk1==false&&image12==true){
          setImageUrl1("image")
          newSlides1.imageUrl="image"
        }
        if(lengthOk2==false&&image22==true){
          setImageUrl2("image")
          newSlides2.imageUrl="image"
        }
        if(lengthOk3==false&&image32==true){
          setImageUrl3("image")
          newSlides3.imageUrl="image"
        }
        if(lengthOk4==false&&image42==true){
          setImageUrl4("image")
           newSlides4.imageUrl="image"
        }
        if(lengthOk5==false&&image52==true){
          setImageUrl5("image")
            newSlides5.imageUrl="image"
        }
        if(lengthOk5==false&&image62==true){
          setImageUrl6("image")
             newSlides6.imageUrl="image"
        }






      
      },[currentIndex+1])
const[imageOne,setImageOne]=useState(false)
      
const[imageTwo,setImageTwo]=useState(false)
 
const[imageThree,setImageThree]=useState(false)
 
const[imageFour,setImageFour]=useState(false)
 
const[imageFive,setImageFive]=useState(false)
    
    const handleCurrentSlide=(i)=>
      {
        console.log(i)
       
        if(i==2){
          setImageUrl1("")
          setImageUrl2("")
          if(imageUrl1==""||imageUrl1!==""){
            checkForImage1(imageOrVideoUrl11)
          }
          if(imageUrl2==""||imageUrl2!==""){
           checkForImage2(imageOrVideoUrl11)
          }
         
          if(lengthOk1==false&&image12==true){
            setImageUrl1("image")
            newSlides1.imageUrl="image"
          }
          if(lengthOk2==false&&image22==true){
            setImageUrl2("image")
            newSlides2.imageUrl="image"
          }
         
          
          
    
          if(lengthOk1==true&&image12==false){
             setImageUrl1("video")
            newSlides1.imageUrl="video"
          }
          if(lengthOk2==true&&image22==false){
            setImageUrl2("video")
             newSlides2.imageUrl="video"
          }
        
        
         
    
          if(lengthOk1==false&&image12==false){
            setImageUrl1("")
             newSlides1.imageUrl=""
          }
          if(lengthOk2==false&&image22==false){
             setImageUrl2("")
            newSlides2.imageUrl=""
          }
          
         
        
          // if(lengthOk1==true&&image32==true){
          //   setImageUrl3("image")
          //    newSlides3.imageUrl="image"
          // }
          // if(lengthOk2==true&&image22==true){
          //   setImageUrl2("image")
          //    newSlides2.imageUrl="image"
          // }
          // if(lengthOk3==true&&image32==true){
          //   setImageUrl3("image")
          //    newSlides3.imageUrl="image"
          // }
          // if(lengthOk4==true&&image42==true){
          //   setImageUrl4("image")
          //    newSlides4.imageUrl="image"
          // }
            
          // if(lengthOk5==true&&image52==true){
          //   setImageUrl5("image")
          //     newSlides5.imageUrl="image"
          // }
        
          // if(lengthOk6==true&&image62==true){
          //   setImageUrl6("image")
          //     newSlides6.imageUrl="image"
          // }
    
        
        }
      
        if(i==3){
          // slidesD==[]
          // imageUrl1=""
          // imageUrl2=""
           setImageUrl1("")
           setImageUrl2("")
           setImageUrl3("")

          if(imageUrl1==""||imageUrl1!==""){
             checkForImage1(imageOrVideoUrl11)
           }
           if(imageUrl2==""||imageUrl2!==""){
            checkForImage2(imageOrVideoUrl12)
           }
           if(imageUrl3==""||imageUrl3!==""){
            checkForImage3(imageOrVideoUrl13)
           }
         
      
            for(let j=0;j<image_extension.length;j++){
              if(imageOrVideoUrl11?.includes(image_extension[j])){
           
            
          
             // image11=true
             setLengthOk1(false)
             setImage12(true)
              //  imageUrl1=="image"
                setImageUrl1("image")
                     newSlides1.imageUrl="image"
               //setImage(true)
               
              }else{
              
                setImageUrl1("")
            
    
              }
            }
          
        
            for(let j=0;j<image_extension.length;j++){
              if(imageOrVideoUrl12?.includes(image_extension[j])){
           
            
          
             // image11=true
             setLengthOk1(false)
             setImage22(true)
              //  imageUrl1=="image"
                setImageUrl1("image")
                     newSlides1.imageUrl="image"
               //setImage(true)
               
              }else{
              
                setImageUrl1("")
            
    
              }
            }
          
     
      
            for(let j=0;j<image_extension.length;j++){
              if(imageOrVideoUrl13?.includes(image_extension[j])){
           
            
          
             // image11=true
             setLengthOk1(false)
             setImage32(true)
              //  imageUrl1=="image"
                setImageUrl1("image")
                     newSlides1.imageUrl="image"
               //setImage(true)
               
              }else{
              
                setImageUrl1("")
            
    
              }
            }
          
        
       
     
           if(lengthOk1==false&&image12==true){
            setImageUrl1("image")
            newSlides1.imageUrl="image"
          }
          if(lengthOk2==false&&image22==true){
            setImageUrl2("image")
            newSlides2.imageUrl="image"
          }
          if(lengthOk3==false&&image32==true){
             setImageUrl3("image")
             newSlides3.imageUrl="image"
          }
         
          
    
          if(lengthOk1==true&&image12==false){
             setImageUrl1("video")
            newSlides1.imageUrl="video"
          }
          if(lengthOk2==true&&image22==false){
             setImageUrl2("video")
             newSlides2.imageUrl="video"
          }
          if(lengthOk3==true&&image32==false){
             setImageUrl3("video")
             newSlides3.imageUrl="video"
          }
        
         
    
          if(lengthOk1==false&&image12==false){
             setImageUrl1("")
             newSlides1.imageUrl=""
          }
          if(lengthOk2==false&&image22==false){
             setImageUrl2("")
            newSlides2.imageUrl=""
          }
          if(lengthOk3==false&&image32==false){
             setImageUrl3("")
             newSlides3.imageUrl=""
          }
        
          
        
          // if(lengthOk1==true&&image32==true){
          //   setImageUrl1("image")
          //    newSlides3.imageUrl="image"
          // }
          // if(lengthOk2==true&&image22==true){
          //   setImageUrl2("image")
          //    newSlides2.imageUrl="image"
          // }
          // if(lengthOk3==true&&image32==true){
          //   setImageUrl3("image")
          //    newSlides3.imageUrl="image"
          // }
          // if(lengthOk4==true&&image42==true){
          //   setImageUrl4("image")
          //    newSlides4.imageUrl="image"
          // }
            
          // if(lengthOk5==true&&image52==true){
          //   setImageUrl5("image")
          //     newSlides5.imageUrl="image"
          // }
        
          // if(lengthOk6==true&&image62==true){
          //   setImageUrl6("image")
          //     newSlides6.imageUrl="image"
          // }
    
            // slidesD=[newSlides1,newSlides2,newSlides3]
        }
      if(i==4){
        //  slidesD=[]
        // console.log(image11,image21,image31,image41,image51,image61)
        // console.log(length1,length2,length3,length4,length5,length6)
          setImageUrl1("")
          setImageUrl2("")
          setImageUrl3("")
          setImageUrl4("")
    
        if(imageUrl1==""||imageUrl1!==""){
          checkForImage1(imageOrVideoUrl11)
         }
         if(imageUrl2==""||imageUrl2!==""){
          checkForImage2(imageOrVideoUrl12)
         }
         if(imageUrl3==""||imageUrl3!==""){
          checkForImage3(imageOrVideoUrl13)
         }
         if(imageUrl4==""||imageUrl4!==""){
          checkForImage4(imageOrVideoUrl14)
         }
      
      
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl11?.includes(image_extension[j])){
         
          
        
           // image11=true
           setLengthOk1(false)
           setImage12(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
            
              setImageUrl1("")
          
  
            }
          }
        
       
      
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl12?.includes(image_extension[j])){
         
          
        
           // image11=true
           setLengthOk1(false)
           setImage22(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
            
              setImageUrl1("")
          
  
            }
          }
        
      
       
      
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl13?.includes(image_extension[j])){
         
          
        
           // image11=true
           setLengthOk1(false)
           setImage32(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
            
              setImageUrl1("")
          
  
            }
          }
        
        
      
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl14?.includes(image_extension[j])){
         
          
        
           // image11=true
           setLengthOk1(false)
           setImage42(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
            
              setImageUrl1("")
          
  
            }
          }
        
     
    if(lengthOk1==false&&image12==true){
      newSlides1.imageUrl="image"
      setImageUrl1("image")
    }
    if(lengthOk2==false&&image22==true){
      newSlides2.imageUrl="image"
      setImageUrl2("image")
    }
    if(lengthOk3==false&&image32==true){
       setImageUrl3("image")
       newSlides3.imageUrl="image"
    }
    if(lengthOk4==false&&image42==true){
       setImageUrl4("image")
        newSlides4.imageUrl="image"
    }
 
    

    if(lengthOk1==true&&image12==false){
      setImageUrl1("video")
      newSlides1.imageUrl="video"
    }
    if(lengthOk2==true&&image22==false){
       setImageUrl2("video")
       newSlides2.imageUrl="video"
    }
    if(lengthOk3==true&&image32==false){
       setImageUrl3("video")
       newSlides3.imageUrl="video"
    }
    if(lengthOk4==true&&image42==false){
       setImageUrl4("video")
        newSlides4.imageUrl="video"
    }
  
   

    if(lengthOk1==false&&image12==false){
      setImageUrl1("")
       newSlides1.imageUrl=""
    }
    if(lengthOk2==false&&image22==false){
      setImageUrl2("")
      newSlides2.imageUrl=""
    }
    if(lengthOk3==false&&image32==false){
      setImageUrl3("")
       newSlides3.imageUrl=""
    }
    if(lengthOk4==false&&image42==false){
       setImageUrl4("")
        newSlides4.imageUrl=""
    }

   

    // if(lengthOk1==true&&image32==true){
    //   setImageUrl3("image")
    //    newSlides3.imageUrl="image"
    // }
    // if(lengthOk2==true&&image22==true){
    //   setImageUrl2("image")
    //    newSlides2.imageUrl="image"
    // }
    // if(lengthOk3==true&&image32==true){
    //   setImageUrl3("image")
    //    newSlides3.imageUrl="image"
    // }
    // if(lengthOk4==true&&image42==true){
    //   setImageUrl4("image")
    //    newSlides4.imageUrl="image"
    // }
      
    // if(lengthOk5==true&&image52==true){
    //   setImageUrl5("image")
    //     newSlides5.imageUrl="image"
    // }
  
    // if(lengthOk6==true&&image62==true){
    //   setImageUrl6("image")
    //     newSlides6.imageUrl="image"
    // }

  

    //  slidesD=[newSlides1,newSlides2,newSlides3,newSlides4]
      }
    
      if(i==5){
        //  slidesD=[]
        // console.log(image11,image21,image31,image41,image51,image61)
        // console.log(length1,length2,length3,length4,length5,length6)
       setImageUrl1("")
       setImageUrl2("")
       setImageUrl3("")
       setImageUrl4("")
       setImageUrl5("")
         if(imageUrl1==""||imageUrl1!==""){
          checkForImage1(imageOrVideoUrl11)
         }
         if(imageUrl2==""||imageUrl2!==""){
          checkForImage2(imageOrVideoUrl12)
         }
         if(imageUrl3==""||imageUrl3!==""){
          checkForImage3(imageOrVideoUrl13)
         }
         if(imageUrl4==""||imageUrl4!==""){
          checkForImage4(imageOrVideoUrl14)
         }
         if(imageUrl5==""||imageUrl5!==""){
          checkForImage5(imageOrVideoUrl15)
         }

      
      
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl11?.includes(image_extension[j])){
         
          
        
           // image11=true
          //  setLengthOk1(false)
           setImage12(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
            
              setImageUrl1("")
          
  
            }
          }
        
       
      
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl12?.includes(image_extension[j])){
         
          
        
           // image11=true
          //  setLengthOk1(false)
           setImage22(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
            
              setImageUrl1("")
          
  
            }
          }
        
      
       
      
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl13?.includes(image_extension[j])){
         
          
        
           // image11=true
          //  setLengthOk1(false)
           setImage32(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
            
              setImageUrl1("")
          
  
            }
          }
        
      
      
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl14?.includes(image_extension[j])){
         
          
        
           // image11=true
           setLengthOk1(false)
           setImage42(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
            
              setImageUrl1("")
          
  
            }
          }
        
        for(let j=0;j<image_extension.length;j++){
          if(imageOrVideoUrl15?.includes(image_extension[j])){
       
        
      setImageFive(true)
         // image11=true
        //  setLengthOk1(false)
         setImage52(true)
          //  imageUrl1=="image"
            setImageUrl1("image")
                 newSlides1.imageUrl="image"
           //setImage(true)
           
          }else{
         
            setImageUrl1("")
        

          }
        }
      
          
         if(lengthOk1==false&&image12==true){
          newSlides1.imageUrl="image"
          setImageUrl1("image")
        }
        if(lengthOk2==false&&image22==true){
          newSlides2.imageUrl="image"
          setImageUrl2("image")
        }
        if(lengthOk3==false&&image32==true){
           setImageUrl3("image")
           newSlides3.imageUrl="image"
        }
        if(lengthOk4==false&&image42==true){
          setImageUrl4("image")
            newSlides4.imageUrl="image"
        }
        if(lengthOk5==false&&image52==true){
          setImageUrl5("image")
           newSlides5.imageUrl="image"
        }
       
  
        if(lengthOk1==true&&image12==false){
          setImageUrl1("video")
          newSlides1.imageUrl="video"
        }
        if(lengthOk2==true&&image22==false){
          setImageUrl2("video")
           newSlides2.imageUrl="video"
        }
        if(lengthOk3==true&&image32==false){
          setImageUrl3("video")
           newSlides3.imageUrl="video"
        }
        if(lengthOk4==true&&image42==false){
           setImageUrl4("video")
            newSlides4.imageUrl="video"
        }
        if(lengthOk5==true&&image52==false){
           setImageUrl5("video")
            newSlides5.imageUrl="video"
        }
       
  
        if(lengthOk1==false&&image12==false){
          setImageUrl1("")
           newSlides1.imageUrl=""
        }
        if(lengthOk2==false&&image22==false){
          setImageUrl2("")
          newSlides2.imageUrl=""
        }
        if(lengthOk3==false&&image32==false){
          setImageUrl3("")
           newSlides3.imageUrl=""
        }
        if(lengthOk4==false&&image42==false){
          setImageUrl4("")
            newSlides4.imageUrl=""
        }
  
        // if(lengthOk5==false&&image52==false){
        //   setImageUrl5("")
        //      newSlides5.imageUrl=""
        // }

        // if(lengthOk1==true&&image32==true){
        //   setImageUrl3("image")
        //    newSlides3.imageUrl="image"
        // }
        // if(lengthOk2==true&&image22==true){
        //   setImageUrl2("image")
        //    newSlides2.imageUrl="image"
        // }
        // if(lengthOk3==true&&image32==true){
        //   setImageUrl3("image")
        //    newSlides3.imageUrl="image"
        // }
        // if(lengthOk4==true&&image42==true){
        //   setImageUrl4("image")
        //     newSlides4.imageUrl="image"
        // }
  
        
        // if(lengthOk5==true&&image52==true){
        //   setImageUrl5("image")
        //     newSlides5.imageUrl="image"
        // }
      
        // if(lengthOk6==true&&image62==true){
        //   setImageUrl6("image")
        //     newSlides6.imageUrl="image"
        // }
  
    // slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5]
      }
   
      if(i==6){

   
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl11?.includes(image_extension[j])){
         
          
          setImageOne(true)
           // image11=true
         
           setImage12(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
            
             
              setImageUrl1("")
          
  
            }
          }
        
      
      
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl12?.includes(image_extension[j])){
         
          
       setImageTwo(true)
           // image11=true
        
           setImage22(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
           
              setImageUrl1("")
          
  
            }
          }
        
      
      
      
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl13?.includes(image_extension[j])){
         
          
      setImageThree(true)
           // image11=true
         
           setImage32(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
          
              setImageUrl1("")
          
  
            }
          }
        
  
      
        for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl14?.includes(image_extension[j])){
         
          
       setImageFour(true)
           // image11=true
       
           setImage42(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
         
              setImageUrl1("")
          
  
            }
          }
        
    
      
          for(let j=0;j<image_extension.length;j++){
            if(imageOrVideoUrl15?.includes(image_extension[j])){
         
          
        setImageFive(true)
           // image11=true
       
           setImage52(true)
            //  imageUrl1=="image"
              setImageUrl1("image")
                   newSlides1.imageUrl="image"
             //setImage(true)
             
            }else{
           
              setImageUrl1("")
          
  
            }
          }
        
       
        console.log(lengthOk1,lengthOk2,lengthOk3,lengthOk4,lengthOk5,lengthOk6)
        console.log(image12,image22,image32,image42,image52,image62)
        console.log(imageUrl1,imageUrl2,imageUrl3,imageUrl4,imageUrl5,imageUrl6)
        //  console.log(imageOne,imageTwo,imageThree,imageFour,imageFive)
        // console.log(length1,length2,length3,length4,length5,length6)
        setImageUrl1("")
        setImageUrl2("")
        setImageUrl3("")
        setImageUrl4("")
        setImageUrl5("")
        setImageUrl6("")
         if(imageUrl1==""||imageUrl1!==""){
          checkForImage1(imageOrVideoUrl11)
         }
         if(imageUrl2==""||imageUrl2!==""){
          checkForImage2(imageOrVideoUrl12)
         }
         if(imageUrl3==""||imageUrl3!==""){
          checkForImage3(imageOrVideoUrl13)
         }
         if(imageUrl4==""||imageUrl4!==""){
          checkForImage4(imageOrVideoUrl14)
         }
         if(imageUrl5==""||imageUrl5!==""){
          checkForImage5(imageOrVideoUrl15)
         }
         if(imageUrl6==""||imageUrl6!==""){
          checkForImage6(imageOrVideoUrl16)
         }

       

          if((lengthOk1==false && image12==true)){
            newSlides1.imageUrl="image"
            setImageUrl1("image")
          }
          if((lengthOk2==false && image22==true)){
            newSlides2.imageUrl="image"
            setImageUrl2("image")
          }
          if((lengthOk3==false&&image32==true)){
          
             newSlides3.imageUrl="image"
             setImageUrl3("image")
          }
          if((lengthOk4==false&&image42==true)){
          
              newSlides4.imageUrl="image"
              setImageUrl4("image")
          }
          if((lengthOk5==false&&image52==true)){
           
             newSlides5.imageUrl="image"
             setImageUrl5("image")
          }
          if((lengthOk6==false&&image62==true)){
         
             
              setImageUrl6("image")
               newSlides6.imageUrl="image"
          }
    
          if(lengthOk1==true&&image12==false){
             setImageUrl1("video")
            newSlides1.imageUrl="video"
          }
          if(lengthOk2==true&&image22==false){
             setImageUrl2("video")
             newSlides2.imageUrl="video"
          }
          if(lengthOk3==true&&image32==false){
             setImageUrl3("video")
             newSlides3.imageUrl="video"
          }
          if(lengthOk4==true&&image42==false){
           setImageUrl4("video")
              newSlides4.imageUrl="video"
          }
          if(lengthOk5==true&&image52==false){
           setImageUrl5("video")
              newSlides5.imageUrl="video"
          }
          if(lengthOk6==true&&image62==false){
             setImageUrl6("video")
                 newSlides6.imageUrl="video"
          }
    
          if(lengthOk1==false&&image12==false){
             setImageUrl1("")
             newSlides1.imageUrl=""
          }
          if(lengthOk2==false&&image22==false){
             setImageUrl2("")
            newSlides2.imageUrl=""
          }
          if(lengthOk3==false&&image32==false){
             setImageUrl3("")
             newSlides3.imageUrl=""
          }
          if(lengthOk4==false&&image42==false){
             setImageUrl4("")
              newSlides4.imageUrl=""
          }
    
          if(lengthOk5==false&&image52==false){
             setImageUrl5("")
               newSlides5.imageUrl=""
          }
          if(lengthOk6==false&&image62==false){
             setImageUrl6("")
                newSlides6.imageUrl=""
          }
console.log("slidesD",slidesD)
          // if(lengthOk1==true&&image32==true){
          //   setImageUrl3("image")
          //    newSlides3.imageUrl="image"
          // }
          // if(lengthOk2==true&&image22==true){
          //   setImageUrl2("image")
          //    newSlides2.imageUrl="image"
          // }
          // if(lengthOk3==true&&image32==true){
          //   setImageUrl3("image")
          //    newSlides3.imageUrl="image"
          // }
          // if(lengthOk4==true&&image42==true){
          //   setImageUrl4("image")
          //     newSlides4.imageUrl="image"
          // }
    
          
          // if(lengthOk5==true&&image52==true){
          //   setImageUrl5("image")
          //     newSlides5.imageUrl="image"
          // }
      
          // if(lengthOk6==true&&image62==true){
          //   setImageUrl6("image")
          //     newSlides6.imageUrl="image"
          // }
    
    

      }
      
       
        //UrlCheckers();
        setCurrentIndex(i)
      }
      const[six1,setSix1]=useState(false)
      const[six12,setSix12]=useState(false)
      const[sixRight,setSixRight]=useState(false)
      
      const[state3,setState3]=useState(false)

      function checkEmpty3(url){
         
        const video = document.createElement("video");
        video.src = url;
        video.preload = "metadata";
      
        const onLoadedMetadata = () => {
          const duration = video.duration;
          if (duration <20) {
         
            
           if(url==imageOrVideoUrl13){
          
            // newSlides3({ ...newSlides3, imageUrl:"video" })
             setImageUrl3("video")
           setSix1(true)
           setSix12(false)
       
          }
           
          } 
        else {
      
           if(url==imageOrVideoUrl13){
           
            // newSlides3({ ...newSlides3, imageUrl:"" })
              setImageUrl3("")
            setSix1(false)
            setSix12(false)
      
          }
        }
         
          video.removeEventListener("loadedmetadata", onLoadedMetadata);
          video.removeEventListener("error", onError);
          document.body.removeChild(video);
        };
      
        const onError = () => {
          
         
          video.removeEventListener("loadedmetadata", onLoadedMetadata);
          video.removeEventListener("error", onError);
          document.body.removeChild(video);
        };
      
        video.addEventListener("loadedmetadata", onLoadedMetadata);
        video.addEventListener("error", onError);
        document.body.appendChild(video);
      
      
      
        if(url==imageOrVideoUrl13 ){
          for(let j=0;j<image_extension.length;j++){
            if(url.includes(image_extension[j])){
          
              // newSlides3({ ...newSlides3, imageUrl:"image" })
                setImageUrl3("image")
              setSix12(true)
              setSix1(false)
            
            }else{
              setSix1(false)
              setSix12(false)
              
            }
          }
        }
          for(let i=0;i<video_extensions.length;i++){
            if(url?.includes(video_extensions[i])){
              // setImage6("")
            
            
              if( setSix1==true){
            
                // newSlides3({ ...newSlides3, imageUrl:"video" })
                setImageUrl3("video")
                setSix12(false)
              }else{
                setSix1(false)
                setSix12(false)
              }
            
              //x=true
            }
          }  
        

          if( (imageUrl1==""||imageUrl2==""||imageUrl3=="")
            && (six1==false && six12==false)
              )
            {
              setSixRight(false)
              return false
            }else{
              setSixRight(true)
              setState3(true)
              return true
            }
      
      }
      function checkEmpty4(url){
      
         
        const video = document.createElement("video");
        video.src = url;
        video.preload = "metadata";
      
        const onLoadedMetadata = () => {
          const duration = video.duration;
          if (duration <20) {
         
            
           if(url==imageOrVideoUrl14){
          
            // newSlides4({ ...newSlides4, imageUrl:"video" })
              setImageUrl4("video")
           setSix1(true)
           setSix12(false)
       
          }
           
          } 
        else {
      
           if(url==imageOrVideoUrl14){
           
            // newSlides4({ ...newSlides4, imageUrl:"" })
              setImageUrl4("")
            setSix1(false)
            setSix12(false)
      
          }
        }
         
          video.removeEventListener("loadedmetadata", onLoadedMetadata);
          video.removeEventListener("error", onError);
          document.body.removeChild(video);
        };
      
        const onError = () => {
          
         
          video.removeEventListener("loadedmetadata", onLoadedMetadata);
          video.removeEventListener("error", onError);
          document.body.removeChild(video);
        };
      
        video.addEventListener("loadedmetadata", onLoadedMetadata);
        video.addEventListener("error", onError);
        document.body.appendChild(video);
      
      
      
        if(url==imageOrVideoUrl14 ){
          for(let j=0;j<image_extension.length;j++){
            if(url.includes(image_extension[j])){
          
              //newSlides4({ ...newSlides4, imageUrl:"image" })
                setImageUrl4("image")
              setSix12(true)
              setSix1(false)
            
            }else{
              setSix1(false)
              setSix12(false)
              
            }
          }
        }
          for(let i=0;i<video_extensions.length;i++){
            if(url?.includes(video_extensions[i])){
              // setImage6("")
            
            
              if( setSix1==true){
            
                // newSlides4({ ...newSlides4, imageUrl:"video" })
                setImageUrl4("video")
                setSix12(false)
              }else{
                setSix1(false)
                setSix12(false)
              }
            
              //x=true
            }
          }  
        
          if( (imageUrl1==""||imageUrl2==""||imageUrl3==""||imageUrl4=="")
            && (six1==false && six12==false)
              )
            {
              setSixRight(false)
              return false
            }else{
              setSixRight(true)
              setState3(true)
              return true
            }
      }
      function checkEmpty5(url){
      
         
        const video = document.createElement("video");
        video.src = url;
        video.preload = "metadata";
      
        const onLoadedMetadata = () => {
          const duration = video.duration;
          if (duration <20) {
         
            
           if(url==imageOrVideoUrl15){
          
           setImageUrl5("video")
           setSix1(true)
           setSix12(false)
       
          }
           
          } 
        else {
      
           if(url==imageOrVideoUrl15){
           
      setImageUrl5("")
            setSix1(false)
            setSix12(false)
      
          }
        }
         
          video.removeEventListener("loadedmetadata", onLoadedMetadata);
          video.removeEventListener("error", onError);
          document.body.removeChild(video);
        };
      
        const onError = () => {
          
         
          video.removeEventListener("loadedmetadata", onLoadedMetadata);
          video.removeEventListener("error", onError);
          document.body.removeChild(video);
        };
      
        video.addEventListener("loadedmetadata", onLoadedMetadata);
        video.addEventListener("error", onError);
        document.body.appendChild(video);
      
      
      
        if(url==imageOrVideoUrl15 ){
          for(let j=0;j<image_extension.length;j++){
            if(url.includes(image_extension[j])){
          
              // newSlides5({ ...newSlides5, imageUrl:"image" })
              setImageUrl5("image")
              setSix12(true)
              setSix1(false)
            
            }else{
              setSix1(false)
              setSix12(false)
              
            }
          }
        }
          for(let i=0;i<video_extensions.length;i++){
            if(url?.includes(video_extensions[i])){
              // setImage6("")
            
            
              if( setSix1==true){
            
                // newSlides5({ ...newSlides5, imageUrl:"video" })
                   setImageUrl5("video")
                setSix12(false)
              }else{
                setSix1(false)
                setSix12(false)
              }
            
              //x=true
            }
          }  
        
          if( (imageUrl1==""||imageUrl2==""||imageUrl3==""||imageUrl4==""||imageUrl5=="")
            && (six1==false && six12==false)
              )
            {
              setSixRight(false)
              return false
            }else{
              setSixRight(true)
              setState3(true)
              return true
            }
        
        
      }
      
      function checkEmpty6(url){
      
        const video = document.createElement("video");
        video.src = url;
        video.preload = "metadata";
      
        const onLoadedMetadata = () => {
          const duration = video.duration;
          if (duration <20) {
         
            
           if(url==imageOrVideoUrl16){
          // imageUrl6=="video"
          setImageUrl6("video")
           setSix1(true)
           setSix12(false)
       
          }
           
          } 
        else {
      
           if(url==imageOrVideoUrl16){
           
            setImageUrl6("")
            setSix1(false)
            setSix12(false)
      
          }
        }
         
          video.removeEventListener("loadedmetadata", onLoadedMetadata);
          video.removeEventListener("error", onError);
          document.body.removeChild(video);
        };
      
        const onError = () => {
          
         
          video.removeEventListener("loadedmetadata", onLoadedMetadata);
          video.removeEventListener("error", onError);
          document.body.removeChild(video);
        };
      
        video.addEventListener("loadedmetadata", onLoadedMetadata);
        video.addEventListener("error", onError);
        document.body.appendChild(video);
      
      
      
        if(url==imageOrVideoUrl16 ){
          for(let j=0;j<image_extension.length;j++){
            if(url?.includes(image_extension[j])){
          
        setImageUrl6("image")
              setSix12(true)
              setSix1(false)
            
            }else{
              setSix1(false)
              setSix12(false)
              
            }
          }
          for(let i=0;i<video_extensions.length;i++){
            if(url?.includes(video_extensions[i])){
              // setImage6("")
              setImageUrl6("")
            
              if( setSix1==true){
            
            
                // imageUrl6="video"
                setImageUrl6("video")
                setSix12(false)
              }else{
                setSix1(false)
                setSix12(false)
              }
            
              //x=true
          
            }
          }
        }
      
      console.log(six1,six12,newSlides6)
      
      
        if( (imageUrl1==""||imageUrl2==""||imageUrl3==""||imageUrl4==""||imageUrl5==""||
          imageUrl6=="")&& (six1==false && six12==false)
            )
          {
            setSixRight(false)
            return false
          }else{
            setSixRight(true)
            setState3(true)
            return true
          }
      }

    console.log("slidesD",slidesD)
 
let x;
let y;
let z;
let w1;

console.log(category)
    const handleSubmitEdit=async(e)=>
      {
          e.preventDefault();
         let m=checkErrors()
          // if(a==true){
         
    if(currentIndex==3){
      
      
      w1=checkEmpty3(imageOrVideoUrl13)
    
      if(w1==true){
        slidesD=[newSlides1,newSlides2,newSlides3]
      }

      
      }
      //console.log(slidesD)
      if(currentIndex==4){
        slidesD=[]
         x=checkEmpty4(imageOrVideoUrl14)
        if(x==true){
          slidesD=[newSlides1,newSlides2,newSlides3,newSlides4]
        }
     
         
   
        //console.log(slidesD)
      }
      if(currentIndex==5){
        slidesD=[];
         y=checkEmpty5(imageOrVideoUrl15)
        if(y==true){
          slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5]
        }
      
      }
      if(currentIndex==6){
        slidesD=[]
        w1=checkEmpty6(imageOrVideoUrl16)
        console.log(w1)
        if(w1==true){
          slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5,newSlides6]
        }
        
        //console.log(slidesD)
      }
   

          
          let newSlidesInStory=[]
          console.log(newSlides3)
        
          console.log(slidesD, x,y,z,w1,m,image3,image4,image5,image6)
         
        
          newSlidesInStory=slidesD;
          //if( (w1==true||x==true || y==true || z==true )&&(m==true &&!newSlidesInStory.length==0 ))
          if ((m==true)&&(w1==true||x==true||y==true||z==true) &&(sixRight==true ) &&(!newSlidesInStory.length==0 &&category!=="")) {
      
          console.log(newSlidesInStory,category)
          dispatch(editStoryRequest())
         
                  try {
                   
                    const response = await axios.put(`http://localhost:5000/api/v1/story/update/${singleStoryId}`,
                      {category,newSlidesInStory},
                      {
                        withCredentials: true,
                     
                        headers:{
                          Authorization:`Bearer ${token}`
                        }
                      },
                     
                    );
      
                    console.log(response);
                   if(response.data.success=true){
                       //setHandleNextQ((prevState)=>prevState+1)
                  
                       dispatch(editStorySuccess(response.data.message))
                       dispatch(setIsEditStoryOpen(false))
                       dispatch(getAllMyStories())
                       toast.success(response.data.message)
             
      
                   }
         
                  } catch (error) {
                  console.log(error)
                  toast.error(error.response.data.message)
                  dispatch(editStoryFailed(error.response.data.message));
                  }

          
                }  else{
 
                  toast(`,
               check carefully before posting     1.videos should have maximum duration of 15 seconds 2.No fields should be empty 
               3.Enter valid image or video url 4>Please provide category
                     `)
           }
      }

              
       console.log(currentIndex)
    useEffect(() => {
      getEditStory()
  }, [])

  return (
    <section className='edit-story-section'>
      {isEditStoryOpen?(<form className='edit-story-form' onSubmit={handleSubmitEdit}>
        <div className='edit-story-div-heading'>
             <span onClick={()=>handleClose()}>X</span> 
              </div>
             
              <div className='slide-div-heading-condition'>
                    <span>Add upto 6 slides</span>
                </div>  
                <div className='total-div'>
              {<div className='slide-div-heading'>
                <>
                        {/* {slides.map((i,index)=>
                          {
                           //console.log(i)
                            return(
                             
                                 <button type="button" 
                                 className= {`${currentIndex==i.id1 ?"display-slides-button active":"display-slides-button "}`}
                                   key={index} >Slide {i.id1}
                                 {(i.id1==4) ||(i.id1==4) ||(i.id1==6)  &&<span className='cross'
                                 onClick={()=>handleDeleteSlide(i)}>X</span>}  
                                 
                                 </button>
                            )
                           
                          })} */}
                             {slides[0]&&(<div  onClick={()=>handleCurrentSlide(1)}
                                 className= {`${currentIndex== slides[0].id1 ?"display-slides-button-active":"display-slides-button "}`}
                                   > <span>Slide {slides[0].id1}</span>
                                   
                                 
                                 
                                 </div>)}
                                 {slides[1]&&(<div onClick={()=>handleCurrentSlide(2)}
                                 className= {`${currentIndex== slides[1].id1 ?"display-slides-button-active":"display-slides-button "}`}
                                   ><span>Slide {slides[1].id1}</span>
                                 
                                 
                                 </div>)}

                                 {slides[2]&&(<div onClick={()=>handleCurrentSlide(3)}
                                 className= {`${currentIndex== slides[2].id1 ?"display-slides-button-active":"display-slides-button "}`}
                                   ><span>Slide {slides[2].id1}</span>
                                 
                                 
                                 </div>)}

                                 {slides[3] &&(<div onClick={()=>handleCurrentSlide(4)}
                                 className= {`${currentIndex== slides[3].id1 ?"display-slides-button-active":"display-slides-button "}`}
                                   ><span>Slide {slides[3].id1}</span>
                                  <button type="button" onClick={(e)=>handleDeleteSlide(e,4)}
                          className= {`${currentIndex!==4 ||addSlides.includes(6) ?"cross-div-disabled":"cross-div "}`} >X</button>
                                 
                                 </div>)}
                                 {slides[4] &&(
                                  <div onClick={()=>handleCurrentSlide(5)}
                                 className= {`${currentIndex== slides[4].id1 ?"display-slides-button-active":"display-slides-button "}`}
                                   ><span>Slide {slides[4].id1}</span>

                                  <button type="button" onClick={(e)=>handleDeleteSlide(e,5)}
                          className= {`${currentIndex!==5 || addSlides.includes(5)?"cross-div-disabled":"cross-div "}`} >X</button>
                                 
                                 </div>)}

                                 {slides[5] &&(<div onClick={()=>handleCurrentSlide(6)}
                                 className= {`${currentIndex== slides[5].id1 ?"display-slides-button-active":"display-slides-button "}`}
                                   ><span>Slide {slides[5].id1}</span>
                                  <button type="button" onClick={(e)=>handleDeleteSlide(e,6)}
                          className= {`${currentIndex!==6 ?"cross-div-disabled":"cross-div "}`} >X</button>
                                 
                                 </div>)}

            {/* slides.length==3 */}
                </>
                 { addSlides.includes(4) &&
                 (<div type="button" onClick={()=>handleCurrentSlide(4)}
                  className= {`${currentIndex==4 ?"display-slides-button-active":"display-slides-button "}`}
                            ><span>Slide 4</span>
                         <button type="button" onClick={(e)=>handleDeleteSlide(e,4)}
                          className= {`${currentIndex!==4 ||addSlides.includes(5) ?"cross-div-disabled":"cross-div "}`} >X</button>
                         
                         </div>)
               
                           }
                 {addSlides.includes(5) && 
                 (<div onClick={()=>handleCurrentSlide(5)} 
                   className= {`${currentIndex==5 ?"display-slides-button-active":"display-slides-button "}`}
                            ><span>Slide 5</span>
                         <button type="button" className= {`${currentIndex!==5 ||addSlides.includes(6) ?"cross-div-disabled":"cross-div "}`}
                          onClick={(e)=>handleDeleteSlide(e,5)} >X</button>
                         
                         </div>)
               
                           }
                {addSlides.includes(6) &&
                 (<div onClick={()=>handleCurrentSlide(6)} 
                  className= {`${currentIndex==6 ?"display-slides-button-active":"display-slides-button "}`}
                            ><span>Slide 6</span>
                         <button type="button" className= {`${currentIndex!==6 ?"cross-div-disabled":"cross-div"}`}
                          onClick={(e)=>handleDeleteSlide(e,6)} disabled={currentIndex!==6}>X</button>
                         
                         </div>)
               
                           } 

                     
{(!addSlides.includes(6)&&slides.length!==6)&&<div className='display-slides-button'  onClick={()=>handleAddOption()}>
              <span>Add +
                </span></div>}
               </div> }
             {/* <button  type="button" onClick={()=>handleAddOption()}>Add Option</button> */}
               

           
              {currentIndex==1  && 
               
                    <div className='left-question-put-div'>
                       <div>
                     
                      <label htmlFor='heading'>Heading</label>
                       <input type="text" placeholder="Text" value={newSlides1.heading} id="heading" 
                         

                          onChange={(e)=>setHeading1(e.target.value)}/> 
                          
                            {/* // onChange={(e)=>newSlides1({ ...newSlides1, heading: e.target.value })} />   */}
                    
                      </div>
                      <div>
                    
                      <label htmlFor='description'>Description</label>
                          <textarea placeholder="Text" value={newSlides1.description} id="description"  
                       
                          // onChange={(e)=>newSlides1({ ...newSlides1, description: e.target.value })}  ></textarea> 
                            onChange={(e)=>setDescription1(e.target.value)}></textarea>     
                      </div>
                      <div>
                 <label htmlFor='image'>Image</label>
                     <input type="text" placeholder="Text" value={imageOrVideoUrl11} id="image"  
                    onChange={(e)=>setimageOrVideoUrl11(e.target.value)}/>
                   
                 </div>
                 <div>
                 <label htmlFor='category'>Category</label>
                  <select value={category} id="category"     onChange={(e)=>setCategory( e.target.value )} >
                   <option value="food">Food</option>
                   <option value="healthandfitness">Health&Fitness</option>
                   <option value="travel">Travel</option>
                   <option value="movie">Movie</option>
                   <option value="education">Education</option>
                  </select>
                   
                 </div>
                    </div>
                
              

              
              }
              {currentIndex==2  && 
               
               <div className='left-question-put-div'>
                  <div>
                
                 <label htmlFor='heading'>Heading</label>
                  <input type="text" placeholder="Text" value={newSlides2.heading} id="heading" 
                    //  onChange={(e)=>newSlides2({ ...newSlides2, heading: e.target.value })} /> 
                    onChange={(e)=>setHeading2(e.target.value)} />
                 </div>
                 <div>
               
                 <label htmlFor='description'>Description</label>
                     <textarea placeholder="Text" value={newSlides2.description} id="description"   
                    
                      // onChange={(e)=>newSlides2({ ...newSlides2, description: e.target.value })}  ></textarea> 
                      onChange={(e)=>setDescription2(e.target.value)}></textarea>  
                 </div>
                 <div>
                 <label htmlFor='image'>Image</label>
                     <input type="text" placeholder="Text" value={imageOrVideoUrl12} id="image"  
                    onChange={(e)=>setimageOrVideoUrl12(e.target.value)}/>
                   
                 </div>
                 <div>
                 <label htmlFor='category'>Category</label>
                  <select value={category} id="category"     onChange={(e)=>setCategory( e.target.value )} >
                   <option value="food">Food</option>
                   <option value="healthandfitness">Health&Fitness</option>
                   <option value="travel">Travel</option>
                   <option value="movie">Movie</option>
                   <option value="education">Education</option>
                  </select>
                   
                 </div>
               </div>
           
         

         
         }
         {currentIndex===3 && 
               
               <div className='left-question-put-div'>
                  <div>
                
                 <label htmlFor='heading'>Heading</label>
                  <input type="text" placeholder="Text" value={heading3} id="heading" 
                    //  onChange={(e)=>newSlides3({ ...newSlides3, heading: e.target.value })} />
                onChange={(e)=>setHeading3(e.target.value)} />
                 </div>
                 <div>
               
                 <label htmlFor='description'>Description</label>
                     <textarea placeholder="Text" value={description3} id="description"  
                      //  onChange={(e)=>newSlides3({ ...newSlides3, description: e.target.value })}  ></textarea>
                      onChange={(e)=>setDescription3(e.target.value)}></textarea>
                 </div>
                 <div>
                 <label htmlFor='image'>Image</label>
                     <input type="text" placeholder="Text" value={imageOrVideoUrl13} id="image"  
                    onChange={(e)=>setimageOrVideoUrl13(e.target.value)}/>
                   
                 </div> 
                 <div>
                 <label htmlFor='category'>Category</label>
                  <select value={category} id="category"     onChange={(e)=>setCategory( e.target.value )} >
                   <option value="food">Food</option>
                   <option value="healthandfitness">Health&Fitness</option>
                   <option value="travel">Travel</option>
                   <option value="movie">Movie</option>
                   <option value="education">Education</option>
                  </select>
                   
                 </div>
               </div>
           
       

         
         }
         {currentIndex==4  && (
               
               <div className='left-question-put-div'>
                  <div>
                
                 <label htmlFor='heading'>Heading</label>
                  <input type="text" placeholder="Text" value={heading4} id="heading" 
                    //  onChange={(e)=>newSlides4({ ...newSlides4, heading: e.target.value })} />
                    onChange={(e)=>setHeading4(e.target.value)} />
                 </div>
                 <div>
               
                 <label htmlFor='description'>Description</label>
                     <textarea placeholder="Text" value={description4} id="description"  
                      //  onChange={(e)=>newSlides4({ ...newSlides4, description: e.target.value })}  ></textarea>
                      onChange={(e)=>setDescription4(e.target.value)}></textarea>
                 </div>
                  <div>
                 <label htmlFor='image'>Image</label>
                     <input type="text" placeholder="Text" value={imageOrVideoUrl14} id="image"  
                    onChange={(e)=>setimageOrVideoUrl14(e.target.value)}/>
                   
                 </div> 
                 <div>
                 <label htmlFor='category'>Category</label>
                  <select value={category} id="category"     onChange={(e)=>setCategory( e.target.value )} >
                   <option value="food">Food</option>
                   <option value="healthandfitness">Health&Fitness</option>
                   <option value="travel">Travel</option>
                   <option value="movie">Movie</option>
                   <option value="education">Education</option>
                  </select>
                   
                 </div>
               </div>
           
        

         )}
         {currentIndex==5 &&(
               
               <div className='left-question-put-div'>
                  <div>
                
                 <label htmlFor='heading'>Heading</label>
                  <input type="text" placeholder="Text" value={heading5} id="heading" 
                     onChange={(e)=>setHeading5(e.target.value)} />
               
                 </div>
                 <div>
               
                 <label htmlFor='description'>Description</label>
                     <textarea placeholder="Text" value={description5} id="description"  
                      onChange={(e)=>setDescription5(e.target.value)}></textarea>
                   
                 </div>
                 <div>
                 <label htmlFor='image'>Image</label>
                     <input type="text" placeholder="Text" value={imageOrVideoUrl15} id="image"  
                    onChange={(e)=>setimageOrVideoUrl15(e.target.value)}/>
                   
                 </div> 
                 <div>
                 <label htmlFor='category'>Category</label>
                  <select value={category} id="category"     onChange={(e)=>setCategory( e.target.value )} >
                   <option value="food">Food</option>
                   <option value="healthandfitness">Health&Fitness</option>
                   <option value="travel">Travel</option>
                   <option value="movie">Movie</option>
                   <option value="education">Education</option>
                  </select>
                   
                 </div>
               </div>
           
        
         )}
         {currentIndex==6 && (
               
               <div className='left-question-put-div'>
                  <div>
                
                 <label htmlFor='heading'>Heading</label>
                  <input type="text" placeholder="Text" value={heading6} id="heading" 
                      onChange={(e)=>setHeading6(e.target.value)}/>
               
                 </div>
                 <div>
               
                 <label htmlFor='description'>Description</label>
                     <textarea placeholder="Text" value={description6} id="description"  
                        onChange={(e)=>setDescription6(e.target.value)} ></textarea>
                   
                 </div>
                 <div>
                 <label htmlFor='image'>Image</label>
                     <input type="text" placeholder="Text" value={imageOrVideoUrl16} id="image"  
                    onChange={(e)=>setimageOrVideoUrl16(e.target.value)}/>
                   
                 </div>
                 <div>
                 <label htmlFor='category'>Category</label>
                  <select value={category} id="category"     onChange={(e)=>setCategory( e.target.value )} >
                   <option value="food">Food</option>
                   <option value="healthandfitness">Health&Fitness</option>
                   <option value="travel">Travel</option>
                   <option value="movie">Movie</option>
                   <option value="education">Education</option>
                  </select>
                   
                 </div>
               </div>
           
       

         
         )}
     </div>   
             
                  <div className='create-story-buttons'>
                  <div className='create-story-buttons-first-div'>
                <button type="button" disabled={currentIndex == 1} className='common-story-button-previous '
            
                onClick={()=>handlePreviousQuestion()}
            
          >
            Previous
          </button>
                  
                  { slides.length==3&&!addSlides.includes(4)&&
                      <button type="button"   className= {`${currentIndex==3 ?"common-story-button-next":"common-story-button-next-active "}`} 
                      disabled={currentIndex===3  }>Next</button>  } 

                
                  {(slides.length==3)&&
                     (addSlides.includes(4) && !addSlides.includes(5) && !addSlides.includes(6))&&(<button type="button"
                      className= {`${currentIndex==4 ?"common-story-button-next":"common-story-button-next-active "}`} 
                    onClick={()=>handleNextQuestion()} disabled={currentIndex==4}>Next</button>)}

                      {(slides.length==3)&&
                     (addSlides.includes(4) && addSlides.includes(5) && !addSlides.includes(6))&&(<button type="button" 
                      className= {`${currentIndex==5 ?"common-story-button-next":"common-story-button-next-active "}`}
                    onClick={()=>handleNextQuestion()} disabled={currentIndex==5}>Next</button>)}

                    {(slides.length==3)&&
                     (addSlides.includes(4) && addSlides.includes(5) && addSlides.includes(6))&&(<button type="button"
                      className= {`${currentIndex==6 ?"common-story-button-next":"common-story-button-next-active "}`}
                    onClick={()=>handleNextQuestion()} disabled={currentIndex==6}>Next</button>)}

{ slides.length==4&&!addSlides.includes(5)&&
                     <button type="button"  onClick={()=>handleNextQuestion()} 
                     className= {`${currentIndex==4 ?"common-story-button-next":"common-story-button-next-active "}`}
                     disabled={currentIndex==4}>Next</button>  }

                     { slides.length==4&&addSlides.includes(5)&&!addSlides.includes(6)&&
                     <button type="button"  onClick={()=>handleNextQuestion()} 
                     className= {`${currentIndex==5 ?"common-story-button-next":"common-story-button-next-active "}`} 
                     disabled={currentIndex==5}>Next</button>  }

{ slides.length==4&&addSlides.includes(5)&&addSlides.includes(6)&&
                     <button type="button"  onClick={()=>handleNextQuestion()} 
                     className= {`${currentIndex==6 ?"common-story-button-next":"common-story-button-next-active "}`} 
                     disabled={currentIndex==6}>Next</button>  }

    { slides.length==5&&!addSlides.includes(6)&&<button type="button" 
  className= {`${currentIndex==5 ?"common-story-button-next":"common-story-button-next-active "}`} 
    onClick={()=>handleNextQuestion()}disabled={currentIndex==5}>Next</button>  }

    {(slides.length==5)&&(addSlides.includes(6) )&&(<button type="button" 
                    onClick={()=>handleNextQuestion()}  className= {`${currentIndex==6 ?"common-story-button-next":"common-story-button-next-active "}`} 
                    disabled={currentIndex==6}>Next</button>)}

                     { slides.length==6&&<button type="button" onClick={()=>handleNextQuestion()} 
                       className= {`${currentIndex==6 ?"common-story-button-next":"common-story-button-next-active "}`}  disabled={currentIndex==6}>Next</button>  }

       </div>            
<div className='create-story-buttons-second-div'>
                    {(slides.length==3)&&
                     (addSlides.includes(4) && !addSlides.includes(5) && !addSlides.includes(6))&&(<button type="submit" 
                      className= {`${currentIndex<=3 ?"common-story-button-post":"common-story-button-post-active "}`} 
                     disabled={currentIndex<=3}>Post</button>)}

                    {(slides.length==3)&&
                     (addSlides.includes(4) && addSlides.includes(5) && !addSlides.includes(6))&&(<button type="submit" 
                      className= {`${currentIndex<=3 ?"common-story-button-post":"common-story-button-post-active "}`} 
                     disabled={currentIndex<=3}>Post</button>)}

              {/* {(slides.length==3)&&
                     (addSlides.includes(4) || addSlides.includes(5) || addSlides.includes(6))&&(<button type="submit" className='common-story-button ' 
                    onClick={()=>handleNextQuestion()} disabled={currentIndex<=3}>Post</button>)} */}

                    
            {(slides.length==5)&&
                     (addSlides.includes(6) )&&(<button type="submit" 
                      className= {`${currentIndex<=5 ?"common-story-button-post":"common-story-button-post-active "}`} 
                    disabled={currentIndex<=5}>Post</button>)}
                    {/* {(addSlides.includes(4)&&!addSlides.includes(5)&&!addSlides.includes(6))&&
                    <button type="submit" className='common-story-button ' disabled={currentIndex<4}
                     >Post</button>} */}

                     {/* {(slides.length==4&&addSlides.includes(4)&&addSlides.includes(5)&&!addSlides.includes(6))&&
                     <button type="submit" className='common-story-button '  disabled={currentIndex<5}
                    >Post</button>} */}
                     
                     {(slides.length==4)&&
                     (addSlides.includes(4) && !addSlides.includes(5) && !addSlides.includes(6))&&(<button type="submit"
                      className= {`${currentIndex<=4 ?"common-story-button-post":"common-story-button-post-active "}`} 
                    disabled={currentIndex<=4}>Post</button>)}

                    {(slides.length==4&&addSlides.includes(4)&&addSlides.includes(5))&&
                     <button type="submit" 
                     className= {`${currentIndex<=4 ?"common-story-button-post":"common-story-button-post-active "}`} 
                      disabled={currentIndex<=4}
                    >Post</button>}

                       {(slides.length==4&&addSlides.includes(5)&&!addSlides.includes(6))&&
                     <button type="submit"
                     className= {`${currentIndex<5 ?"common-story-button-post":"common-story-button-post-active "}`}   disabled={currentIndex<5}
                    >Post</button>}
                      
                       {(slides.length==4&&addSlides.includes(5)&&addSlides.includes(6))&&
                     <button type="submit"  className= {`${currentIndex<5 ?"common-story-button-post":"common-story-button-post-active "}`}  disabled={currentIndex<=5}
                    >Post</button>} 

                     {(addSlides.includes(6)&&addSlides.includes(5)&&addSlides.includes(4))&&<button type="submit"
                       className= {`${currentIndex<6 ?"common-story-button-post":"common-story-button-post-active "}`} disabled={currentIndex<6}
                     >Post</button>}

                      { slides.length==3&&!addSlides.includes(4)&&
                      <button type="submit"
                      className= {`${currentIndex!==3 ?"common-story-button-post":"common-story-button-post-active "}`}disabled={currentIndex!==3  }>Post</button>  } 

                     { slides.length==4&&!addSlides.includes(5)&&
                     <button type="submit" className= {`${currentIndex!==4 ?"common-story-button-post":"common-story-button-post-active "}`}
                     disabled={currentIndex!==4}>Post</button>  }

                     { slides.length==5&&!addSlides.includes(6)&&<button type="submit" 
            className= {`${currentIndex!==5 ?"common-story-button-post":"common-story-button-post-active "}`} disabled={currentIndex!==5}>Post</button>  }

                     { slides.length==6&&<button type="submit"      className= {`${currentIndex!==6 ?"common-story-button-post":"common-story-button-post-active "}`}
                     disabled={currentIndex!==6}>Post</button>  }
                    </div>
                    </div>
      </form>):(
        <>
        </>
      )}
    </section>
  )
}

        

// function checkForImage(url){
//   // let x=false
// console.log(url)

//     if(url===imageOrVideoUrl11){
//       for(let j=0;j<image_extension.length;j++){
//         if(url.includes(image_extension[j])){
        
//          image1="image"
//        imageUrl1="image"
//          //setImage(true)
//           return "image"
//         }else{
//           image1=""
          
      
//         }
//       }
//       for(let i=0;i<video_extensions.length;i++){
//         if(url.includes(video_extensions[i])){
//            image1="video"
//             imageUrl1="video"
//            setImageUrl1("video")
         
//           //x=true
//           return "video"
//         }else{
//           image1=""
          
//         }
//       }
//     }
//     if(url===newSlides2.imageOrVideoUrl1){
//       for(let j=0;j<image_extension.length;j++){
//         if(url.includes(image_extension[j])){
       
//          image2="image"
//           imageUrl2="image"
//          setImageUrl2("image")
//          //setImage(true)
//           return "image"
//         }else{
//           image2=""
          
      
//         }
//       }
//       for(let i=0;i<video_extensions.length;i++){
//         if(url.includes(video_extensions[i])){
//            image2="video"
//             imageUrl2="video"
//            setImageUrl2("video")
         
//           //x=true
//           return "video"
//         }else{
//           image2=""
          
//         }
//       }
//     }
//     if(url===newSlides3.imageOrVideoUrl1){
//       for(let j=0;j<image_extension.length;j++){
//         if(url.includes(image_extension[j])){
//         imageUrl3="image"
//          image3="image"
//          setImageUrl3("image")
//          //setImage(true)
//           return "image"
//         }else{
//           image3=""
          
      
//         }
//       }
//       for(let i=0;i<video_extensions.length;i++){
//         if(url.includes(video_extensions[i])){
//            image3="video"
//            setImageUrl3("video")
//           imageUrl3="video"
//           //x=true
//           return "video"
//         }else{
//           image3=""
          
//         }
//       }
//     } 
//     if(url===newSlides4.imageOrVideoUrl1){
//       for(let j=0;j<image_extension.length;j++){
//         if(url?.includes(image_extension[j])){
        
//          image4="image"
//             imageUrl4="image"
//         setImageUrl4("image")
//          //setImage(true)
//           return "image"
//         }else{
//           image4=""
          
      
//         }
//       }
//       for(let i=0;i<video_extensions.length;i++){
//         if(url?.includes(video_extensions[i])){
//            image4="video"
//              imageUrl4="video"
//            setImageUrl4("video")
         
//           //x=true
//           return "video"
//         }else{
//           image4=""
          
//         }
//       }
//     } 
//     if(url===newSlides5.imageOrVideoUrl1){
//       for(let j=0;j<image_extension.length;j++){
//         if(url?.includes(image_extension[j])){
       
//          image5="image"
//           imageUrl5="image"
//          setImageUrl5("image")
//          //setImage(true)
//           return "image"
//         }else{
//           image5=""
          
      
//         }
//       }
//       for(let i=0;i<video_extensions.length;i++){
//         if(url?.includes(video_extensions[i])){
//            image5="video"
//             imageUrl5="video"
//            setImageUrl5("video")
         
//           //x=true
//           return "video"
//         }else{
//           image5=""
          
//         }
//       }
//     } if(url===newSlides6.imageOrVideoUrl1){
//       for(let j=0;j<image_extension.length;j++){
//         if(url?.includes(image_extension[j])){
       
//          image6="image"
//          imageUrl6="image"

//         setImageUrl6("image")
//          //setImage(true)
//           return "image"
//         }else{
//           image6=""
       
          
      
//         }
//       }
//       for(let i=0;i<video_extensions.length;i++){
//         if(url?.includes(video_extensions[i])){
//            image6="video"
         
//          imageUrl6="video"
//            setImageUrl6("video")
//           //x=true
//           return "video"
//         }else{
//           image6=""
          
//         }
//       }
//     }
     


//       }


  

 
// if(currentIndex==3){
//   let a=checkForImage(imageOrVideoUrl11)
//   let b=checkForImage(newSlides2.imageOrVideoUrl1)
//   let c=checkForImage(newSlides3.imageOrVideoUrl1)
//   console.log("HHHHHHHHHHHHHHHhhh")
//   slidesD=[]
//   console.log(image3)
//    w=checkErrors()
  
//   if((c=="image")&&(a=="image"||a=="video")&&(b=="image"||b=="video")){
  
 
//    imageUrl3="image"
//     //console.log(imageUrl3)
//     slidesD=[newSlides1,newSlides2,newSlides3]
//   }else if((c=="video")&&(a=="image"||a=="video")&&(b=="image"||b=="video")){
//   imageUrl3="video"
   
//     slidesD=[newSlides1,newSlides2,newSlides3]
//   }

// }
// if(currentIndex==4){
//   let a=checkForImage(imageOrVideoUrl11)
//   let b=checkForImage(newSlides2.imageOrVideoUrl1)
//   let c=checkForImage(newSlides3.imageOrVideoUrl1)
//   let d=checkForImage(newSlides4.imageOrVideoUrl1)
//   x=checkErrors();
//   w=true;
  
//   console.log("HHHHHHHHHHHHHHHhhh")
//   slidesD=[]
//   console.log(image4,x)
//   if((d=="image")&&(c=="image"||c=="video")&&(a=="image"||a=="video")&&(b=="image"||b=="video")){
  
//    // newSlides3({ ...newSlides3, imageUrl:"image"})
//    imageUrl4="image"
//     //console.log(imageUrl3)
//     slidesD=[newSlides1,newSlides2,newSlides3,newSlides4]
//   }else if((d==="video")&&(c=="image"||c=="video")&&(a=="image"||a=="video")&&(b=="image"||b=="video")){
//   imageUrl4="video"
//     //newSlides3({ ...newSlides3, imageUrl:"video"})
//     //console.log(imageUrl3)
//     slidesD=[newSlides1,newSlides2,newSlides3,newSlides4]
//   }
//   //console.log(slidesD)
// }
// if(currentIndex==5){
//   let a=checkForImage(imageOrVideoUrl11)
//   let b=checkForImage(newSlides2.imageOrVideoUrl1)
//   let c=checkForImage(newSlides3.imageOrVideoUrl1)
//   let d=checkForImage(newSlides4.imageOrVideoUrl1)
//   let e=checkForImage(newSlides5.imageOrVideoUrl1)
//   y=checkErrors()
//   w=true;
//   x=true;
  
 
  
//   console.log("HHHHHHHHHHHHHHHhhh")
//   slidesD=[]
//   console.log(image5,y,a)
//   if((e=="image")&& (d=="video"|| d=="image") &&(c=="image"||c=="video")&&(a=="image"||a=="video")&&(b=="image"||b=="video")){
  
//    // newSlides3({ ...newSlides3, imageUrl:"image"})
//    imageUrl5="image"
//     //console.log(imageUrl3)
//     slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5]
//   }else if((e=="video")&& (d=="video"|| d=="image") &&(c=="image"||c=="video")&&(a=="image"||a=="video")&&(b=="image"||b=="video")){
//   imageUrl5="video"
//     //newSlides3({ ...newSlides3, imageUrl:"video"})
//     //console.log(imageUrl3)
//     slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5]
//   }
//   //console.log(slidesD)
// }
// if(currentIndex==6){
//   let a=checkForImage(imageOrVideoUrl11)
//   let b=checkForImage(newSlides2.imageOrVideoUrl1)
//   let c=checkForImage(newSlides3.imageOrVideoUrl1)
//   let d=checkForImage(newSlides4.imageOrVideoUrl1)
//   let e=checkForImage(newSlides5.imageOrVideoUrl1)
//   let f=checkForImage(newSlides6.imageOrVideoUrl1)
//   z=checkErrors();
//   w=true;
//   x=true;
//   y=true;
//   console.log(image6,z)
  
  
//   console.log("HHHHHHHHHHHHHHHhhh")
//   slidesD=[]
//   console.log(image3)
//   if((f=="image")&&(e=="image"||e=="video")&& (d=="video"|| d=="image") &&(c=="image"||c=="video")&&(a=="image"||a=="video")&&(b=="image"||b=="video")){
  
   
//    imageUrl6="image"
   
//     slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5,newSlides6]
//   }else if((f=="video")&&(e=="image"||e=="video")&& (d=="video"|| d=="image") &&(c=="image"||c=="video")&&(a=="image"||a=="video")&&(b=="image"||b=="video")){
//   imageUrl6="video"
 
//     slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5,newSlides6]
//   }
//   //console.log(slidesD)
// }
