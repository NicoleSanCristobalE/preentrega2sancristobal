import {Link} from 'react-router-dom';
import Brand from "./Brand";
import CartWidget from "../share/CartWidget";

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Brand/>
                <Link to="/category/shampoo" className="btn btn-secondary">Shampoo</Link>
                <Link to="/category/acondicionador" className="btn btn-secondary">Acondicionador</Link>
                <Link to="/category/mascarilla" className="btn btn-secondary">Mascarilla</Link>
                <CartWidget/>
            </div>
        </nav>
    );
}