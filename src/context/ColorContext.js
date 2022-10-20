import { createContext, useState } from "react";

const ColorContext = createContext();
export function ColorProvider ( { children }) {

    const[images,setImages]=useState([])

    const [bgColor, setBgColor] = useState('#FAFAFA');

    const handleBgColorChange = (e) => {
        let backgroundColor = e.currentTarget.value;
        setBgColor(backgroundColor);
    }
    
    const [opacity, setOpacity] = useState(1);

    const handleChangeOpacity = (e) =>{
        let currentOpacity = e.currentTarget.value / 10;
        setOpacity(currentOpacity);
    } 

    return(
        <ColorContext.Provider value={ {bgColor, setBgColor, handleBgColorChange,images,setImages, opacity, handleChangeOpacity} }>     
            { children }
        </ColorContext.Provider>
    )

}

export default ColorContext;