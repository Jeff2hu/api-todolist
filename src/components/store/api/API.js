const API_URL = "https://todoo.5xcamp.us/";

export const api_register = async(url,data) => {
  return await fetch(API_URL+url,{
    method:"POST",
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify({
      "user":data
    })
  })
}

// const api_addTodo = async(url,data) => {
//   const addTodo = await fetch(API_URL+url,{
//     method:"POST",
//     headers:{
      
//     }
//   })
// }