import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { loginService, setSessionData, showError } from '../services';
const Login = () => {
  const email = useRef();
  const password = useRef()
  const navigator = useNavigate();

  async function login(e){
    e.preventDefault();
    let data =  {};
    try {
      let uemail = email.current.value;
      let upassword = password.current.value;
      data =  await loginService({email:uemail,password:upassword});
    } catch (error) {
      showError(error.message);
    }
    if(data.accessToken){
      setSessionData(data);
      navigator('/products');
    }else{
      toast.error(data);
    }
  }
  async function loginAsGust(){
    let data =  {};
    try {
      data =  await loginService({email:'guest@gmail.com',password:"!@#$%^&*"});
    } catch (error) {
      showError(error.message);
    }
    if(data.accessToken){
      setSessionData(data);
      navigator('/products');
    }else{
      toast.error(data);
    }
  }
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
      </section>        
        <form onSubmit={login}>
          <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required autoComplete="off" />
          </div>
          <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
              <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
        </form>
         <button onClick={loginAsGust} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto p-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">Login As Guest</button> 
    </main>
  )
}

export default Login
