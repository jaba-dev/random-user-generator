function randomUser() {
 return fetch('https://randomuser.me/api/', {
  mode: "cors",
  headers: {
   'Access-Control-Allow-Origin': '*'
  }
 })
  .then(response => {
   return response.json()
  })
  .then(data => {
   return data.results[0]
  })
  .catch(err => {
   userCount--
  })
}




