import { useEffect, useState } from "react";
import './mainMenu.css';
import Nav from "./nav";
import { useNavigate } from "react-router-dom";

function Jewl() {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const getIdData = (productId) => {
    navigate(`/prodDetails/${productId}`);
  };

  return (
    <>
      <Nav />
      <div className="d-flex justify-content-center align-items-center section" style={{ minHeight: "80vh" }}>
        <div className="row m-5 w-100">
          {category.map((data) => (
            <div key={data.id} className="col-md-3 mb-4">
              <div className="card h-100 text-center p-3 category-card">
              
                <img
                  src={data.image}
                  alt={data.title}
                  className="img-fluid mx-auto"
                  style={{ maxHeight: "250px", maxWidth: "180px", objectFit: "contain", cursor: "pointer" }}
                  onClick={() => getIdData(data.id)}
                />
                <div className="mt-3">
                  <strong>ID:</strong> {data.id}<br />
                  <strong>Price:</strong> ${data.price.toFixed(2)}
                </div>
                <h6 className="card-title mt-2">{data.title}</h6>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Jewl;
