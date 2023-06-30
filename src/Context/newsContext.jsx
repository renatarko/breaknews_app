import { createContext, useContext, useEffect, useState } from "react";
import { getAllNewsService } from "../Services/postsServices";

const newsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);

  const [loading, setLoading] = useState(false);

  async function getAllNews() {
    setLoading(true);
    try {
      const response = await getAllNewsService(offset, limit);
      const { results } = await response.json();

      setLoading(false);
      setNews([...news, ...results]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <newsContext.Provider
      value={{ news, setNews, offset, setOffset, limit, getAllNews, loading }}
    >
      {children}
    </newsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(newsContext);

  if (!context) {
    throw new Error("useNews deve ser usado dentro de um NewsProvider");
  }

  return context;
};
