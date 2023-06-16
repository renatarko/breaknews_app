const baseUrl = "https://api-breaknews-8891.onrender.com/news";

export const getAllNewsService = () => {
  const response = fetch(`${baseUrl}`);
  return response;
};

export const getNewsByUserService = (token) => {
  try {
    const response = fetch(`${baseUrl}/byUser`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const createNewNewsService = (token, newNews) => {
  try {
    const response = fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newNews),
    });
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const getNNewsBySearchService = () => {
  const response = fetch(`${baseUrl}/search`);
  return response;
};

export const updatedNewsService = (token, updatedNews, newsID) => {
  const response = fetch(`${baseUrl}/${newsID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedNews),
  });
  return response;
};

export const likeTheNewsService = (newsId, token) => {
  const response = fetch(`${baseUrl}/like/${newsId}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const addCommentsTheNewsService = (newsId, token, input) => {
  const response = fetch(`${baseUrl}/comment/${newsId}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(input),
  });
  return response;
};

export const deleteCommentsTheNewsService = (newsId, commentId, token) => {
  const response = fetch(`${baseUrl}/comment/${newsId}/${commentId}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

// criar o comentário na notícia.

export const deleteNewsService = (newsID, token) => {
  const response = fetch(`${baseUrl}/${newsID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
