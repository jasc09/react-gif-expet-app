import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";





export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);


    const searchGif = (gifString) =>{
        const mysearch = gifString.toLowerCase();
        const valida = categories.some( entrada=> entrada.toLowerCase() === mysearch)
        // console.log(mysearch);
        // console.log(valida);
        return valida;

      
    }
    

    const onAddCategory = ( newCategory ) => {
        if (searchGif(newCategory) )return;
            setCategories([ newCategory, ...categories]); 
            // console.log("Despues de Validacion");
            // console.log(newCategory);
            // console.log("Fin");
            //console.log(categories);
    }

    
    return(
    <>
    
        <h3>Gif_Expert_App</h3> 

        <AddCategory 
            //setCategories = { setCategories }
            onNewCategory = { (event) => onAddCategory(event) } 
        />


        
        {
            categories.map( ( category )  => (
                <GifGrid

                    key={ category }
                    category={ category }
                
                />
            ))

        }

        
    
    
    </>


    )
}
