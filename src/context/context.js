import React, { useEffect,useReducer, createContext } from 'react';
import axios from 'axios'
const initialState = {
    data : [],
    currentPage : 1,
    dataPerPage : 3,   
    // numberPage : []
}
console.log("redice")
let Reducer = (state, action) => {
    switch (action.type) {
        case "loadData":
            console.log("loadData")
            // const indexLast = state.currentPage * state.dataPerPage
            // const indexFirst = indexLast - state.dataPerPage
            // const currentData = action.payload.slice(indexFirst,indexLast)
            // const totalallPage = Math.ceil(action.payload.length/ state.dataPerPage) 
            // const arrayPage = []
            // for (let index = 1; index <= totalallPage; index++) {
            //     arrayPage.push(index)
            // }
            // console.log( currentData, "currentData")
            return {
                ...state,
                data : action.payload,
                // totalPage : totalallPage,
                // numberPage : arrayPage
            }
        case "movePage":
            return{
                ...state,
                currentPage : action.payload
            }

        case "deleteData" : 
            const cloneData = [...state.data] 
            const newData = cloneData.filter(user => user.id !== action.payload.id )

            return{
                ...state,
                data: newData
            }
        default:
            break;
    }
}

const PaginationContext = createContext(initialState)
function PaginationProvider(props){
    // console.log("pagination")
    const [state, dispatch] = useReducer(Reducer, initialState);
    useEffect(() => {
        console.log("axios");
		axios
			.get("https://jsonplaceholder.typicode.com/users/")
			.then((response) => {

				dispatch({
					type : "loadData",
					payload : response.data
				})
				
			});
    }, [])
    
    
    
    return(
        <PaginationContext.Provider value={{ state, dispatch }} >
            {props.children}
        </PaginationContext.Provider >
    )
}

export { PaginationContext, PaginationProvider }
