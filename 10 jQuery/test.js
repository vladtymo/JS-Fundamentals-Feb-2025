// working with DOM using vanila JS

const li = document.querySelector('.product-list li:first-child');

li.innerHTML += "...!";
li.setAttribute('data-test', 'hello');
li.addEventListener('click', () => { });

// working with DOM using jQuery
// syntax: $(selector).method()

$('.product-list li').last().attr('data-price', '4500').html("...!");
