import React from 'react';


function ProceduralProcess() {

  function  PrepareFood() {
    let value = ""
    console.log("Starting food preparation, Food may take 10 minutes");
    setTimeout(() => {
      console.log("Food is Ready now.");
      value =  "Hello everybody, this is chef Ali. Food will be served in 2 minutes";
    }, 20000)
    
   return value
  }

  function PrepareAfterTea() {
    let value = ""
    console.log("Here is chef Ahsen , Tea may take 5 minutes");
    setTimeout(() => {
      console.log("Tea is ready now");
       value = "Hello everybody, this is chef Ahsen , Tea will be served in 2 minutes";
    }, 1000)

    return value

  }

  function PrepreSomeSweetWithTea() {
    let value = ""
    console.log("Here is Mutahir , Sweet will take as long as Tea Preparion by Ahsen.")
    setTimeout(() => {
       value = "Hello everybody, this is chef Mutahir,Sweet will be served in 2 miinutes with Tea,Enjoy";
    }
      , 1000)

      return value
  }

  function FoodMainCall() {
      console.clear();
      console.log("Before Preparing Food... Procedural Method");

      let value1 = PrepareFood() 
      console.log("chef food ready message using callback is  = ", value1);
      console.log("Food was tasty");
      //This si Prepare Tea callback funciton message
      let value2 = PrepareAfterTea()
      console.log("chef Tea ready message using callback is = ", value2)
      console.log("Tea is amazing");

      // end here
      let value3 = PrepreSomeSweetWithTea()
      console.log("chef Sweet ready message using callback is = ", value3);
      console.log("Sweet is amazing");

      console.log("This is the end of the method calls")
      //This is Sweat Call back in parallel with tea
  }

  return (
    
      <button className="button4" onClick={() => FoodMainCall()} >Procedural Process</button>
    
  )
}

export default ProceduralProcess;