export interface ICategory {
  id: number;
  title: string;
  imageUrl: string;
}

export interface ICategories {
  categories: ICategory[];
}
