var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', tipAmt, false);

function tipAmt() {
  var bill = document.getElementById('bill');
  var billAmt = Number(bill.value);
  var tip = (billAmt * .20).toFixed(2);
  document.getElementById('tipMsg').innerHTML = 'You should tip \$' + tip;
};
