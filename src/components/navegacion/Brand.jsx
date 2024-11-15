 import {Link} from 'react-router-dom';

export default function Brand(){
    return(
        <Link to="/" className="navbar-brand">
            <img src="../../public/logoLulu.svg" alt="logoLulu" className="img-fluid" style={{ maxWidth: '150px' }} />
        </Link>
    );
}