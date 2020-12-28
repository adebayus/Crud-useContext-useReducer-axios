import React,{ useContext } from 'react'
import { Pagination } from 'react-bootstrap';
import { PaginationContext } from '../context/context'
function Paging() {
    const {state, dispatch} = useContext(PaginationContext)
    
    const totalallPage = Math.ceil(state.data.length/ state.dataPerPage) 
    const arrayPage = []
    if(state.data.length === 0 )
    {
        arrayPage.push(1)
    }
    else {
        for (let index = 1; index <= totalallPage; index++) {
            arrayPage.push(index)
        }
    }
    
    return (
		<div style={{display :"flex", justifyContent: "space-between"}}>
			<Pagination size="sm">
                {
                    arrayPage.map( x => {
                        let propsObj = {
                            active : false,
                            onClick : () => {
                                dispatch(
                                    {
                                        type : "movePage",
                                        payload : x
                                    }
                                )
                            },
                        }
                        // let isActive = false
                        // // console.log(x,"ini x")
                        if ( x === state.currentPage ){
                            // console.log("aktif")
                           propsObj = {
                            active : true,
                           }
                        } 
                        return (
                       
                            <Pagination.Item  key={x} {...propsObj } > {x} </Pagination.Item>
                        
                        )
                    })
                }
            </Pagination>
            <div>
                asdasd
            </div>
		</div>
	);
}

export default Paging
