import React from 'react';


function PromissedCallBack() {
  function PrepareFood() {
    let promise = new Promise(function (resolve, reject) {
      console.log("Starting food preparation, Food may take 20 minutes");
      setTimeout(() => {       

        if (1 != 1)
        {
          reject("Divide by 0 error");
        }
        else
        {
          console.log("Food is Ready now");
          resolve("Hello everybody, this is chef Ali. Food will be served in 2 minutes");
        }

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
    


  function CallMain() {

    let promise = PrepareFood();
      promise.then(function (value) {
        console.log("chef food ready message using promise callback is  = ", value);
        console.log("Food was tasty");
        return PrepareAfterTea();
      })
      .then(function (value) {
        console.log("chef Tea ready message using callback is = ", value);
        console.log("Tea is amazing");
        return PrepreSomeSweetWithTea();
      })
      .then(function (value) {
        console.log("chef Sweet ready message using callback is = ", value);
        console.log("Sweet is amazing");        
      })
      .catch(function (error){
        console.log("Error = ", error  )
      })
  }

  return (
    <button className="button2" onClick={() => CallMain()} >CallBack Using Promisses..</button>
  )
}

export default PromissedCallBack;