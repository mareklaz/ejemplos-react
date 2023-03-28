import React, { useEffect, useState } from 'react';

export const CarritoContext = React.createContext();

const CarritoProvider = ({ children }) => {
	const [articulos, setArticulos] = useState([]);

	const agregarArticulos = (articulo) => {
		console.log('Agregamos un articulo');

		const item = articulos.find((elemento) => elemento.id === articulo.id);

		if (item) {
			item.cantidad = item.cantidad + 1;
		} else {
			articulo = {
				...articulo,
				cantidad: 1,
			};
			setArticulos([...articulos, articulo]);
		}
	};

	const quitarArticulos = (articulo) => {
		console.log('Agregamos un articulo');
		setArticulos(articulos.filter((i) => i !== articulo));
	};

	useEffect(() => {
		console.log('Articulos desde Context', articulos);
	}, [articulos]);

	const value = {
		articulos,
		agregarArticulos,
		quitarArticulos,
	};

	return (
		<CarritoContext.Provider value={value}>{children}</CarritoContext.Provider>
	);
};

export default CarritoProvider;
