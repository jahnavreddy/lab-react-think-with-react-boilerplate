// Iteration 1
const container = document.getElementById('react-container');

ReactDOM.render("Hello! Welcome to React",container);   
 

// Iteration 2
function Rectcontainer (){
    
        return React.createElement(
            `div`,
            null,
            "Hey Kalvians! Welcome to React Learning",
                    React.createElement(`div`,null,"Let's rock and roll"))

}

ReactDOM.render(Rectcontainer(),container)

//Iteration 3 

class Kalvium extends React.Component{
        render(){
            return  React.createElement(
                `div`,
                null,
                "Hey Kalvians",
                        React.createElement(`div`,null,"Let's rock and roll with classes"))
        }
}

ReactDOM.render(React.createElement(Kalvium),container);