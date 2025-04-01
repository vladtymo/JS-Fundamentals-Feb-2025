const api = 'http://localhost:4400/api/products';
const dummyApi = 'https://dummyjson.com/products';

const grid = document.querySelector('.grid');
const loadBtn = document.getElementById('load-more-btn');

let page = 0;
let pageSize = 5;

function loadProducts() {
    fetch(dummyApi + `?limit=${pageSize}&skip=${page * pageSize}`)
        .then(res => res.json())
        .then(data => {
            for (const i of data.products) {
                grid.innerHTML += ` <div class="col">
                                    <div class="card h-100">
                                        <img src="${i.thumbnail}" class="card-img-top" alt="${i.title}">
                                        <div class="card-body">
                                            <h5 class="card-title">${i.title}</h5>
                                            <p class="card-text">${i.price}$ - ${i.category}</p>
                                        </div>
                                    </div>
                                </div>`
            }
            page++;
        });
}

loadProducts();

loadBtn.onclick = () => {
    loadProducts();
}