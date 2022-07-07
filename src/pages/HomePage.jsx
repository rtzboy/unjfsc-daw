import { NavLink } from 'react-router-dom';
import ArrowList from '../components/icons/arrow-list';

const HomePage = () => (
	<div className='h-screen bg-slate-200 relative p-8'>
		<h1 className='text-4xl font-bold'>Produccion</h1>
		<p className='py-4 px-12'>
			En esta fase se transforman las materias primas para elaborar el producto
			final y se realizan los montajes de piezas y las actividades necesarias
			para fabricar el producto deseado.
		</p>
		<div className='relative w-4/5 flex gap-8 my-0 mx-auto py-8 px-0'>
			<div className='w-2/5 flex flex-col flex-nowrap justify-evenly items-center gap-8'>
				<div className='group'>
					<NavLink
						className='neumorph group-active:eff items-center gap-1 font-semibold px-2 py-2 w-56 flex'
						to='/equivalencia'
					>
						<ArrowList className='h-5 group-active:h-4' /> Equivalencia de
						Insumos
					</NavLink>
				</div>
				<div className='group'>
					<NavLink
						className='neumorph group-active:eff flex items-center gap-1 font-semibold px-2 py-2 w-56'
						to='/registro'
					>
						<ArrowList className='h-5 group-active:h-4' /> Registro de Pedidos
					</NavLink>
				</div>
				<div className='group'>
					<NavLink
						className='neumorph group-active:eff flex items-center gap-1 font-semibold px-2 py-2 w-56'
						to='/envio'
					>
						<ArrowList className='h-5 group-active:h-4' /> Pedidos a Produccion
					</NavLink>
				</div>
			</div>
			<div className={`w-3/5 neumorph`}>
				<img src='../../public/images/themeTwo.png' alt='s' />
			</div>
		</div>
		<footer className='text-sm'>DAW - 2022</footer>
	</div>
);

export default HomePage;
