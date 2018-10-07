const init = {
    mode: ((Math.floor(Math.random() * 2) + 1)>1)?'news':'events'
  };
    
    export default (state = init, action) => {
    
      switch(action.type){
    
        case "SET_MODE" : {
          return Object.assign({}, state, {
            mode: action.payload,
          })
        }
    
      }
    
      return state;
      
    }