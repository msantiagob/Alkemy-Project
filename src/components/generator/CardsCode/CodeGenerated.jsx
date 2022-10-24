import styled from "styled-components"
import { useContext } from "react"
import ColorContext from "../../../context/ColorContext"
export default function MyCode(){
    const {fontSize,borderStyle,shadow,bgColor,opacity,formImage}=useContext(ColorContext)

    return(
        <Container >
            <div className="htmltags">
          <pre>
           {`
             <div class='container'>
             <header className="imageprofile">
                 <img src='' alt=''/>
             </header>
             <footer >
                 <div class="positions">
                 <div class="description">
                 <div class="profileinfo"> nombre</div>
                     <hr class="verticaldiv"/>
                 <div class="profileinfo"> apellido</div>
                 </div>
                 <hr class="line"/>    
                 <div class="description">
                 <div class="profileinfo"> nombre</div>
                     <hr class="verticaldiv"/>
                 <div class="profileinfo"> apellido</div>
                 </div>
                 <hr class="line"/>
                 <div class="description">
                 <div class="profileinfo"> nombre</div>
                     <hr class="verticaldiv"/>
                 <div class="profileinfo"> apellido</div>
                 </div>
                 </div>
             </footer>
         </div>
           `}
          </pre>
          </div>
          <div className="stylecode">
            <pre>
{`
    .container{
    width: 300px;
    height: 200px;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-size: ${fontSize === '' ? '15px' : fontSize};
    border: ${borderStyle.border === undefined ? '4px solid blue' : borderStyle.border};
    border-top: ${borderStyle.top === undefined ? 'solid' : borderStyle.top};
    border-bottom:  ${borderStyle.bottom === undefined ? 'solid' : borderStyle.bottom};
    border-radius:  ${borderStyle.radius === undefined ? 'none' : borderStyle.radius};
    box-shadow: ${shadow === false ? 'none' : '8px 8px 8px 0px rgba(0,0,0,0.5)'};
    }
    footer{
        height:14.5rem;
        width: 84%;
        position: absolute;
        border-radius: 0 0 10px 10px;
        top: 40%;
        background: ${bgColor === '' ? 'blue': bgColor};
        padding-top: 35%;
        opacity: ${opacity} ;
    }
    .imageprofile{
        z-index: 1;
    }
    img{
        height: 15.1rem;
        width: 15.1rem;
        clip-path: ${formImage === '' ? 'circle(50% at 50% 50%)' : formImage} ;
    }
    .positions{
        display: flex;
        flex-direction: column;
    }    
    .description{
        height: 40px;
        width: 100%;
        display: flex;  
        justify-content: space-between;
    
    }
    .profileinfo{
        height: 2rem;
        width: 12rem;              
        text-align: center;
        color: black;
        
    }
    .verticaldiv{       
        transform: rotate(90deg);
        height: 1px;
        width: 19%;
        border: none;
        margin-top: 5%;
        background: #fff;
        }
    .line{
        border: none;
        height: 1px;       
        margin-bottom: 2%;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 253, 253, 0.75), rgba(0, 0, 0, 0));
    }
                `}
            </pre>
          </div>
        </Container>
    )
}
const Container=styled.div`
    width: 96%;
    height: 100%;
    margin: auto;
    justify-content: space-around;
    display:flex;
    .htmltags{
        height: 100%;
        border: 2px solid #3e3e72;
        width: 450px;
        overflow-y: scroll;
        ::-webkit-scrollbar{
            width: 10px;
        }
        ::-webkit-scrollbar-track{
            background: #3e3e72e8;
        }
        ::-webkit-scrollbar-thumb{
            background: #fff;
            border-radius: 100vw;
        }
    }
    .stylecode{
        height: 100%;
        border: 2px solid #3e3e72;
        width: 450px;
        overflow-y: scroll;
        ::-webkit-scrollbar{
            width: 10px;
            height: 10px;
        }
        ::-webkit-scrollbar-track{
            background: #3e3e72e8;
        }
        ::-webkit-scrollbar-thumb{
            background: #fff;
            border-radius: 100vw;
        }
    }
`