// 汉堡菜单交互
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 点击外部关闭菜单
document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar')) {
        navLinks.classList.remove('active');
    }
}); 