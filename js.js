let productsGrid = document.getElementById('container');
let productsArray = [];
let xhr = new XMTHttpRequest();
let url = 'https://my-json-server.typicode.com/Noone1315/branch4';

xhr.open('GET',url + '/products');
xhr.responseType = 'json';
xhr.onload = function() {
	productsArray = xhr.response
	productsGrid.innerHTML = null;
	productsArray.forEach(p => {
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.classList.add('product');
		pElem.innerHTML = `
			<h2 class='product-name'>${p.name}</h2>
			<p class='product-price'><b>Price: </b>${p.price} грн</p>
			<button onclick="addProduct(${p.id})">Buy</button>
		`;
		productsGrid.append(pElem);
	});
}
xhr.send();

function addProduct(id) {
	xhr.open('GET',`${url}/products/${id}`);
	xhr.responseType = 'json';
	xhr.onload = function() {

	}
}