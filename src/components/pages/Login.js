import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState:{ errors } } = useForm();
  const onSubmit = ({email,password}) => {
    console.log(email,password)
    navigate("/todolist")
  }

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
                className="formControls_input"
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
                className="formControls_input"
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
        </div>
      </div>
    </div>
  )
}

export default Login