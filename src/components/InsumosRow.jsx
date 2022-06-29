import { v4 as uuidv4 } from 'uuid';
import InsumoRow from './InsumoRow';

const InsumosRow = ({ ingred }) => {
	if (ingred === undefined) return <p>...</p>;

	const newIngre = ingred.insumos;
	return newIngre.map(insumo => <InsumoRow key={uuidv4()} {...insumo} />);
};

export default InsumosRow;
