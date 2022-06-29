import { NavLink } from 'react-router-dom';
import styleBtn from '../styles/buttons.module.css';
import style from './HomePage.module.css';

const HomePage = () => (
	<div className={style.wrapper}>
		<h1 className={style.title}>Produccion</h1>
		<p className={style.subTitle}>
			En esta fase se transforman las materias primas para elaborar el producto
			final y se realizan los montajes de piezas y las actividades necesarias
			para fabricar el producto deseado.
		</p>
		<div className={style.main}>
			<div className={style.links}>
				<div>
					<NavLink
						className={`${styleBtn.styledlink} ${style.styledlink}`}
						to='/equivalencia'
					>
						Equivalencia de Insumos
					</NavLink>
				</div>
				<div>
					<a className={style.styledlink} href='#'>
						Registro Pedidos
					</a>
				</div>
				<div>
					<a className={style.styledlink} href='#'>
						Pedidos a Producion
					</a>
				</div>
			</div>
			<div className={style.imgPage}>
				<img src='../../public/images/themeTwo.png' alt='s' />
			</div>
		</div>
		<footer className={style.footer}>DAW - 2022</footer>
	</div>
);

export default HomePage;
