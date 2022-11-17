import { CategoryItem } from "../components/category-item/category-item.component";
import { ICategories } from "../models";
import "./categories.styles.scss";
export const Categories = ({ categories }: ICategories) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
