const SelectCombo = ({
	productos,
	getInsumosProduct,
	setInsumos,
	setInfo,
	getProductById
}) => {
	if (!productos) {
		console.log('entro por primera vez');
		return (
			<select className='inpt pl-1 w-full h-7'>
				<option value=''>cargando...</option>
			</select>
		);
	}

	const tamanio = productos.length;
	if (!tamanio) {
		return (
			<select disabled className='inpt pl-1 w-full h-7'>
				<option value=''>sin datos que mostrar</option>
			</select>
		);
	}

	console.log('xd');

	return (
		<select
			onChange={evt => {
				console.log(evt.target.value);
				getInsumosProduct(setInsumos, evt.target.value);
				getProductById(setInfo, evt.target.value);
			}}
			className='inpt pl-1 w-full h-7'
		>
			{productos.map(product => (
				// <OptionProduct key={product.id} {...product} />
				<option key={product.id} value={product.id}>
					{product.nombre}
				</option>
			))}
		</select>
	);
};

export default SelectCombo;
