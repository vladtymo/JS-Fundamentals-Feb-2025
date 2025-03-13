// -=-=-=-=-=-=-=- Events -=-=-=-=-=-=-=-

// ---------- set event handler
// 2 - using addEventListener()
btn2.addEventListener("click", function () {
    console.log("Button 2 first click!");
});

btn2.addEventListener("click", () => console.log("Second"));
btn2.addEventListener("click", () => console.log("Third"));

btn2.onclick = () => console.warn("Super click!");

function showMessage() {
    alert("Button 2 custom function!");
}

btn2.addEventListener("click", showMessage);
btn2.removeEventListener("click", showMessage);

// 3 - using on{event_name} property
const btn3 = document.getElementById('btn3');

btn3.onmousedown = () => console.log("Mouse Down");
btn3.onmouseup = () => console.log("Mouse Up");
btn3.onmouseenter = () => console.log("Mouse Enter");
btn3.onmouseleave = () => console.log("Mouse Leave");

const randChannel = () => Math.random() * 255;
btn3.onmousemove = () => {
    btn3.style.backgroundColor = `rgb(${randChannel()}, ${randChannel()}, ${randChannel()})`
}

window.onresize = (_) => document.body.innerHTML += "*";

// ----- [event] parameter contains event information
btn3.onclick = (event) => {
    console.log(event);
    console.log(event.target); // element that effects the event
    event.target.textContent += ")";

    console.log("Button 3 clicked!");
};

// set event hadnler and clear the previous one
btn3.onclick = (event) => {
    console.log(event);
    event.target.textContent += ")";
    alert("Button 3 clicked!");
};
btn3.onkeydown = (event) => {
    console.log(event);
    alert("Key pressed!");
};

const coordsText = document.querySelector('#coords-text');

window.onmousemove = (event) => {
    coordsText.textContent = `${event.x}:${event.y}`;
}

window.onkeydown = (e) => {
    console.log("Key Pressed:", e.code);

    // space code: 32
    if (e.keyCode === 32) {
        // move hero
        console.log("Bingooo");
    }
}

// ------ .stopPropagation()
const innerBlock = document.querySelector('.inner');

innerBlock.onclick = (event) => {
    console.log("inner clicked!");
    event.stopPropagation();

    // console.log(event.currentTarget);   // елемент, який наразі обробляє подію
    // console.log(event.target);          // елемент на який ми натиснули
};

window.onclick = () => {
    console.warn("Window clicked!");

    // console.log(event.currentTarget);
    // console.log(event.target);
}
