document.getElementById('john__open').addEventListener("click",
function() {
    document.getElementById('modal').style.display = "flex";
});


document.getElementById('modal__content__close').addEventListener("click", 
function() {
	document.getElementById('modal').style.display = "none";
});

document.getElementById('button').addEventListener("click", 
function() {
	document.getElementById('modal').style.display = "none";
});