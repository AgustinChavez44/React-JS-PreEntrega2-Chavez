
export const ItemDetail = ( {price, stock, name} ) => {


    return (
        <div className="border m-2">

            <div className="card ">

                <div className="card-body ">

                    <h5 className="card-title">{name}</h5>

                    <p>Precio: {price} </p>

                    <p>Stock: {stock} </p>

                </div>

            </div>
            
        </div>
    )
}