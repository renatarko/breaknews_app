
/** 
 * Custom Fetch API
 * 
 * @param {string} url - The URL to fetch
 * @param {string} method - The HTTP method to use
 * @param {object} body - The body to send - optional
 * @param {boolean} needToken - If the request needs authentication - optional
 * @returns {Promise} - The response from the server
 * 
 * @example 
 * GET
 * ```javascript
   fetcher({
      url: "https://example.com",
      method: "GET",
      body: { name: "John Doe" },
      needToken: true
   }).then((data) => {
      console.log(data)
   }).catch((error) => {
      console.log(error)
   })
  ```
 *
 * @example 
 * GET
 * ```javascript
  const data = await fetcher({
     url: "https://example.com",
     method: "GET",
     body: { name: "John Doe" },
     needToken: true
  })
  
  ```
* @example 
* DELETE
* ```javascript
    fetcher({
      url: "https://example.com/1",
      method: "DELETE",
      needToken: true
    }).then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })
 * ```
 */ 
export const fetcher = async ({
  url,
  method, 
  body = undefined, 
  needToken = true 
})  => {

  const headers = {
    'Content-Type': 'application/json',
  }

  if(needToken) {
    const token = localStorage.getItem("token");
    if(!token) {
      return Promise.reject(new Error("No token found"))
    }
    headers.Authorization = `Bearer ${token}`
  }

  const options = {
    method,
    headers,
  }

  if(body) {
    options.body = JSON.stringify(body)  
  }

  return fetch(url, options)
  .then((res) => res.json())
  .then((data) => data)
  .catch((error) => {
    throw new Error(error.message)
  });
}
