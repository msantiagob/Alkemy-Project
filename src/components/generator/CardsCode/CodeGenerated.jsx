import styled from "styled-components"
export default function MyCode(){
    return(
        <Container>
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
                            font-size: ${(props)=>props.newFontSize === '' ? '15px' : props.newFontSize};
                            border: ${(props)=>props.newBorders.border === undefined ? '4px solid blue' : props.newBorders.border};
                            border-top: ${(props)=>props.newBorders.top === undefined ? 'solid' : props.newBorders.top};
                            border-bottom:  ${(props)=>props.newBorders.bottom === undefined ? 'solid' : props.newBorders.bottom};
 border-radius:  ${(props)=>props.newBorders.radius === undefined ? 'none' : props.newBorders.radius};
 box-shadow: ${(props)=> props.shadowDisplay === false ? 'none' : '8px 8px 8px 0px rgba(0,0,0,0.5)'};
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
        outline: 2px solid red;
        width: 450px;
        overflow-y: scroll;
    }
    .stylecode{
        height: 100%;
        outline: 2px solid red;
        width: 450px;
        overflow-y: scroll;

    }
`