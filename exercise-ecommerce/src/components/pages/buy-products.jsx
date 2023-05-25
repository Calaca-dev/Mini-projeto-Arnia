
import Btn from '../btn'
import { ImgsStyle,MainContent,FlexTittles,AddProductsStyle } from "../../theme/styles"
const Products =({content,changeScreen})=> (
<>

<div>
    <FlexTittles>
        <h1>Produtos</h1>
        <AddProductsStyle>
            <div>2</div>
        </AddProductsStyle>
    </FlexTittles>
    <MainContent>
    {content.map((itemsProdutcs, index)=> (
        <div key={index}>
            <ImgsStyle>
                <figure><img style={{ width: "150px"
                  }} src={itemsProdutcs.image} alt="" /></figure>
            </ImgsStyle>
            <input type="checkbox"/><span>Valor:{itemsProdutcs.price}</span>
        </div>
    
    ))
    
    }
    </MainContent>
    <Btn onClick={()=>changeScreen(1)}>Ir para Carrinho</Btn>
</div>
</>
)

export default Products