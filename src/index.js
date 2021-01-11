import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log("Before Preparing Food");

function PrepareFood(callback){
  console.log("Starting food preparation,Food may take 10 minutes");  
  setTimeout(()=>{
    console.log("Food is Ready now");
    callback("Hello everybody , this is shef Ali. Food will be served in 2 minutes");
  },20000)
}

function PrepareAfterTea(callback){
  console.log("Here is shef Ahsen , Tea may take 5 minutes");
  setTimeout(()=>{
      console.log("Tea is ready now");      
      callback("Hello everybody , this is shef Ahsen , Tea will be served in 2 minutes");
  },10000)

}

function PrepreSomeSweetWithTea(callback){
  console.log("Here is Mutahir , Sweet will take as long as Tea Preparion by Ahsen.")
  setTimeout(()=>{
  callback("Hello everybody , this is shef Mutahir,Sweet will be served in 2 miinutes with Tea,Enjoy");
  }
,10000)
}


PrepareFood((value1)=>
  {
        console.log("Shef food ready message using callback is  = ",value1);
        console.log("Food was tasty");        
        //This si Prepare Tea callback funciton message
        PrepareAfterTea((value2)=>{
          console.log("Shef Tea ready message using callback is = " , value2)
          console.log("Tea is amazing");
        });
        // end here
        PrepreSomeSweetWithTea((value3)=>{
          console.log("Shef Sweet ready message using callback is = " ,value3);
          console.log("Sweet is amazing");
        })
        //This is Sweat Call back in parallel with tea


});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*

//code backup

console.log("Before Preparing Food");

function PrepareFood(callback){
  console.log("Starting food preparation,Food may take 10 minutes");  
  setTimeout(()=>{
    console.log("Food is Ready now");
    callback("Hello everybody , this is shef Ali. Food will be served in 2 minutes");
  },20000)
}

function PrepareAfterTea(callback){
  console.log("Here is shef Ahsen , Tea may take 5 minutes");
  setTimeout(()=>{
      console.log("Tea is ready now");      
      callback("Hello everybody , this is shef Ahsen , Tea will be served in 2 minutes");
  },10000)

}

function PrepreSomeSweetWithTea(callback){
  console.log("Here is Mutahir , Sweet will take as long as Tea Preparion by Ahsen.")
  setTimeout(()=>{
  callback("Hello everybody , this is shef Mutahir,Sweet will be served in 2 miinutes with Tea,Enjoy");
  }
,10000)
}


PrepareFood((value1)=>
  {
        console.log("Shef food ready message using callback is  = ",value1);
        console.log("Food was tasty");        
        //This si Prepare Tea callback funciton message
        PrepareAfterTea((value2)=>{
          console.log("Shef Tea ready message using callback is = " , value2)
          console.log("Tea is amazing");
        });
        // end here
        PrepreSomeSweetWithTea((value3)=>{
          console.log("Shef Sweet ready message using callback is = " ,value3);
          console.log("Sweet is amazing");
        })
        //This is Sweat Call back in parallel with tea


});

*/

