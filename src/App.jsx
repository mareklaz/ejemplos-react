import { Route, Routes } from 'react-router-dom';
import Filtros from './pages/Filtros';
import Main from './pages/Main';
import Carrito from './pages/Tienda/Carrito';
import Productos from './pages/Tienda/Productos';
import Tienda from './pages/Tienda/Tienda';

export default function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Main />}></Route>
				<Route path='/filtros' element={<Filtros />}></Route>
				<Route path='/tienda' element={<Tienda />}>
					<Route path='productos' element={<Productos />} />
					<Route path='carrito' element={<Carrito />} />
				</Route>
			</Routes>
		</div>
	);
}
