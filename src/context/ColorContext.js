import { createContext, useState } from "react";

const ColorContext = createContext();

export function ColorProvider ( { children }) {

    const [bgColor, setBgColor] = useState('#FAFAFA');
    
    const handleBgColorChange = (e) => {
        let backgroundColor = e.currentTarget.value;
        // console.log(backgroundColor);
        setBgColor(backgroundColor);
        console.log(bgColor)
    }

    return(
        <ColorContext.Provider value={ {bgColor, setBgColor, handleBgColorChange} }>
            { children }
        </ColorContext.Provider>
    )

}

export default ColorContext;