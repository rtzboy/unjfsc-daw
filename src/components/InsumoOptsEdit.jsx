import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import {
	getInsumoProduct,
	updateInsumoProduct
} from '../lib/api/recipeActions';
import CloseBtn from './icons/close-btn';

const InsumoOptsEdit = () => {
	const { id } = useParams();

	console.log(id);

	const [input, setInput] = useState({
		id: '',
		insumo: '',
		cantidad: '',
		unidad: ''
	});

	console.log(input);

	useEffect(() => {
		console.log(' - insumoEffect');
		if (id) getRecipeData(id, setInput);
	}, []);

	return (
		<div
			className={'w-full h-screen absolute bg-slate-300/80 top-0 left-0 z-20'}
		>
			<div className='w-2/6 relative mx-auto mt-10 neumorph h-[430px]'>
				<h2 className='absolute top-3 left-3 text-lg font-bold'>
					Actulizando Insumo...{id}
				</h2>
				<div className='absolute z-10 right-2 top-2'>
					<NavLink
						to='/equivalencia'
						className='neumorph active:efftwo w-20 px-1 flex justify-center gap-1 items-center'
					>
						<CloseBtn className='h-4' />
						Cerrar
					</NavLink>
				</div>
				<form className='w-full p-14'>
					<div className='w-full mb-4'>
						<label>Insumo:</label>
						<input
							name='insumo'
							autoComplete='off'
							value={input.insumo}
							onChange={evt =>
								setInput({
									id: input.id,
									insumo: evt.target.value,
									cantidad: input.cantidad,
									unidad: input.unidad
								})
							}
							className='inpt px-2 w-full h-8'
						/>
					</div>
					<div className='w-full mb-4'>
						<label>Cantidad:</label>
						<input
							name='cantidad'
							autoComplete='off'
							value={input.cantidad}
							onChange={evt =>
								setInput({
									id: input.id,
									insumo: input.insumo,
									cantidad: evt.target.value,
									unidad: input.unidad
								})
							}
							className='inpt px-2 w-full h-8'
						/>
					</div>
					<div className='w-full mb-4'>
						<label>Unidad:</label>
						<select
							name='unidad'
							value={input.unidad}
							className='inpt px-2 w-full h-8'
							onChange={evt =>
								setInput({
									id: input.id,
									insumo: input.insumo,
									cantidad: input.cantidad,
									unidad: evt.target.value
								})
							}
						>
							<option disabled value=''>
								Seleccione
							</option>
							<option value='Lts'>Lts</option>
							<option value='Kgs'>Kgs</option>
						</select>
					</div>
					<div className='text-right'>
						<button
							type='submit'
							onClick={evt => {
								updateRecipeData(input, id);
								evt.preventDefault();
							}}
							className='neumorph px-3 py-1 active:efftwo'
						>
							Guardar
						</button>
						<button
							onClick={evt => {}}
							className='neumorph px-3 py-1 active:efftwo'
							type='button'
						>
							Clear
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const updateRecipeData = async (data, id) => {
	const { insumo, cantidad, unidad } = data;
	const { success, estatus } = await updateInsumoProduct(
		{ insumo, cantidad, unidad },
		id
	);
	if (success && estatus) {
		console.log(success, estatus);
		console.log('insumo Actualizado');
	} else {
		console.log(success, estatus);
	}
};

const getRecipeData = async (id, setInput) => {
	const { success, data } = await getInsumoProduct(id);
	if (success) {
		setInput(data);
		console.log('getData');
	} else {
		console.log('no se obutvo insumos');
	}
};

export default InsumoOptsEdit;
