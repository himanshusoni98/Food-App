import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state= {
            count:0,
        }
        console.log("Chile Constructor")
    }
    componentDidMount(){
        console.log("Child Component di mount")
    }
    render(){
        console.log("child render")
        const {name} = this.props;
        const {count} = this.state;
        return(
            <div className="user-card">
            <button onClick={()=>{
                this.setState({count: this.state.count-1 })
            }}>decrease Count</button>
            <h1>count = {count}</h1>
            <button onClick={()=>{
                this.setState({count: this.state.count+1})
            }}>Increase Count</button>
            
            <h2>{name}</h2>
            <h3>Patti</h3>
            </div>

        )
    }
}
export default UserClass;