var myText1 = "The Los Angeles Daily News is the local news source";
var myText2 = 'The Los Angeles 1111';
var a = 5;
console.log(typeof myText1);
console.log(typeof a);
console.log(typeof myText2);

//Tinh chieu dai cua chuoi string
var myText1Length = myText1.length;
document.write("myText1 dai " + myText1Length + " ky tu");
document.write('<br>');
var myText2Length = myText2.length;
document.write("myText2 dai " + myText2Length + " ky tu");

//kiem tra ky tu co trong chuoi string khong?	
var aCharInMyText1 = myText1.indexOf('a');
console.log(aCharInMyText1);

var aCharInMyText1 = myText1.lastIndexOf('a');
console.log(aCharInMyText1);

//Thay the mot ky tu hoac chuoi ky tu trong chuoi string
var replaceCity = myText1.replace('Los Angeles', 'Da Nang');
document.write('<br>');
document.write(replaceCity);

//Cat ky tu hoac chuoi ky tu trong chuoi string
var cutStringMyText1 = myText1.substring(4, 15);
document.write('<br>');
document.write(cutStringMyText1);

var cutStringLengthMyText1 = myText1.substr(4, 15);
document.write('<br>');
document.write(cutStringLengthMyText1);

//Viet hoa tat ca chu cai trong chuoi string
var upperCaseText1 = myText1.toUpperCase();
document.write('<br>');
document.write(upperCaseText1);

//Viet thuong tat ca chu cai trong chuoi string
var lowerCaseText1 = myText1.toLowerCase();
document.write('<br>');
document.write(lowerCaseText1);

// Dat mot bien la ten day du bat ky duoc truyen vao tu ham
// VD: function myName (name) {

//}
// Ex: myName('Luong Hoai Canh');
/*
	1. Tach ho, ten dem, ten cua nguoi do ra
	Ex: ho: Luong, ten dem: Hoai, ten: Canh
	2.Kiem tra trong ten day du do co chu n khong?
	3. Neu co chu n thi dem xem co bao nhieu chu n?
	4. Viet hoa ten nguoi do len va in ra
	Ex: luong hoai CANH
	5. Thay the ten nguoi do thanh: 19PHP01
	Ex: luong 19PHP01 Canh
	*/
