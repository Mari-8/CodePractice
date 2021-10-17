function reverseWords(string){
    
    //split string into an array of words
    var splitStringArray = string.split(" ");
    
    for (var i = 0; i < splitStringArray.length; i++) {
      //check if length of word is 5 or more letters
    	if (splitStringArray[i].length >= 5) {
      //if 5 or more letters replace that index in array with reversed word
    		splitStringArray[i] = splitStringArray[i].split("").reverse().join("");
    	}
    
    } 
    
    //join array back into single string
    var joinString = splitStringArray.join(" ");
    
    return joinString;
    
}

