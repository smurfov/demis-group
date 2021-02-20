const url = "video.mp4";
const link = document.querySelector('#link');
const body = document.querySelector('body');

const myModal = document.createElement('div');
myModal.classList.add('modal-back');

link.addEventListener('click', function (e) {
    e.preventDefault();
    body.append(myModal);
})

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
myModal.append(modalContent);
const video = `<video src="${url}" class="modal-video" autoplay muted="muted" preload="auto"></video>`
modalContent.insertAdjacentHTML('beforeend', video);
const closeLink = document.createElement('a');
closeLink.classList.add('close');
closeLink.textContent = 'x';
closeLink.setAttribute('href', '#');
myModal.append(closeLink);
closeLink.addEventListener('click', function (e) {
    e.preventDefault();
    myModal.remove();
})

window.addEventListener('click', function (e) {
    if (e.target == myModal) {
        myModal.remove();
    }
})