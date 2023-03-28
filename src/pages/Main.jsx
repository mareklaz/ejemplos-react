import { Link } from 'react-router-dom';

const links = [
	{ titulo: 'Filtros', enlace: '/filtros' },
	{ titulo: 'Tienda', enlace: '/tienda' },
];

export default function Main() {
	return (
		<div className='row'>
			<div className='col-12 text-center py-3 mb-3'>
				<h1 className='fw-bold'>Ejemplos</h1>
			</div>
			<div className='col-4'>
				<div class='list-group'>
					{links.map((link) => (
						<Link
							to={link.enlace}
							class='list-group-item list-group-item-action'>
							Ir a {link.titulo}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
