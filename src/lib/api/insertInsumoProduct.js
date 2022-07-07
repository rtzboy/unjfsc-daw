const insertInsumoProduct = async (data, id) => {
	console.log(data);
	const opts = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' }
	};

	const response = await fetch(
		`http://localhost:8080/api/products/${id}/recipes`,
		opts
	);
	console.log(response);
};

export default insertInsumoProduct;
