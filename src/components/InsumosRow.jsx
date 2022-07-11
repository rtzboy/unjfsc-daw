import InsumoRow from './InsumoRow';

const InsumosRow = ({ ingred, setInsumos, value, bd }) => {
	if (!ingred) return <p>...</p>;

	if (ingred.length === 0) return <p>Sin insumos que mostrar...</p>;

	const insumos = [...ingred];

	console.log(bd);
	if (!bd) value = 1;

	const filteredRecipe = insumos.map(insumo => {
		return {
			...insumo,
			cantidad: (insumo.cantidad * Number(value)).toFixed(1)
		};
	});

	return filteredRecipe.map(insumo => (
		<InsumoRow
			key={insumo.id}
			{...insumo}
			setInsumos={setInsumos}
			recipe={insumos}
			bd={bd}
		/>
	));
};

export default InsumosRow;
