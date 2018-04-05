import React, { Component} from 'react'
import {LoadModules} from '../common';
import Footer from '../common/footer';
//代码分割
const HomeArr = LoadModules({
        1:() => import('../../pankou/xy01'),
        2:() => import('../../pankou/xy02')
});

//默认模板
let HomeRender=HomeArr[0];
// let HomeRender=HomeArr[1];//xy01
// let HomeRender=HomeArr[1];//xy02
export default class Home extends Component {
    state={
        title:"传参",
        data:"初始化数据",
    }
    componentWillMount(){
        this.setState({
            data:"列表数据"
        })
    }
    render(){
        return(
            <div>
                {HomeRender ?
                    <HomeRender {...this.state} /> :<HomeDefaultRender {...this.state} />
                }
            </div>
        )
    }
}
//默认模板
class HomeDefaultRender extends Component {

    render(){
        return(
            <div>
                默认模板,{this.props.title}
                <Footer />
            </div>
        )
    }
}
