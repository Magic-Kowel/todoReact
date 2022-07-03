import React from "react";
function useLocalStorage(itemName,initialValue){
    const [error,setError] = React.useState(false);
    const [loading,setLoading] = React.useState(true);
    const [item,setItem] = React.useState(initialValue);
    React.useEffect(()=>{
        setTimeout(() => {
          try{
              // leeremos  la variable del local storage
              const localStorageItem = localStorage.getItem(itemName);
              let parsedItem;
              // creamos  la variable del local storage
              if(!localStorageItem){
                localStorage.setItem(itemName,JSON.stringify(initialValue));
                parsedItem = initialValue;
              }else{
                //parsearemos los datos
                parsedItem = JSON.parse(localStorageItem);
              }
              setItem(parsedItem);
              setLoading(false);
          }catch(error){
              console.log(error);
              setError(error);
          }
        }, 1000);
    });
    
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
        setItem(newItem);
      }catch(error){
        setError(error);
      }
    };
    return {
      item,
      saveItem,
      loading,
      error
    };
}
export {useLocalStorage};