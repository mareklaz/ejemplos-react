import { Link, Outlet } from 'react-router-dom';
import CarritoContextProvider from './context/CarritoContext';

export default function () {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12 text-center py-3 mb-3'>
					<h1 className='fw-bold'>Tienda</h1>
					<Link to='/'>Volver a inicio</Link>
				</div>
				<div className='col-12 text-center py-3 mb-3'>
					<div className='d-grid gap-2 d-md-block'>
						<Link to='/tienda/productos' className='btn btn-primary mx-2'>
							Productos
							<i className='ms-2 bi bi-box-seam'></i>
						</Link>
						<Link to='/tienda/carrito' className='btn btn-primary mx-2'>
							Carrito
							<i className='ms-2 bi bi-bag'></i>
						</Link>
					</div>
				</div>
			</div>
			<CarritoContextProvider>
				<Outlet />
			</CarritoContextProvider>
		</div>
	);
}
