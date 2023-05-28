const baseUrl = "https://api-breaknews-8891.onrender.com/news"

export const getAllNews = () => {
  const response = fetch(`${baseUrl}`)
  return response
}

export const getNewsByUserId = (token) => {
  const response = fetch(`${baseUrl}/byUser`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  return response
}

export const createNews = (token, newNews) => {
  const response = fetch(`${baseUrl}/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newNews),
  })
  return response
}

export const updatedNews = (token, updatedNews, news) => {
  const response = fetch(`${baseUrl}/${news.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedNews),
  })
  return response
}

export const likeTheNews = (news, token) => {
  const response = fetch(`${baseUrl}/like/${news.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  return response
}

// criar o comentário na notícia.

export const DeleteNews = (news, token) => {
  const response = fetch(`${baseUrl}/${news.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  return response
}