let welcome;
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
if (minute < 10) {
	minute = "0" + minute;
}
if (second < 10) {
	second = "0" + second;
}
if (hour < 12) {
	welcome = "Buenos dias!";
} else if (hour < 17) {
	welcome = "Buenas tardes!";
} else {
	welcome = "Buenas noches!";
}

function display(val) {
	if (event.key === 'Enter') {
		if ((val.value).length > 0) {
			console.log(val.value)
			customAlert(`Buscando: "${val.value}"`, 3500)
		} else {
			customWarn('Escribe lo que deseas buscar', 1500)
		}
	}
}


$(document).ready(function () {
	const body = document.querySelector('body');
	const toggled = document.getElementById('toggle');
	const media = window.matchMedia("(min-width:700px)")

	toggled.onclick = function () {
		body.classList.toggle('light');
		toggled.classList.toggle('active')
	}
	if (media.matches) {
		console.log(true)
		$('#dashboard').mouseenter(function () {
			this.innerHTML = `¡${welcome}`;
		});
		$('#dashboard').mouseleave(function () {
			this.innerHTML = "Panel de control";
		});
		$('#kleenpulse').mouseenter(function () {
			this.innerHTML = "Bienvenido";
		});
		$('#kleenpulse').mouseleave(function () {
			this.innerHTML = "Zayro System";
		});
	} else {
		console.log(false)
	}
})

function customAlert(msg, duration) {
	var styler = document.createElement("div");
	styler.className = 'dis-wrap'

	styler.innerHTML = "<h1 class='display'>" + msg + "</h1>";
	setTimeout(function () {
		styler.parentNode.removeChild(styler);
	}, duration);
	document.body.appendChild(styler);
}

function customWarn(msg, duration) {
	var styler = document.createElement("div");
	styler.className = 'dis-warn'

	styler.innerHTML = "<h1 class='display'>" + msg + "</h1>";
	setTimeout(function () {
		styler.parentNode.removeChild(styler);
	}, duration);
	document.body.appendChild(styler);
}


/*
! Inventario React */

class ProductCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: props.product.category,
			name: props.product.name,
			imageURL: 'http://via.placeholder.com/200x200',
			checkURL: props.product.imageURL,
			price: props.product.price
		};

		this.checkImage.bind(this);
		this.checkImage();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.product.category != this.state.category) {
			this.setState({ category: nextProps.product.category });
		}
		if (nextProps.product.name != this.state.name) {
			this.setState({ name: nextProps.product.name });
		}
		if (nextProps.product.price != this.state.price) {
			this.setState({ price: nextProps.product.price });
		}
		if (nextProps.product.imageURL != this.state.imageURL) {
			this.setState({ checkURL: nextProps.product.imageURL }, () => this.checkImage());
		}
	}

	checkImage() {
		let image = new Image();
		image.onerror = () => {
			this.setState({ imageURL: 'http://via.placeholder.com/200x200' });
		};
		image.onload = () => {
			this.setState({ imageURL: this.state.checkURL });
		};
		image.src = this.state.checkURL;
	}

	render() {
		return /*#__PURE__*/(
			React.createElement("div", { className: "ProductCard" }, /*#__PURE__*/
				React.createElement("p", { className: "category" }, "Products \xBB ", this.state.category), /*#__PURE__*/
				React.createElement("p", { className: "name" }, this.state.name), /*#__PURE__*/
				React.createElement("img", { src: this.state.imageURL }), /*#__PURE__*/
				React.createElement("p", { className: "price" }, "from ", /*#__PURE__*/React.createElement("span", null, "$", this.state.price))));


	}
}



class NewItemTab extends React.Component {
	constructor() {
		super();
		this.state = {
			formErrors: {
				category: false,
				name: false,
				price: false,
				imageURL: false
			}
		};


	}

	checkForm() {
		let category = document.getElementById('newItemForm-category').value;
		let name = document.getElementById('newItemForm-name').value;
		let price = document.getElementById('newItemForm-price').value;
		let imageURL = document.getElementById('newItemForm-imageURL').value;
		let product = { category: category, name: name, price: price, imageURL: imageURL };
		let errors = this.state.formErrors;
		category.length == 0 ? errors.category = true : errors.category = false;
		name.length == 0 ? errors.name = true : errors.name = false;
		price.length == 0 ? errors.price = true : errors.price = false;

		let image = new Image();
		image.onerror = () => {
			this.finalizeForm(false, product);
		};
		image.onload = () => {
			this.finalizeForm(true, product);
		};
		this.setState({ formErrors: errors });
		image.src = imageURL;
	}

	finalizeForm(isImageURLValid, product) {

		if (isImageURLValid == false) {
			let errors = this.state.formErrors;
			errors.imageURL = true;
			this.setState({ formErrors: errors });
		} else {
			this.props.addNewProduct(product);
		}
	}

