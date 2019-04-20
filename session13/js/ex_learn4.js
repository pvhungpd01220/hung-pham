function checkMyName() {
	var name = document.getElementById('name').value;
	if (name == '') {
		document.getElementById('errorName').innerHTML = 'Please input your name!';
	} else {
		document.getElementById('errorName').innerHTML = '';
		// khi nay moi xu ly
		var spaceFirstName = name.indexOf(' ');
		var spaceLastName = name.lastIndexOf(' ');
		var FirstName = name.substring(0, spaceFirstName);
		var MidName = name.substring(spaceFirstName, spaceLastName);
		var LastName = name.substring(spaceLastName, name.length);
		document.getElementById('ex1').innerHTML = 'Ho la: '+ 
			FirstName + ' <br> Ten dem la: '
			+ MidName + '<br> Ten la: ' + LastName;
		//kiem tra ky tu n co trong ten
		var checkNinName = name.indexOf('n');
		if (checkNinName != -1) {
			document.getElementById('ex2').innerHTML = 'co chu n trong ten cua ban';
		} else {
			document.getElementById('ex2').innerHTML = ' k co ky tu n trong ten cua ban';
		}
		document.getElementById('ex4').innerHTML = FirstName + MidName + LastName.toUpperCase();
		document.getElementById('ex5').innerHTML = name.replace(MidName, ' 19PHP01');
		
		//cau 3:
		//Cach 1: dem tung ky tu
		//Truong hop khong phan biet n hoa hoac n thuong
		var newName = name.toLowerCase();
		var countN = 0;
		for (var i = 0; i < newName.length; i++) {
			if (newName[i] == 'n') {
				countN++;
			}
			document.getElementById('ex3').innerHTML = 'Trong ten ban co ' + countN + ' chu n khong phan biet hoa thuong'
		//cach 2: cat chuoi ten ra tung phan
		var countN2 = 0;
		while(newName.indexOf('n') != -1) {
			countN2++
			newName = newName.substring(newName.indexOf('n') + 1, newName.length);
		}
		document.getElementById('ex3').innerHTML = 'Trong ten ban co ' + countN2 + ' chu n khong phan biet hoa thuong (cach 2)';	
		}
	}


}