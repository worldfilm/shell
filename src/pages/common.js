import React,{Component} from 'react';
import Loadable from 'react-loadable';
export default class Common extends Component{

}

export function LoadModules(obj) {
    let newObj={};
    for(var i in obj){
        console.log()
        newObj[i]= Loadable({
            loader: obj[i],
            loading(props) {
                if (props.error) {
                    return <div>Error!</div>;
                } else if (props.pastDelay) {
                    return <div>Loading...</div>;
                } else {
                    return null;
                }
            }
        })
    }
    return newObj;
}