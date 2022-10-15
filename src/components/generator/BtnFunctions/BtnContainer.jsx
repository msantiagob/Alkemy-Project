import styled from "styled-components";
export default function GirdOfButtons(){
    return(
        <Cotnainer>
              <div>
                input de opciones
              </div>
              <div>foto de perfil</div>
              <div>colores de fondo :D</div>
              <div>
                    opacidad
              </div>
              <div>
                bordes y estilos
              </div>
              <div>
                Sombras para efectos 3D
              </div>
              <div>
                forma de la foto
              </div>
              <div>
                botones de rede sociales
              </div>
              <div>
                vertical u horizontal
              </div>
        </Cotnainer>
    )
}
const Cotnainer=styled.div`
     width: 40%;
    height: 100%;
    outline: 2px solid blue;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    div{
        outline: 2px solid black;
        width: auto;
        height: auto;
        text-align: center;
       // margin: auto;
    }
`