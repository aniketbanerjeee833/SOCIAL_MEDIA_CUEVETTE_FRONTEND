import {createSlice} from "@reduxjs/toolkit"
import axios from "axios";
import { toast } from "react-toastify";

const userSlice=createSlice({
    name: "user",
    initialState: {
        user: {},
        firstLoading:false,
        // loginLoading:false,
        isAuthenticated: false,
        error:null,
        isLogin:false,
        isCreateStory:false,
      
        bookmarkStories:[],
        isBookmarkStoryOpen:false,
        refresh:false,
        loginError:"",
        registerError:"",
        likedStoryloading:"",
        likedSlidesCount:"",
        token:"",
        redirectToLogin:false,
        currState:"",
        linkStoryOpen:false,
        responsiveDiv:false
     

    },
    reducers:{
      setResponsiveDiv:(state,action)=>
        {
          state.responsiveDiv=action.payload
        },

      // setLoginLoading:(state,action)=>
      // {
      //   state.loginLoading=action.payload
      // },
      setLinkStoryOpen:(state,action)=>
      {
        state.linkStoryOpen=action.payload
      },
      setCurrentState:(state,action)=>
      {
        state.currState=action.payload
      },
      setRedirectToLogin:(state,action)=>
      {
        state.redirectToLogin=action.payload
      },
      setToken:(state,action)=>
      {
        state.token=action.payload
      },
      setLoginError:(state,action)=>{
        state.loginError=action.payload
      },

      setRegisterError:(state,action)=>{
        state.registerError=action.payload
      },
      getRefresh:(state,action)=>{
        state.refresh = !state.refresh;
    },
        getUser: (state, action) => {
            state.user = action.payload
        },

        setIsLogin:(state,action)=>
        {
            state.isLogin = action.payload 
        },
        setIsAuthenticated:(state,action)=>
        {
            state.isAuthenticated=action.payload
        },
        setIsCreateStory:(state,action)=>
        {
            state.isCreateStory=action.payload
        },
        setIsBookmarkStoryOpen:(state,action)=>
          {
              state.isBookmarkStoryOpen=action.payload
          },
        fetchUserRequest(state, action) {
            state.firstLoading = true;
       
            state.user = {};
          },
          fetchUserSuccess(state, action) {
            state.firstLoading = false;
           state.isAuthenticated=true
            state.user = action.payload;
          },
          fetchUserFailed(state, action) {
            state.firstLoading = false;
            state.isAuthenticated=state.isAuthenticated
            state.user = {};
          },
          logoutSuccess(state, action) {
            state.isAuthenticated = false;
            state.user = {};
          },
          logoutFailed(state, action) {
            state.loading = false;
            state.isAuthenticated = state.isAuthenticated;
            state.user = state.user;
          },
          getBookmarkStoriesRequest(state, action) {
            state.firstLoading = true;
            state.bookmarkStories = [];
            state.initialLoading=false
          },
          getBookmarkStoriesSuccess(state, action) {
            state.firstLoading= false;
           
            state.bookmarkStories = action.payload;
            state.initialLoading=false
          },
          getBookmarkStoriesFailed(state, action) {
            state.firstLoading = false;
           
            state.bookmarkStories = [];
            state.initialLoading=false
          },
          getLikedStoriesRequest(state, action) {
            state.bookmarkStoryloading = true;
         
          },
          getLikedStoriesSuccess(state, action) {
            state.likedStoryloading= false;
           state.likedSlidesCount=action.payload
          
          },
          // getLikedStoriesFailed(state, action) {
          //   state.likedStoryloading = false;
          //   state. likedSlidesCount=likedSlidesCount
           
          // },

        }  
    })

    // export const getAllStories = () => async (dispatch) => {
    
       
    //     try {
    //       const response = await axios.get("https://social-media-cuevette.onrender.com/api/v1/user/allStories",{
         
    //       });
    //       console.log(response);
    
   
     
         
    //     } catch (error) {
    //      console.log(error)
    //     }
    //     };

    export const fetchUser = () => async (dispatch) => {
      const token=JSON.parse(localStorage.getItem("APP-TOKEN"))
        dispatch(userSlice.actions.fetchUserRequest());
        try {
          const response = await axios.get("https://social-media-cuevette.onrender.com/api/v1/user/me",
            {
              headers:{
                Authorization:`Bearer ${token}`
              }
            }
          );
          console.log(response)
          dispatch(userSlice.actions.fetchUserSuccess(response.data.user));
         
        } catch (error) {
          dispatch(userSlice.actions.fetchUserFailed());
         
          console.log(error);
        }
      };
      


      export const viewBookmarkStories = () => async (dispatch) => {
        const token=JSON.parse(localStorage.getItem("APP-TOKEN"))
        dispatch(userSlice.actions.getBookmarkStoriesRequest());
        try {
          const response = await axios.get("https://social-media-cuevette.onrender.com/api/v1/user/bookmarkStories", 
              {
                headers:{
            Authorization:`Bearer ${token}`
          }
        });
          console.log(response)
          dispatch(userSlice.actions.getBookmarkStoriesSuccess(response.data.bookmarkSlides4));
         
        } 
        catch (error) {
          dispatch(userSlice.actions.getBookmarkStoriesFailed(error.response.data.message));
         
          console.error(error);
        }
      }

      export const getLikesCount = (singleStoryId,slideId) => async (dispatch) => {
        const token=JSON.parse(localStorage.getItem("APP-TOKEN"))
        console.log(singleStoryId,slideId)
        dispatch(userSlice.actions?.getLikedStoriesRequest());
        try {
          const response = await axios.get(`https://social-media-cuevette.onrender.com/api/v1/user/likeSlidesCount/${singleStoryId}/${slideId}`,

           { 
            headers:{
              Authorization:`Bearer ${token}`
            }});
          console.log(response);
    
          dispatch(userSlice.actions?.getLikedStoriesSuccess(response.data.likedSlidesCount));
     
         
        } catch (error) {
          console.log(error)
      
        }
        };

    export const{setLoginLoading,setResponsiveDiv,
      setLinkStoryOpen,setCurrentState,setRedirectToLogin,setToken,setLoginError,setRegisterError,
      getRefresh,setIsLogin,getUser,setIsAuthenticated,setIsCreateStory,setIsBookmarkStoryOpen,logoutFailed,logoutSuccess}=userSlice.actions
    export default userSlice.reducer

    // export const logout = () => async (dispatch) => {
      //   try {
      //     const response = await axios.get("https://social-media-cuevette.onrender.com/api/v1/user/logout",{ withCredentials: true });
      //     dispatch(userSlice.actions.logoutSuccess());
      //     // dispatch(userSlice.actions.getRefresh())
      //     toast.success(response.data.message);
        
         
      //   } catch (error) {
      //     dispatch(userSlice.actions.logoutFailed());
      //     toast.error(error.response.data.message);
      //     dispatch(userSlice.actions.clearAllErrors());
      //   }
      // };