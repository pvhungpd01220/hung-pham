function checkRegister() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var passWord = document.getElementById('passWord').value;
	var checkRegisterSuccess = true;
	if(name == '') {
		document.getElementById('errorName').innerHTML = 'Please input your name!';
		var checkRegisterSuccess = false;
	} else {
		document.getElementById('errorName').innerHTML = '';
	}
	if(email == '') {
		document.getElementById('errorEmail').innerHTML = 'Please input your email!';
		var checkRegisterSuccess = false;
	} else {
		document.getElementById('errorEmail').innerHTML = '';
	}
	if(passWord == '') {
		document.getElementById('errorPassWord').innerHTML = 'Please input your Password!';
		var checkRegisterSuccess = false;
	} else {
		document.getElementById('errorPassWord').innerHTML = '';
	}
	if(checkRegisterSuccess) {
		document.getElementById('checkRegisterSuccess').innerHTML = 'Check Register Success';
	} else {
		document.getElementById('checkRegisterSuccess').innerHTML = '';
	}
}
///
var BinhBook = 27;
var MinhBook;
MinhBook = BinhBook/3;
var SoLanChuyen = 0;
while (BinhBook != MinhBook*2) {
	BinhBook--;
	MinhBook++;
	SoLanChuyen++;
}
document.write('<br>');
document.write("So sach Binh chuyen cho Minh la: " + SoLanChuyen);
///
var Money = 2000;
var soKeo = 0;
var voKeo = 0;
while (Money >= 200) {
	Money-=200;
	soKeo++;
	voKeo++;
	while (voKeo >= 2) {
		voKeo-=2;
		soKeo++;
		voKeo++;
	}
}
document.write('<br>');
document.write("So keo mua duoc la: " + soKeo);