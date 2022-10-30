export default function TagsforGradient(){
    return(
        <div>
            <pre>
                {
                    `
  <div class='container'>
     </div>
        @keyframes animation{
    0% {
      background-position: 0% 50%;
     }
    50% {
      background-position: 100% 50%;
    }
      100% {
      background-position: 0% 50%;
    }
       }
        .container
        height: 500px;
        width: 400px;  
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        animation: animation  ease 5s infinite;
        background-size: 300% 300%;
               `
                }
            </pre>
        </div>
    )
}