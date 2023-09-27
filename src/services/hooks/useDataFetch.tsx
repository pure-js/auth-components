import { useState, useEffect, useReducer, useCallback } from 'react';
import wretch from 'wretch';

const baseUrl = 'https://www.fruityvice.com';
const endPoint = 'api/fruit/all';
// const apiKey = `api_key=${import.meta.env.VITE_NASDAQ_API_KEY}`;
// const finalurl = `${baseUrl}${endPoint}.json?${apiKey}`;
// Instantiate and configure wretch
const api = wretch(baseUrl, { mode: 'no-cors' });
// .errorType('json')
// .resolve((r) => r.json());

// try {
// Fetch users
// await api.get(`${endPoint}.json?${apiKey}`);
// Find all posts from a given user
// const user = users.find(({ name }) => name === 'Nicholas Runolfsdottir V');
// const postsByUser = await api.get(`/posts?userId=${user.id}`);
// // Create a new post
// const newPost = await api.url('/posts').post({
//   title: 'New Post',
//   body: 'My shiny new post',
// });
// // Patch it
// await api.url('/posts/' + newPost.id).patch({
//   title: 'Updated Post',
//   body: 'Edited body',
// });
// // Fetch it
// await api.get('/posts/' + newPost.id);
// } catch (error) {
//   // The API could return an empty object - in which case the status text is logged instead.
//   const message =
//     typeof error.message === 'object' && Object.keys(error.message).length > 0
//       ? JSON.stringify(error.message)
//       : error.response.statusText;
//   console.error(`${error.status}: ${message}`);
// }

export const useDataFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);

    async function logMovies() {
      const response = await fetch(`${baseUrl}/${endPoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // mode: 'no-cors',
      });
      const fruits = await response.data;
      console.log('fru ', fruits);
      setData(fruits);
    }
    logMovies();
    async function getData() {
      try {
        const fruits = await api.get(endPoint).json();
        console.log('f', fruits);
        setData(fruits);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    }
    // getData();
  }, []);

  return { data, isLoading, error };
};
