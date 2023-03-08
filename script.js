let products = [];

function renderProducts() {
    const productListElem = document.getElementById("product-list");
    productListElem.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const row = `<tr>
        <td>${product.name}</td>
        <td>
        <button onclick="editProduct(${i})">Sửa</button>
        <button onclick="deleteProduct(${i})">Xoá</button>
        </td>
        </tr>`;
        productListElem.innerHTML += row;
    }
}

function addProduct() {
    const name = document.getElementById("product-name").value;
    const product = {name};
    products.push(product);
    document.getElementById('lengthProduct').innerHTML = 'Products: ' + products.length
    renderProducts();
    clearForm()
}

function editProduct(index) {
    const product = products[index];
    document.getElementById("product-name").value = product.name;
    const addButton = document.getElementById("addbtn");
    addButton.value = 'UPDATE'
    addButton.onclick = function() { saveProduct(index); };
}

function saveProduct(index) {
    const name = document.getElementById("product-name").value;
    const product = {name};
    products[index] = product;
    renderProducts();
    clearForm();
    const addButton = document.getElementById("addbtn");
    addButton.value = 'ADD'
    addButton.onclick = addProduct;
}
function deleteProduct(index) {
    products.splice(index, 1);
    document.getElementById('lengthProduct').innerHTML = 'Products: ' + products.length
    renderProducts();
}

function clearForm() {
    document.getElementById("product-name").value = "";
}
