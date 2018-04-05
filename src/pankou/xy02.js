import React,{Component} from 'react';
import './xy02.css'
export default class Info extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="xy02-content">
            xy02,{this.props.data}
        </div>
    }
}
