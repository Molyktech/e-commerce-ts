import { ICategory } from "../../models";
import "./category-item.styles.scss";

export const CategoryItem = ({ category }: { category: ICategory }) => {
  const { id, title, imageUrl } = category;
  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
