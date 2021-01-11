import React from 'react';


function ACallBack() {

  function PrepareFood(callback) {
    console.log("Starting food preparation, Food may take 10 minutes");
    setTimeout(() => {
      console.log("Food is Ready now");
      callback("Hello everybody, this is chef Ali. Food will be served in 2 minutes");
    }, 20000)
  }

  function PrepareAfterTea(callback) {
    console.log("Here is chef Ahsen , Tea may take 5 minutes");
    setTimeout(() => {
      console.log("Tea is ready now");
      callback("Hello everybody, this is chef Ahsen , Tea will be served in 2 minutes");
    }, 10000)

  }

  function PrepreSomeSweetWithTea(callback) {
    console.log("Here is Mutahir , Sweet will take as long as Tea Preparion by Ahsen.")
    setTimeout(() => {
      callback("Hello everybody, this is chef Mutahir,Sweet will be served in 2 miinutes with Tea,Enjoy");
    }
      , 10000)
  }

  function FoodMainCall() {
    console.clear();
    console.log("Before Preparing Food...");

    PrepareFood((value1) => {
      console.log("chef food ready message using callback is  = ", value1);
      console.log("Food was tasty");
      //This si Prepare Tea callback funciton message
      PrepareAfterTea((value2) => {
        console.log("chef Tea ready message using callback is = ", value2)
        console.log("Tea is amazing");
      });
      // end here
      PrepreSomeSweetWithTea((value3) => {
        console.log("chef Sweet ready message using callback is = ", value3);
        console.log("Sweet is amazing");
      })
      //This is Sweat Call back in parallel with tea

    });
  }

  return (
    
      <button className="button3" onClick={() => FoodMainCall()} >CallBack Using aSync and await..</button>
    
  )
}

export default ACallBack;