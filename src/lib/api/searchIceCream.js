const searchIceCream = async () => {
	try {
		const response = await fetch(`http://localhost:8080/api/products`);
		if (response.ok) {
			const datos = await response.json();
			console.log(datos);
			return { success: true, datos };
		} else {
			console.log('not found API');
			return { success: false, datos: false };
		}
	} catch (err) {
		console.log(err);
		return { success: false, datos: [] };
	}
};

const searchProductById = async id => {
	try {
		const response = await fetch(`http://localhost:8080/api/products/${id}`);
		if (response.ok) {
			const datos = await response.json();
			console.log(datos);
			return { success: true, datos };
		} else {
			console.log('not found API');
			return { success: false, datos: false };
		}
	} catch (err) {
		console.log(err);
	}
};

const searchIceCreamProduct = async id => {
	try {
		const response = await fetch(
			`http://localhost:8080/api/products/${id}/recipes`
		);
		if (response.ok) {
			const datos = await response.json();
			return { success: true, datos };
		} else {
			console.log('not found API');
			return { success: false, datos: false };
		}
	} catch (err) {
		console.log(err);
	}
};

export { searchIceCream, searchIceCreamProduct, searchProductById };
