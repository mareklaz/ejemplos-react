import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import listaProductos from '../../data/Productos.json';
import { CarritoContext } from './context/CarritoContext';

export default function Productos() {
	const { articulos, agregarArticulos, quitarArticulos } =
		useContext(CarritoContext);

	const [productos, setProductos] = useState(listaProductos);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12 text-center py-3 mb-3'>
					<h3 className='fw-bold'>Productos</h3>
				</div>
				<div className='col-12'>
					{productos.length != 0 ? (
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>ID</th>
									<th scope='col'>Nombre</th>
									<th scope='col'>Descripción</th>
									<th scope='col'>Categoria</th>
									<th scope='col'>Activo</th>
									<th scope='col'>Precio</th>
									<th scope='col'>Agregar</th>
								</tr>
							</thead>
							<tbody>
								{productos?.map((producto) => (
									<tr key={producto.id}>
										<th scope='row'>{producto.id}</th>
										<td>{producto.nombre}</td>
										<td>{producto.descripcion}</td>
										<td>{producto.categoria}</td>
										<td>
											{producto.activo ? (
												<span className='badge rounded-pill text-bg-success'>
													Activo
												</span>
											) : (
												<span className='badge rounded-pill text-bg-danger'>
													Inactivo
												</span>
											)}
										</td>
										<td>{producto.precio} €</td>
										<td>
											<button
												className='btn btn-primary btn-sm'
												type='button'
												onClick={() => agregarArticulos({ ...producto })}>
												Añadir<i className='ms-2 bi bi-plus-circle'></i>
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<div className='d-flex justify-content-center fw-bold text-secondary'>
							No hay nada que coincida con este filtro.
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
