import { CardWidget } from "../CartWidget/CardWidget"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <div>

                <Link to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3h4hrDXDL_PO35UiTVcbObeKIuiwRLtEBg&usqp=CAU" alt="" />
                </Link>

                <Link to="/">
                    <button className="btn btn-danger m-3">Inicio</button>
                </Link>

                <Link to="/category/calzados">
                    <button className="btn btn-danger m-3">Calzados</button>
                </Link>

                <Link to="/category/remeras">
                    <button className="btn btn-danger m-3">Remeras</button>
                </Link>

                <Link to="/category/pantalones">
                    <button className="btn btn-danger m-3">Pantalones</button>
                </Link>

                <Link to="/category/accesorios">
                    <button className="btn btn-danger m-3">Accesorios</button>
                </Link>

            </div>
            <div className="divcarrito">
                <CardWidget />
                <p>0</p>
            </div>
        </nav>
        
    )
}
