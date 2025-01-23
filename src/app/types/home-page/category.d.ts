interface ICategory {
  name: string;
  img: string;
  link: string;
  bgColor: string;
}

interface ICategorySectionProps {
  title: string;
  data: ICategory[];
}
