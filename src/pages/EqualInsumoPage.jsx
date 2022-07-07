import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Add from '../components/icons/add';
import DeleteIcon from '../components/icons/delete';
import EditIcon from '../components/icons/edit';
import HomeIcon from '../components/icons/home';
import InsumosRow from '../components/InsumosRow';
import SelectCombo from '../components/SelectCombo';
import { deleteProduct } from '../lib/api/productActions';
import {
	searchIceCream,
	searchIceCreamProduct,
	searchProductById
} from '../lib/api/searchIceCream';

const EqualInsumoPage = () => {
	const [productos, setProductos] = useState();
	const [insumos, setInsumos] = useState();
	const [info, setInfo] = useState();

	useEffect(() => {
		getProduct(setProductos);
	}, []);

	return (
		<div className='h-screen relative bg-slate-200 p-8'>
			<div className='absolute top-2 right-2 group'>
				<NavLink
					className='neumorph flex items-center gap-1 px-2 py-1 group-active:eff font-semibold w-20 text-center'
					to='/'
				>
					<HomeIcon className='h-5 group-active:h-4' />
					Home
				</NavLink>
			</div>
			<h2 className='text-2xl font-bold'>
				Mantenimiento de Equivalencia de Insumos
			</h2>
			<div className='p-4 flex gap-3 max-w-6xl mx-auto'>
				<div className='w-1/2 p-2'>
					<div className='flex gap-3 p-1 w-full'>
						<div className='neumorph w-1/4 h-7 pl-1'>Producto</div>
						<div className='w-[50%]'>
							<SelectCombo
								productos={productos}
								getInsumosProduct={getInsumosProduct}
								getProductById={getProductById}
								setInsumos={setInsumos}
								setInfo={setInfo}
							/>
						</div>
						<div className='w-[25%] flex justify-evenly'>
							{info && (
								<NavLink
									to={'insert'}
									className='neumorph px-1 flex justify-evenly items-center active:efftwo'
								>
									<Add className='h-5' />
								</NavLink>
							)}
							{info && (
								<NavLink
									to={'update/' + info.id}
									className='neumorph px-1 flex justify-evenly items-center active:efftwo'
								>
									<EditIcon className='h-5' />
								</NavLink>
							)}

							{info && (
								<button
									onClick={() => {
										postDeleted(setProductos, productos, info.id);
										productDelete(info.id);
									}}
									className='neumorph px-1 flex justify-evenly items-center active:efftwo'
								>
									<DeleteIcon className='h-5' />
								</button>
							)}
						</div>
					</div>
					<div className='flex gap-1 p-1 w-full'>
						<div className='neumorph w-1/4 h-7 pl-1'>Fecha Registro</div>
						<div className='w-3/4 pl-2'>{info && info.fecharegistro}</div>
					</div>
					<div>
						<div className='flex my-4 neumorph'>
							<div className='font-bold p-1 w-1/2'>Insumo</div>
							<div className='font-bold p-1 text-center w-3/12'>
								Equivalencia
							</div>
							<div className='font-bold p-1 text-center w-3/12'>Unidad</div>
						</div>
						<div className='h-[360px] overflow-y-auto bgneu border-2'>
							<InsumosRow ingred={insumos} setInsumos={setInsumos} />
						</div>
						<div className='flex w-[380px] h-11 justify-evenly items-center'>
							{info && (
								<NavLink
									to={'insumo/' + info.id}
									className='neumorph active:efftwo hover:bg-blue-200 px-2 py-1'
								>
									Add Insumos
								</NavLink>
							)}
							<button className='neumorph active:efftwo hover:bg-red-200 px-2 py-1'>
								BorrarInsumos
							</button>
						</div>
					</div>
				</div>
				<div className='w-1/2 p-2 flex justify-center'>
					<img className='maxwcon' src={info && info.urlimage} alt='' />
				</div>
			</div>
			<Outlet />
		</div>
	);
};

const getProduct = async setProductos => {
	try {
		const { success, datos } = await searchIceCream();
		if (success) {
			setProductos(datos);
		} else {
			console.log(datos);
			setProductos(datos);
		}
	} catch (error) {
		console.log('error');
	}
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

const getInsumosProduct = async (setInsumos, id) => {
	try {
		const { success, datos } = await searchIceCreamProduct(id);
		if (success) {
			setInsumos(datos);
			return datos;
		} else {
			console.log(datos);
		}
	} catch (error) {
		console.log('error');
	}
};

const productDelete = async id => {
	const { success, estatus } = await deleteProduct(id);
	if (success && estatus) {
		console.log('product eliminado');
	} else {
		console.log('no se elimino');
	}
};

const postDeleted = (setProductos, productos, id) => {
	console.log(productos);
	const productFilter = productos.filter(elm => elm.id !== id);
	console.log(productFilter);
	setProductos(productFilter);
};

export default EqualInsumoPage;
