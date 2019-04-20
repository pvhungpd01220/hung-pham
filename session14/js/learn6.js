function changeSlider(images, id) {
	document.getElementById('imageSlider').src = "images/" + images;
	switch (id) {
		case 'ronaldo':
					document.getElementById('ronaldo').style.color = "red";
					document.getElementById('zilean').style.color = "black";
					document.getElementById('messi').style.color = "black";
					document.getElementById('pepe').style.color = "black";
					document.getElementById('information').innerHTML = 'This is Ronaldo, Juventus';
					break;
			case 'zilean':
					document.getElementById('zilean').style.color = "red";
					document.getElementById('ronaldo').style.color = "black";
					document.getElementById('messi').style.color = "black";
					document.getElementById('pepe').style.color = "black";
					document.getElementById('information').innerHTML = 'This is zilean, Coach Real';
					break;
			case 'messi':
					document.getElementById('messi').style.color = "red";
					document.getElementById('ronaldo').style.color = "black";
					document.getElementById('zilean').style.color = "black";
					document.getElementById('pepe').style.color = "black";
					document.getElementById('information').innerHTML = 'This is Messi, Barcalona';
					break;
			case 'pepe':
					document.getElementById('pepe').style.color = "red";
					document.getElementById('ronaldo').style.color = "black";
					document.getElementById('zilean').style.color = "black";
					document.getElementById('messi').style.color = "black";
					document.getElementById('information').innerHTML = 'This is pepe, Brazil';
					break;
	}
	
}