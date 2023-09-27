// import { useState, useEffect, useReducer, useCallback } from 'react';
// import wretch from 'wretch';

// wretch();

// export function useFetch(api, url: string) {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     setData(null);
//     setError(null);
//     const source = wretch.CancelToken.source();
//     wretch
//       .get(url, { cancelToken: source.token })
//       .then((res) => {
//         setIsLoading(false);
//         //checking for multiple responses for more flexibility
//         //with the url we send in.
//         res.data.content && setData(res.data.content);
//         res.content && setData(res.content);
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         setError('An error occurred. Awkward..');
//       });
//     return () => {
//       source.cancel();
//     };
//   }, [url]);

//   return { data, isLoading, error };
// }

// type FetchParams = {
//   url: string;
//   method: Methods;
//   body?: any;
//   config?: any;
// };

// const useFetch2 = ({ url, method, body, config }: FetchParams) => {
//   const [state, dispatch] = useReducer(reducer, {
//     data: null,
//     isLoading: false,
//     error: null,
//   });

//   function reducer(state: State<T>, action: Action<T>) {
//     switch (action.type) {
//       case 'loading':
//         return { ...state, isLoading: true };
//       case 'success':
//         return { data: action.data, isLoading: false, error: null };
//       case 'error':
//         return { data: null, isLoading: false, error: action.error };
//       default:
//         throw new Error('Unknown action type');
//     }
//   }
//   useEffect(() => {
//     let shouldCancel = false;

//     const callFetch = async () => {
//       dispatch({ type: 'loading', error: undefined });

//       try {
//         const response = await fetch(url, method, body, config);
//         if (shouldCancel) return;
//         dispatch({ type: 'success', data: response.data });
//       } catch (error: any) {
//         if (shouldCancel) return;
//         dispatch({ type: 'error', error });
//       }

//       callFetch();
//       return () => (shouldCancel = true);
//     };
//   }, [url]);

//   return { state };
// };
// export default useFetch2;

// export const useMyFetch = ({ url, method, config }: FetchParams) => {
//   // same reducer syntax

//   const fetchData = useCallback(
//     async (data: any) => {
//       try {
//         dispatch({ type: 'loading', error: undefined });
//         const response = await fetch(url, method, data, config);
//         dispatch({ type: 'success', data: response.data });
//         return response.data;
//       } catch (error: any) {
//         dispatch({ type: 'error', error });
//         console.error(error);
//         throw error;
//       }
//     },
//     [url],
//   );

//   return { state, fetchData };
// };

// const fetch = async (
//   url: string,
//   method: Methods,
//   body?: any,
//   config?: any,
// ): Promise<AxiosResponse> => {
//   console.log({ body });
//   switch (method) {
//     case 'POST':
//       return await wretch.post(url, body, config);
//     case 'GET':
//       return await wretch.get(url, config);
//     case 'DELETE':
//       return await wretch.delete(url, config);
//     default:
//       throw new Error('Unknown request method');
//   }
// };

// type Methods = 'POST' | 'GET' | 'DELETE';

// // response.data attribute defined as string until needed otherwise.
// type State<T> =
//   | { data: null; isLoading: boolean; error: null }
//   | { data: null; isLoading: boolean; error: AxiosError }
//   | { data: T; isLoading: boolean; error: null };

// type Action<T> =
//   | { type: 'loading'; error: undefined }
//   | { type: 'success'; data: T }
//   | { type: 'error'; error: AxiosError };
