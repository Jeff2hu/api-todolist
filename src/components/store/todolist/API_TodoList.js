const API_URL = "https://todoo.5xcamp.us/todos";

export const api_todoList = async(token) => {
  return await fetch(API_URL,{
    headers:{
      "Authorization":token
    }
  });
}

export const api_addTodo = async(token,content) => {
  return await fetch(API_URL,{
    method:"POST",
    headers:{
      "accept": 'application/json',
      'content-type': 'application/json',
      "Authorization":token
    },
    body:JSON.stringify({
      "todo": {
        "content": content
      }
    })
  })
}

export const api_changeCheckbox = async(token,id) => {
  return await fetch(`${API_URL}/${id}/toggle`,{
    method:"PATCH",
    headers:{
      "id": id,
      "accept": 'application/json',
      'content-type': 'application/json',
      "Authorization":token
    }
  })
}

export const api_deleteItem = async(token,id) => {
  return await fetch(`${API_URL}/${id}`,{
    method:"DELETE",
    headers:{
      "id": id,
      "accept": 'application/json',
      'content-type': 'application/json',
      "Authorization":token
    }
  })
}