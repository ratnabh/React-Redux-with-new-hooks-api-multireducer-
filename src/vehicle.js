import React from 'react';	
function fetchRedcuer(state = {data: []}, action){
switch (action.type) {
    case "fetch":
    return {
      ...state,data:action.data
    };
   
    default:
      return state;
  }
}
 
export default fetchRedcuer;