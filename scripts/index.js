const list = document.querySelectorAll('.list');
console.log('list:', list)
function activeLink(e) {
    e.preventDefault();
    list.forEach((item) => {
        item.classList.remove('active');
    })
    this.classList.add('active');
}
list.forEach(item => {
    item.addEventListener('click', activeLink)
})