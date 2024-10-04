import React, { useEffect, useState } from 'react'
import "./CreateStory.css"
import { useDispatch, useSelector } from 'react-redux'
import { setIsCreateStory } from '../../redux/slice/userSlice'
import { toast } from 'react-toastify';

import { addNewStoryFailed, addNewStoryRequest, addNewStorySuccess, getAllMyStories } from '../../redux/slice/storySlice';







import axios from 'axios';
export default function CreateStory() {


  const{isCreateStory}=useSelector((state)=>state.user)
 
  const dispatch=useDispatch()
  const [handleNextQ, setHandleNextQ] = useState(1)
  const[slides,setSlides]=useState([])
 
  const[ids,setIds]=useState([])
  const [page, setPage] = useState(0);
  const[addSlides,setAddSlides]=useState([])
//console.log(isCreateStory)
  const handleClose=()=>
  {
    console.log(isCreateStory)
    dispatch(setIsCreateStory(false))
  }
  const[image,setImage]=useState(0)
 
 
  const[image1,setImage1]=useState("")
  const[image2,setImage2]=useState("")
  const[image3,setImage3]=useState("")
  const[image4,setImage4]=useState("")
  const[image5,setImage5]=useState("")
  const[image6,setImage6]=useState("")
  const [createQuizErrors, setCreateQuizErrors] = useState({
    slides1: "",
    slides2: "",
    slides3: "",
    slides4: "",
    slides5: "",
    slides6: "",
    emptySlides:"",
    validImageOrVideoUrl4:"",
     validImageOrVideoUrl5:"",
     validImageOrVideoUrl6:""
  });
  const[category,setCategory]=useState("")

  const [newSlides1, setNewSlides1] = useState({
    heading:"",

    description: "",
    imageOrVideoUrl:"",
    imageUrl:"",
    id1:1
  });
  const [newSlides2, setNewSlides2] = useState({
    heading:"",
    imageUrl:"",
    description: "",
    imageOrVideoUrl:"",
    // category:category,
    id1:2
  });
  const [newSlides3, setNewSlides3] = useState({
    heading:"",
    description: "",
    imageOrVideoUrl:"",
    imageUrl:"",
    id1:3
  });
  const [currentSlide, setNewCurrentSlide] = useState({
    heading:"",
    imageUrl:"",
    description: "",
    imageOrVideoUrl:"",
    
    id1:6
  });
 const [newSlides4, setNewSlides4] = useState({
    heading:"",
    imageUrl:"",
    description: "",
    imageOrVideoUrl:"",
   
    id1:4
  });
  const [newSlides5, setNewSlides5] = useState({
    heading:"",
    imageUrl:"",
    description: "",
    imageOrVideoUrl:"",
   
    id1:5
  })
  const[lengthOk1,setLengthOk1]=useState(false)
  const[lengthOk2,setLengthOk2]=useState(false)
  const[lengthOk3,setLengthOk3]=useState(false)
  const[lengthOk4,setLengthOk4]=useState(false)
  const[lengthOk5,setLengthOk5]=useState(false)
  
  const[lengthOk6,setLengthOk6]=useState(false)

  let length1=false
  let length2=false
  let length3=false
  let length4=false
  let length5=false
  let length6=false
  let image11=false
  let image21=false
  let image31=false
  let image41=false
  let image51=false
  let image61=false
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
          if(url==newSlides1.imageOrVideoUrl){
            setLengthOk1(true)
            setNewSlides1({ ...newSlides1, imageUrl:"video" })
            setImage12(false)
            length1=true
            image11=true
          
          }
          if(url==newSlides2.imageOrVideoUrl){
            setLengthOk2(true)
            setNewSlides2({ ...newSlides2, imageUrl:"video" })
            setImage22(false)
            length2=true
            image21=true
          
          } if(url==newSlides3.imageOrVideoUrl){
            setLengthOk3(true)
            setImage32(false)
            setNewSlides3({ ...newSlides3, imageUrl:"video" })
            length3=true
            image31=true
            console.log("length less than 16 sec")
          } if(url==newSlides4.imageOrVideoUrl){
            setLengthOk4(true)
            setImage42(false)
            setNewSlides4({ ...newSlides4, imageUrl:"video" })
            length4=true
            image41=true
            console.log("length less than 16 sec")
          } if(url==newSlides5.imageOrVideoUrl){
            setLengthOk5(true)
            setImage52(false)
            setNewSlides5({ ...newSlides5, imageUrl:"video" })
            length5=true
            image51=true
            console.log("length less than 16 sec")
          }
         if(url==currentSlide.imageOrVideoUrl){
          setLengthOk6(true)
          setImage62(false)
          setNewCurrentSlide({ ...currentSlide, imageUrl:"video" })
          length6=true
          image61=true
          console.log("length less than 16 sec")
        }
         
        } 
      else {
          
          resolve(false);
          if(url==newSlides1.imageOrVideoUrl){
            setLengthOk1(false)
            setNewSlides1({ ...newSlides1, imageUrl:"" })
            length1=false
          
          }
          if(url==newSlides2.imageOrVideoUrl){
            setLengthOk2(false)
            setNewSlides2({ ...newSlides2, imageUrl:"" })
            length2=false
          } if(url==newSlides3.imageOrVideoUrl){
            setLengthOk3(false)
            setNewSlides3({ ...newSlides3, imageUrl:"" })
            length3=false
          } if(url==newSlides4.imageOrVideoUrl){
            setLengthOk4(false)
            setNewSlides4({ ...newSlides4, imageUrl:"" })
            length4=false
          } if(url==newSlides5.imageOrVideoUrl){
            setLengthOk5(false)
            setNewSlides5({ ...newSlides5, imageUrl:"" })
            length5=false
          }
         if(url==currentSlide.imageOrVideoUrl){
          setLengthOk6(false)
          setNewCurrentSlide({ ...currentSlide, imageUrl:"" })
          length6=false

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
    
 
  function checkForImage1 (url){

    
      if(url===newSlides1.imageOrVideoUrl){
      
        for(let j=0;j<image_extension.length;j++){
          if(url.includes(image_extension[j])){
       
           setImage1("image")
           setImage12(true)
          image11=true
             setNewSlides1({ ...newSlides1, imageUrl:"image" })
           //newSlides1.imageUrl=="image"
        
           //setImage(true)
            return "image"
          }else{
             setImage1("")
            image11=false
        
          }
        }
        for(let i=0;i<video_extensions.length;i++){
         
          // const isValid = await isValidVideoDuration(videoUrl);
          //   setLengthOk(isValid);
    
          if(url.includes(video_extensions[i])){
            
                   let p=  isValidVideoDuration(newSlides1.imageOrVideoUrl)

             if(lengthOk1== true ){
              setImage1("video")
             
        
              //newSlides1.imageUrl=="video"
              setNewSlides1({ ...newSlides1, imageUrl:"video" })
             }
           
            
           
            //x=true
            return "video"
          }else{
            //image1=""
           
   
             setImage1("")
            
          }
        }
      }
   
  }
   function checkForImage2(url){



    
      if(url===newSlides2.imageOrVideoUrl ){
       
        for(let j=0;j<image_extension.length;j++){
          if(url.includes(image_extension[j])){
       
            image21=true
          setImage2("image")
          setImage22(true)
             setNewSlides2({ ...newSlides2, imageUrl:"image" })
            // newSlides2.imageUrl=="image"
        
           //setImage(true)
            return "image"
          }else{ 
             setImage2("")
            image21=false
        
          }
        }
        for(let i=0;i<video_extensions.length;i++){
          if(url.includes(video_extensions[i])){
            let q=  isValidVideoDuration(newSlides2.imageOrVideoUrl)
            
          
            if(lengthOk2==true   ){
             
              setImage2("video")
               setNewSlides2({ ...newSlides2, imageUrl:"video" })
              //  newSlides2.imageUrl=="video"
             }
         
            //x=true
            return "video"
          }else{
           
           
             setImage2("")
            
          }
        }
      }
   
    }
    function checkForImage3(url){
    

    
  
      if(url==newSlides3.imageOrVideoUrl ){
        for(let j=0;j<image_extension.length;j++){
          if(url.includes(image_extension[j])){
         
         
           image31=true
          setImage3("image")
          setImage32(true)
             setNewSlides3({ ...newSlides3,  imageUrl:"image" })
            // newSlides3.imageUrl=="image"
         
           //setImage(true)
            return "image"
          }else{
              image31=false
            setImage3("")
            
        
          }
        }
        for(let i=0;i<video_extensions.length;i++){
          if(url.includes(video_extensions[i])){
            let r=  isValidVideoDuration(newSlides3.imageOrVideoUrl)
           
            //
          
      
            //x=true
            
            if(lengthOk3==true   ){
              setImage3("video")
             
              //  newSlides3.imageUrl=="video"
               setNewSlides3({ ...newSlides3, imageUrl:"video" })
             }
            return "video"
          }else{
           
      
         setImage3("video")
          }
        }
      } 
    
  }
    function checkForImage4(url){
   

    
  
      if(url==newSlides4.imageOrVideoUrl){
        for(let j=0;j<image_extension.length;j++){
          if(url.includes(image_extension[j])){
      
            image41=true
          setImage4("image")
          setImage42(true)
          setNewSlides4({ ...newSlides4, imageUrl:"image" })
          // newSlides4.imageUrl="image"
           //setImage(true)
            return "image"
          }else{
           setImage4("")
           image41=false
        //  newSlides4.imageUrl=""
          }
        }
        for(let i=0;i<video_extensions.length;i++){

          if(url.includes(video_extensions[i])){
              let s=  isValidVideoDuration(newSlides4.imageOrVideoUrl)
  
            //
             if( lengthOk4==true){
              setImage4("video")
               
                // newSlides4.imageUrl="video"
              setNewSlides4({ ...newSlides4, imageUrl:"video" })
             }
          
            //x=true
            return "video"
          }else{
           
            setImage4("")
           
            // newSlides4.imageUrl=""
          }
        }
      } 
   
  }
   function checkForImage5(url){

    
      if(url==newSlides5.imageOrVideoUrl ){
        for(let j=0;j<image_extension.length;j++){
          if(url.includes(image_extension[j])){
         
           setImage5("image")
           setImage52(true)
          image51=true
           //setImage(true)
           setNewSlides5({ ...newSlides5, imageUrl:"image" })
            // newSlides5.imageUrl="image"
            return "image"
          }else{
            image51=false
            setImage5("")
          // newSlides5.imageUrl=""
          }
        }
        for(let i=0;i<video_extensions.length;i++){
          if(url.includes(video_extensions[i])){
            //
            let t=  isValidVideoDuration(newSlides5.imageOrVideoUrl)
          
            if( lengthOk5==true){
              
               setImage5("video")
              setNewSlides5({ ...newSlides5, imageUrl:"video" })
              //  newSlides5.imageUrl="video"
             }
          
            //x=true
            return "video"
          }else{
          
         
             setImage5("")
            //  newSlides5.imageUrl=""
          }
        }
      } 
    
    }
  
  function checkForImage6(url){
 

    
      if(url==currentSlide.imageOrVideoUrl ){
        for(let j=0;j<image_extension.length;j++){
          if(url.includes(image_extension[j])){
        
           image61=true
           setImage6("image")
           setImage62(true)
            setNewCurrentSlide({ ...currentSlide, imageUrl:"image" })
          // currentSlide.imageUrl="image"
           //setImage(true)
            return "image"
          }else{
            setImage6("")
            image61=false
        //  currentSlide.imageUrl=""
          }
        }
        for(let i=0;i<video_extensions.length;i++){
          if(url.includes(video_extensions[i])){
            // setImage6("")
            let t=  isValidVideoDuration(currentSlide.imageOrVideoUrl)
          
            if( lengthOk6==true){
           
              setImage6("image")
              setNewCurrentSlide({ ...currentSlide, imageUrl:"video" })
              // currentSlide.imageUrl="video"
            }
          
            //x=true
            return "video"
          }else{
          
             setImage6("")
            
              // currentSlide.imageUrl=""
          }
        }
      }
    
  } 



      //   const checkDuration = async () => {
      //     // 
      //     setLoading(true);
      //     setError('');
      //     setDuration(null);
  
      //     const videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
      //     try {
      //         // Load ffmpeg.wasm if not already loaded
      //         if (!ffmpeg.isLoaded()) {
      //           await ffmpeg.load();
      //       }
  
      //         // Fetch the video file from the URL
      //         const response = await fetch(videoUrl);
      //         if (!response.ok) throw new Error('Failed to fetch video');
  
      //         const blob = await response.blob();
  
      //         // Extract file name and extension from the URL
      //         const urlParts = videoUrl.split('/');
      //         const fileName = urlParts[urlParts.length - 1];
  
      //         // Write the video file to FFmpeg's filesystem
      //         ffmpeg.FS('writeFile', fileName, await ffmpeg.fetchFile(blob));
  
      //         // Use ffmpeg to get video information
      //         await ffmpeg.run('-i', fileName);
      //         const data = ffmpeg.FS('readFile', fileName);
  
      //         const decoder = new TextDecoder('utf-8');
      //         const result = decoder.decode(data);
      //         const durationMatch = result.match(/Duration: (\d+):(\d+):(\d+.\d+)/);
  
      //         if (durationMatch) {
      //             const hours = parseInt(durationMatch[1], 10);
      //             const minutes = parseInt(durationMatch[2], 10);
      //             const seconds = parseFloat(durationMatch[3]);
  
      //             // Convert duration to total seconds
      //             const totalDuration = hours * 3600 + minutes * 60 + seconds;
      //             console.log("total duration",totalDuration)
      //             setDuration(totalDuration);
      //         } else {
      //             setError('Could not retrieve video duration.');
      //         }
      //     } catch (err) {
      //         console.error('Error:', err);
      //         setError('Error fetching video duration. Please check the URL.');
      //     } finally {
      //         setLoading(false);
      //     }
      // };
        
       
     
      
// useEffect(()=>
// {
// checkDuration()
// },[])
    //  const checkDuration=async()=>
    // {
    
    // }
   


  
// let a,b,c,d,e,f;
 
  const[delete4,setDelete4]=useState(false)
//  const [newSlides,setNewSlides]=useState([newSlides1,newSlides2,newSlides3,newSlides4])
let slidesD=[];


// if(ids.includes(1)&&ids.includes(2)&&ids.includes(3)&&ids.includes(4)&&ids.includes(5)&&ids.includes(6)){
//    slidesD=[...slides,newSlides4]
// }
// if(ids.includes(1)&&ids.includes(2)&&ids.includes(3)&&ids.includes(4)||ids.includes(5)||ids.includes(6)){
//   slidesD=[...slides,newSlides4]
// }


function UrlCheckers(){
  // a=checkForImage(newSlides1.imageOrVideoUrl)

  // b=checkForImage(newSlides2.imageOrVideoUrl)
 
  // c=checkForImage(newSlides3.imageOrVideoUrl)
  d=checkForImage(newSlides4.imageOrVideoUrl)
  e=checkForImage(newSlides5.imageOrVideoUrl)
f=checkForImage(currentSlide.imageOrVideoUrl)
console.log(d,e,f)
//  if(a=="image"){
//    setNewSlides1({ ...newSlides1, imageUrl:"image" })
//  }
//  else if(a=="video"){
//    setNewSlides1({ ...newSlides1, imageUrl:"video" })
//  }
 
//  if(b=="image"){
//    setNewSlides2({ ...newSlides2, imageUrl:"image"})
//  }else if(b=="video"){
//    setNewSlides2({ ...newSlides2, imageUrl:"video" })
//  }
//  if(c=="image"){
//    setNewSlides3({ ...newSlides3, imageUrl:"image"})
//  }else if(c=="video"){
//    setNewSlides3({ ...newSlides3, imageUrl:"video" })
//  }
 if(d=="image"){
   setNewSlides4({ ...newSlides4, imageUrl:"image" })
 }else if(d=="video"){
   setNewSlides4({ ...newSlides4, imageUrl:"video" })
 }
 if(e=="image"){
   setNewSlides5({ ...newSlides5,imageUrl:"image"  })
 }else if(e=="video"){
   setNewSlides5({ ...newSlides5,imageUrl:"video"  })
 }
 if(f=="image"){
   setNewCurrentSlide({ ...currentSlide,imageUrl:"image"  })
 }else if(f=="video"){
 setNewCurrentSlide({ ...currentSlide,imageUrl:"video"  })
 }


}

if(handleNextQ==1 ||addSlides.includes(4)||addSlides.includes(5)||addSlides.includes(6)){
  // UrlCheckers()
  slidesD=[newSlides1,newSlides2,newSlides3]
}

if(handleNextQ==2 ||addSlides.includes(4)||addSlides.includes(5)||addSlides.includes(6)){
  // UrlCheckers()
  slidesD=[newSlides1,newSlides2,newSlides3]
}

if((handleNextQ==3) ||(addSlides.includes(4)||addSlides.includes(5)||addSlides.includes(6)) ||(ids.length>0)){
  
  slidesD=[newSlides1,newSlides2,newSlides3]
}
if(handleNextQ==4 ||addSlides.includes(4)){

   

  slidesD=[newSlides1,newSlides2,newSlides3,newSlides4]
}
if(handleNextQ==5||addSlides.includes(5)){
  // UrlCheckers()
 
  slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5]
}

if(handleNextQ==6 ||addSlides.includes(6)){

  slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5,currentSlide]
}

