import {createSlice} from "@reduxjs/toolkit"
import axios from "axios";
import { toast } from "react-toastify";
const storySlice=createSlice({
    name: "story",
    initialState: {
     
        isQuizQuestion: false,
        story:[],
      
      
        initialLoading:false,
        storyLoading:true,
        error:null,
        message:null,
        singleStoryId:"",
       
        isViewStoryOpen:false,
        isEditStoryOpen:false,
        categorySectionLoading:false,
        isCategorySectionOpen:false,
        storiesByCategory:[],
        liked:false,
        categoryInStories:[],
        healthandfitness:[],
        food:[],
        travel:[],
        movie:[],
        education:[],
        categoriesHighlighted:[],
        categoryArray4:[],
        hasLiked:[],
        bookmarkSlideOpen:false,
        bookmarkSingleSlide:{}
       

   
    },
    reducers:{
      setBookmarkSlideOpen:(state,action)=>
        {
          state.bookmarkSlideOpen=action.payload
        },
      setCategoryArray4:(state,action)=>
      {
        state.categoryArray4=action.payload
      },
        setIsViewStoryOpen:(state,action)=>
        {
            state.isViewStoryOpen= action.payload
        },
        setIsEditStoryOpen:(state,action)=>
            {
                state.isEditStoryOpen= action.payload
            },
            setIsCategorySectionOpen:(state,action)=>
              {
                  state.isCategorySectionOpen= action.payload
              },
        getSingleStoryId:(state,action)=>
        {
            state.singleStoryId=action.payload
        },
        setLiked:(state,action)=>
        {
          state.liked=!state.liked
        },
        addNewStoryRequest(state, action) {
            state.storyLoading = true;
            state.error = null;
            state.message = null;
          },
          addNewStorySuccess(state, action) {
            state.error = null;
            state.storyLoading = false;
            state.message = action.payload;
          },
          addNewStoryFailed(state, action) {
            state.error = action.payload;
            state.storyLoading = false;
            state.message = null;
          },
          getAllStoriesRequest(state, action) {
            state.story = [];
            state.error = null;
            state.initialLoading = true;
          },
          getAllStoriesSuccess(state, action) {
            state.story = action.payload;
      
            state.error = null;
            state.initialLoading = false;
          },
          getAllStoriesFailed(state, action) {
            state.story = state.story;
            state.error = action.payload;
            state.initialLoading = false;
          },
          editStoryRequest(state, action) {
            state.storyLoading = true;
            state.error = null;
            state.message = null;
          },
          editStorySuccess(state, action) {
            state.error = null;
            state.storyLoading = false;
            state.message = action.payload;
          },
          editStoryFailed(state, action) {
            state.error = action.payload;
            state.storyLoading = false;
            state.message = null;
          },

          getStoriesByCategoryRequest(state, action) {
            state.storiesByCategory = [];
          
            state.categorySectionLoading = true;
          },
          getStoriesByCategorySuccess(state, action) {
            state.storiesByCategory = action.payload;
      
           
            state.categorySectionLoading= false;
          },
          getStoriesByCategoryFailed(state, action) {
            state.storiesByCategory = state.storiesByCategory;
            
            state.categorySectionLoading = false;
          },
          getCategoryInStories(state,action){
            state.categoryInStories=action.payload
          },
          likeOrDislikeStory(state,action){
            state.story=action.payload
          },
          getHasLiked(state,action){
            state.hasLiked=action.payload
          },
          getHealthandfitness(state,action){
            state.healthandfitness=action.payload
          },
          getMovie(state,action){
            state.movie=action.payload
          },
          getFood(state,action){
            state.food=action.payload
          },
          getTravel(state,action){
            state.travel=action.payload
          },
          
          getEducation(state,action){
            state.education=action.payload
          },
          getCategoriesHighlighted(state,action){
            state.categoriesHighlighted=action.payload
          },
          getBookmarkSingleSlide(state,action){
            state.bookmarkSingleSlide=action.payload
          }
         
         
        
    }
})
export const getAllMyStories = () => async (dispatch) => {
  const token=JSON.parse(localStorage.getItem("APP-TOKEN"))
    dispatch(storySlice.actions.getAllStoriesRequest());
    try {
      const response = await axios.get("https://social-media-cuevette.onrender.com/api/v1/story/allStories",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      console.log(response);

      dispatch(storySlice.actions.getAllStoriesSuccess(response.data.stories));
 
     
    } catch (error) {
      dispatch(storySlice.actions.getAllStoriesFailed(error.response.data.message));
    }
    };

    export const getStoriesByCategory = (categoryArray) => async (dispatch) => {
      const token=JSON.parse(localStorage.getItem("APP-TOKEN"))
      console.log(categoryArray)
    
      try {
        const response = await axios.get(`https://social-media-cuevette.onrender.com/api/v1/story/storiesByCategory/${categoryArray}`,
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }    
         );
        console.log(response);
  
        dispatch(storySlice.actions.getStoriesByCategorySuccess(response.data. storyByCategory));
        dispatch(storySlice.actions.getCategoryInStories(response.data. categoryArray1));
        dispatch(storySlice.actions.getHealthandfitness(response.data. storyByCategory.filter((curStory)=>curStory.category=="healthandfitness")));
        dispatch(storySlice.actions.getFood(response.data. storyByCategory.filter((curStory)=>curStory.category=="food")));
        dispatch(storySlice.actions.getMovie(response.data. storyByCategory.filter((curStory)=>curStory.category=="movie")));
        dispatch(storySlice.actions.getTravel(response.data. storyByCategory.filter((curStory)=>curStory.category=="travel")));
        dispatch(storySlice.actions.getEducation(response.data. storyByCategory.filter((curStory)=>curStory.category=="education")));
       
      } catch (error) {
        dispatch(storySlice.actions.getStoriesByCategoryFailed(error.response.data.message));
      }
      };

      export const likeOrDislikeStory = (singleStoryId,slideId) => async (dispatch) => {
        const token=JSON.parse(localStorage.getItem("APP-TOKEN"))
        console.log(token)
        console.log(singleStoryId,slideId)
        
        try {
          const response = await axios.put(`https://social-media-cuevette.onrender.com/api/v1/story/likeOrDislike/${singleStoryId}`, {slideId},
           
              {
                headers:{
                  Authorization:`Bearer ${token}`
              }
            });
          console.log(response);
          toast.success(response.data.message);
          dispatch(storySlice.actions.likeOrDislikeStory(response.data. story ));
          dispatch(storySlice.actions.getHasLiked(response.data. user.likes ));
         
        } catch (error) {
        console.log(error)
        toast.error(error.response.data.message);

        }
      }

      // export const bookmarkStory = (slideId) => async (dispatch) => {
      //   const token=JSON.parse(localStorage.getItem("APP-TOKEN"))
      //   console.log(token)
      //   console.log(slideId)
        
      //   try {
      //     const response = await axios.patch(`https://social-media-cuevette.onrender.com/api/v1/story/bookmarkSingleSlide/${slideId}`, 
      //       {
      //       headers:{
      //         Authorization:`Bearer ${token} `
      //           }  
      //   });
      //     console.log(response);
      //     toast.success(response.data.message);
     
         
      //   } catch (error) {
      //   console.log(error)
      //   toast.error(error.response.data.message);

      //   }
      // }
      export const bookmarkSingleSlide = (slideId) => async (dispatch) => {
        const token=JSON.parse(localStorage.getItem("APP-TOKEN"))
        console.log(token)
        console.log(slideId)
        
        try {
          const response = await axios.get(`https://social-media-cuevette.onrender.com/api/v1/story/bookmarkSingleSlide/${slideId}`, 
            {
            headers:{
              Authorization:`Bearer ${token} `
                }  
        });
        dispatch(storySlice.actions.getBookmarkSingleSlide(response.data. singleSlide ));
          console.log(response);
          toast.success(response.data.message);
     
         
        } catch (error) {
        console.log(error)
        toast.error(error.response.data.message);

        }
      }
  

export const{setCategoryArray4,setBookmarkSlideOpen,
  addNewStoryRequest,addNewStoryFailed,addNewStorySuccess,setIsViewStoryOpen,getSingleStoryId,setIsEditStoryOpen,
  getHealthandfitness,getMovie,getFood,getTravel,getEducation,
  editStoryRequest,editStoryFailed,editStorySuccess,setIsCategorySectionOpen,setLiked,getCategoryInStories,getCategoriesHighlighted,getStoriesByCategoryRequest
}=storySlice.actions
export default storySlice.reducer