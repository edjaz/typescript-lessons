// var

// le scope de var est la fonction


function myFct(shouldInitialize: boolean) {
    if (shouldInitialize) {
      var x = 10;
    }
  
    return x;
  }
  
  myFct(true);  // returns '10'
  myFct(false); // returns 'undefined'
  