	renderCategorySelections(inventory) {
		const categoryKeys = Object.keys(inventory.categories);
		const CKLength = categoryKeys.length;
		let options = [];

		const capitalize = string => {
			return string.charAt(0).toUpperCase() + string.slice(1);
		};
		for (let i = 0; i < CKLength; i++) {
			options.push( /*#__PURE__*/React.createElement("option", null, capitalize(categoryKeys[i])));
		}
		return options;
	}

	updateForm() {
		let category = document.getElementById('newItemForm-category').value;
		let name = document.getElementById('newItemForm-name').value;
		let price = document.getElementById('newItemForm-price').value;
		let imageURL = document.getElementById('newItemForm-imageURL').value;
		let errors = this.state.formErrors;
		if (this.props.formData.category != category) {
			errors.category = false;
		}
		if (this.props.formData.name != name) {
			errors.name = false;
		}
		if (this.props.formData.price != price) {
			errors.price = false;
		}
		if (this.props.formData.imageURL != imageURL) {
			errors.imageURL = false;
		}
		this.setState({ formErrors: errors });

		this.props.changeForm({ category: category, name: name, price: price, imageURL: imageURL });
	}

	render() {
		return /*#__PURE__*/(
			React.createElement("div", { className: "NewItemTab" }, /*#__PURE__*/
				React.createElement("div", { className: "newItem-input" }, /*#__PURE__*/
					React.createElement("h1", null, "Agregar un nuevo producto"), /*#__PURE__*/
					React.createElement("p", null, /*#__PURE__*/
						React.createElement("label", null, "Categoria"), /*#__PURE__*/
						React.createElement("select", { className: this.state.formErrors.category == true ? 'formCheck-err' : '', id: "newItemForm-category", value: this.props.formData.category, onChange: () => this.updateForm() }, /*#__PURE__*/
							React.createElement("option", null), this.renderCategorySelections(this.props.inventory))), /*#__PURE__*/


					React.createElement("p", null, /*#__PURE__*/
						React.createElement("label", null, "Nombre del producto"), /*#__PURE__*/
						React.createElement("input", { className: this.state.formErrors.name == true ? 'formCheck-err' : '', type: "text", required: true, id: "newItemForm-name", value: this.props.formData.name, onChange: () => this.updateForm() })), /*#__PURE__*/

					React.createElement("p", null, /*#__PURE__*/
						React.createElement("label", null, "Precio por unidad"), /*#__PURE__*/
						React.createElement("input", { className: this.state.formErrors.price == true ? 'formCheck-err' : '', type: "number", required: true, id: "newItemForm-price", value: this.props.formData.price, onChange: () => this.updateForm() })), /*#__PURE__*/

					React.createElement("p", null, /*#__PURE__*/
						React.createElement("label", null, "Link de Imagen"), /*#__PURE__*/
						React.createElement("input", { className: this.state.formErrors.imageURL == true ? 'formCheck-err' : '', type: "text", required: true, id: "newItemForm-imageURL", value: this.props.formData.imageURL, onChange: () => this.updateForm(), placeholder: "Pega el link aquí" })), /*#__PURE__*/

					React.createElement("button", { onClick: () => this.checkForm() }, "Add Product")), /*#__PURE__*/

				React.createElement("div", { className: "newItem-preview" }, /*#__PURE__*/
					React.createElement("h1", null, "Mostrar"), /*#__PURE__*/
					React.createElement(ProductCard, { product: this.props.formData }))));





	}
}



const ProductTableRow = props => {
	console.log();
	return /*#__PURE__*/(
		React.createElement("tr", null, /*#__PURE__*/
			React.createElement("td", null, props.product.name), /*#__PURE__*/
			React.createElement("td", null, "$", props.product.price), /*#__PURE__*/
			React.createElement("td", null, props.product.category), /*#__PURE__*/
			React.createElement("td", null, /*#__PURE__*/React.createElement("a", { target: "_blank", href: props.product.imageURL }, "Ver")), /*#__PURE__*/
			React.createElement("td", { className: "editButton" }, "editar")));


};

class ProductsTab extends React.Component {

	renderTableRows(inventory) {
		const categoryKeys = Object.keys(inventory.categories);
		const CKLength = categoryKeys.length;
		let listOfProducts = [];

		for (let i = 0; i < CKLength; i++) {
			let category = categoryKeys[i];
			listOfProducts = listOfProducts.concat(inventory.categories[category]);
		}

		let LOPlength = listOfProducts.length;
		if (LOPlength == 0) {
			return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "En el momento no hay productos en el inventario"));
		} else {
			let rows = [/*#__PURE__*/
				React.createElement("tr", null, /*#__PURE__*/
					React.createElement("th", null, "Nombre del producto"), /*#__PURE__*/
					React.createElement("th", null, "Precio"), /*#__PURE__*/
					React.createElement("th", null, "Categoria"), /*#__PURE__*/
					React.createElement("th", null, "Imagen"))];



			for (let i = 0; i < LOPlength; i++) {
				rows.push( /*#__PURE__*/React.createElement(ProductTableRow, { product: listOfProducts[i] }));
			}

			return rows;
		}
	}

	render() {
		return /*#__PURE__*/(
			React.createElement("div", { className: "ProductsTab" }, /*#__PURE__*/
				React.createElement("h1", null, "Lista de productos disponibles"), /*#__PURE__*/
				React.createElement("p", null, "Mostrando todos los productos disponibles:"), /*#__PURE__*/
				React.createElement("table", { className: "productTable" },
					this.renderTableRows(this.props.inventory))));



	}
}




