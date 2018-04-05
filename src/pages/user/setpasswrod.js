import React, { Component} from 'react'
import Navbar from '../common/navbar';
import {message,Modal} from 'antd';
import Api from '../api';
import  "../../css/resetpsd.scss"
import MaskLoading from '../common/maskLoading';


export default class Setpassword extends Component {
    constructor(props) {
        super(props);
        
    }
    handlesubmit(){
        const user = JSON.parse(sessionStorage.getItem("user"));
        let oldPsd=document.getElementById("oldPsd")?document.getElementById("oldPsd").value.trim():"";

        let newPsd=document.getElementById("newPsd").value.trim();
        let makesurePsd=document.getElementById("comfimPsd").value.trim();
       


        if(oldPsd===""&&user.isset_secpwd===1){
            message.config({
                top: 50,
                duration: 2,
            });
            message.error('请输入您的旧密码')
        }else if(newPsd===""||makesurePsd===""){
            message.config({
                top: 50,
                duration: 2,
            });
            message.error('请输入您的新密码和确认密码')
        }else if(newPsd!==makesurePsd){
            message.config({
                top: 50,
                duration: 2,
            });
            message.error('新密码跟确认密码不一样');
            return false;
        }else if(oldPsd===newPsd){
            message.config({
                top: 50,
                duration: 2,
            });
            message.error('新密码和旧密码不能一样');
            return false;
        }else{
            MaskLoading(5);
            Api("c=user&a=editSecPwd",{
                secpassword:newPsd,
                user_id:user.user_id,
                old_secpwd:oldPsd,
                is_wap:1
            },function(res){
                // console.log(res);
                MaskLoading(false);
                if(res.errno ===0){
                    message.success('设置成功',2);
                    let user=JSON.parse(window.sessionStorage.user);
                    user.isset_secpwd=1;
                    sessionStorage.user=JSON.stringify(user);
                    this.props.history.goBack();
                }
            });
            return true;
        }

    }

    render() {
        let user = sessionStorage.getItem("user");
        let isset_secpwd;
        if(user){
            isset_secpwd = JSON.parse(user).isset_secpwd;
        }
        return (
            <div>
                <Navbar back="back" title={isset_secpwd===1?"修改资金密码":"设置资金密码"}/>
                <div className="resetPsd">
                    <ul>
                        {isset_secpwd==1?<li>
                            <span>旧资金密码</span>
                            <input id="oldPsd" type="password" placeholder="(6-16位字母和数字混合)"/>
                        </li>:null}

                        <li>
                            <span>新资金密码</span>
                            <input id="newPsd" type="password" placeholder="(6-16位字母和数字混合)"/>
                        </li>
                        <li>
                            <span> 确认新密码</span>
                            <input id="comfimPsd" type="password" placeholder="(6-16位字母和数字混合)"/>
                        </li>
                    </ul>
                    <p>为了您的账户安全，请勿使用您用于登录其他网站的密码或容易被猜到的密码（例如您的名字或生日）；如需更改银行卡信息，请联系在线客服</p>
                    <input className="submit_btn" type="button" value="确定" onClick={()=>{this.handlesubmit()}}/>
                </div>
            </div>
        );
    }
}
