
import { StyleMenu,ButtonHeaderStyle,LinkHeader}  from '../theme/styles'

 const  Header = ()=>(
     <>
    {
        <header>
        <StyleMenu>
          <div>
            <figure><img src="./src/assets/logo-arnia.png" alt=""/></figure>
    
          </div>
          <ButtonHeaderStyle>
            
              
                <LinkHeader>Loja Virtual</LinkHeader>
              
              
            
          </ButtonHeaderStyle>
    
        
        </StyleMenu>
        </header>
     
        
    }
        </>
 )

 export  default Header 