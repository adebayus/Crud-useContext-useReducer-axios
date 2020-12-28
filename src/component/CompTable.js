import React, { useContext} from "react";
import { Button, Table } from "react-bootstrap";
import { PaginationContext } from '../context/context'


function CompTable() {
	const {state, dispatch} = useContext(PaginationContext)
	console.log("comptable before")
	const indexLast = state.currentPage * state.dataPerPage
	const indexFirst = indexLast - state.dataPerPage
	const currentData = state.data.slice(indexFirst,indexLast)

    return (
		<div>
			<Table className="text-center" striped bordered hover size="sm">
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
					{console.log("comptable")}
					{ 
					currentData.map(x => {

						return(
							<tr key={x.id}>
								<td> {x.id} </td>
								<td> {x.name} </td>
								<td> {x.username} </td>
								<td> {x.email} </td>
								<td> {x.phone} </td>
								<td> {x.website} </td>
								<td style={{ display: "flex", justifyContent: "space-around"}}> 
									<Button variant="danger"> delete </Button>
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
