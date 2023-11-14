import { Link } from "react-router-dom"


export const Item = ({ id, name, price}) => {
    return (
        <div className="rounded-10 p-3">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{price}</p>
                    <Link to={`/Item/${id}`}>
                        <button className="btn btn-success">Detalles</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
