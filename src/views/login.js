import React from 'react';
import '../assets/css/login.css';
import axios from 'axios';


class Login extends React.Component{
    render (){
        return (
            <div className={"Login_wrap login-bg"}>   
            {/*  给aa设点击事件 */}
                <div className={"aa"} onClick={this.goBack.bind(this)}> </div>
                <div className={"header"}>

                </div>
                <div className={"login_main"}>
                    {/* 登录 */}
                    <div className={"login_wrap"}>
                        <h1 className={"title"}>欢迎来到聚橙网</h1>
                        <div className={"binded-phone"}>
                            <div className={"login-area"}>
                                <form>
                                    <ul className="lg-list">
                                        <li className={"lg-item"} >
                                            <input onKeyUp={this.loginStyle.bind(this)} className={"lg-input"} ref={"userName"} type="text"  name="tel" placeholder={"请输入手机号/邮箱"}/>
                                            <div className={"remove-btn rbtn1"} ref={"rbtn1"} onClick={this.remove1.bind(this)}></div>

                                        </li>
                                        <li className={"lg-item"}>
                                            <input onKeyUp={this.loginStyle.bind(this)} className={"lg-input"} ref={"passWord"} type="passWord" name="password" placeholder={"请输入密码"}/>
                                            <div className={".remove-btn rbtn2"} ref={"rbtn2"} onClick={this.remove2.bind(this)}></div>
                                            <div className={"look  look1"} ref={"look"} onClick={this.look.bind(this)}></div>
                                            <div className={"look  unlook"} ref={"unlook"} onClick={this.unlook.bind(this)}></div>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div className={"err"}>信息或密码错误或未注册</div>
                            <input onClick={this.userLogin.bind(this)} type="button" value={"登 录"} className={"login-button"} />
                            <div className={"login-toggle"}>
                                <span className={"left tg-mail"} onClick={this.forget.bind(this)}>忘记密码</span>
                                <span className={"right tg-login"} onClick={this.register.bind(this)} >验证码登录/注册</span>
                            </div>
                        </div>
        {/* ------------------------------注册----------------------------------------- */}
                        <div className={"binded-register"}>
                            <div className={"register-area"}>
                                <form>
                                    <ul className="rt-list">
                                        <li className={"rt-item"} >
                                            <input onKeyUp={this.registerStyle.bind(this)} className={"rt-input"} ref={"ruserName"} type="text"  name="tel" placeholder={"请输入要注册的用户名"}/>
                                            <div className={"register-title"}> 未注册的用户注册成功后将自动登录</div>
                                        </li>
                                        <li className={"rt-item"}>
                                            <input onKeyUp={this.registerStyle.bind(this)} className={"rt-input"} className={"rt-input"}  ref={"rpassWord"} type="passWord" name="password" placeholder={"请输入密码"}/>
                                            <div className={"register-title"}>请输入5位以上且不包含空格的密码</div>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div className={"err"}>请正确设置密码</div>
                            <input onClick={this.userRegister.bind(this)} type="button" value={"注 册"} className={"register-button"} />
                            <div className={"register-toggle"}>
                                <span className={"left rt-mail"} onClick={this.forget.bind(this)}>邮箱注册</span>
                                <span className={"right rt-register"} onClick={this.replaceLogin.bind(this)} >已有账号返回登录</span>
                            </div>
                        </div>

 {/* --------------------------------------注册------------------------------------------------*/}
                    </div>
                </div>
                <div className={"login_footer_wrap"}>
                    {/* <div className={"empty-box"}> */}
                        <div className={"login-qq"}>
                            <a href="https://m.juooo.com/Passport/oauthRegLogin?type=qq">
                            </a>
                        </div>
                        <div className={"login-weibo"}>
                            <a href="https://m.juooo.com/Passport/oauthRegLogin?type=sina">
                            </a>
                        </div>
                    {/* </div> */}
                    <p className={"footer_title"}>其它登录方式</p>
                </div>
            </div>
        )
    }
    // componentWillMount(){
         
