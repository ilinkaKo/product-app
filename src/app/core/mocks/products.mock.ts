import { Product } from '../models/product.model';
import { manufacturers } from './manufacturers.mock';

export const products: Array<Product> = [
  {
    id: 'f662794f-8215-46c1-8751-74fbdadc31d8',
    name: 'MacBook Air',
    manufacturer: manufacturers[0],
    price: 1200,
    expiryDate: new Date(),
    image: 'https://istyle.rs/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/m/b/mb-air-2019-space-grey-1_2-2-4.jpeg'
  },
  {
    id: 'a12a9298-a961-4261-aba8-1ce47c71874a',
    name: 'Apple Watch',
    manufacturer: manufacturers[0],
    price: 800,
    expiryDate: new Date(),
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MY812_VW_34FR+watch-44-alum-spacegray-nc-6s_VW_34FR_WF_CO?wid=375&hei=356&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599030166000,1599519904000'
  },
  {
    id: '0792be55-41cc-4f50-be8c-ea52a6966d88',
    name: 'HP ProBook',
    manufacturer: manufacturers[1],
    price: 1000,
    expiryDate: new Date(),
    image: 'https://static.tehnomanija.rs/UserFiles/products/155810.jpg'
  },
  {
    id: '9317bab8-651f-4f8b-9517-18a4abdeda4a',
    name: 'MacBook Pro',
    manufacturer: manufacturers[0],
    price: 1300,
    expiryDate: new Date(),
    image: 'https://istyle.rs/media/catalog/product/cache/image/265x265/beff4985b56e3afdbeabfc89641a4582/m/a/macbook_pro_13in_2ports_silver_3_1_4_6_1_1.jpg'
  },
  {
    id: '844d6997-3f50-4593-9e0e-76a7fb6a1548',
    name: 'HP Pavilion',
    manufacturer: manufacturers[1],
    price: 950,
    expiryDate: new Date(),
    image: 'https://www.bcgroup-online.com/upload/m/56762-hp-pavilion-15-cw1029nm-ryzen-3-3300-8gb-256gb-ssd-fullhd-7eb47ea-.jpg'
  },
  {
    id: '427c2f5b-f185-4104-9c0f-cf40d2394df2',
    name: 'HP Elitebook ',
    manufacturer: manufacturers[1],
    price: 980,
    expiryDate: new Date(),
    image: 'https://www.benchmark.rs/assets/img/news/hp2_25.jpg'
  }
]
