const baseUrl = "https://api-breaknews-8891.onrender.com/user"

export const getUser = (id) => {
  const response = fetch(`${baseUrl}/${id}`)
  return response
}

export const updatedUser = (user, token, userData) => {
  const response = fetch(`${baseUrl}/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });
  return response
}