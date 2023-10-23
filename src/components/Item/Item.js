import { Link } from "react-router-dom";
const Item = ({ id, name, price, img, category, stock }) => {
  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">category: {category}</p>
        <p className="Info">precio: ${price}</p>
        <p className="Info">stock disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          Ver Detalles
        </Link>
      </footer>
    </article>
  );
};

export default Item;