let k;
const slidesC=["1","2","3"]


function checkErrors(){
  
  let newErrors1={...createQuizErrors}
  let a=checkForImage1(newSlides1.imageOrVideoUrl)

  if((newSlides1.heading===""||newSlides1.description===""||newSlides1.imageOrVideoUrl==="" &&(lengthOk1==false&&image12==false)
) &&(handleNextQ==1)){
    newErrors1.slides1="Please fill all details or enter valid image or url" 
    toast("Please fill all details or enter valid image or video url ")
  }else{
    newErrors1.slides1=""
 }
 let b=checkForImage2(newSlides2.imageOrVideoUrl)

 if((newSlides2.heading===""||newSlides2.description===""||newSlides2.imageOrVideoUrl===""&&(lengthOk2==false&&image22==false)
)&& (handleNextQ==2)){
  newErrors1.slides2="Please fill all details or enter valid image or video url "
  toast("Please fill all details or enter valid image or video url  " )
}else{
  
  newErrors1.slides2=""
}

if(slidesD.length==3||handleNextQ==3){
  let c=checkForImage3(newSlides3.imageOrVideoUrl)
  if(  newSlides1.heading=="" || newSlides1.description=="" || newSlides1.imageOrVideoUrl==""||
    newSlides2.heading=="" || newSlides2.description=="" || newSlides2.imageOrVideoUrl==""||
    newSlides3.heading=="" || newSlides3.description=="" || newSlides3.imageOrVideoUrl=="" 
  ||newSlides1.imageUrl==""||newSlides2.imageUrl==""||newSlides3.imageUrl==""){
    newErrors1.slides3="Please fill all details upto slide3"
    toast.error("Please fill all Details upto slide3")
  }else{
    newErrors1.slides3=""
  }
}

if(slidesD.length==4||handleNextQ==4){
  let d=checkForImage4(newSlides4.imageOrVideoUrl)
  if(  newSlides1.heading=="" || newSlides1.description=="" || newSlides1.imageOrVideoUrl==""||
    newSlides2.heading=="" || newSlides2.description=="" || newSlides2.imageOrVideoUrl==""||
    newSlides3.heading=="" || newSlides3.description=="" || newSlides3.imageOrVideoUrl==""||
    newSlides4.heading=="" || newSlides4.description=="" || newSlides4.imageOrVideoUrl==""
    
  ||newSlides1.imageUrl==""||newSlides2.imageUrl==""||newSlides3.imageUrl==""||newSlides4.imageUrl==""){
    newErrors1.slides4="Please fill all details upto slide4"
    toast.error("Please fill all Details upto slide4")
  }else{
    newErrors1.slides4=""
  }
}
if(slidesD.length==5||handleNextQ==5){
  let e=checkForImage5(newSlides5.imageOrVideoUrl)
  if( newSlides1.heading=="" || newSlides1.description=="" || newSlides1.imageOrVideoUrl==""||
    newSlides2.heading=="" || newSlides2.description=="" || newSlides2.imageOrVideoUrl==""||
    newSlides3.heading=="" || newSlides3.description=="" || newSlides3.imageOrVideoUrl==""||
    newSlides4.heading=="" || newSlides4.description=="" || newSlides4.imageOrVideoUrl==""||
     newSlides5.heading=="" || newSlides5.description=="" || newSlides5.imageOrVideoUrl==""
    
  ||newSlides1.imageUrl==""||newSlides2.imageUrl==""||newSlides3.imageUrl==""||newSlides4.imageUrl==""||newSlides5.imageUrl==""){
    newErrors1.slides5="Please fill all details upto slide5"
    toast.error("Please fill all Details upto slide 5")
  }else{
    newErrors1.slides5=""
  }
}

if(slidesD.length==6||handleNextQ==6){
  let f=checkForImage6(currentSlide.imageOrVideoUrl)
  if(  newSlides1.heading=="" || newSlides1.description=="" || newSlides1.imageOrVideoUrl==""||
    newSlides2.heading=="" || newSlides2.description=="" || newSlides2.imageOrVideoUrl==""||
    newSlides3.heading=="" || newSlides3.description=="" || newSlides3.imageOrVideoUrl==""||
    newSlides4.heading=="" || newSlides4.description=="" || newSlides4.imageOrVideoUrl==""||
     newSlides5.heading=="" || newSlides5.description=="" || newSlides5.imageOrVideoUrl==""||
        currentSlide.heading=="" || currentSlide.description=="" || currentSlide.imageOrVideoUrl==""
    
  ||newSlides1.imageUrl==""||newSlides2.imageUrl==""||newSlides3.imageUrl==""||newSlides4.imageUrl==""||newSlides5.imageUrl==""
    ||currentSlide.imageUrl==""
  ){
    newErrors1.slides6="Please fill all details upto slide6"
    toast.error("Please fill all Details upto slide 6 ")
  }else{
    newErrors1.slides6=""
  }
}


// if(addSlides.includes(4)||addSlides.includes(5)||addSlides.includes(6)){

//   if(  newSlides1.heading=="" || newSlides1.description=="" || newSlides1.imageOrVideoUrl==""||
//     newSlides2.heading=="" || newSlides2.description=="" || newSlides2.imageOrVideoUrl==""||
//     newSlides3.heading=="" || newSlides3.description=="" || newSlides3.imageOrVideoUrl==""||
//     newSlides4.heading=="" || newSlides4.description=="" || newSlides4.imageOrVideoUrl==""||
//     newSlides5.heading=="" || newSlides5.description=="" || newSlides5.imageOrVideoUrl==""||
//     currentSlide.heading=="" || currentSlide.description=="" || currentSlide.imageOrVideoUrl==""
//   ){
//     newErrors1.emptySlides="Please fill all details"
//     toast("Please fill all Details")
//   }else{
//     newErrors1.emptySlides=""
//   }
// }






console.log(newErrors1.slides1,newErrors1.slides3,newErrors1.emptySlides,newErrors1.validImageOrVideoUrl4,
  newErrors1.validImageOrVideoUrl5,newErrors1.validImageOrVideoUrl6
)
 if(
  newErrors1.slides1==="" &&
  newErrors1.slides2===""&&
   newErrors1.slides3===""&&
   newErrors1.slides4===""&&
 newErrors1.slides5===""&&
   newErrors1.slides6===""&&
   newErrors1.emptySlides===""
  //  newErrors1.validImageOrVideoUrl4=="" &&
  //  newErrors1.validImageOrVideoUrl5==""&&
  //  newErrors1.validImageOrVideoUrl6==""
)
{
  k=true
  return true
}else{
 
  return false
}
}
//console.log("lengthOk",lengthOk)

  const handleNextQuestion=()=>
  {
  



    // let a= checkErrors()
   
    setIds((prevState)=>{
      
      if(!prevState.includes(handleNextQ))
      {
        setHandleNextQ((prev)=>prev+1)

        //setHandlePrevQ([])
        if(handleNextQ===1){
          setSlides((prevState)=>[...prevState,newSlides1])
         }
         if(handleNextQ===2){
          setSlides((prevState)=>[...prevState,newSlides2])
         }
         
         if(handleNextQ===3){
          setSlides((prevState)=>[...prevState,newSlides3])
         }
         if(handleNextQ===4){
          setSlides((prevState)=>[...prevState,newSlides4])
         }
         if(handleNextQ===5){
          setSlides((prevState)=>[...prevState,newSlides5])
         }
         if(handleNextQ===6){
          setSlides((prevState)=>[...prevState,currentSlide])
         }
         
   
        console.log(slides)
      
 
        return [...prevState,handleNextQ]
        
      }
     else{
      console.log(handleNextQ)
     
      
      setHandleNextQ((prev)=>prev+1)
 
if(handleNextQ==1){
      setSlides((prevState)=>
        prevState.map((elem)=>
        {
          // console.log(elem)
          if(elem.id1==1){
            return{...elem,heading:newSlides1.heading,description:newSlides1.description,imageOrVideoUrl:newSlides1.imageOrVideoUrl,category:newSlides1.category}
          }
          return elem
        })
      
      )
    }
    if(handleNextQ==2){
      setSlides((prevState)=>
        prevState.map((elem)=>
        {
          // console.log(elem)
          if(elem.id1==2){
            return{...elem,heading:newSlides2.heading,description:newSlides2.description,imageOrVideoUrl:newSlides2.imageOrVideoUrl,category:newSlides2.category}
          }
          return elem
        })
      
      )
    }
    if(handleNextQ==3){
      setSlides((prevState)=>
        prevState.map((elem)=>
        {
          // console.log(elem)
          if(elem.id1==3){
            return{...elem,heading:newSlides3.heading,description:newSlides3.description,imageOrVideoUrl:newSlides3.imageOrVideoUrl,category:newSlides3.category}
          }
          return elem
        })
      
      )
    }
    if(handleNextQ==4){
      setSlides((prevState)=>
        prevState.map((elem)=>
        {
          // console.log(elem)
          if(elem.id1==4){
            return{...elem,heading:newSlides4.heading,description:newSlides4.description,imageOrVideoUrl:newSlides4.imageOrVideoUrl,category:newSlides4.category}
          }
          return elem
        })
      
      )
    }
    if(handleNextQ==5){
      setSlides((prevState)=>
        prevState.map((elem)=>
        {
          // console.log(elem)
          if(elem.id1==5){
            return{...elem,heading:newSlides5.heading,description:newSlides5.description,imageOrVideoUrl:newSlides5.imageOrVideoUrl,category:newSlides5.category}
          }
          return elem
        })
      
      )
    }
    if(handleNextQ==6){
      setSlides((prevState)=>
        prevState.map((elem)=>
        {
          console.log(elem)
          if(elem.id1==6){
            return{...elem,heading:currentSlide.heading,description:currentSlide.description,imageOrVideoUrl:currentSlide.imageOrVideoUrl,category:currentSlide.category}
          }
          return elem
        })
      
      )
    }
      // setHandlePrevQ([])
      return prevState
     }
   
    })
      
    
  }
   
     console.log(lengthOk1,lengthOk2,lengthOk3,lengthOk4,lengthOk5,lengthOk6)
     console.log(image12,image22,image32,image42,image52,image62)
     console.log(length1,length2,length3,length4,length5,length6)

