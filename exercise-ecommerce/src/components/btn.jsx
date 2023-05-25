
import { BtnStyle,FlexButton } from "../theme/styles"

/* const buttonsData = [{
    contentOne:"Ir para o carrinho",
    contentTwo:"Finalizar Compra",
    contentTree:"Carregar dados selecionados",
    contentFour:"Confirmar Compra",
    }] */
    
    const Buttons=({children,onClick})=>(

    <>
    
         <FlexButton onClick={onClick}>
              <div><BtnStyle>{children}</BtnStyle></div>
         </FlexButton>
    
    </>
    
    )

    export default Buttons 