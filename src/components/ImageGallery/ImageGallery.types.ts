// import { Image } from "../ImageCard/ImageCard.types";

// export interface Gallery {
//     results: Image[];
//     openModal: (url: string) => void;
// }

import { IPhoto } from '../../apiService/photos.types';

export interface Gallery {
  results: IPhoto[];
  openModal: (src: string, alt: string) => void;
}