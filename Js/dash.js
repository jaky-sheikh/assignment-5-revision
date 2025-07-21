// console.log('hello')
const links = document.querySelectorAll('.dashboard-link');
for (let link of links) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'dashboard.html';
    });
}