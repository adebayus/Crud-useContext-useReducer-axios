import "./App.css";
// import { Button, Container, Form, FormControl, InputGroup, Row, Table } from 'react-bootstrap';
import { PaginationProvider } from "./context/context";
import CompTable from "./component/CompTable";
import Paging from "./component/Paging"
// import { Button } from 'bootstrap';
// import {Button}

function App() {
	return (
		<div className="container">
			<PaginationProvider>
				<CompTable />
				<Paging/>
			</PaginationProvider>
		</div>
	);
}

export default App;
