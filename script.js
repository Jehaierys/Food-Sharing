function forOnload() {
    fixHeader1();
}
window.addEventListener('resize', fixHeader1);
function fixHeader1() {
    const h1 = document.getElementsByTagName('h1').item(0);
    const windowWidth = window.innerWidth;

    if (windowWidth < 601) {
        return;
    } else if (windowWidth >= 601 && windowWidth <= 1259) {
        // h1.style.fontSize = `${28 + windowWidth * 0.05}px`;
    } else if (windowWidth > 1259) {
        h1.style.left = `${(windowWidth - 1200) / 2}px`;
    }
}