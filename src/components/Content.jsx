import { useContext } from "react"
import { LanguageContext } from "../App"



export default function Content(){

    return(
        <>
        <div className="container">
            <Text/>
            <Button/>
        </div>
        </>
    )
}

function Text (){
    const {language} = useContext(LanguageContext);
    return(
        <>
        <div className="text">
            {language === 'es' ? 
            '"El hombre en general, tiene tal predilección por el pecado, que si no encuentra a mano pecado que cometer, ya lo inventa él solo, de manera que todo lo hace para pecar, tanto si en ello va su vida como si ha de arriesgar cien veces la vida." - Fiódor Dostoyevski, "Crimen y castigo"' 
            :
             '"Man in general, with his thirst for evil, loves any kind of sin, and if he does not find one ready, he will create it himself, out of his own broomstick, so to speak, as long as he is somehow engaged in wrongdoing, whether risking his life or losing it a hundred times over." - Fyodor Dostoevsky, "Crime and Punishment"'}
        </div>
        </>
    )
}

function Button(){
    const {language, setLanguage} = useContext(LanguageContext);

    function handleClick(){
        setLanguage(language === 'en' ? 'es' : 'en')
    }

    return(
        <>
           <button onClick={handleClick}>{language === 'es' ?  "Cambiar idioma del texto" 
           :
           "Change Text Language"
           }</button> 
        </>
    )
}