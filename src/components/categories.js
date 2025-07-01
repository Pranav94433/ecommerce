import React, { useEffect, useReducer } from "react";
import './mainMenu.css';
import Men from '../assets/menswear.jpg';
import Women from '../assets/womenswear.jpg';
import Electronic from '../assets/electronics.jpg';
import Jewellery from '../assets/jewelery.jpg';
import { Link } from "react-router-dom";


const initialState = {
  loading: true,
  error: '',
  categories: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        categories: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        categories: [],
        error: 'Something went wrong while fetching categories.',
      };
    default:
      return state;
  }
}

function Categories() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const categoriesImages = {
    "electronics": Electronic,
    "jewelery": Jewellery,
    "men's clothing": Men,
    "women's clothing": Women,
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch(() => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  if (state.loading) {
    return <p className="text-center mt-5">Loading categories...</p>;
  }

  if (state.error) {
    return <p className="text-center text-danger mt-5">{state.error}</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {state.categories.map((data) => (
          <div className="col-md-3 col-sm-6 mb-4" key={data}>
            <Link to={`/${data}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img 
                  src={categoriesImages[data]} 
                  className="card-img-top"
                  alt={data}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-capitalize">{data}</h5>
                  <p className="card-text text-muted">Explore our {data} collection!</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
