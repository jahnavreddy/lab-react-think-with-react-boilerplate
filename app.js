import React from "react"
import ReactDOM from "react-dom"

//Iteration 1

// var container = document.getElementById("react-container")
// container.innerHTML = "Hello! Welcome to React"

// ReactDOM.render("Hello! Welcome to React",document.getElementById("react-container"))


// let h1_tag = React.createElement(
//   'h1',
//   {id:"h1-tag"},
//   "Hello! Welcome to React",
//   React.createElement("div",null,"Welcome to react")
// )

// ReactDOM.render(h1_tag,container)


//Iteration 2

// var container = document.getElementById("react-container")


// function reactContainer(){
//   return(
//     'h1',
//     {id:"h1-tag"},
//     "Hello! Welcome to React",

//   )
// }





// function ReactContainer(){
//   let div_tag1 = React.createElement(
//     'h1',
//     {id:"h1-tag"},
//     "Hello! Welcome to React learning",
//   )
//   return div_tag1;
// }

// ReactDOM.render(ReactContainer(),container)



//Iteration 3 

class KalvianContainer extends React.Component {

  render(){
   return React.createElement(
        'div',
        {id:"h1-tag"},
        "Hey Kalvians",
        React.createElement("div",null,"Welcome to react")
      )
  }

}

var container = document.getElementById("react-container")
ReactDOM.render(React.createElement(KalvianContainer),container)



