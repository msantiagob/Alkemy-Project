export default function TagsforNeon(){
    return (
        <div>
            <pre>
        {
            `
            <div class='container'>
            <div class="corner"><span></span><span></span></div>
            <p class="effect">
                Front-end Developer
            </p>
            <div class="corner"><span></span><span></span></div>
        </div>

@keyframes refraction{
    100%{
        text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px #bf00ff,
        0 0 80px #bf00ff,
        0 0 90px #bf00ff,
        0 0 100px #bf00ff,
        0 0 150px #bf00ff;
    }
    0%{
        text-shadow:
      0 0 4px #fff,
      0 0 10px #fff,
      0 0 18px #fff,
      0 0 38px #bf00ff,
      0 0 73px #bf00ff,
      0 0 80px #bf00ff,
      0 0 94px #bf00ff,
      0 0 140px #bf00ff;
    }
}

.container{
    height: 500px;
    width: 400px;
    display: grid;
    align-content: space-between;
    justify-content: space-between;
    background: black;
    text-align: center;
    }
    .effect{       
        transform: rotateZ(-45deg);
        font-size: 80px;
        margin-left:5%;
        color: #fff;
        animation:  refraction 0.1s ease-in-out infinite alternate;
    }    
    span{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: none;
        background:radial-gradient(#40ff00, #000);
    }
  .corner{
        display: flex;
        justify-content: space-between;
        margin: 2%;
    }
        
            `
        }   
            </pre>
        </div>
    )
}