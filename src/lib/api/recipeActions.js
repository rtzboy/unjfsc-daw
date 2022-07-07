const getInsumoProduct = async id => {
	try {
		const response = await fetch(`http://localhost:8080/api/recipes/${id}`);
		const data = await response.json();
		console.log(response);
		return { success: response.ok, data };
	} catch (error) {
		console.log(error);
	}
};

const insertInsumoProduct = async (data, id) => {
	console.log(data);
	const opts = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' }
	};
	try {
		const response = await fetch(
			`http://localhost:8080/api/products/${id}/recipes`,
			opts
		);
		console.log(response);
		return { success: response.ok, estatus: response.status };
	} catch (error) {
		console.log(error);
	}
};

const updateInsumoProduct = async (data, id) => {
	console.log(data);
	const opts = {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' }
	};
	try {
		const response = await fetch(
			`http://localhost:8080/api/recipes/${id}`,
			opts
		);
		console.log(response);
		return { success: response.ok, estatus: response.status };
	} catch (error) {
		console.log(error);
	}
};

const deleteInsumoProduct = async id => {
	const opts = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' }
	};
	try {
		const response = await fetch(
			`http://localhost:8080/api/recipes/${id}`,
			opts
		);
		console.log(response);
		return { success: response.ok, estatus: response.status };
	} catch (error) {
		console.log(error);
	}
};

export {
	insertInsumoProduct,
	getInsumoProduct,
	updateInsumoProduct,
	deleteInsumoProduct
};
