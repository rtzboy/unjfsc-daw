import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { insertProduct, updateProduct } from '../lib/api/productActions';
import { searchProductById } from '../lib/api/searchIceCream';

const UpdateProduct = () => {
	const { id } = useParams();

	console.log(id);

	const [input, setInput] = useState({
		nombre: '',
		categoria: '',
		urlimage: '',
		fecharegistro: ''
	});

	console.log(input);

	useEffect(() => {
		console.log(' - effect');
		if (id) getProduct(setInput, id);
	}, []);

	return (
		<div
			className={'w-full h-screen absolute bg-slate-300/80 top-0 left-0 z-20'}
		>
			<div className='w-2/6 relative mx-auto mt-24 neumorph h-[430px]'>
				<h2 className='absolute top-3 left-3 text-lg font-bold'>
					{id ? `Editando...${id}` : `Agregando..${id}`}
				</h2>
				<div className='absolute z-10 right-2 top-2'>
					<NavLink
						className='neumorph flex items-center active:efftwo gap-1 px-2 py-1 w-20 text-center'
						to='/equivalencia'
					>
						Volver
					</NavLink>
				</div>
				<form className='w-full p-14'>
					<div className='w-full mb-4'>
						<label>Nombre:</label>
						<input
							name='nombre'
							autoComplete='off'
							value={input.nombre}
							onChange={evt =>
								setInput({
									id: input.id,
									nombre: evt.target.value,
									categoria: input.categoria,
									urlimage: input.urlimage,
									fecharegistro: input.fecharegistro
								})
							}
							className='inpt px-2 w-full h-8'
						/>
					</div>
					<div className='w-full mb-4'>
						<label>Categoria:</label>
						<select
							name='categoria'
							value={input.categoria}
							onChange={evt =>
								setInput({
									id: input.id,
									nombre: input.nombre,
									categoria: evt.target.value,
									urlimage: input.urlimage,
									fecharegistro: input.fecharegistro
								})
							}
							className='inpt px-2 w-full h-8'
						>
							<option disabled value=''>
								Seleccione
							</option>
							<option value='Crema'>Crema</option>
							<option value='Hielo'>Hielo</option>
						</select>
					</div>
					<div className='w-full mb-4'>
						<label>urlImage:</label>
						<input
							name='urlimage'
							autoComplete='off'
							value={input.urlimage}
							onChange={evt =>
								setInput({
									id: input.id,
									nombre: input.nombre,
									categoria: input.categoria,
									urlimage: evt.target.value,
									fecharegistro: input.fecharegistro
								})
							}
							className='inpt px-2 w-full h-8'
						/>
					</div>
					<div className='w-full mb-4'>
						<label>Fecha De Registro:</label>
						<input
							name='fecharegistro'
							autoComplete='off'
							value={input.fecharegistro}
							onChange={evt =>
								setInput({
									id: input.id,
									nombre: input.nombre,
									categoria: input.categoria,
									urlimage: input.urlimage,
									fecharegistro: evt.target.value
								})
							}
							className='inpt px-2 w-full h-8'
						/>
					</div>
					<div className='text-right'>
						<button
							onClick={evt => {
								evt.preventDefault();
								if (id) {
									updateProductById(id, input);
								} else {
									insertData(input);
								}
							}}
							type='submit'
							className='neumorph px-3 py-1 active:efftwo'
						>
							Guardar
						</button>
						<button className='neumorph px-3 py-1 active:efftwo'>
							Limpiar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const getProduct = async (setInput, id) => {
	try {
		const { success, datos } = await searchProductById(id);
		if (success) {
			setInput({
				id: datos.id,
				nombre: datos.nombre,
				categoria: datos.categoria,
				urlimage: datos.urlimage,
				fecharegistro: datos.fecharegistro
			});
		} else {
			console.log(datos);
		}
	} catch (error) {
		console.log('error');
	}
};

const insertData = async data => {
	const { nombre, categoria, urlimage, fecharegistro } = data;

	try {
		const { success, estado } = await insertProduct({
			nombre,
			categoria,
			urlimage,
			fecharegistro
		});
		if (success && estado === 201) {
			console.log('agregado');
		} else {
			console.log('FALLO agregar');
		}
	} catch (error) {
		console.log('error');
	}
};

const updateProductById = async (id, data) => {
	const { success, estado } = await updateProduct(id, data);
	if (success && estado === 200) {
		console.log('actualizado');
	} else {
		console.log('NO actualizado');
	}
};

export default UpdateProduct;
