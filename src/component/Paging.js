import React,{ useContext } from 'react'
import { Pagination } from 'react-bootstrap';
import { PaginationContext } from '../context/context'
function Paging() {
    const {state, dispatch} = useContext(PaginationContext)
    return (
		<div style={{display :"flex", justifyContent: "space-between"}}>
			<Pagination size="sm">
                {
                    state.numberPage.map( x => {
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
