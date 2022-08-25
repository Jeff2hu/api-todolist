import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState:{ errors } } = useForm();
  const onSubmit = ({email,password,nickName}) => {
    console.log(email,password,nickName)
    navigate("/")
  }

  return (
    <div id="signUpPage" className="bg-yellow">
    <div className="conatiner signUpPage vhContainer">
        <div className="side">
            <a><img className="logoImg" src="https://upload.cc/i1/2022/03/23/rhefZ3.png" alt=""/></a>
            <img className="d-m-n" src="https://upload.cc/i1/2022/03/23/tj3Bdk.png" alt="workImg"/>
        </div>
        <div>
            <form 
              className="formControls"
              onSubmit={handleSubmit(onSubmit)}>
                <h2 className="formControls_txt">註冊帳號</h2>
                <label className="formControls_label" htmlFor='email'>Email
                <p className='noValue'>{errors.email && errors.email?.message}</p>
                </label>
                <input 
                  className="formControls_input"
                  type="text"
                  id="email"
                  placeholder="請輸入信箱"
                  {...register("email",{ 
                    required: {
                      value : true, 
                      message: "此欄位不可留空"
                    },
                    pattern: {
                      value : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message : "不符合Email格式"
                    }
                  })}
                />
                <label className="formControls_label" htmlFor='nickName'>Nick Name
                <p className='noValue'>{errors.nickName && errors.nickName?.message}</p>
                </label>
                <input 
                  className="formControls_input"
                  type="text"
                  id="nickName"
                  placeholder="請輸入暱稱"
                  {...register("nickName",{ 
                    required: {
                      value : true, 
                      message: "此欄位不可留空"
                    }
                  })}
                />
                <label className="formControls_label" htmlFor='password'>Password
                <p className='noValue'>{errors.password && errors.password?.message}</p>
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
                <label className="formControls_label" htmlFor='checkPassword'>Check Password
                <p className='noValue'>{errors.checkPassword?.message}</p>
                </label>
                <input 
                  className="formControls_input"
                  type="password"
                  id="checkPassword"
                  placeholder="請再次輸入密碼"
                  {...register("checkPassword",{ 
                    required:{
                      value: true ,
                      message: "此欄位不可留空"
                    },
                    validate: (value) => {
                      if (watch('password') !== value) {
                        return "兩次密碼輸入不同";
                      }
                  }})}
                />
                <input
                  className="formControls_btnSubmit" 
                  type="submit" 
                  value="註冊帳號"
                />
                <Link className="formControls_btnLink" to="/">登入</Link>
            </form>
        </div>
        </div>
    </div>
  )
}

export default SignUp