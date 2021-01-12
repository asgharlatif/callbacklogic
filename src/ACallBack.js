import React from 'react';


function ACallBack() {
    function PrepareFood() {
          let promise = new Promise(function (resolve, reject) {
            console.log("Starting food preparation, Food may take 20 minutes");
            setTimeout(() => {       
      
             
                console.log("Food is Ready now");
                resolve("Hello everybody, this is chef Ali. Food will be served in 2 minutes");
             
      
            }, 5000)
          });
          return promise;
    }
  
    function PrepareAfterTea() {
      let promise = new Promise(function (resolve, reject) {
        console.log("Here is chef Ahsen , Tea may take 5 minutes");
        setTimeout(() => {
          console.log("Tea is ready now");
          resolve("Hello everybody, this is chef Ahsen , Tea will be served in 2 minutes");
        }, 5000)
      });
      return promise;
    }
  
    function PrepreSomeSweetWithTea() {
      let promise = new Promise(function (resolve, reject) {
        console.log("Here is Mutahir , Sweet will take as long as Tea Preparion by Ahsen.")
        setTimeout(() => {
          
          resolve("Hello everybody, this is chef Mutahir,Sweet will be served in 2 miinutes with Tea,Enjoy");
  
        }, 5000)
      });
      return promise;
    }

  async function StartProcess(data){
    console.clear();
    console.log("Call back functionality using aSync and aWait.");

      try {
      let foodvalue1 = await PrepareFood();
          console.log("chef food ready message using callback is  = ", foodvalue1);
          console.log("Food was tasty");
      let foodvalue2 = await PrepareAfterTea();
          console.log("chef Tea ready message using callback is = ", foodvalue2);
          console.log("Tea is amazing");
      let foodvalue3 = await PrepreSomeSweetWithTea();
          console.log("chef Sweet ready message using callback is = ", foodvalue3);
          console.log("Sweet is amazing");    

      }
      catch(error)
      {
        console.log("Error = ", error  )
      }



  }




  return (
    
      <button className="button3" onClick={() => StartProcess()} >CallBack Using aSync and await..</button>
    
  )
}

export default ACallBack;