    // }
    //点击注册
    async register (){
        console.log("注册");
        document.querySelector(".binded-phone").style.display="none"
        document.querySelector(".binded-register").style.display="block";
    }
    //点击忘记密码切换内容
    async forget(){
        console.log("忘记密码");
    }
    //点击头部小箭头，返回上一页
    async goBack(){
        // console.log("点击了箭头");
        // console.log(this.props);
        this.props.history.push("/")
        document.querySelector(".aa").style.display="none"
    }
    //从注册返回登录
    async replaceLogin(){
        document.querySelector(".binded-phone").style.display="block"
        document.querySelector(".binded-register").style.display="none";
    }

// ---------------------注册界面--------------
    //注册样式改变
    async registerStyle(){
        if(this.refs.ruserName.value.length > 0) {
            console.log(123);
            document.querySelector(".register-button").style.background="radial-gradient(circle at 1% 50%, #ff9a34,#ff4d4a)";
            if(this.refs.ruserName.value.length < 1){
                document.querySelector(".register-button").style.background="";
            }
        }else{
            document.querySelector(".register-button").style.background="";
        }
        const str = this.refs.rpassWord.value;
        console.log(str);
        if (str.indexOf(" ") != -1) {
            console.log("空格");
            document.querySelector(".binded-register .err").style.display="block";
            setTimeout(()=>{
                document.querySelector(".binded-register .err").style.display="none";
            },2000)
        }
    }
    //注册并登录
    async userRegister(){
        console.log("注册");
        const luserName = this.refs.ruserName.value;
        const lpassWord = this.refs.rpassWord.value;
        const {data} = await this.axios.post("/l/register",{
                userName : luserName,
                passWord : lpassWord
        })
        if(data.ok === 1){
            this.props.history.push("/")
            localStorage.setItem("userName",luserName)
            localStorage.setItem("passWord",lpassWord)
        }else{
            document.querySelector(".err").style.display="block"
            setTimeout(()=>{
                document.querySelector(".err").style.display="none"
            },2000)
        }
    }

//----------------------登录界面--------------
    //点击眼睛查看密码
    async look(){
        if(this.refs.look){
            console.log('点击了眼睛');
            document.querySelector(".look1").style.display="none";
            document.querySelector(".unlook").style.display="block";
            console.log(document.getElementsByClassName("lg-input"));
            document.getElementsByClassName("lg-input")[1].type="text"
        }
    }
    async unlook(){
        // console.log('点击了眼睛');
        document.querySelector(".look1").style.display="block";
        document.querySelector(".unlook").style.display="none";
        document.getElementsByClassName("lg-input")[1].type="password"
    }
    // 点击移除按钮，清空用户内容
    async remove1(){
        if(this.refs.rbtn1){
            this.refs.userName.value = null;
            document.querySelector(".rbtn1").style.display="none"
            document.querySelector(".login-button").style.background=""
            // console.log("移除了用户名");
        }
    }
    async remove2(){
        if(this.refs.rbtn2){
            this.refs.passWord.value = null;
            document.querySelector(".rbtn2").style.display="none"
            document.querySelector(".look1").style.display="none"
            document.querySelector(".unlook").style.display="none"
            console.log("密码");
        }
    }
    // 移除按钮样式
    async loginStyle(){
        if(this.refs.userName.value.length > 0) {
            document.querySelector(".login-button").style.background="radial-gradient(circle at 1% 50%, #ff9a34,#ff4d4a)"
            document.querySelector(".remove-btn").style.display="block"
            // console.log(123);
            if(this.refs.userName.value.length < 1){
                document.querySelector(".login-button").style.background=""
                document.querySelector(".rbtn1").style.display="none"
            }
        }else{
            // console.log(222);
            document.querySelector(".login-button").style.background=""
            document.querySelector(".rbtn1").style.display="none"
        }
        if(this.refs.passWord.value.length > 0){
            document.querySelector(".rbtn2").style.display="block"
            document.querySelector(".look1").style.display="block"
        }else{
            // console.log(12345);
            document.querySelector(".rbtn2").style.display="none"
            document.querySelector(".look1").style.display="none"
            document.querySelector(".unlook").style.display="none"
        }
    }
    // 登录跳转
    async userLogin() {
        // console.log("登录");
        const luserName = this.refs.userName.value;
        const lpassWord = this.refs.passWord.value;
        console.log(luserName,lpassWord)
        const {data} = await this.axios.post("/l/login",{
                userName : luserName,
                passWord : lpassWord
        })
        console.log(data)
        if(data.ok === 1){
            console.log(this.props);
            this.props.history.push("/")
            localStorage.setItem("userName",luserName)
            localStorage.setItem("passWord",lpassWord)
        }
        else{
            document.querySelector(".err").style.display="block"
            setTimeout(()=>{
                document.querySelector(".err").style.display="none"
            },2000)
            // console.log(data);
        }
    }
}
export default Login;
