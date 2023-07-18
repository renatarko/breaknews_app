// const baseUrl = "http://localhost:3000/news";
const baseUrl = "https://api-breaknews-8891.onrender.com/news";

export const getAllNewsService = async (offset, limit) => {
  try {
    const response = await fetch(
      `${baseUrl}/search?offset=${offset}&limit=${limit}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getNewsFromSearchService = async (offset) => {
  try {
    const response = await fetch(`${baseUrl}/search?offset=${offset}&limit=0`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getNewsByUserService = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/byUser`, {
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

export const createNewNewsService = async (token, newNews) => {
  try {
    const response = await fetch(`${baseUrl}`, {
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

export const getNNewsBySearchService = async () => {
  try {
    const response = await fetch(`${baseUrl}/search`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updatedNewsService = async (token, updatedNews, newsID) => {
  try {
    const response = await fetch(`${baseUrl}/${newsID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedNews),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const likeTheNewsService = async (newsId, token) => {
  try {
    const response = fetch(`${baseUrl}/like/${newsId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addCommentsTheNewsService = async (newsId, token, input) => {
  try {
    const response = await fetch(`${baseUrl}/comment/${newsId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(input),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCommentsTheNewsService = async (
  newsId,
  commentId,
  token
) => {
  try {
    const response = fetch(`${baseUrl}/comment/${newsId}/${commentId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

// criar o comentário na notícia.

export const deleteNewsService = async (newsID, token) => {
  try {
    const response = fetch(`${baseUrl}/${newsID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
