import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getProduct} from '../../asyncList';

export default function ItemDetailContainer(){
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        const productData = getProduct(parseInt(id, 10)); // Obtiene el producto por ID
        setProduct(productData);
    }, [id]);

    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }

    const handleIncrement = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleAddToCart = () => {
        console.log(`Se agregó al carrito: ${product.name} - Cantidad: ${quantity}`);
    };

    return(
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: '800px' }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={product.image} alt={product.name} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-6 d-flex flex-column">
                        <div className="card-body flex-grow-1">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-text" style={{ maxHeight: '150px', overflowY: 'auto' }}>{product.description}</p>
                            <p className="card-text"><strong>Precio:</strong> ${product.price}</p>
                            <p className="card-text"><small className="text-muted">Stock disponible: {product.stock}</small></p>
                        </div>
                        <div className="mt-auto">
                            <div className="d-flex justify-content-center mb-2">
                                <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
                                <span className="mx-3 fs-5">{quantity}</span>
                                <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
                            </div>
                            <button className="btn btn-success w-100" onClick={handleAddToCart}>Agregar al carrito</button>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text"><strong>Precio:</strong> ${product.price}</p>
                            <p className="card-text"><small className="text-muted">Stock disponible: {product.stock}</small></p>
                            <div className="d-flex justify-content-center mb-2">
                                <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
                                <span className="mx-3 fs-5">{quantity}</span>
                                <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
                            </div>
                            <button className="btn btn-success w-100" onClick={handleAddToCart}>Agregar al carrito</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}