import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import './mainMenu.css';

function Details() {
  const [category, setCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();



  




  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!category) {
    return (
      <div className="text-center mt-5">
        <h4>Loading product details...</h4>
      </div>

    );
  }

  const handleBuyNow = () => {
    alert(`Buying ${quantity} item(s) in size ${selectedSize || 'N/A'}`);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) in size ${selectedSize || 'N/A'} to cart!`);
  };

  

  return (
    <>

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="nav-link active" aria-current="page" to="/">Categories</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/electronics">Electronics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jewelery">Jewellary</Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="/men's clothing"> MensClothing</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/women's clothing">WomensClothing</Link>
            </li>
              <li class="nav-item">
              <Link class="nav-link" to="/products">EDIT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     
      
    

      <div className="container mt-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-10 card p-4">
            <div className="row">
              
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img
                  src={category.image}
                  alt={category.title}
                  className="img-fluid"
                  style={{ maxHeight: "350px", objectFit: "contain" }}
                />
              </div>

              <div className="col-md-6">
                <h5 className="card-title text-capitalize">{category.title}</h5>
                <p><strong>Category:</strong> {category.category}</p>
                <p><strong>Description:</strong> {category.description}</p>
                <p><strong>Price:</strong> ${category.price}</p>



     {(category.category === "men's clothing" || category.category === "women's clothing") && (
  <div className="mb-3">
    <label htmlFor="size" className="form-label">Select Size</label>
    <select
      id="size"
      className="form-select"
      value={selectedSize}
      onChange={(e) => setSelectedSize(e.target.value)}
    >
      <option value="">Choose size</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
    </select>
  </div>
)}


              
                <div className="mb-3">
                  <label htmlFor="quantity" className="form-label">Quantity</label>
                  <select
                    id="quantity"
                    className="form-select"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </div>

              
                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-outline-primary" onClick={handleBuyNow}>
                    Buy Now
                  </button>
                  <button className="btn btn-success" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
