var phoneNumbers = [];

var submitNum = function(number){
  phoneNumbers.push(number);
  document.getElementById('phoneNum').value='';
  console.log(phoneNumbers);
};
