import React, { useState } from "react";
import classes from "./Product.module.css";

export default function Product(props) {
  const { id, price, title, description, rating, image_url } = props;
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? classes.starFilled : classes.starEmpty}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <form className={classes.Product}>
      <div className={classes.image}>
        <img src={image_url} alt={title} height={"200px"} width={"200px"} />
      </div>
      <div className={classes.rating}>
        {renderStars(rating)}
        <span className={classes.ratingNumber}>{rating}</span>
      </div>
      <div className={classes.titlePrice}>
        <div className={classes.title}>{title}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div className={classes.rightSection}>
        <div className={classes.description}>
          {isEditing ? (
            <input type="text" id="description" defaultValue={description} />
          ) : (
            <span>{description}</span>
          )}
        </div>
        <div className={classes.buttons}>
          {isEditing ? (
            <button>Save</button>
          ) : (
            <>
              <button onClick={handleEdit}>Edit</button>
              <button>Delete</button>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
