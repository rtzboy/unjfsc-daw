import { NavLink } from 'react-router-dom';
import DeleteIcon from '../components/icons/delete';
import EditIcon from '../components/icons/edit';
import { deleteInsumoProduct } from '../lib/api/recipeActions';
import ArrowSmRight from './icons/arrow-sm-right';

const InsumoRow = ({
	id,
	insumo,
	cantidad,
	unidad,
	setInsumos,
	recipe,
	bd
}) => {
	return (
		<div className='h-8 neumorph flex items-center mb-2'>
			<ArrowSmRight className='h-4' />
			<div className='w-1/2 px-2'>{insumo}</div>
			<div className='w-3/12 text-center px-2'>{cantidad}</div>
			<div className='w-3/12 text-center px-2 flex'>
				{bd ? (
					<div className='w-full'>{unidad}</div>
				) : (
					<>
						<div className='w-1/2'>{unidad}</div>
						<div className='w-1/2 flex items-center justify-evenly'>
							<NavLink
								to={'insumoi/' + id}
								className='neumorph p-[2px] active:efftwo hover:bg-orange-200'
							>
								<EditIcon className='h-5' />
							</NavLink>
							<button
								onClick={evt => {
									postDeleted(setInsumos, recipe, id);
									deletData(id);
								}}
								className='neumorph p-[2px] active:efftwo hover:bg-red-200'
							>
								<DeleteIcon className='h-5' />
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

const postDeleted = (setInsumos, recipe, id) => {
	console.log(recipe);
	const recipeFilter = recipe.filter(elm => elm.id !== id);
	console.log(recipeFilter);
	setInsumos(recipeFilter);
};

const deletData = async id => {
	const { success, estatus } = await deleteInsumoProduct(id);
	if (success && estatus) {
		console.log(success, estatus);
		console.log('insumo Actualizado');
	} else {
		console.log(success, estatus);
	}
};
export default InsumoRow;
