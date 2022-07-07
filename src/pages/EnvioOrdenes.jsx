import { useForm } from 'react-hook-form';
// import Test from '../components/Test';

const EnvioOrdenes = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const onSubmit = data => console.log(data);

	console.log(watch('example')); // watch input value by passing the name of it

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			<input
				className='border-red-500 border-2'
				defaultValue='test'
				{...register('example')}
			/>

			{/* include validation with required or other standard HTML validation rules */}
			<input
				className='border-red-500 border-2'
				{...register('exampleRequired', { required: true })}
			/>
			{/* errors will return when field validation fails  */}
			{errors.exampleRequired && <span>This field is required</span>}

			<input className='border-red-500 border-2' type='submit' />
		</form>
	);
};

export default EnvioOrdenes;
