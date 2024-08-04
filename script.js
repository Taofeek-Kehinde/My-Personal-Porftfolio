 let text = document.querySelector(".text2");

  let loadText = () => {
    setTimeout(() => {
        text.textContent = " Developer";
    }, 0);


  setTimeout(() => {
    text.textContent = "Designer";
}, 4000);

setTimeout(() => {
    text.textContent = "Blogger";
}, 8000);

setTimeout(() => {
    text.textContent = "Coder man";
}, 12000);
    };

    loadText();

    setInterval(loadText, 12000);