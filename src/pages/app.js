
// application's entry
import React, { Component } from 'react';
import {Router, Route,BrowserRouter } from 'react-router-dom';
import '../css/common.css';
//个人中心
import Login from './login/index'; // 未登录
import Register from './login/register'; // 注册
import Home from './home/index' // 首页
import HomePromodetail from './home/home_promodetail'//首页轮播图详情页面
import User from './user/index' // 用户中心
import WithDrawMoney from './user/withdrawMoney' //  提现
import Order from './user/order' //  订单
import Information from './user/information' //  信息中心
import Account from './user/account' //  信息中心
import User_login from './user/user_login' //已登录
import User_state from './user/user_state' //个人信息
import SetUserInfo from './user/setUserInfo' //个人信息
import GetService from './user/getService'//在线客服
import Order_Deatil from './user/order_deatil'//订单详情
import TraceSingle from './lottery/components/traceSingle' // 追号单页面  从订单详情进入
import Setpassword from './user/setpasswrod'//提现密码
import BankCardBind from './user/bankcardbind'//绑定银行卡
import InformationList from './user/informationList'//今日热点
import InformationDetail from './user/informationDetail'//今日热点详情
import ReceiveBoxList from './user/receiveBoxList'//系统消息
import ReceiveBoxDetail from './user/receiveBoxDetail'//系统消息详情
import Guidance from './home/guidance' //引导页
import To_load from  './home/to_load'
import ResetLoginPsd from './user/resetloginpsd' //个人信息




//开奖信息
import OpenList from './open/index' // 开奖信息
import HistoryList from './open/historyList' // 开奖信息
import WinDetail from './open/winDetail'
import LotteryTrend from './open/lotteryTrend'
// 大厅
import Hall from './hall/index'; // 大厅
// 各个彩种入口 START
// import ltSSC from './lottery/ssc/index';

// 各个彩种入口 END
//其他
import PromoDetailforuser from './promo/promoDetail-for-user'//个人中心和首页跳转优惠活动详情页面
import Promoforuser from './promo/indexForuser'//个人中心和首页跳转优惠活动页面
import Promo from './promo/index' // 优惠活动
import PromoDetail from './promo/promoDetail' //优惠活动详情
import MySetting from './mySetting/index' // 我的最爱设置
//充值
import Pay from './user/pay' //  充值
//电子钱包，电子游戏
import Wallet from './wallet/index';//电子钱包
import Inegame from './wallet/inegame';//转入
import Outegame from './wallet/outegame';//转出
//设置
import Setting from './user/setting';//我的设置
import Ours from './user/ours';//关于我们
// 帮助
import Help from './help/help';//帮助列表
import HelpDetail from './help/helpDetail';//帮助详情
import Feedback from './help/feedback'//意见反馈
//代理中心
import Group_add_custom1 from './group/group_add_custom1'//新增会员,更新
import Group_custom1 from './group/group_custom1'//会员管理，更新
import Group_member_detail from './group/group_member_detail'//会员及代理详情
import Group_member_change_level from './group/group_member_change_level'//会员转代理
import Group_profit_change1 from './group/group_profit_change1'//团队帐变报表,更新
import Group_profit1 from './group/group_profit1'//团队盈亏报表,更新
import Group_withdraw1 from './group/group_withdraw1'//团队提现明细，更新
import Group_recharge1 from './group/group_recharge1'//团队充值明细,更新
import Group from './user/group' //  代理中心
import Group_agent from './group/group_agent' //  代理中心
import Agency_explain from './group/agency_explain'//代理说明

import Vindicate from './vindicate/vindicate'
//
//
// import(`messages_${getLocale()}.js`)

import HistoryPush from './example/historyPush'
import history from './history';


export default class Application extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <Router history={history}>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/hall" component={Hall} />
                        <Route exact path="/open" component={OpenList}/>
                        <Route exact path="/open/history/:name" component={HistoryList}/>
                        <Route exact path="/open/winDetail" component={WinDetail}/>

                        <Route exact path="/receiveBoxDetail" component={ReceiveBoxDetail}/>
                        <Route exact path="/receiveBoxList" component={ReceiveBoxList}/>
                        <Route exact path="/informationDetail" component={InformationDetail}/>
                        <Route exact path="/informationList" component={InformationList}/>
                        <Route exact path="/setpasswrod" component={Setpassword}/>
                        <Route exact path="/order_deatil" component={Order_Deatil}/>
                        <Route exact path="/tracesingle" component={TraceSingle}/>{/* 追号单页面  从订单详情进入*/}
                        <Route exact path="/bankCardBind" component={BankCardBind}/>
                        <Route exact path="/getService" component={GetService}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/user_login" component={User_login}/>
                        <Route exact path="/user_state" component={User_state}/>
                        <Route exact path="/setUserInfo" component={SetUserInfo}/>
                        <Route exact path="/resetLoginPsd" component={ResetLoginPsd}/>



                        <Route exact path="/group_agent" component={Group_agent}/>
                        <Route exact path="/feedback" component={Feedback}/>
                        <Route exact path="/helpDetail" component={HelpDetail}/>
                        <Route exact path="/wallet" component={Wallet}/>
                        <Route exact path="/ours" component={Ours}/>
                        <Route exact path="/help" component={Help}/>
                        <Route exact path="/inegame" component={Inegame}/>
                        <Route exact path="/setting" component={Setting}/>
                        <Route exact path="/outegame" component={Outegame}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/home/promodetail" component={HomePromodetail}/>
                        <Route exact path="/user" component={User}/>
                        <Route exact path="/guidance" component={Guidance}/>



                        {/*开奖  start*/}

                        <Route exact path="/lotteryTrend" component={LotteryTrend}/>
                        <Route exact path="/promo/userimg/:id" component={PromoDetailforuser}/>
                        <Route exact path="/promo/user" component={Promoforuser}/>
                        <Route exact path="/promo/id/:name" component={Promo}/>
                        <Route exact path="/promo/img/:id" component={PromoDetail}/>
                        <Route exact path="/promo" component={Promo}/>
                        <Route exact path="/mySetting" component={MySetting}/>
                        <Route exact path="/pay" component={Pay}/>
                        <Route exact path="/withdrawMoney" component={WithDrawMoney}/>
                        <Route exact path="/order" component={Order}/>
                        <Route exact path="/information" component={Information}/>
                        <Route exact path="/account" component={Account}/>
                        <Route exact path="/group_recharge1" component={Group_recharge1}/>
                        <Route exact path='/group_withdraw1' component={Group_withdraw1}/>
                        <Route exact path='/group_profit1' component={Group_profit1}/>
                        <Route exact path='/group_profit_change1' component={Group_profit_change1}/>
                        <Route exact path='/group_custom1' component={Group_custom1}/>
                        <Route exact path='/group_member_detail/:memberId/:memberName/:memberLevel' component={Group_member_detail}/>
                        <Route exact path={'group_member_change_level/:memberId/:rebate/:bonusOdds/:memberName/:memberLevel'} component={Group_member_change_level}/>
                        <Route exact path='/group_add_custom1' component={Group_add_custom1}/>
                        <Route exact path="/setpassword" component={Setpassword}/>{/*//设置资金密码*/}
                        {/*/ 用例 end*/}
                        {/*维护*/}
                        <Route exact path="/vindicate" component={Vindicate}/>
                        <Route exact path="/agency_explain" component={Agency_explain} />
                    </div>
                </Router>
            </BrowserRouter>
        );
    }
}

