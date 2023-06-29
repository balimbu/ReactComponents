
let root = ReactDOM.createRoot(document.getElementById('myReactDiv'));

//let otherRoot = ReactDOM.createRoot(document.getElementById("myOtherReactDiv"));

// Functional Component
let MyFunctionalComponent =(props) => {
    return (
        <fragment>
            <h1 className ="bg-warning"> Greetings! from Functional Component </h1>
            <h1> Hello, Good evening {props.name} !</h1>
        </fragment>
    )
}

// Class Component
class MyClassComponent extends React.Component{
    render(){
        return <h1 className = "bg-primary"> This is Class Component </h1>
    }
}


//root.render(< MyFunctionalComponent name = "Jennifer" />);
//otherRoot.render([< MyClassComponent />);
// render both components at the same time 
root.render( [< MyFunctionalComponent name = "Jennifer"/>, < MyClassComponent/> ]);
