import { useState } from "react"


export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChance = ({target}) => {
        setinputValue( target.value );  
    }

    const onSubmit = (event) => {
      event.preventDefault();
      const gifSearch = inputValue;
    
      if( gifSearch.trim().length <=1  ) return;
      onNewCategory( gifSearch );
      //(setCategories( categories => [ gifSearch, ...categories ] );
      setinputValue('');
      
    }
  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text" 
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={ onInputChance }
      />
    </form>
   
  ) 
}
