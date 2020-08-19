function exibe(itemToExibe) {
    itemToExibe.style.display = "block";
}
function hide(itemToHide) {
    itemToHide.style.display = "none";
}
function backToTop() {
    const interval = setInterval(() => {
        if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
            document.documentElement.scrollTop = Number(document.documentElement.scrollTop) * 0.9; // For Chrome, Firefox, IE and Opera
            document.body.scrollTop = Number(document.body.scrollTop) * 0.9; // For Safari
        }
        else
            clearInterval(interval);
    }, 20);

}

export {
    exibe, hide, backToTop
}