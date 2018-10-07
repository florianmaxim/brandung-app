const setMode = (mode) => {

    return (dispatch) => {
  
      dispatch({type: "SET_MODE", payload: mode})
  
    }
  
  }
    
  export {setMode}