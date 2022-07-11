import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../components/icons/home';

const EnvioOrdenes = () => {
	const [pedidos, setPedidos] = useState();

	useEffect(() => {
		getLocalStorageData(setPedidos);
	}, []);

	return (
		<div className='h-screen bg-slate-200 p-8'>
			<div className='absolute top-2 right-2 group'>
				<NavLink
					className='neumorph flex items-center gap-1 px-2 py-1 group-active:eff font-semibold w-20 text-center'
					to='/'
				>
					<HomeIcon className='h-5 group-active:h-4' />
					Home
				</NavLink>
			</div>
			<div className='text-2xl font-bold mb-5'>Orden de Insumos</div>
			<div className='w-full'>
				<div className='w-1/3 flex gap-2 mb-3'>
					<div className='w-1/2 h-7 neumorph px-2'>Referencia</div>
					<div className='w-1/2'>
						<input
							className='w-full inpt px-2 h-7'
							type='text'
							autoComplete='off'
						/>
					</div>
				</div>
				<div className='w-1/3 flex gap-2 mb-3'>
					<div className='w-1/2 h-7 neumorph px-2'>Fecha Registro</div>
					<div className='w-1/2'>
						<input
							className='w-full inpt px-2 h-7'
							type='text'
							autoComplete='off'
						/>
					</div>
				</div>
				<div className='w-1/3 flex gap-2 mb-3'>
					<div className='w-1/2 h-7 neumorph font-bold px-2 flex items-center'>
						Productos
					</div>
				</div>
			</div>
			<div className='p-4 flex gap-3 max-w-6xl mx-auto'>
				<div className='w-1/2 p-2 flex flex-col gap-1 h-[410px]'>
					<div className='h-[370px] overflow-y-auto'>
						{pedidos &&
							pedidos.map((pedido, index) => {
								return (
									<div key={index} className='h-14 w-full flex gap-2'>
										<div className='w-[50%] flex items-center pl-3'>
											{pedido.nombre}
										</div>
										<div className='w-[25%] flex items-center pl-3'>
											{pedido.cantidad} unids.
										</div>
										<div className='w-[25%] flex items-center pl-3 h-14'>
											<img
												className='block w-14 h-14'
												src={pedido.urlimage}
												alt=''
											/>
										</div>
									</div>
								);
							})}
					</div>
					<div className='h-10'>
						<button
							onClick={evt => {
								alert('envio a almacen');
								setTimeout(() => {
									localStorage.removeItem('pedidos');
									setPedidos();
								}, 500);
							}}
							className='neumorph px-1 py-1 active:eff hover:bg-green-300'
						>
							Enviar a Almacen
						</button>
					</div>
				</div>
				<div className='w-1/2 p-2 flex justify-center'>
					<p>cantidad</p>
				</div>
			</div>
		</div>
	);
};

const getLocalStorageData = setPedidos => {
	const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
	setPedidos(pedidos);
	console.log(pedidos);
};

export default EnvioOrdenes;
