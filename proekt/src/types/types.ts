

export interface BannerType {
  id: string;
  title: string;
  description: string;
}

export interface InfoBoxType {
  [x: string]: any;
  img: string;
  title: string;
  content: string;
}
export interface CategoryType{
  type: string,
  slug: string
}
export interface AccessoriesType{
  type: string,
  slug: string
}

export interface ProductType {
  id: string;
  img: string;
  brand: string;
  title: string;
  price: number;
  image1: string;
  image2: string;
  image3: string;
  des: string;
  amount: string;
  size: string;
  quantity: string;
  sizDes: string;
  color: string;
  material: string;
  sostojba:  string;
  productDes: string;
  date: string;
  type: string,
  accessories: string;
}

export interface AboutPageType {
  title: string;
  storyImage: string;
  storyTitle: string;
  storyContent: string;
  storySecondContent: string;
  workImage: string;
  workTitle: string;
  workContent: string;
  workSecondContent: string;
}
export interface BrandType {
  id: string;
  name: string;
  img: string;
  des: string;
  des1: string;
  des2: string;
  des3: string;
  des4: string;
  des5: string;
  des6: string;
}
