import axios from 'axios';

import { IPhoto, IGetPhotos, IGetPhotosParams } from './photos.types';

const API_KEY = 'UgAJM2xRGL_qWthQcu_j9HV4rKq1Qc2q6rQ4ler1yKw';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async ({ query, page }: IGetPhotosParams): Promise<IGetPhotos> => {
  
  const { data } = await axios.get<IGetPhotos>(`search/photos/?client_id=${API_KEY}`, {
    params: {
      query,
      page
      },
    });

  return data;
}