//     useEffect(()=>
//       {
//         // console.log(image1,image2,image3,image4,image5,image6)
         
       
//         //  console.log(image11,image21,image31,image41,image51,image61)
//         //  console.log("image1" ,image1,"image2", image2,"image3", image3,"image4",image4,"image5", image6,"image6",image6)
//     //     newSlides1.imageUrl=""
//     //  newSlides2.imageUrl=""
//     //   newSlides3.imageUrl=""
//     //    newSlides4.imageUrl=""
//     //     newSlides5.imageUrl=""
    

// if(lengthOk4==false&&image42==true){

//   setNewSlides4({ ...newSlides5, imageUrl:"image" })
// }
// if(lengthOk5==false&&image52==true){
//   setNewSlides5({ ...newSlides5, imageUrl:"image" })
// }
// if(lengthOk6==false&&image62==true){
//   setNewCurrentSlide({ ...newSlides5, imageUrl:"image" })
// }


// if(lengthOk4==true&&image42==false){
//   setNewSlides4({ ...newSlides5, imageUrl:"video" })
// }
// if(lengthOk5==true&&image52==false){
//   setNewSlides5({ ...newSlides5, imageUrl:"video" })
// }
// if(lengthOk6==true&&image62==true){
//   setNewCurrentSlide({ ...newSlides5, imageUrl:"video" })
// }



