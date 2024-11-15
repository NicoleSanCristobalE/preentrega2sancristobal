import './ItemListContainer.css'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductCategory } from "../../asyncList";

export default function ItemListContainer(){
    const {categoria} = useParams();
    const [productsList,setFilteredProd] = useState([]);
    let titulo = 'Bienvenidos a la Tienda Lulú';
    if(categoria){
        titulo = categoria;
    }
    useEffect(() => {
          const filteredProducts = getProductCategory(categoria);
        setFilteredProd(filteredProducts || []);
    }, [categoria]);
    return(
        <>
            <br/>
            <h1>{titulo}</h1>
            <br/>
            <div className="container">
            <div className="row">
                {productsList.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card h-100">
                            <div className="card-img-container">
                                <img 
                                    className="card-img-top img-fluid" 
                                    src={product.image} 
                                    alt={product.name} 
                                />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text mt-auto">Precio: ${product.price}</p>
                            </div>
                            <div className="card-footer">
                                <Link to={`/item/${product.id}`} className="btn btn-primary">ver producto</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}