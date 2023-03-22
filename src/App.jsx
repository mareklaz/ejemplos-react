import { Route, Routes } from 'react-router-dom';
import Filtros from './pages/Filtros';
import Main from './pages/Main';

export default function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Main />}></Route>
				<Route path='/filtros' element={<Filtros />}></Route>
			</Routes>
		</div>
	);
}
