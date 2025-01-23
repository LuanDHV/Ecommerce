interface ICategoryProduct {
  name: string;
  link: string;
}

interface IProduct {
  img: string;
  name: string;
  price: string;
  discountPrice: string;
  sMember: string;
  sMemberPrice: string;
  sStudent: string;
  sStudentPrice: string;
  couponPrice: string;
  link: string;
}

interface IProductSectionProps {
  title: string;
  products: IProduct[];
  category: ICategoryProduct[];
}