class MyRouter extends React.Component {

	route(active) {
		switch (active) {
			case 0:
				return /*#__PURE__*/React.createElement(NewItemTab, {
					inventory: this.props.inventory,
					formData: this.props.newItemFormData,
					changeForm: this.props.changeNewItemForm,
					addNewProduct: this.props.addNewProduct
				});

				break;
			case 1:
				return /*#__PURE__*/React.createElement(ProductsTab, { inventory: this.props.inventory });
				break;
		}

	}

	render() {
		return /*#__PURE__*/(
			React.createElement("div", { className: "MyRouter" },
				this.route(this.props.activeTab)));


	}
}


const Sidebar = props => {
	return /*#__PURE__*/(
		React.createElement("div", { className: "Sidebar" }, /*#__PURE__*/
			React.createElement("ul", null, /*#__PURE__*/
				React.createElement("li", { className: "add-new-item", onClick: () => props.changeTab(0) }, /*#__PURE__*/React.createElement("span", null, "Agregar nuevo producto")), /*#__PURE__*/
				React.createElement("li", { className: props.activeTab == 1 ? 'active' : '', onClick: () => props.changeTab(1) }, "Productos"), /*#__PURE__*/
				React.createElement("li", { className: props.activeTab == 2 ? 'active' : '', onClick: () => props.changeTab(2) }, "Categorias"), /*#__PURE__*/
				React.createElement("li", { className: props.activeTab == 3 ? 'active' : '', onClick: () => props.changeTab(3) }, "Archivar producto"))));



};

const Footer = () => {
	return /*#__PURE__*/(
		React.createElement("div", { className: "Footer" }, /*#__PURE__*/
			React.createElement("p", null, "Current work-in-progress for an e-commerce dashboard.")));


};


class InventoryManagementApp extends React.Component {
	constructor() {
		super();
		this.state = {
			activeTab: 1,
			inventory: {
				categories: {
					caballero: [],
					dama: [
						{ category: "dama", name: "Gatubela", price: "150.000", imageURL: "https://cdn.shopify.com/s/files/1/0263/0221/8320/products/WhatsAppImage2022-09-25at6.44.32PM_1024x1024.jpg?v=1664381349" }],
					eventos: [],
					niños: []
				}
			},


			newItemForm: {
				category: '',
				name: '',
				price: '',
				imageURL: ''
			}
		};


	}

	changeActiveTab(index) {
		this.setState({ activeTab: index });
	}

	changeNewItemForm(formData) {
		this.setState({ newItemForm: formData });
	}

	addNewProduct(product) {

		this.setState({ newItemForm: { category: '', name: '', price: '', imageURL: '' } });

		const decapitalize = string => {
			return string.charAt(0).toLowerCase() + string.slice(1);
		};

		product.category = decapitalize(product.category);
		let inventory = this.state.inventory;
		inventory.categories[product.category].push(product);

		this.setState({ inventory: inventory });
	}

	render() {
		return /*#__PURE__*/(
			React.createElement("div", { className: "InventoryManagementApp" }, /*#__PURE__*/
				React.createElement("h2", { className: "header" }, /*#__PURE__*/React.createElement("i", { className: "icon-th-list" }), "Aplicativo del inventario en la nube"), /*#__PURE__*/
				React.createElement("h1", { className: "title", onClick: () => this.changeActiveTab(1) }, "Inventario"), /*#__PURE__*/
				React.createElement("div", { className: "app-body" }, /*#__PURE__*/
					React.createElement(Sidebar, { activeTab: this.state.activeTab, changeTab: this.changeActiveTab.bind(this) }), /*#__PURE__*/
					React.createElement(MyRouter, {
						activeTab: this.state.activeTab,
						inventory: this.state.inventory,
						newItemFormData: this.state.newItemForm,
						changeNewItemForm: this.changeNewItemForm.bind(this),
						addNewProduct: this.addNewProduct.bind(this)
					})), /*#__PURE__*/


				React.createElement(Footer, null)));


	}
}



ReactDOM.render( /*#__PURE__*/
	React.createElement(InventoryManagementApp, null),
	document.getElementById('app'));