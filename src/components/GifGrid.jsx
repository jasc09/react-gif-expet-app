
import { GifItem, AddCategory } from "../components";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ( {category} ) => {

// Custom hook
  const { images, isLoading } = useFetchGifs ( category );
  

  
  return (
    <>
     <h3>{ category } </h3>

     { 
      //if lógico
      isLoading &&  <h2> Cargando... </h2>
     }
    

    <div className="card-grid">
      {
        images.map(( image ) => (
          < GifItem 
            key={image.id} 
            { ...image }
          />

        ))
      }
    </div>




    </>
   
    
  )
}



//<li key={ category }> { category }</li>