import { createContext, useState } from "react";

const ColorContext = createContext();
export function ColorProvider ( { children }) {

    const[images,setImages]=useState([])
    const[formImage,setFormImage]=useState('')
    const[bgColor, setBgColor] = useState('')
    const[shadow,setShadow]=useState(false)
    const[opacity, setOpacity] = useState(1);
    const[borderStyle,setBorderStyle]=useState([])
    const[fontSize,setFontSize]=useState('')
    const[seeSocialMedia,setSeeSocialMedia]=useState('')
    
    const handleBgColorChange = (e) => {
        let backgroundColor = e.currentTarget.value;
        setBgColor(backgroundColor);
    }
    const handleShadowChange = (e) => {
        if(e === 'shadow'){
            setShadow(!shadow)
        }
    }
    

    const handleChangeOpacity = (e) =>{
        let currentOpacity = e.currentTarget.value / 10;
        setOpacity(currentOpacity);
    } 

    return(
        <ColorContext.Provider value={ {seeSocialMedia,setSeeSocialMedia,borderStyle,fontSize,setFontSize,setBorderStyle,bgColor,shadow,setShadow,handleShadowChange,formImage,setFormImage, setBgColor, handleBgColorChange,images,setImages, opacity, handleChangeOpacity} }>     
            { children }
        </ColorContext.Provider>
    )

}

export default ColorContext;