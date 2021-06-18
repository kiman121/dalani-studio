$(document).ready(function () {
  $(".design-click").click(function () {
    $("#design-icon").toggle();
    $("#design-description").toggle();
  });

  $(".development-click").click(function () {
    $("#development-icon").toggle();
    $("#development-description").toggle();
  });

  $(".product-click").click(function () {
    $("#product-icon").toggle();
    $("#product-description").toggle();
  });

  $("form#contact-us-form").submit(function (event) {
    event.preventDefault();

    var inputFields = ["name", "email", "message"];
    var formData = validateUserInput(inputFields, "form-alerts");
    if (formData.validated) {
      var message =
        formData.name +
        ", we have received your message. Thank you for reaching out to us.";
      modalAlerts("modalSuccess", message);
      resetFieldValues(inputFields);
    }
  });
});

function validateUserInput(formInputFields, alertDivClass) {
  var formData = {},
    validated = true;
  $(".validate").removeClass("validate");
  $("." + alertDivClass).empty();
  $("." + alertDivClass)
    .removeClass("alert-danger")
    .addClass("hide-alert");

  formInputFields.forEach(function (formInputField) {
    var field = formInputField;
    var thisField = $("#" + field);
    var value = $("#" + field).val();

    if (value === "") {
      validated = false;

      thisField.addClass("validate");

      $("." + alertDivClass).html("Fill the missing fields!");

      $("." + alertDivClass)
        .removeClass("hide-alert")
        .addClass("alert-danger");

      setTimeout(() => {
        $("." + alertDivClass).empty();
        $("." + alertDivClass)
          .removeClass("alert-danger")
          .addClass("hide-alert");
      }, 2000);
    } else {
      formData[field] = value;
    }
  });

  formData["validated"] = validated;

  return formData;
}
function modalAlerts(modalId, alertMessage) {
  $("#" + modalId + " .modal-body")
    .empty()
    .html(alertMessage);

  $("#" + modalId).modal("show");

  setTimeout(() => {
    $("#" + modalId).modal("hide");
  }, 4000);
}

function resetFieldValues(formInputFields) {
  formInputFields.forEach(function (formInputField) {
    $("#" + formInputField).val("");
  });
}
