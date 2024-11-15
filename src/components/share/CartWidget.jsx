export default function CartWidget(){
    return(
        <>
            <a className="nav-link position-relative" href="#">
                <i className="bi bi-cart3" style={{ fontSize: '1.5rem', color: 'gray' }}></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    4 <span className="visually-hidden">productos en el carrito</span>
                </span>
            </a>
        </>
    );
} 