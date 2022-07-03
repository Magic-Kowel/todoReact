import React from 'react';import { TodoContext } from '../TodoContext';
 import './TodoSearch.css'; 
function TodoSearch() { 
    const {searchValue,setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);//cambia el valor del state
    }
    return (
        <input 
        className="TodoSearch" 
        placeholder="Cebolla"
        value={searchValue}//obtiene el valor de setSearch
        onChange={onSearchValueChange}//llama a la funcion de busqueda
        />
    );
}
export { TodoSearch };