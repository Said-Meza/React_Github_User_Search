import { useEffect, useState } from "react"
import {light,dark} from "../helpers/darkmode.js"

const Header = () => {

    const [darkmode,setDarkmode] = useState(false);

    const handledarkmode =()=>{
        setDarkmode(!darkmode)
    }

    useEffect(() => {
        if(darkmode){
            light();

        }else{
            dark();
        }
    
    }, [darkmode])
    

    return (
        <>
            <header className="hero container">

                <div className="hero__header">

                    <h3 className="hero__logo">Devs_alv</h3>

                    <div className="hero__dark darkmode">

                        <a onClick={handledarkmode} className="hero__dark__btn" href="#" >

                            <span className="hero__span" id="modetxt">{(darkmode)?"DARK":"LIGHT"}</span>

                            <figure className="hero__figure">
                                <img className="hero__img" src="/sun.svg" alt="light"></img>
                            </figure>

                        </a>

                    </div>

                </div>

            </header>

        </>
    )
}

export default Header