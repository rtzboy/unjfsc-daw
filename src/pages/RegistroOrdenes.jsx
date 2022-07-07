import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../components/icons/home';
import {
	searchIceCream,
	searchIceCreamProduct
} from '../lib/api/searchIceCream';

const RegistroOrdenes = () => {
	const [selectOpt, setSelectOpt] = useState();
	const [recipe, setRecipe] = useState();
	const [equal, setEqual] = useState(1);

	useEffect(() => {
		getSelectData(setSelectOpt);
		// getRecipeData(setRecipe, 1);

		console.log('use effect');
	}, []);

	return (
		<div className='h-screen bg-slate-200 p-8'>
			<div className='text-2xl font-bold'>Registro Ordenes</div>
			<div className='absolute top-2 right-2 group'>
				<NavLink
					className='neumorph flex items-center gap-1 px-2 py-1 group-active:eff font-semibold w-20 text-center'
					to='/'
				>
					<HomeIcon className='h-5 group-active:h-4' />
					Home
				</NavLink>
			</div>
			<div className='p-4 flex gap-3 max-w-6xl mx-auto'>
				<div className='w-1/2 p-2'>
					<div className='flex gap-1 p-1 w-full'>
						<div className='neumorph w-2/5 h-7'>Referencia</div>
						<div className='w-3/5'>
							<input className='inpt px-2 block w-full h-7' type='text' />
						</div>
					</div>
					<div className='flex gap-1 p-1 w-full'>
						<div className='neumorph w-2/5 h-7'>Fecha Registro</div>
						<div className='w-3/5'>
							<input className='inpt px-2 block h-7 w-full' type='date' />
						</div>
					</div>
					<div className='flex gap-1 p-1 w-full'>
						<div className='neumorph w-2/5 h-7'>Producto</div>
						<div className='w-3/5 flex gap-2'>
							<div className='w-3/4'>
								<select
									className='inpt pl-1 w-full h-7'
									onChange={evt => {
										getRecipeData(setRecipe, evt.target.value);
									}}
								>
									{selectOpt &&
										selectOpt.map(elm => {
											return (
												<option key={elm.nombre} value={elm.id}>
													{elm.nombre}
												</option>
											);
										})}
								</select>
							</div>
							<div className='w-1/4'>
								<input
									className='inpt pl-1 block h-7 w-full'
									min={1}
									type='number'
									defaultValue={equal}
									onChange={evt => setEqual(evt.target.value)}
								/>
							</div>
						</div>
					</div>
					<div>
						<div className='flex my-4 neumorph'>
							<div className='font-bold p-1 w-1/2'>Insumo</div>
							<div className='font-bold p-1 text-center w-3/12'>
								Equivalencia
							</div>
							<div className='font-bold p-1 text-center w-3/12'>
								Unidad Medida
							</div>
						</div>
						<div className='h-[350px] overflow-y-auto bgneu'>
							{/* <RecipeRow recipe={recipe} equal={equal} /> */}
						</div>
					</div>
					<div className='neumorph absolute bottom-10 left-14 px-3 py-1 active:eff'>
						<button>Grabar</button>
					</div>
					<div className='neumorph absolute bottom-10 left-36 px-3 py-1 active:eff'>
						<button>Limpiar</button>
					</div>
				</div>
				<div className='w-1/2 p-2 flex justify-center'>
					<img className='maxwcon' src={recipe && recipe.image} alt='' />
				</div>
			</div>
		</div>
	);
};

const getSelectData = async setSelectOpt => {
	const { success, datos } = await searchIceCream();
	if (success) setSelectOpt(datos);
};

const getRecipeData = async (setRecipe, id) => {
	const { success, datos } = await searchIceCreamProduct(id);
	if (success) setRecipe(datos);
};

export default RegistroOrdenes;
