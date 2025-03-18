// --------------- working with jQuery ---------------

// syntax: $(selector).method(params);

// ------- do something with elements
$('ol.product-list li:nth-child(3)').addClass('selected');

// .children() .first() .last() .eq(index) :lt(index) :gt(index)
const $list = $('ol.product-list');

// console.log($list);

$list.children().eq(4).addClass('selected');
$list.children().last().attr('title', 'I`m the last item!');
$list.attr('data-order', "1");
// $('ol.product-list li:gt(6)').addClass('selected');

// collection.each((index, element) => { code })
$('ol.product-list li').each(function (ind, el) {

    // $(HTMLElement).methods...

    if (ind % 3 === 0)
        console.log(ind + ': ' + $(el).text()); // el.textContent
});

// get/set element data: .text() .html() .val() 
console.log('Text:', $list.children().eq(2).text()); // textContent
console.log('HTML:', $list.children().eq(2).html()); // innerHTML
console.log('Text:', $list.children().eq(2).text("New text content!")); // set text content

// ------- event handlers
// .on() .off() .one()
// $(selector).on('event_name', handler);
// events: 'click' 'dblclick' 'mouseenter' 'mouseleave'

const $listItems = $('ol.product-list li');

$listItems.on('click', function () {
    // this - reference to the current event target object
    console.log(this.textContent);

    // working with CSS: .addClass() .removeClass() .toggleClass()
    $(this).toggleClass('selected');
});

$listItems.first().off('click'); // remove all click event handlers
$listItems.last().one('mouseenter', () => console.log("Last item hovered!")); // invoke handler once

// document.querySelectorAll('ol.product-list li').lastChild().addEventListener('mouseenter', function () { /*remove*/ });

// ------- the same without jQuery
// Array.from(document.querySelectorAll('ol.product-list li')).forEach(i => {
//     i.addEventListener('click', function () {
//         this.classList.toggle('selected');
//     });
// });

// get subling elements: .parent() .prev() .next() .even() .odd()
$listItems.on('mouseenter', function () {

    $(this).addClass('medium-text');

    $(this).prev().addClass('muted-text');
    $(this).next().addClass('muted-text');
});
$listItems.on('mouseleave', function () {

    $(this).removeClass('medium-text');

    $(this).prev().removeClass('muted-text');
    $(this).next().removeClass('muted-text');
});

// ------- forms
$('#product-form').submit(function (e) {

    const value = $('#product-form input[name=model]').val();
    console.log(`Name: ${value}`);

    // change content: append() prepend() before() after() empty() remove()
    $list.append(`<li>${value}</li>`);

    return false; // instead of e.preventDefault();
});
