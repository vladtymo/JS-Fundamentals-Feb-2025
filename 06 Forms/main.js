// ------- get html elements
const createBtn = document.querySelector('#createBtn');
const clearBtn = document.querySelector('#clearBtn');
const tBody = document.querySelector('#productTable tbody');

// ------- get form element and input controls
const form = document.forms.creationForm;
const modelIn = form.elements.name;
const priceIn = form.elements.price;
const statusIn = form.elements.status;

class Product {
    static count = 100;

    constructor(name, price, status) {
        this.name = name;
        this.price = price;
        this.status = status;
        this.id = Product.count++;
    }

    get statusName() {
        return this.status ? "In Stock" : "Out of Stock";
    }
}

createBtn.onclick = (e) => {
    e.preventDefault(); // avoid page refreshing

    const item = new Product(modelIn.value, priceIn.value, statusIn.checked);

    // add item to table
    addProductToTable(item);
}

function addProductToTable(item) {
    tBody.innerHTML += `<tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}$</td>
                <td>${item.statusName}</td>
            </tr>`
}

clearBtn.onclick = () => {
    tBody.innerHTML = "";
}