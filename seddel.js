document.getElementById('mineoensker__add').addEventListener("click",
function() {
    document.getElementById('body__modal').style.display = "flex";
});


document.getElementById('modal__content__close').addEventListener("click", 
function() {
	document.getElementById('body__modal').style.display = "none";
});

document.getElementById('content__button').addEventListener("click", 
function() {
	document.getElementById('body__modal').style.display = "none";
});