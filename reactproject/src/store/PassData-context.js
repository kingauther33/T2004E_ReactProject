import React,{useState, useEffect} from "react";

const DataContext = React.createContext({
    item:null,
    editItem:(item)=>{},
});

export const DataContextProvider = (props)=>{
    const [itemEdit,setItemEdit] = useState(null);

    const handleEditItem =(item)=>{
        console.log(item)
        setItemEdit(item);
    }
    return <DataContext.Provider value={
        {   
            item:itemEdit,
            editItem:handleEditItem,
        }
    }>
        {props.children}
    </DataContext.Provider>
}
export default DataContext;
