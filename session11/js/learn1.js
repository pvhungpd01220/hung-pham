var a;
/*
Quy tac dat ten bien
- co y nghia
- Bang chu cai hoa hoac thuong , so va dau gach duoi
- Khong bat dau bang so
- Neu dat bang tieng Anh
- Theo quy tac Camel
Ex: userName, myAge, getMyInfo
*/
//cac phep toan javascript  +,- ,* ,/
var x = 8, y = 6;
document.write('Tong 2 so x + y la:');
document.write(x + y);
document.write('<br>');
document.write('Hieu 2 so x + y la:');
document.write(x - y);
document.write('<br>');
document.write('Tich 2 so x * y la:');
document.write(x * y);
document.write('<br>');
document.write('Thuong 2 so x / y la:');
document.write(x / y);
// cac phep so sanh trong javascript >, <, >=, <=, ==, !=
//cau dieu kien trong javascript
//if (dieukien) {
	//thuc hien neu dien kien dung
//}
document.write('<br>');
if (3 > 2) {
	document.write('So 3 lon hon so 2')
}
//if(dieukien) {
	//thuc hien neu dieu kien dung
//} else {
	//thuc hien neu dien kien sai
//}
document.write('<br>');
var x = 5, y = 7
if (x > y) {
	document.write('So x lon hon so y');
} else {
	document.write('so x nho hon hoac bang so y');
}
//if(dienkien1) {
	//thuc hien dieu kien 1 dung 
//} elseif(dieukien2) {
	//thuc hien dieu kien 2 dung
//} else {
	//thuc hien neu dieu kien 1 hoac dieu kien 2 sai
//}
document.write('<br>');
var x = 5, y = 5
if (x > y) {
	document.write('So x lon hon so y');
} else if (x < y) {
	document.write('so x nho hon so y');
} else {
	document.write('so x bang so y');
}
// cau len switch case
document.write('<br>')
var x = 8;
switch(x) {
	case 2:
		document.write('hom nay la ngay thu 2');
		break;
	case 3:
		document.write('hom nay la ngay thu 3');
		break;
	case 4:
		document.write('hom nay la ngay thu 4');
		break;
	case 5:
		document.write('hom nay la ngay thu 5');
		break;
	case 6:
		document.write('hom nay la ngay thu 6');
		break;
	case 7:
		document.write('hom nay la ngay thu 7');
		break;
	case 8:
		document.write('hom nay la ngay chu nhat');
		break;									
	default:
	document.write('Day khong phai la thu trong tuan');
	break;
}
//
document.write('<br>')
var x = 3;
switch(x) {
	case 2:
	case 3:		
	case 4:
	case 5:
	case 6:		
	case 7:
		document.write('hom nay la ngay thu ' + x);
		break;
	case 8:
		document.write('hom nay la ngay chu nhat');
		break;									
	default:
	document.write('Day khong phai la thu trong tuan');
	break;
}
//Cho truoc 1 so, kiem tra so do co phai la 
//thang trong nam khong? neu phai, cho biet so ngay trong thang do?
//vd: 2 -> day la thang trong nam, thang 2 co 28 hoac 29 ngay
//cho biet: thang: 1, 3, 5, 7, 8, 10, 12 co 31 ngay/
//thang 4, 6, 9, 11 co 30 ngay
//thang 2 co 28 hoac 29 ngay
document.write('<br>')
var x = 2, y = 2003;
switch(x) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		document.write('Thang' + x +'co 31 ngay');
		break;
	case 4:
	case 6:
	case 9:
	case 11:
		document.write('thang' + x + 'co 30 ngay');
		break;
	case 2:
		if ((y % 4 == 0 ) && (y % 100 != 0)) {
			document.write('Thang ' + x + 'co 29 ngay');
		} else {
			document.write('Thang ' + x + 'co 28 ngay');
		}
		break;
	default:
		document.write('Day khong phai thang trong nam');
		break;
}