import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
import InsumosRow from '../components/InsumosRow';
import {
	searchIceCream,
	searchIceCreamProduct
} from '../lib/api/searchIceCream';
import styleBtn from '../styles/buttons.module.css';
import style from './EqualInsumoPage.module.css';

const EqualInsumoPage = () => {
	const [productos, setProductos] = useState();
	const [ingredientes, setInsumos] = useState();

	useEffect(() => {
		getProduct(setProductos);
	}, []);

	return (
		<div className={style.wrapper}>
			<div className={style.backHome}>
				<NavLink
					className={`${styleBtn.styledlink} ${style.styledlink}`}
					to='/'
				>
					Home
				</NavLink>
			</div>
			<h2>1. Mantenimiento de Equivalencia de Insumos</h2>
			<div className={style.totalBody}>
				<div className={style.bodyLeft}>
					<div className={style.product}>
						<div>Producto</div>
						<select
							className={style.selectNeu}
							onChange={evt => {
								getDetailsProduct(setInsumos, evt.target.value);
							}}
						>
							{productos &&
								productos.map(helado => (
									<option key={helado.nombre} value={helado.id}>
										{helado.nombre}
									</option>
								))}
						</select>
					</div>
					<div className={style.date}>
						<div className={style.dateTitle}>Fecha Registro</div>
						<div className={style.dateRegister}>
							{ingredientes && ingredientes.fechaRegistro}
						</div>
					</div>
					<div className={style.bodyData}>
						<div className={style.bodyDataTitle}>
							<div className={style.bodyDataTitleOne}>Insumo - Accesorio</div>
							<div className={style.bodyDataTitleTwo}>Cantidad</div>
							<div className={style.bodyDataTitleThree}>Unidad</div>
						</div>
						<div className={style.bodyDataSet}>
							<InsumosRow ingred={ingredientes} />
						</div>
					</div>
				</div>
				<div className={style.bodyRight}>
					<img
						className={style.imgProduct}
						src={ingredientes && ingredientes.image}
						alt=''
					/>
				</div>
			</div>
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
		}
	} catch (error) {
		console.log('error');
	}
};

const getDetailsProduct = async (setInsumos, id) => {
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

export default EqualInsumoPage;
