import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../components/icons/home';
import InsumosRow from '../components/InsumosRow';
import {
	searchIceCream,
	searchIceCreamProduct,
	searchProductById
} from '../lib/api/searchIceCream';

const RegistroOrdenes = () => {
	const [selectOpt, setSelectOpt] = useState();
	const [recipe, setRecipe] = useState();
	const [info, setInfo] = useState();
	const [equal, setEqual] = useState(1);

	useEffect(() => {
		getSelectData(setSelectOpt);
		// getRecipeData(setRecipe, 1);

		console.log('use effect');
	}, []);

	useEffect(() => {
		if (selectOpt !== undefined) {
			getRecipeData(setRecipe, getFirstValueArray(selectOpt));
			getProductById(setInfo, getFirstValueArray(selectOpt));
		}
	}, [selectOpt]);

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
						<div className='neumorph w-2/5 h-7'>Orden</div>
						<div className='w-3/5'>
							<input
								type='text'
								autoComplete='off'
								className='inpt px-2 block w-full h-7'
							/>
						</div>
					</div>
					<div className='flex gap-1 p-1 w-full'>
						<div className='neumorph w-2/5 h-7'>Fecha Registro</div>
						<div className='w-3/5'>
							<input type='text' className='inpt px-2 block h-7 w-full' />
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
										getProductById(setInfo, evt.target.value);
									}}
								>
									{selectOpt &&
										selectOpt.map(elm => {
											return (
												<option key={elm.id} value={elm.id}>
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
									value={equal}
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
							<InsumosRow ingred={recipe} value={equal} bd={true} />
						</div>
					</div>
					<div
						onClick={evt => {
							console.log('guardando...');
							setLocalStoraInfo(equal, info);
							setTimeout(() => {
								alert('Registro Exitoso!!');
								setEqual(1);
							}, 1000);
						}}
						className='neumorph absolute bottom-10 left-14 px-3 py-1 active:eff'
					>
						<button>Registar</button>
					</div>
					<div className='neumorph absolute bottom-10 left-36 px-3 py-1 active:eff'>
						<button>Limpiar</button>
					</div>
				</div>
				<div className='w-1/2 p-2 flex justify-center'>
					<img className='maxwcon' src={info && info.urlimage} alt='' />
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

const getProductById = async (setInfo, id) => {
	try {
		const { success, datos } = await searchProductById(id);
		if (success) {
			setInfo(datos);
		} else {
			console.log(datos);
		}
	} catch (error) {
		console.log('error');
	}
};

const getFirstValueArray = selectOpt => {
	if (selectOpt === undefined) return;
	if (selectOpt.length > 0) {
		const copy = [...selectOpt][0];
		const id = copy.id;
		return id;
	}
};

const setLocalStoraInfo = (equal, info) => {
	const { id, nombre, urlimage } = info;
	const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
	const pedidosArra = Array.from(pedidos);
	pedidosArra.push({
		id,
		nombre,
		urlimage,
		cantidad: equal
	});
	localStorage.setItem('pedidos', JSON.stringify(pedidosArra));
};

export default RegistroOrdenes;
