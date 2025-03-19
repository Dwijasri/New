import {Link, Outlet} from "react-router-dom";
import {useCart} from "./CartContext";

const Dashboard=()=>{
    const {cart}=useCart();

    return(
        <div className="dashboard-container">
            {/* Cart Icon with Superscript Count */}
            <Link to="/cart" className="cart-icon">
                🛒
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Link>

            <nav className="dashboard-nav">
                <link to="">Laptops</link>
                <link to="mobiles">Mobiles</link>
                <link to="wtches">Watches</link>
            </nav>

            <div className="dashboard-content">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;