function checkForm() {
	var name = document.getElementById('name').value;
	var address = document.getElementById('address').value;
	var phone = document.getElementById('phone').value;
	var first = document.getElementById('first').value;
	var last = document.getElementById('last').value;
	var firstNumber = document.getElementById('first_Number').value;
	var lastNumber = document.getElementById('last_Number').value;
	if (name == '') {
		document.getElementById('errorName').innerHTML = "please enter name";
	} else {
		document.getElementById('errorName').innerHTML ='';
	}
	if (address == '') {
		document.getElementById('errorAddress').innerHTML = "please enter address";
	} else {
		document.getElementById('errorAddress').innerHTML ='';
	}
	if (phone == '') {
		document.getElementById('errorPhone').innerHTML = "please enter phone";
	} else {
		document.getElementById('errorPhone').innerHTML ='';
	}
	if (first == '') {
		document.getElementById('errorFirst').innerHTML = "please enter first day ";
	} else {
		document.getElementById('errorFirst').innerHTML ='';
	}
	if (last == '') {
		document.getElementById('errorLast').innerHTML = "please enter last day";
	} else if (last < first){
			document.getElementById('errorLast').innerHTML = "The last day must be more than the first day!";
		} else {
		document.getElementById('errorLast').innerHTML ='';
		}
	if (firstNumber == '') {
		document.getElementById('errorNumber1').innerHTML = "please enter first Number";
	} else {
		document.getElementById('errorNumber1').innerHTML ='';
	}
	if (lastNumber == '') {
		document.getElementById('errorNumber2').innerHTML = "please enter last Number";
	} else if(lastNumber < firstNumber){
			document.getElementById('errorNumber2').innerHTML = "please enter invalid last Number";
		} else {
		document.getElementById('errorNumber2').innerHTML ='';
	}
	if(name != '' && phone != '' && address != '' && last!='' && first != '' && firstNumber!='' && lastNumber != '' && (first < last) && (firstNumber < lastNumber)){
		document.getElementById('success').innerHTML = 'Sucess '
	} else {
		document.getElementById('success').innerHTML = '';
	}
}
function calculateEle(){
	var firstNumber = document.getElementById('first_Number').value;
	var lastNumber = document.getElementById('last_Number').value;
	var sum;
	sum = parseInt(lastNumber) - parseInt(firstNumber);
	if (sum <= 0) document.getElementById('display9') = 'The cost is invalid';
	else if (sum <= 100) var sum1 = sum * 1500;
	else if (sum > 100 && sum <= 300) var sum1 = 100 * 1500 + (sum - 100) * 2000;
	else if(sum > 300) var sum1 = 100 * 1500 + 200 * 2000 + (sum - 300) * 3000;
		document.getElementById('display9').innerHTML = '<br> Chi phí = ' + sum1;
}
function printPersonalInformation(){
	var name = document.getElementById('name').value;
	var address = document.getElementById('address').value;
	var phone = document.getElementById('phone').value;
	var first = document.getElementById('first').value;
	var last = document.getElementById('last').value;
	var firstNumber = document.getElementById('first_Number').value;
	var lastNumber = document.getElementById('last_Number').value;
	document.getElementById('display2').innerHTML = "Name: "+name;
	document.getElementById('display3').innerHTML = "Address: " + address;
	document.getElementById('display4').innerHTML = "Phone: "+phone;
	document.getElementById('display5').innerHTML = "First day: "+first;
	document.getElementById('display6').innerHTML = "Last day: "+last;
	document.getElementById('display7').innerHTML = "First Number: "+firstNumber;
	document.getElementById('display8').innerHTML = "Last Number: "+lastNumber;
}