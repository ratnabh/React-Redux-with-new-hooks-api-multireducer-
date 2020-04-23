import React from 'react';	
function fetch1Redcuer(state = {data: []}, action){
switch (action.type) {
    case "fetch":
    return {
      ...state,data:action.data
    };
   
    default:
      return state;
  }
}
 
export default fetch1Redcuer;