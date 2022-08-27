const API_URL = "https://todoo.5xcamp.us/users";

export const api_register = async(data) => {
  return await fetch(API_URL,{
    method:"POST",
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify({
      "user":data
    })
  })
}

export const api_login = async(data) => {
  return await fetch(`${API_URL}/sign_in`,{
    method:"POST",
    headers:{
      "accept": 'application/json',
      'content-type': 'application/json'
    },
    body:JSON.stringify({
      "user":data
    })
  })
}