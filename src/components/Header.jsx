import { useContext } from "react"
import { LanguageContext } from "../App" // importamos el contexto

export default function Header(){

    const { setLanguage } = useContext(LanguageContext);

    function changeLanguage(newLanguage){
        setLanguage(newLanguage);
    }
    return(
        <>
        <header className="header">
            <h1>Gestion de estados complejos 1</h1>
            <div className="languages">
                <button onClick={() =>changeLanguage('es')}>Español</button>
                <button onClick={() => changeLanguage('en')}>English</button>
            </div>
        </header>
        </>
    )
}