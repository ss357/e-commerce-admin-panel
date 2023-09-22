import Product from "./Product";
import classes from './ProductList.module.css'

export default function ProductList() {
  const products = [
    {
      id: 1,
      title: "Five Layer BookShelve",
      price: 589,
      description:
        "Stylish five-layer bookshelf, Organize your books and decor with this sleek and space-saving storage solution. Perfect for any room.",
      rating: 4.5,
      image_url:
        "https://raw.githubusercontent.com/ss357/My-JSON-Server/main/images/five-layer-bokshelves.webp",
    },
    {
      id: 2,
      title: "Manual Recliner",
      price: 2999,
      description:
        "Elevate your relaxation with our Manual Recliner. Effortlessly unwind in style and comfort with customizable reclining positions.",
      rating: 3.9,
      image_url:
        "https://raw.githubusercontent.com/ss357/My-JSON-Server/main/images/manual-recliner.webp",
    },
    {
      id: 3,
      title: "Modular Drawer",
      price: 2599,
      description:
        "Versatile Modular Drawer. Customize your storage with ease. These stackable drawers provide organization and adaptability for any space.",
      rating: 4.2,
      image_url:
        "https://raw.githubusercontent.com/ss357/My-JSON-Server/main/images/modular-drawer.webp",
    },
    {
      id: 4,
      title: "Open Book Shelf",
      price: 1699,
      description:
        "Open Book Shelf: Showcase your collection with this elegant, open-design bookshelf. Perfect for displaying books, art, and decor in style.",
      rating: 4.7,
      image_url:
        "https://raw.githubusercontent.com/ss357/My-JSON-Server/main/images/open-book-shelf.webp",
    },
    {
      id: 5,
      title: "Pet Bed",
      price: 999,
      description:
        "Treat your furry friend to ultimate comfort. Our pet bed provides a snug, relaxing space for your pet to rest and nap.",
      rating: 3.4,
      image_url:
        "https://raw.githubusercontent.com/ss357/My-JSON-Server/main/images/pet-bed.webp",
    },
    {
      id: 6,
      title: "Shoe Stand",
      price: 1199,
      description:
        "Keep your footwear organized and accessible. Our sturdy shoe stand helps declutter your space and streamline your daily routine.",
      rating: 4.1,
      image_url:
        "https://raw.githubusercontent.com/ss357/My-JSON-Server/main/images/shoe-stand.webp",
    },
    {
      id: 7,
      title: "Steel wardrobe",
      price: 2399,
      description:
        "Durable Steel Wardrobe, A robust storage solution for your clothes and essentials. This steel wardrobe combines strength with style for your organizational needs.",
      rating: 4.8,
      image_url:
        "https://raw.githubusercontent.com/ss357/My-JSON-Server/main/images/steel-wardrobe.webp",
    },
    {
      id: 8,
      title: "Teardrop Bean Bag",
      price: 1499,
      description:
        "Elevate your comfort with our chic teardrop bean bag chair. Designed for ultimate relaxation, it's ideal for lounging, reading, and enjoying movies in style and luxury",
      rating: 3.9,
      image_url:
        "https://raw.githubusercontent.com/ss357/My-JSON-Server/main/images/teardrop-bean-bag.webp",
    },
    {
      id: 9,
      title: "Umbrella Stand",
      price: 499,
      description:
        "Keep your entryway dry and clutter-free. Our sturdy umbrella stand provides a sleek and practical solution for storing umbrellas, rain or shine.",
      rating: 4.2,
      image_url:
        "https://raw.githubusercontent.com/ss357/My-JSON-Server/main/images/umbrella-stand.webp",
    },
  ];

  return (
    <div className={classes.ProductList}>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                rating={product.rating}
                image_url={product.image_url}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
