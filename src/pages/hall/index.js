import React, { Component} from 'react'
import {LoadModules} from '../common';
import Footer from '../common/footer';

const HomeArr = LoadModules({
    1:() => import('../../pankou/xy01'),
    2:() => import('../../pankou/xy02')
});

const HomeRender=HomeArr[1];

export default class Hall extends Component {
    state={
        title:"title",
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
                <HomeRender {...this.state} />
                <Footer />
            </div>
        )
    }
}
