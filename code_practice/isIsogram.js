function isIsogram(str){
  
    let wordArr = str.toLowerCase().split('')
    let map = {};
    let result = true;
    
    for(let i = 0; i < wordArr.length; i++) {
      //Check if map object already has this element as a key, break loop set result to false
      if(map[wordArr[i]]) {
        result = false;
        break;
      }
       // add entry in object with the element as key
       map[wordArr[i]] = true;
      }
    
    return result
  }
