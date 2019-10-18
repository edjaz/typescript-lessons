// let

// le scope de let est le block

function fct1(input: boolean) {
    let a = 100;
  
    if (input) {
      // Still okay to reference 'a'
      let b = a + 1;
      return b;
    }
  
    // Error: 'b' doesn't exist here
    return b;
  }
  
  // on ne peu pas déclarer deux varaible du même dans un même scope

  function fct2() {
    let x = 100;
    let x = 100; // error: can't have both declarations of 'x'
  }


 
  function fct3() {
    
        if(true){
            let x = 10; 
            console.log(x); // 10

        }

        if(true){
            let x = 20; 
            console.log(x); // 20
        }

    
  }
