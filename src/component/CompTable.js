import React, { useContext} from "react";
import { Button, Table } from "react-bootstrap";
import { PaginationContext } from '../context/context'


function CompTable() {
	const {state, dispatch} = useContext(PaginationContext)
	console.log("comptable before")
	const indexLast = state.currentPage * state.dataPerPage
	const indexFirst = indexLast - state.dataPerPage
	const currentData = state.data.slice(indexFirst,indexLast)
	let numbering = indexFirst
    return (
		<div>
			{console.log("comptable")}
			<Table className="text-center" striped bordered hover size="sm" responsive>
			
				<thead >
					<tr>
						<th>id</th>
						<th>name</th>
						<th>username</th>
						<th>email</th>
						<th>phone</th>
						<th>website</th>
						<th>action</th>
					</tr>
				</thead>
				<tbody>
					
					{ 
					currentData.map(user => {
						numbering +=1
						return(
							<tr key={user.id}>
								<td> {numbering} </td>
								<td> {user.name} </td>
								<td> {user.username} </td>
								<td> {user.email} </td>
								<td> {user.phone} </td>
								<td> {user.website} </td>
								<td style={{ display: "flex", justifyContent: "space-around"}}> 
									<Button variant="danger" onClick={()=> dispatch( {
										type: "deleteData",
										payload : user
									})}> delete </Button>
									<Button varian="primary"> edit </Button>
								</td>
							</tr>
						)
					}) }
				</tbody>
			</Table>
		</div>
	);
}

export default CompTable;
