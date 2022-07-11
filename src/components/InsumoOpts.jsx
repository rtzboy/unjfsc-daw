import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { insertInsumoProduct } from '../lib/api/recipeActions';
import CloseBtn from './icons/close-btn';

const InsumoOpts = () => {
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
	}, []);

	return (
		<div
			className={'w-full h-screen absolute bg-slate-300/80 top-0 left-0 z-20'}
		>
			<div className='w-2/6 relative mx-auto mt-10 neumorph h-[430px]'>
				<h2 className='absolute top-3 left-3 text-lg font-bold'>
					Agregando Insumo...{id}
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
									...input,
									insumo: evt.target.value
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
									...input,
									cantidad: evt.target.value
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
									...input,
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
					<div className='flex justify-evenly'>
						<button
							type='submit'
							onClick={evt => {
								evt.preventDefault();
								insertRecipeData(input, id);
								setTimeout(() => {
									alert('Agregado Correctamente!!');
									setInput({ insumo: '', cantidad: '', unidad: '' });
								}, 500);
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
							Limpiar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const insertRecipeData = async (data, id) => {
	const { insumo, cantidad, unidad } = data;
	const { success, estatus } = await insertInsumoProduct(
		{ insumo, cantidad, unidad },
		id
	);
	if (success && estatus) {
		console.log(success, estatus);
		console.log('insumo aniadido');
	} else {
		console.log(success, estatus);
	}
};

export default InsumoOpts;
