export interface AllBanners {
  listBanners: ListBanners[];
}
export interface ListBanners {
  banner_id: number;
  name: string;
  slidertitle: string;
  sliderdescription: string;
  order_banner: number;
  slider_id: number;
  click_url: string;
  image: string;
  image_alt: string;
  width: number;
  height: number;
}
