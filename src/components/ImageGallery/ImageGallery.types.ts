import { IPhoto } from '../../apiService/photos.types';

export interface Gallery {
  results: IPhoto[];
  openModal: (url: string, alt: string) => void;
}