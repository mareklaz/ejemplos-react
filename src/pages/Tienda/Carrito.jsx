import { useContext } from 'react';
import { CarritoContext } from './context/CarritoContext';

export default function Carrito() {
	const { articulos, agregarArticulos, quitarArticulos } =
		useContext(CarritoContext);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12 text-center py-3 mb-3'>
					<h3 className='fw-bold'>Carrito</h3>
				</div>
			</div>
			<div className='col-12'>
				{articulos.length != 0 ? (
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
							{articulos?.map((articulo) => (
								<tr key={articulo.id}>
									<th scope='row'>{articulo.id}</th>
									<td>{articulo.nombre}</td>
									<td>{articulo.descripcion}</td>
									<td>{articulo.categoria}</td>
									<td>
										{articulo.activo ? (
											<span className='badge rounded-pill text-bg-success'>
												Activo
											</span>
										) : (
											<span className='badge rounded-pill text-bg-danger'>
												Inactivo
											</span>
										)}
									</td>
									<td>{articulo.precio} €</td>
									<td>
										{/* <button
											className='btn btn-primary btn-sm'
											onClick={() => agregarArticulos(articulo.nombre)}>
											Añadir<i className='ms-2 bi bi-plus-circle'></i>
										</button> */}
										Test
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<div className='d-flex flex-column justify-content-center align-items-center fw-bold text-secondary'>
						<i className='bi bi-bag-x fs-4'></i>
						<p>No hay productos en el carrito.</p>
					</div>
				)}
			</div>
		</div>
	);
}
