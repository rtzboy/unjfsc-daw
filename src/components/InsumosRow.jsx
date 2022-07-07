// import { v4 as uuidv4 } from 'uuid';
import InsumoRow from './InsumoRow';

const InsumosRow = ({ ingred, setInsumos, value = 1 }) => {
	if (!ingred) return <p>...</p>;

	if (ingred.length === 0) return <p>Sin insumos que mostrar...</p>;

	const insumos = [...ingred];

	console.log(insumos);

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
			value={value}
			setInsumos={setInsumos}
			recipe={insumos}
		/>
	));
};

export default InsumosRow;
