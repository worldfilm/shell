import React, {Component} from 'react'
import Navbar from '../common/navbar';
import Api from '../api';

export default class GetService extends Component {
    constructor(props) {
        super(props);
        this.state={
            url:"",
            height:"",
            width:"",
        }

    }
    componentWillMount(){


    }
    componentDidMount() {
        if(sessionStorage.getItem("way")&&sessionStorage.getItem("way")==="origin"){
            window.history.go(-1);
            sessionStorage.removeItem("way");
        }else{
            Api("c=help&a=getService", null,  (res)=> {
                if(res.errno===0){
                    if(res.data.way==="origin"){
                        sessionStorage.setItem("way","origin");
                        window.location.href=res.data.ser_addr;
                    }else{
                        this.setState({
                            url:res.data.ser_addr,
                            height:document.getElementsByClassName("getService")[0].offsetHeight,
                            width:document.getElementsByClassName("getService")[0].offsetWidth,
                        })
                    }
                }
            })
        }
    }

    render() {

        return (
            <div>
                <Navbar title="在线客服" back="back"/>
                <div className="getService">
                    <iframe src={this.state.url} width={this.state.width} height={this.state.height} frameBorder="0"></iframe>
                </div>
            </div>
        );
    }
}
