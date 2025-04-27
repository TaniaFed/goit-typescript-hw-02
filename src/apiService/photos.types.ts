export interface IPhoto {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
    regular: string;
    thumb: string;
  };
  user: {
    name: string;
    links: {
      html: string;
    };
  };
}

export interface IGetPhotos {
  total: number;
  total_pages: number;
  results: IPhoto[];
}

export interface IGetPhotosParams {
  query: string;
  page: number;
}
