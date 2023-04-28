const API_KEY = '34288902-13701de51ab67ccd3010f5c4f';
const BASE_URL = 'https://pixabay.com/api';

export const fetchImages = (query, page, perPage) => {
  const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${API_KEY}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Oops! Nothing found'));
  });
};
