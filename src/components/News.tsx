import React, { useEffect, useState, useCallback } from 'react';
import Api from '../services/Api';
import { AxiosResponse } from 'axios';
import { newsProps } from '../types/type';
import debounce from 'lodash.debounce';

const News: React.FC = () => {
  const [trendingNewsData, setTrendingNewsData] = useState<newsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fungsi untuk mengambil data dari API
  const fetchNews = async (): Promise<void> => {
    try {
      setLoading(true);
      const resp: AxiosResponse = await Api.getTrendingNews();
      const newsData = resp.data.data;
      setTrendingNewsData(newsData);
      localStorage.setItem('trendingNews', JSON.stringify(newsData)); // Simpan ke localStorage
      console.log(newsData); // Debug data API
    } catch (error) {
      console.error('Error fetching trending news:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fungsi debounce untuk mengontrol frekuensi pemanggilan API
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTrendingNews = useCallback(
    debounce(() => {
      const cachedNews = localStorage.getItem('trendingNews');
      if (cachedNews) {
        setTrendingNewsData(JSON.parse(cachedNews)); // Ambil data dari localStorage jika ada
        setLoading(false);
        console.log('Loaded from cache');
      } else {
        fetchNews(); // Fetch API jika tidak ada cache
      }
    }, 2000), // Debounce selama 2 detik
    []
  );

  useEffect(() => {
    getTrendingNews();
    return () => {
      getTrendingNews.cancel(); // Hapus debounce saat komponen di-unmount
    };
  }, [getTrendingNews]);

  return (
    <div>
      <h1>Trending News</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {trendingNewsData.map((article, index) => (
            <li key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
