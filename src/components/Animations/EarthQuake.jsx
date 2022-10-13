import styled from "styled-components";

export default function ShakeIt({ver}){
    return(
        <Container variant={ver}>
            <div>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         </div>
        </Container>
    )
}

const Container=styled.div`
    height: 500px;
    width: 400px;
    position: absolute;
    display: flex;
    justify-content: center;
    visibility: ${(props)=>props.variant === '' ? 'hidden' : props.variant === 'yes' ? 'visible' : 'hidden'}  ;
   div{
        width: 100%;
        height: 100%;
        position: relative;
        :hover span:nth-child(1){
            transform: translateX(110px) translateY(-100px) scale(0.4)  ;
            transition: 1s;
            border-radius: 100%;
        }
        :hover span:nth-child(2){
            transform: translate(25px,-150px) scale(.4) ;
            transition: 1s;
            border-radius: 100%;
        }
        :hover span:nth-child(3){
            transform: translate(110px,100px) scale(.4) ;
            transition: 1s;
            border-radius: 100%;
        }
        :hover span:nth-child(4){
            transform: translate(35px,150px) scale(.4) ;
            transition: 1s;
            border-radius: 100%;
        }
        :hover span:nth-child(5){
            transform: translate(-35px,150px) scale(.4) ;
            transition: 1s;
            border-radius: 100%;
        }
        :hover span:nth-child(6){
            transform: translate(-110px,100px) scale(.4) ;
            transition: 1s;
            border-radius: 100%;
        }
        :hover span:nth-child(7){
            transform: translate(-110px,-100px) scale(.4) ;
            transition: 1s;
            border-radius: 100%;
        }
        :hover span:nth-child(8){
            transform: translate(-25px,-150px) scale(.4) ;
            transition: 1s;
            border-radius: 100%;
        }
   }
    span{
    inset: 0;
    transition: 3s;
    background-size: 100% 100%;
    position: absolute;
    background: url("https://rickandmortyapi.com/api/character/avatar/1.jpeg");
   }
   span:nth-child(1){
   // background: yellow;
    clip-path: polygon(100% 50%, 100% 0, 50% 50%);;
    
   }
   span:nth-child(2){
  //  background: green;
    clip-path: polygon(100% 0, 50% 0, 50% 50%);
   }
   span:nth-child(3){
  //  background: blue;
    clip-path: polygon(100% 50%, 100% 100%, 50% 50%);
   }
   span:nth-child(4){
  //  background: goldenrod;
    clip-path: polygon(50% 50%, 100% 100%, 50% 100%);
   }
   span:nth-child(5){
   // background: #8020da;
    clip-path: polygon(50% 50%, 0% 100%, 50% 100%);

   }
   span:nth-child(6){
  //  background: #2083da;
    clip-path: polygon(50% 50%, 0 50%, 0 100%);

   }
   span:nth-child(7){
  //  background: #da20b5;
    clip-path: polygon(50% 50%, 0 50%, 0 0);

   }
   span:nth-child(8){
 //   background: #da2036;
    clip-path: polygon(50% 50%, 50% 0, 0 0);

   }
`
