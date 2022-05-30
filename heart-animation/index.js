const body = document.body.firstChild.nextSibling
const heartone = body.firstChild.nextSibling
const heartwo = body.firstChild.nextSibling.nextSibling.nextSibling
const hearthree = body.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling

setTimeout(() => {
    hearthree.style.position = 'absolute';
    hearthree.style.left = '50%';
    setTimeout(() => {
        hearthree.style.background = 'red';
        hearthree.classList.add('active')
        hearthree.classList.add('active2')
    }, 300);
}, 400);

setTimeout(() => {
    heartwo.style.position = 'absolute';
    heartwo.style.left = '38%';
    setTimeout(() => {
        heartwo.style.background = 'red';
        heartwo.classList.add('active');
        heartwo.classList.add('active2');
    }, 300);
}, 550);
setTimeout(() => {
    heartone.style.position = 'absolute';
    heartone.style.left = '26%';
    setTimeout(() => {
        heartone.style.background = 'red';
        heartone.classList.add('active');
        heartone.classList.add('active2');
    }, 300);
}, 650);