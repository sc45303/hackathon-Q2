
export  interface Product {
  _id : string;
  name: string;
  _type: "product";
  image? : {
    asset: {
      _ref: string;
      _type: "image";
    }
   
  };
price: number;
discountPercent:number;
rating?: number;

description?: string;
slug: {
  _type: "slug",
  current: string;
};

inventory : number;

};

export type Customer = {
   

  name: string;
  email: string;
  phone: number;
  address: string;
};