import Layout from "../layout";
import Products from "./buy-products";
import CheckOut from "./checkout"; 
import { products } from "../../produts-object/produts";
import { useState } from "react";



export default function Ecommerce (){
    const [screen, setScreen] = useState(0)
    return (

        <Layout>
            
            {screen === 0 && <Products content={products} changeScreen={setScreen} />}
            {screen === 1 && <CheckOut/>}
            


        </Layout>

    )
}