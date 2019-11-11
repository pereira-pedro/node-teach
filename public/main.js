$(function() {
  var url = window.location.hostname.startsWith("localhost")
    ? "http://localhost:5000"
    : "https://immense-thicket-27185.herokuapp.com";

  $("#form-1").submit(function(event) {
    event.preventDefault();
    $.get(
      `${url}/math`,
      {
        ope1: $("#operand-1").val(),
        ope2: $("#operand-2").val(),
        operator: $("#operator").val()
      },
      function(response) {
        $("#result").html(response);
      }
    );
  });
  $("#bt-service").click(function(event) {
    event.preventDefault();
    $.get(
      `${url}/math_service`,
      {
        ope1: $("#operand-1").val(),
        ope2: $("#operand-2").val(),
        operator: $("#operator").val()
      },
      function(json) {
        $("#result-service").html(
          `${$("#operand-1").val()} ${$("#operator").val()} ${$(
            "#operand-2"
          ).val()} = ${json.result}`
        );
      }
    );
  });
});
