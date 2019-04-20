function checkRegister() {
  var name = document.getElementById('name').value;
  var date = document.getElementById('date').value;
  var gender = document.getElementById('gender').value;
  var numberPhone = document.getElementById('numberPhone').value;
  if(name == '') {
    document.getElementById('errorName').innerHTML = 'Tên không được để trống';
  } else {
    document.getElementById('errorName').innerHTML = '';
  }
  if(date == '') {
    document.getElementById('errorDate').innerHTML = 'Ngày sinh không được để trống';
  } else {
    document.getElementById('errorDate').innerHTML = '';
  }
  if(gender == '') {
    document.getElementById('errorGender').innerHTML = 'Giới tính không được để trống';
  } else {
    document.getElementById('errorGender').innerHTML = '';
  }
  if(numberPhone == '') {
    document.getElementById('errorNumberPhone').innerHTML = 'SĐT không được để trống';
  } else {
    document.getElementById('errorNumberPhone').innerHTML = '';
  }
}