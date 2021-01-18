document.addEventListener('DOMContentLoaded', () => { 
    let imgs = [
        "img/img/3-cat-01-1.gif",
        "img/img/1-cat-01.gif",
        "img/img/2-cat-01.gif"
    ];

    function getRandomIntInclusive() {
        return Math.floor(Math.random() * 3);
        }; 

    let img = `<img src="${imgs[getRandomIntInclusive()]}">`;
     
    document.getElementById('imgs').innerHTML = img;
});