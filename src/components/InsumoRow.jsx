import style from './InsumoRow.module.css';

const InsumoRow = ({ id, insumoOne, cantidad, unidad }) => {
	return (
		<div className={style.wrapper}>
			<div className={style.insumo}>{insumoOne}</div>
			<div className={style.cantidad}>{cantidad}</div>
			<div className={style.unidad}>{unidad}</div>
		</div>
	);
};

export default InsumoRow;
