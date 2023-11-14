
import { useEffect, useState } from "react"
import {getProducts} from "../../asynkMook.js"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

    const { category } = useParams(); 

    const [ products, setProducts ] = useState([]);

if ( category ) {
    const productsFilter = products.filter((product) => product.category === category);
    console.log (productsFilter);
}


    useEffect( () => {
    getProducts () 
        .then ((resp) => {{
            setProducts(resp);
            if ( category ) {
                const productsFilter = resp.filter((product) => product.category === category);
                setProducts(productsFilter);
            } else {
        console.log(resp) 
        setProducts(resp)
        }}})

    .catch (error => console.log(error))

    }, [category])


    return (
        <>
            <ItemList products={products} />
        </>
    )
        /*<div className="container flex-sm-wrap">
        {
        products.map(product => <Item key={product.id} name={product.name} price={product.price} />)
        }
        </div>*/
    
    
}