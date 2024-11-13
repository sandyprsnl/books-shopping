import {  toast } from 'react-toastify';

export function getSessionData(){
    const token = JSON.parse(sessionStorage.getItem('token'));
    const cbid = sessionStorage.getItem('cbid');
    return {token,cbid};
}
export function setSessionData(data){
    const token = data.accessToken;
    const cbid = data.user.id
    sessionStorage.setItem('token',JSON.stringify(token));
    sessionStorage.setItem('cbid',cbid);
}
export async function loginService({email,password}){
  console.log(email)
    const config = {
        method:'post',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(
          {
            "email":email,
            "password":password
          }
        )
      };
    const response = await fetch(`${process.env.REACT_APP_API_URL}login`,config);
    if(response.ok){
      return await response.json();
    }
    throw {status:response.status,message:response.statusText};
    
}
export async function registerService({name,email,password}){
    const config = {
        method: 'POST',
        headers: {
          Accept: "application/json",
          'Content-type': "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      };
      const response = await fetch(`${process.env.REACT_APP_API_URL}register`, config);
      if(response.ok){
        return await response.json();
      }
      throw {status:response.status,message:response.statusText};
}
export function logoutService(){
    sessionStorage.removeItem('token');sessionStorage.removeItem('cbid')
}
export async function getUserDataService(){
    const response = await fetch(`${process.env.REACT_APP_API_URL}600/users/${getSessionData().cbid}`,
        {method:"GET",
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${getSessionData().token}`,
            }
        }

    );
    if(response.ok){
      return await response.json();
    }
    throw {status:response.status,message:response.statusText};
}

export function showError(msg){
  toast.error(msg,{
    position: "bottom-center",
    autoClose: false,
    closeOnClick: true,
  });
}
