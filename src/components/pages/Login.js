import React,{ useState,useEffect, useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { api_login } from '../store/login/API_Login';
import { LoginContext } from '../store/login/LoginContext';

const Login = () => {

  const { setToken,message,setMessage,errorMessage,setErrorMessage } = useContext(LoginContext)
  
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{ errors } } = useForm();
  const onSubmit = async(data) => {
    const login = await api_login(data)
    const res = await login.json();
    if(login.status===200){
      setMessage(res.message)
      localStorage.setItem("token",login.headers.get("authorization"))
      localStorage.setItem("name",res.nickname)
      setToken(localStorage.getItem("token"))
      navigate("/todolist")
    }else{
      setErrorMessage(res.error)
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      setMessage("")
      setErrorMessage("")
    },2000)
  },[message,errorMessage])

  return (
    <div id="loginPage" className="bg-yellow">
      <div className="conatiner loginPage vhContainer">
        <div className="side">
          <a><img className="logoImg" src="https://upload.cc/i1/2022/03/23/rhefZ3.png" alt="logoImg"/></a>
          <img className="d-m-n" src="https://upload.cc/i1/2022/03/23/tj3Bdk.png" alt="workImg"/>
        </div>
        <div>
          <form className="formControls" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="formControls_txt">最實用的線上代辦事項服務</h2>
              <label className="formControls_label" htmlFor='email'>Email
              <p className='noValue'>{errors.email?.message}</p>
              </label>
              <input 
                className={`formControls_input ${errors.email?"falseInput":""}`}
                type="text" 
                id="email" 
                placeholder="請輸入信箱"
                {...register("email",{
                  required:{
                    value:true,
                    message:"此欄位不可留空"
                  },
                  pattern: {
                    value : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message : "不符合Email格式"
                  }
                })}
              />
              <label className="formControls_label" htmlFor='password'>Password
              <p className='noValue'>{errors.password?.message}</p>
              </label>
              <input 
                className={`formControls_input ${errors.password?"falseInput":""}`}
                type="password" 
                id="password" 
                placeholder="請輸入密碼"
                {...register("password",{
                  required:{
                    value:true,
                    message:"此欄位不可留空"
                  },
                  minLength:{
                    value:6,
                    message:"密碼長度至少6位數"
                  }
                })}
              />
              <input 
                className="formControls_btnSubmit"
                value="登入"
                type="submit"
              />
              <Link className="formControls_btnLink" to="/signup">註冊帳號</Link>
          </form>
          <div className={errorMessage?"alertMessage_container":""}><p><span className='errorMessage'>X</span>{errorMessage}</p></div>
          <div className={message?"alertMessage_container":""}><p><span className='correctMessage'>✓</span>{message}</p></div>
        </div>
      </div>
    </div>
  )
}

export default Login