// if(lengthOk4==false&&image42==false){
//   setNewSlides4({ ...newSlides5, imageUrl:"" })
// }
// if(lengthOk5==false&&image52==false){
//   setNewSlides5({ ...newSlides5, imageUrl:"" })
// }
// if(lengthOk6==false&&image62==false){
//   setNewCurrentSlide({ ...currentSlide, imageUrl:"" })
// }


       
      
//       },[handleNextQ==4||handleNextQ==5||handleNextQ==6])
      // useEffect(()=>
      //   {
      //   UrlCheckers();
      //     console.log(a,b,c,d,e,f)
        
      //   },[addSlides.includes(4)||addSlides.includes(5)||addSlides.includes(6)])
  // 
   const handlePreviousQuestion=()=>
   {
    //setPreviousQ(true)
    //setNewQ(false)
    setHandleNextQ((prev)=>prev-1)
    console.log(handleNextQ)

   }

  
   
  const handleAddOption=()=>
  {
    if(!addSlides.includes(4)){
      //ids.push(5)
      //setSlides((prevState)=>[...prevState,newSlides5])
      setAddSlides((prevState)=>[...prevState,4])
      //slidesE.push(5)
     
    }
    else if(!addSlides.includes(4)||!addSlides.includes(5)){
      //ids.push(5)
      //setSlides((prevState)=>[...prevState,newSlides5])
      setAddSlides((prevState)=>[...prevState,5])
      //slidesE.push(5)
     
    }
    // else if(!ids.includes(5)|| !ids.includes(6)){
    //   ids.push(6)
    //   setAddSlides((prevState)=>[...prevState,6])
    //   //setSlides((prevState)=>[...prevState,currentSlide])
    // }
     else if(!addSlides.includes(5)||!addSlides.includes(6)){
     
      setAddSlides((prevState)=>[...prevState,6])
      //setSlides((prevState)=>[...prevState,currentSlide])
    }
   
   
 
  }
  //console.log(ids)
  const handleDeleteSlide=(e,i)=>
  {

    e.stopPropagation()
    console.log(i)
   //slidesD.splice(i-1,1)
  // slides.filter((i)=>{

  
  //   return i.id1!=i})

//   slidesD.filter((i)=>{
// return i.id1!=i
//   })
//slides.splice(i-2,1)
if(i==4){
  addSlides.splice(0,1)
  //slidesD.splice(i-1,2)
  ids.splice(2,1)
  setDelete4(true)
}
if(i==5){
  ids.splice(3,1)
  addSlides.splice(1,1)
}
if(i==6){
  ids.splice(4,1)
  addSlides.splice(2,1)
}
setHandleNextQ((prev)=>prev-1)
// addSlides.filter((cur)=>
//   {
//     return cur!==i})
slides.splice(i-2,1)
///slidesD.splice(i-1,2)
slidesD.splice(i-1,1)
  console.log(slides)
  console.log(slidesD)
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
   
      
     if(url==newSlides3.imageOrVideoUrl){
    
      setNewSlides3({ ...newSlides3, imageUrl:"video" })
     setSix1(true)
     setSix12(false)
 
    }
     
    } 
  else {

     if(url==newSlides3.imageOrVideoUrl){
     
      setNewSlides3({ ...newSlides3, imageUrl:"" })
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



  if(url==newSlides3.imageOrVideoUrl ){
    for(let j=0;j<image_extension.length;j++){
      if(url.includes(image_extension[j])){
    
        setNewSlides3({ ...newSlides3, imageUrl:"image" })
        setSix12(true)
        setSix1(false)
      
      }else{
        setSix1(false)
        setSix12(false)
        
      }
    }
  }
    for(let i=0;i<video_extensions.length;i++){
      if(url.includes(video_extensions[i])){
        // setImage6("")
      
      
        if( setSix1==true){
      
          setNewSlides3({ ...newSlides3, imageUrl:"video" })
          setSix12(false)
        }else{
          setSix1(false)
          setSix12(false)
        }
      
        //x=true
      }
    }  
  
    if( (newSlides1.imageUrl==""||newSlides2.imageUrl==""||newSlides3.imageUrl=="")
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
   
      
     if(url==newSlides4.imageOrVideoUrl){
    
      setNewSlides4({ ...newSlides4, imageUrl:"video" })
     setSix1(true)
     setSix12(false)
 
    }
     
    } 
  else {

     if(url==newSlides4.imageOrVideoUrl){
     
      setNewSlides4({ ...newSlides4, imageUrl:"" })
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



  if(url==newSlides4.imageOrVideoUrl ){
    for(let j=0;j<image_extension.length;j++){
      if(url.includes(image_extension[j])){
    
        setNewSlides4({ ...newSlides4, imageUrl:"image" })
        setSix12(true)
        setSix1(false)
      
      }else{
        setSix1(false)
        setSix12(false)
        
      }
    }
  }
    for(let i=0;i<video_extensions.length;i++){
      if(url.includes(video_extensions[i])){
        // setImage6("")
      
      
        if( setSix1==true){
      
          setNewSlides4({ ...newSlides4, imageUrl:"video" })
          setSix12(false)
        }else{
          setSix1(false)
          setSix12(false)
        }
      
        //x=true
      }
    }  
  
    if( (newSlides1.imageUrl==""||newSlides2.imageUrl==""||newSlides3.imageUrl==""||newSlides4.imageUrl=="")
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
   
      
     if(url==newSlides5.imageOrVideoUrl){
    
      setNewSlides5({ ...newSlides5, imageUrl:"video" })
     setSix1(true)
     setSix12(false)
 
    }
     
    } 
  else {

     if(url==newSlides5.imageOrVideoUrl){
     
      setNewSlides5({ ...newSlides5, imageUrl:"" })
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



  if(url==newSlides5.imageOrVideoUrl ){
    for(let j=0;j<image_extension.length;j++){
      if(url.includes(image_extension[j])){
    
        setNewSlides5({ ...newSlides5, imageUrl:"image" })
        setSix12(true)
        setSix1(false)
      
      }else{
        setSix1(false)
        setSix12(false)
        
      }
    }
  }
    for(let i=0;i<video_extensions.length;i++){
      if(url.includes(video_extensions[i])){
        // setImage6("")
      
      
        if( setSix1==true){
      
          setNewSlides5({ ...newSlides5, imageUrl:"video" })
          setSix12(false)
        }else{
          setSix1(false)
          setSix12(false)
        }
      
        //x=true
      }
    }  
  
    if( (newSlides1.imageUrl==""||newSlides2.imageUrl==""||newSlides3.imageUrl==""||newSlides4.imageUrl==""||newSlides5.imageUrl=="")
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
   
      
     if(url==currentSlide.imageOrVideoUrl){
    
      setNewCurrentSlide({ ...currentSlide, imageUrl:"video" })
     setSix1(true)
     setSix12(false)
 
    }
     
    } 
  else {

     if(url==currentSlide.imageOrVideoUrl){
     
      setNewCurrentSlide({ ...currentSlide, imageUrl:"" })
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



  if(url==currentSlide.imageOrVideoUrl ){
    for(let j=0;j<image_extension.length;j++){
      if(url.includes(image_extension[j])){
    
        setNewCurrentSlide({ ...currentSlide, imageUrl:"image" })
        setSix12(true)
        setSix1(false)
      
      }else{
        setSix1(false)
        setSix12(false)
        
      }
    }
    for(let i=0;i<video_extensions.length;i++){
      if(url.includes(video_extensions[i])){
        // setImage6("")
      
      
        if( setSix1==true){
      
          setNewCurrentSlide({ ...currentSlide, imageUrl:"video" })
          setSix12(false)
        }else{
          setSix1(false)
          setSix12(false)
        }
      
        //x=true
    
      }
    }
  }

console.log(six1,six12,currentSlide)


  if( (newSlides1.imageUrl==""||newSlides2.imageUrl==""||newSlides3.imageUrl==""||newSlides4.imageUrl==""||newSlides5.imageUrl==""||
    currentSlide.imageUrl=="")&& (six1==false && six12==false)
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
const[move,setMove] = useState(false)
const handleCurrentSlide=(i)=>
  {

   
    if(i==2){

        newSlides1.imageUrl=""
      if(newSlides1.imageUrl==""||newSlides1.imageUrl!==""){
        checkForImage1(newSlides1.imageOrVideoUrl)
      }
      if(newSlides2.imageUrl==""||newSlides2.imageUrl!==""){
       checkForImage2(newSlides2.imageOrVideoUrl)
      }
     
       slidesD==[]
       if(lengthOk1==false&&image12==true){
        newSlides1.imageUrl=="image"
      }
      if(lengthOk2==false&&image22==true){
        newSlides2.imageUrl=="image"
      }
      if(lengthOk1==true&&image12==false){
        newSlides1.imageUrl=="video"
      }
      if(lengthOk2==true&&image22==false){
        newSlides2.imageUrl=="video"
      }
      if(lengthOk1==false&&image12==false){
        newSlides1.imageUrl==""
      }
      if(lengthOk2==false&&image22==false){
        newSlides2.imageUrl==""
      }
        slidesD=[newSlides1,newSlides2]
    }
  
    if(i==3){
      // slidesD==[]
      newSlides1.imageUrl=""
      newSlides2.imageUrl=""
         newSlides3.imageUrl=""
     
      if(newSlides1.imageUrl==""||newSlides1.imageUrl!==""){
         checkForImage1(newSlides1.imageOrVideoUrl)
       }
       if(newSlides2.imageUrl==""||newSlides2.imageUrl!==""){
        checkForImage2(newSlides2.imageOrVideoUrl)
       }
       if(newSlides3.imageUrl==""||newSlides3.imageUrl!==""){
        checkForImage3(newSlides3.imageOrVideoUrl)
       }
    
   

if(lengthOk1==false&&image12==true){
  newSlides1.imageUrl=="image"
}
if(lengthOk2==false&&image22==true){
  newSlides2.imageUrl=="image"
}
if(lengthOk3==false&&image32==true){
  newSlides3.imageUrl=="image"
}

if(lengthOk1==true&&image12==false){
  newSlides1.imageUrl=="video"
}
if(lengthOk2==true&&image22==false){
  newSlides2.imageUrl=="video"
}
if(lengthOk3==true&&image32==false){
  newSlides3.imageUrl=="video"
}
   if(lengthOk1==false&&image12==false){
    newSlides1.imageUrl==""
  }
  if(lengthOk2==false&&image22==false){
    newSlides2.imageUrl==""
  }
  if(lengthOk3==false&&image32==false){
    newSlides3.imageUrl==""
  }
  


        // slidesD=[newSlides1,newSlides2,newSlides3]
    }
  if(i==4){
    //  slidesD=[]
    console.log(image11,image21,image31,image41,image51,image61)
    console.log(length1,length2,length3,length4,length5,length6)
       newSlides1.imageUrl=""
      newSlides2.imageUrl=""
       newSlides3.imageUrl=""
           newSlides4.imageUrl=""

    if(newSlides1.imageUrl==""||newSlides1.imageUrl!==""){
      checkForImage1(newSlides1.imageOrVideoUrl)
     }
     if(newSlides2.imageUrl==""||newSlides2.imageUrl!==""){
      checkForImage2(newSlides2.imageOrVideoUrl)
     }
     if(newSlides3.imageUrl==""||newSlides3.imageUrl!==""){
      checkForImage3(newSlides3.imageOrVideoUrl)
     }
     if(newSlides4.imageUrl==""||newSlides4.imageUrl!==""){
      checkForImage4(newSlides4.imageOrVideoUrl)
     }
    
    
//     console.log(image11,image21,image31,image41)
//     console.log(image1,image2,image3,image4)


if(lengthOk1==false&&image12==true){
  newSlides1.imageUrl=="image"
}
if(lengthOk2==false&&image22==true){
  newSlides2.imageUrl=="image"
}
if(lengthOk3==false&&image32==true){
  newSlides3.imageUrl=="image"
}
if(lengthOk4==false&&image42==true){
  newSlides4.imageUrl=="image"
}

if(lengthOk1==true&&image12==false){
  newSlides1.imageUrl=="video"
}
if(lengthOk2==true&&image22==false){
  newSlides2.imageUrl=="video"
}
if(lengthOk3==true&&image32==false){
  newSlides3.imageUrl=="video"
}
if(lengthOk4==true&&image42==false){
  newSlides4.imageUrl=="video"
}
      
      if(lengthOk1==false&&image12==false){
        newSlides1.imageUrl==""
      }
      if(lengthOk2==false&&image22==false){
        newSlides2.imageUrl==""
      }
      if(lengthOk3==false&&image32==false){
        newSlides3.imageUrl==""
      }
      if(lengthOk4==false&&image42==false){
        newSlides4.imageUrl==""
      }
//  slidesD=[newSlides1,newSlides2,newSlides3,newSlides4]
  }

  if(i==5){
    //  slidesD=[]
    console.log(image11,image21,image31,image41,image51,image61)
    console.log(length1,length2,length3,length4,length5,length6)
     newSlides1.imageUrl=""
     newSlides2.imageUrl=""
      newSlides3.imageUrl=""
       newSlides4.imageUrl=""
           newSlides5.imageUrl=""

     if(newSlides1.imageUrl==""||newSlides1.imageUrl!==""){
      checkForImage1(newSlides1.imageOrVideoUrl)
     }
     if(newSlides2.imageUrl==""||newSlides2.imageUrl!==""){
      checkForImage2(newSlides2.imageOrVideoUrl)
     }
     if(newSlides3.imageUrl==""||newSlides3.imageUrl!==""){
      checkForImage3(newSlides3.imageOrVideoUrl)
     }
     if(newSlides4.imageUrl==""||newSlides4.imageUrl!==""){
      checkForImage4(newSlides4.imageOrVideoUrl)
     }
     if(newSlides5.imageUrl==""||newSlides5.imageUrl!==""){
      checkForImage5(newSlides5.imageOrVideoUrl)
     }
    
   
//     console.log(image11,image21,image31,image41,image51)
//     console.log(image1,image2,image3,image4,image5)


      

      if(lengthOk1==false&&image12==true){
        newSlides1.imageUrl=="image"
      }
      if(lengthOk2==false&&image22==true){
        newSlides2.imageUrl=="image"
      }
      if(lengthOk3==false&&image32==true){
        newSlides3.imageUrl=="image"
      }
      if(lengthOk4==false&&image42==true){
        newSlides4.imageUrl=="image"
      }
      if(lengthOk5==false&&image52==true){
        newSlides5.imageUrl=="image"
      }

      if(lengthOk1==true&&image12==false){
        newSlides1.imageUrl=="video"
      }
      if(lengthOk2==true&&image22==false){
        newSlides2.imageUrl=="video"
      }
      if(lengthOk3==true&&image32==false){
        newSlides3.imageUrl=="video"
      }
      if(lengthOk4==true&&image42==false){
        newSlides4.imageUrl=="video"
      }
      if(lengthOk5==true&&image52==false){
        newSlides5.imageUrl=="video"
      }

      if(lengthOk1==false&&image12==false){
        newSlides1.imageUrl==""
      }
      if(lengthOk2==false&&image22==false){
        newSlides2.imageUrl==""
      }
      if(lengthOk3==false&&image32==false){
        newSlides3.imageUrl==""
      }
      if(lengthOk4==false&&image42==false){
        newSlides4.imageUrl==""
      }

      if(lengthOk5==false&&image52==false){
        newSlides5.imageUrl==""
      }

// slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5]
  }
  if(i==6){
    //  slidesD=[]
    console.log(image11,image21,image31,image41,image51,image61)
    console.log(length1,length2,length3,length4,length5,length6)
     newSlides1.imageUrl=""
     newSlides2.imageUrl=""
      newSlides3.imageUrl=""
       newSlides4.imageUrl=""
        newSlides5.imageUrl=""
        currentSlide.imageUrl=""
        
     if(newSlides1.imageUrl==""||newSlides1.imageUrl!==""){
      checkForImage1(newSlides1.imageOrVideoUrl)
     }
     if(newSlides2.imageUrl==""||newSlides2.imageUrl!==""){
      checkForImage2(newSlides2.imageOrVideoUrl)
     }
     if(newSlides3.imageUrl==""||newSlides3.imageUrl!==""){
      checkForImage3(newSlides3.imageOrVideoUrl)
     }
     if(newSlides4.imageUrl==""||newSlides4.imageUrl!==""){
      checkForImage4(newSlides4.imageOrVideoUrl)
     }
     if(newSlides5.imageUrl==""||newSlides5.imageUrl!==""){
      checkForImage5(newSlides5.imageOrVideoUrl)
     }
     if(currentSlide.imageUrl==""||currentSlide.imageUrl!==""){
      checkForImage6(currentSlide.imageOrVideoUrl)
     }
  
    console.log(image11,image21,image31,image41,image51,image61)
   


if(lengthOk1==false&&image12==true){
  newSlides1.imageUrl=="image"
}
if(lengthOk2==false&&image22==true){
  newSlides2.imageUrl=="image"
}
if(lengthOk3==false&&image32==true){
  newSlides3.imageUrl=="image"
}
if(lengthOk4==false&&image42==true){
  newSlides4.imageUrl=="image"
}
if(lengthOk5==false&&image52==true){
  newSlides5.imageUrl=="image"
}
if(lengthOk6==false&&image62==true){
  currentSlide.imageUrl=="image"
}

if(lengthOk1==true&&image12==false){
  newSlides1.imageUrl=="video"
}
if(lengthOk2==true&&image22==false){
  newSlides2.imageUrl=="video"
}
if(lengthOk3==true&&image32==false){
  newSlides3.imageUrl=="video"
}
if(lengthOk4==true&&image42==false){
  newSlides4.imageUrl=="video"
}
if(lengthOk5==true&&image52==false){
  newSlides4.imageUrl=="video"
}
if(lengthOk6==true&&image62==true){
  currentSlide.imageUrl=="video"
}


if(lengthOk1==false&&image12==false){
  newSlides1.imageUrl==""
}
if(lengthOk2==false&&image22==false){
  newSlides2.imageUrl==""
}
if(lengthOk3==false&&image32==false){
  newSlides3.imageUrl==""
}
if(lengthOk4==false&&image42==false){
  newSlides4.imageUrl==""
}
if(lengthOk5==false&&image52==false){
  newSlides5.imageUrl==""
}
if(lengthOk6==false&&image62==false){
  currentSlide.imageUrl==""
}




// slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5,currentSlide]
  }
  
   
      
    
    //UrlCheckers();
    setHandleNextQ(i)
  }

const[six,setSix]=useState(false)

       
       //console.log(slidesD)
     
   console.log(slidesD)
   console.log(category)


 const handleSubmit=async(e)=>
{
    e.preventDefault();

 

    let b= checkErrors()
    // console.log(b,x,move)
    
  let x;
  let y;
  let z;
  let w1;

      console.log("b",b)
    
    if(handleNextQ==3){
     
      w1=checkEmpty3(newSlides3.imageUrl)
    
      if(w1==true){
        slidesD=[newSlides1,newSlides2,newSlides3]
      }

      
      //console.log(slidesD)
    }

    
    if(handleNextQ==4){
      slidesD=[]
       x=checkEmpty4(newSlides4.imageOrVideoUrl)
      if(x==true){
        slidesD=[newSlides1,newSlides2,newSlides3,newSlides4]
      }
   
       
 
      //console.log(slidesD)
    }
    if(handleNextQ==5){
      slidesD=[];
       y=checkEmpty5(newSlides5.imageOrVideoUrl)
      if(y==true){
        slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5]
      }
    
    }
    if(handleNextQ==6){
      slidesD=[]
      w1=checkEmpty6(currentSlide.imageOrVideoUrl)
      console.log(w1)
      if(w1==true){
        slidesD=[newSlides1,newSlides2,newSlides3,newSlides4,newSlides5,currentSlide]
      }
      
      //console.log(slidesD)
    }


    
       
    let slidesInStory=[]
    
    slidesInStory=slidesD
  
    //console.log(slidesInStory,category,handleNextQ)
    const token=JSON.parse(localStorage.getItem("APP-TOKEN"))
    // let w=checkEmpty3()
    // let p=checkEmpty4()
    // let q=checkEmpty5(newSlides5.imageOrVideoUrl)
    // let r=checkEmpty6(currentSlide.imageOrVideoUrl)
  
  
   console.log(b,slidesD,x,y,z,w1,sixRight)
  //  console.log(b,slidesD,p,q,r,w,)
        
    if ((b==true)&&(w1==true||x==true||y==true||z==true) &&(sixRight==true ) &&(!slidesInStory.length==0&& category!=="" )){
          
            try {
             
              const response = await axios.post("http://localhost:5000/api/v1/story/create",
                {category,slidesInStory},
                {
                  withCredentials: true,
                  
                    headers:{
                Authorization:`Bearer ${token}`
              }
            
                }
              );

              console.log(response);
             if(response.data.success=true){
                
            
                 dispatch(addNewStorySuccess(response.data.message))
                 setHandleNextQ((prev)=>prev-1)
                 dispatch(setIsCreateStory(false))
                 dispatch(getAllMyStories())
                 toast.success(response.data.message)
       

             }
              
    
         
            } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            dispatch(addNewStoryFailed(error.response.data.message));
            }
          
          
          }else{
 
            toast(`,
              check carefully before posting     1.videos should have maximum duration of 15 seconds 2.No fields should be empty 
              3.Enter valid image or video url 4.Provide category
                    `)
     }
          
}
          

  
  return (
  <>
    <section className='create-story-section'>
      {isCreateStory ? (<form  className='create-story-form' onSubmit={handleSubmit}> 
      
        
             <div className='create-story-div-heading'>
             <span onClick={()=>handleClose()}>X</span> 
              </div>
              <div className='slide-div-heading-condition'>
                    <span>Add upto 6 slides</span>
                </div> 
            <div className='total-div'>
               
              {<div className='slide-div-heading'>
                <>
                        {slidesC.map((i,index)=>
                          {
                           //console.log(i)
                            return(
                             
                                 <div  onClick={()=>handleCurrentSlide(index+1)}
                                 className= {`${handleNextQ==i ?"display-slides-button-active":"display-slides-button "}`}
                                   key={index} >
                                    <span>
                                    Slide{index+1}
                            </span>
                                   
                                 {/* {slidesC.length>3  && i==4 && <span className='cross'
                                 onClick={()=>handleDeleteSlide(i)}>X</span>} */}
                                 
                                 </div>
                            )
                           
                          })}
            
                </>
                {addSlides.includes(4) && 
                 (<div  onClick={()=>handleCurrentSlide(4)}
                   className= {`${handleNextQ==4 ?"display-slides-button-active":"display-slides-button "}`}
                            ><span>
                            Slide 4
                            </span>
                         <button onClick={(e)=>handleDeleteSlide(e,4)}
                          className= {`${handleNextQ!==4 ||addSlides.includes(5)  ?"cross-div-disabled":"cross-div "}`} >X</button>
                         
                         </div>)
               
                           }
                 {addSlides.includes(5) &&
                 (<div onClick={()=>handleCurrentSlide(5)}
                  className= {`${handleNextQ==5 ?"display-slides-button-active":"display-slides-button "}`}>
                    <span>
                    Slide 5
                    </span>
                  
                         <button  className= {`${handleNextQ!==5 ||addSlides.includes(6)  ?"cross-div-disabled":"cross-div "}`}
                          onClick={(e)=>handleDeleteSlide(e,5)} > X </button>
                         
                         </div>)
               
                           }
                {addSlides.includes(6) &&
                 (<div  onClick={()=>handleCurrentSlide(6)}
                   className= {`${handleNextQ==6 ?"display-slides-button-active":"display-slides-button "}`}>
                    <span>  Slide 6</span>
                  
                         <button className= {`${handleNextQ!==6 ?"cross-div-disabled":"cross-div "}`}
                          onClick={(e)=>handleDeleteSlide(e,6)} disabled={handleNextQ!==6}>
                            X</button>
                         
                         </div>)
               
                           }

                       
             {!addSlides.includes(6)&&<div className='display-slides-button'  onClick={()=>handleAddOption()}>
              <span>Add +
                </span></div>}
               </div> } 

              
           
              {handleNextQ==1  && 
               
                    <div className='left-question-put-div'>
                       <div>
                     
                      <label htmlFor='heading'>Heading</label>
                       <input type="text" placeholder="Text" value={newSlides1.heading} id="heading" 
                          onChange={(e)=>setNewSlides1({ ...newSlides1, heading: e.target.value })} />
                    
                      </div>
                      <div>
                    
                      <label htmlFor='description'>Description</label>
                          <textarea placeholder="Text" value={newSlides1.description} id="description"  
                            onChange={(e)=>setNewSlides1({ ...newSlides1, description: e.target.value })}  ></textarea>
                        
                      </div>
                      <div>
                      <label htmlFor='image'>Image</label>
                          <input type="text" placeholder="Text" value={newSlides1.imageOrVideoUrl} id="image"  
                          onChange={(e)=>setNewSlides1({ ...newSlides1, imageOrVideoUrl: e.target.value })} />
                        
                      </div>
                      <div>
                      <label htmlFor='category'>Category</label>
                       <select value={category}   id="category"   onChange={(e)=>setCategory( e.target.value ) }    >
                        <option value="food" id="food">Food</option>
                        <option value="healthandfitness">Health&Fitness</option>
                        <option value="travel">Travel</option>
                        <option value="movie">Movie</option>
                        <option value="education">Education</option>
                       </select>
                        
                      </div>
                    </div>
                
              

              
              }
              {handleNextQ==2  && 
               
               <div className='left-question-put-div'>
                  <div>
                
                 <label htmlFor='heading'>Heading</label>
                  <input type="text" placeholder="Text" value={newSlides2.heading} id="heading" 
                     onChange={(e)=>setNewSlides2({ ...newSlides2, heading: e.target.value })} />
               
                 </div>
                 <div>
               
                 <label htmlFor='description'>Description</label>
                     <textarea placeholder="Text" value={newSlides2.description} id="description"  
                       onChange={(e)=>setNewSlides2({ ...newSlides2, description: e.target.value })}  ></textarea>
                   
                 </div>
                 <div>
                 <label htmlFor='image'>Image</label>
                     <input type="text" placeholder="Text" value={newSlides2.imageOrVideoUrl} id="image"  
                     onChange={(e)=>setNewSlides2({ ...newSlides2, imageOrVideoUrl: e.target.value })} />
                   
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
         {handleNextQ==3 && 
               
               <div className='left-question-put-div'>
                  <div>
                
                 <label htmlFor='heading'>Heading</label>
                  <input type="text" placeholder="Text" value={newSlides3.heading} id="heading" 
                     onChange={(e)=>setNewSlides3({ ...newSlides3, heading: e.target.value })} />
               
                 </div>
                 <div>
               
                 <label htmlFor='description'>Description</label>
                     <textarea placeholder="Text" value={newSlides3.description} id="description"  
                       onChange={(e)=>setNewSlides3({ ...newSlides3, description: e.target.value })}  ></textarea>
                   
                 </div>
                 <div>
                 <label htmlFor='image'>Image</label>
                     <input type="text" placeholder="Text" value={newSlides3.imageOrVideoUrl} id="image"  
                     onChange={(e)=>setNewSlides3({ ...newSlides3, imageOrVideoUrl: e.target.value })} />
                   
                 </div>
                 <div>
                 <label htmlFor='category'>Category</label>
                  <select value={category}  id="category"    onChange={(e)=>setCategory(e.target.value )}>
                   <option value="food">Food</option>
                   <option value="healthandfitness">Health&Fitness</option>
                   <option value="travel">Travel</option>
                   <option value="movie">Movie</option>
                   <option value="education">Education</option>
                  </select>
                   
                 </div>
               </div>
           
         

         
         }
         {handleNextQ==4  && (
               
               <div className='left-question-put-div'>
                  <div>
                
                 <label htmlFor='heading'>Heading</label>
                  <input type="text" placeholder="Text" value={newSlides4.heading} id="heading" 
                     onChange={(e)=>setNewSlides4({ ...newSlides4, heading: e.target.value })} />
               
                 </div>
                 <div>
               
                 <label htmlFor='description'>Description</label>
                     <textarea placeholder="Text" value={newSlides4.description} id="description"  
                       onChange={(e)=>setNewSlides4({ ...newSlides4, description: e.target.value })}  ></textarea>
                   
                 </div>
                 <div>
                 <label htmlFor='image'>Image</label>
                     <input type="text" placeholder="Text" value={newSlides4.imageOrVideoUrl} id="image"  
                     onChange={(e)=>setNewSlides4({ ...newSlides4, imageOrVideoUrl: e.target.value })} />
                   
                 </div>
                 <div>
                 <label htmlFor='category'>Category</label>
                  <select value={category} id="category"     onChange={(e)=>setCategory( e.target.value )}>
                   <option value="food">Food</option>
                   <option value="healthandfitness">Health&Fitness</option>
                   <option value="travel">Travel</option>
                   <option value="movie">Movie</option>
                   <option value="education">Education</option>
                  </select>
                   
                 </div>
               </div>
           
         

         
         )}
         {handleNextQ==5 &&(
               
               <div className='left-question-put-div'>
                  <div>
                
                 <label htmlFor='heading'>Heading</label>
                  <input type="text" placeholder="Text" value={newSlides5.heading} id="heading" 
                     onChange={(e)=>setNewSlides5({ ...newSlides5, heading: e.target.value })} />
               
                 </div>
                 <div>
               
                 <label htmlFor='description'>Description</label>
                     <textarea placeholder="Text" value={newSlides5.description} id="description"  
                       onChange={(e)=>setNewSlides5({ ...newSlides5, description: e.target.value })}  ></textarea>
                   
                 </div>
                 <div>
                 <label htmlFor='image'>Image</label>
                     <input type="text" placeholder="Text" value={newSlides5.imageOrVideoUrl} id="image"  
                     onChange={(e)=>setNewSlides5({ ...newSlides5, imageOrVideoUrl: e.target.value })} />
                   
                 </div>
                 <div>
                 <label htmlFor='category'>Category</label>
                  <select value={category} id="category"     onChange={(e)=>setCategory(e.target.value )}>
                   <option value="food">Food</option>
                   <option value="healthandfitness">Health&Fitness</option>
                   <option value="travel">Travel</option>
                   <option value="movie">Movie</option>
                   <option value="education">Education</option>
                  </select>
                   
                 </div>
               </div>
           
         

         
         )}
         {handleNextQ==6 && (
               
               <div className='left-question-put-div'>
                  <div>
                
                 <label htmlFor='heading'>Heading</label>
                  <input type="text" placeholder="Text" value={currentSlide.heading} id="heading" 
                     onChange={(e)=>setNewCurrentSlide({ ...currentSlide, heading: e.target.value })} />
               
                 </div>
                 <div>
               
                 <label htmlFor='description'>Description</label>
                     <textarea placeholder="Text" value={currentSlide.description} id="description"  
                       onChange={(e)=>setNewCurrentSlide({ ...currentSlide, description: e.target.value })}  ></textarea>
                   
                 </div>
                 <div>
                 <label htmlFor='image'>Image</label>
                     <input type="text" placeholder="Text" value={currentSlide.imageOrVideoUrl} id="image"  
                     onChange={(e)=>setNewCurrentSlide({ ...currentSlide, imageOrVideoUrl: e.target.value })} />
                   
                 </div>
                 <div>
                 <label htmlFor='category'>Category</label>
                  <select value={category} id="category"     onChange={(e)=>setCategory( e.target.value )}>
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
                <button type="button" disabled={handleNextQ == 1} className='common-story-button-previous '
            
                onClick={()=>handlePreviousQuestion()}
            
          >
            Previous
          </button>
                    {!addSlides.includes(4)&&!addSlides.includes(5)&&!addSlides.includes(6)&&(<button type="button" 
                      className= {`${handleNextQ==3 ?"common-story-button-next":"common-story-button-next-active "}`} 
                    onClick={()=>handleNextQuestion()} disabled={handleNextQ==3}>Next</button>)}

                    {(addSlides.includes(4)&&!addSlides.includes(5)&&!addSlides.includes(6))&&<button type="button" 
                     className= {`${handleNextQ==4 ?"common-story-button-next":"common-story-button-next-active "}`}  
                    onClick={()=>handleNextQuestion()} disabled={handleNextQ==4} >Next</button>}

                     {(addSlides.includes(4)&&addSlides.includes(5)&&!addSlides.includes(6))&&<button type="button"
                      className= {`${handleNextQ==5 ?"common-story-button-next":"common-story-button-next-active "}`}
                    onClick={()=>handleNextQuestion()} disabled={handleNextQ==5}  >Next</button>}

                     {(addSlides.includes(6))&&<button type="button" 
                      className= {`${handleNextQ==6 ?"common-story-button-next":"common-story-button-next-active "}`} 
                    onClick={()=>handleNextQuestion()} disabled={handleNextQ==6} >Next</button>}
</div>

<div className='create-story-buttons-second-div'>

                     {!addSlides.includes(4)&&!addSlides.includes(5)&&!addSlides.includes(6)&&(<button type="submit" 
                           className= {`${handleNextQ<3 ?"common-story-button-post":"common-story-button-post-active "}`}  
                     disabled={handleNextQ<3}>Post</button>)}

                    {(addSlides.includes(4)&&!addSlides.includes(5)&&!addSlides.includes(6))&&
                    <button type="submit"   
                      className= {`${handleNextQ<4 ?"common-story-button-post":"common-story-button-post-active "}`}   disabled={handleNextQ<4}
                     >Post</button>}

                     {(addSlides.includes(4)&&addSlides.includes(5)&&!addSlides.includes(6))&&
                     <button type="submit"
                     className= {`${handleNextQ<5 ?"common-story-button-post":"common-story-button-post-active "}`}   disabled={handleNextQ<5}
                    >Post</button>}

                     {(addSlides.includes(6))&&<button type="submit"   
                      className= {`${handleNextQ<6 ?"common-story-button-post":"common-story-button-post-active "}`}   disabled={handleNextQ<5}
                     
                     >Post</button>}
                   
                    </div>
                    </div>
            
      </form>):(
        <>
        </>
      )}
</section>
</>
  
  )

}
