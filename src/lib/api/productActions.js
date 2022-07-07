const insertProduct = async data => {
	console.log(data);
	const opts = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' }
	};
	try {
		const response = await fetch('http://localhost:8080/api/products', opts);
		console.log(response);
		return { success: response.ok, estado: response.status };
	} catch (error) {
		console.log(error);
	}
};

const updateProduct = async (id, data) => {
	console.log(data);
	const opts = {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' }
	};
	try {
		const response = await fetch(
			`http://localhost:8080/api/products/${id}`,
			opts
		);
		return { success: response.ok, estado: response.status };
	} catch (error) {
		console.log(error);
	}
};

const deleteProduct = async id => {
	console.log('- eliminando producto', id);
	const opts = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' }
	};
	try {
		const response = await fetch(
			`http://localhost:8080/api/products/${id}`,
			opts
		);
		console.log(response);
		return { success: response.ok, estatus: response.status };
	} catch (error) {
		console.log(error);
	}
};

export { insertProduct, updateProduct, deleteProduct };
