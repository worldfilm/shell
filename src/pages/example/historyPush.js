//路由跳转
import React,{Component} from 'react'
import history from '../history'
class HistoryPush extends Component{
    handleClick(){
        history.push("/home")
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>click</button>

            </div>
        )
    }
}
export default HistoryPush;