function calulate() {
  var n1 = Number($("#num1").val());
  var n2 = Number($("#num2").val());
  var result;
  switch ($("#symbol").val()) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      break;
    case "%":
      result = n1 % n2;
      break;

    default:
      break;
  }

  $("#result").text(result);
}
