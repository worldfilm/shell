import React,{Component} from 'react';
import './xy01.css'
export default class Info extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="xy01-content">
            xy01,{this.props.data}

        </div>
    }
}
