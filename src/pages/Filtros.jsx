import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import listaProductos from '../data/Productos.json';

export default function Filtros() {
	const [productos, setProductos] = useState(listaProductos);
	const [productosFiltrados, setProductosFiltrados] = useState(productos);

	const [filtro, setFiltro] = useState({ nombre: '', activo: '' });
	const [filtroTag, setFiltroTag] = useState('');
	const [filtroActivoTag, setActivoTag] = useState('');

	console.log('Filtro:', filtro);
	console.log('Producto filtrado:', productosFiltrados);

	const filtrar = () => {
		setFiltroTag(filtro.nombre);
		setActivoTag(filtro.activo);

		!filtro
			? setProductosFiltrados(productos)
			: setProductosFiltrados(
					productos.filter(
						(producto) =>
							producto.nombre
								.toLowerCase()
								.includes(filtro.nombre.toLocaleLowerCase()) ||
							producto.activo.includes(filtro.activo)
						// producto.activo
						// 	.toLowerCase()
						// 	.includes(filtro.activo.toLocaleLowerCase())
					)
			  );
	};

	useEffect(() => {
		setProductos(listaProductos);
	}, []);

	return (
		<div className='row'>
			<div className='col-12 text-center py-3 mb-3'>
				<h1 className='fw-bold'>Filtros</h1>
				<Link to='/'>Volver a inicio</Link>
			</div>
			<div className='row mb-3'>
				<div className='col-3'>
					<label className='form-label fw-bold'>Filtro: Activo</label>
					<select
						className='form-select'
						aria-label='Default select example'
						value={filtro.activo}
						onChange={(e) => {
							setFiltro({ ...filtro, activo: e.target.value });
						}}>
						<option value={true}>Activo</option>
						<option value={false}>Inactivo</option>
					</select>
					{filtroActivoTag ? (
						<span className='badge rounded-pill text-bg-primary my-2'>
							Activo
						</span>
					) : (
						<span className='badge rounded-pill text-bg-primary my-2'>
							Inactivo
						</span>
					)}
				</div>
				<div className='col-4'>
					<label className='form-label fw-bold'>Filtro: Nombre</label>
					<div className='d-flex'>
						<input
							type='text'
							className='form-control'
							placeholder='Buscar...'
							value={filtro.nombre}
							onChange={(e) => {
								setFiltro({ ...filtro, nombre: e.target.value });
							}}
						/>
						<button
							type='button'
							className='btn btn-primary mx-2'
							onClick={() => filtrar()}>
							Buscar
						</button>
					</div>
					{filtroTag && (
						<span className='badge rounded-pill text-bg-primary my-2'>
							{filtroTag}
						</span>
					)}
				</div>
			</div>
			<div className='col-12'>
				{productosFiltrados.length != 0 ? (
					<table className='table'>
						<thead>
							<tr>
								<th scope='col'>ID</th>
								<th scope='col'>Nombre</th>
								<th scope='col'>Descripción</th>
								<th scope='col'>Categoria</th>
								<th scope='col'>Activo</th>
								<th scope='col'>Precio</th>
							</tr>
						</thead>
						<tbody>
							{productosFiltrados?.map((producto) => (
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
	);
}
