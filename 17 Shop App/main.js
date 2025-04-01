const api = 'http://localhost:4400/api/products';
const dummyApi = 'https://dummyjson.com/products';

const grid = document.querySelector('.grid');
const loadBtn = document.getElementById('load-more-btn');

const cardSource = document.getElementById('cardTemplate').innerHTML;
const cardtemplate = Handlebars.compile(cardSource);

let page = 0;
let pageSize = 5;

function loadProducts() {

    fetch(dummyApi + `?limit=${pageSize}&skip=${page * pageSize}`)
        .then(res => res.json())
        .then(data => {
            for (const i of data.products) {
                grid.innerHTML += cardtemplate(i); // use template instead of 'HTML'
            }
            page++;
        });
}

loadProducts();

loadBtn.onclick = () => {
    loadProducts();
}