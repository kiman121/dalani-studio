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
    if (!$.isEmptyObject(formData)) {
      var message =
        formData.name +
        ", we have received your message. Thank you for reaching out to us.";
      modalAlerts("modalSuccess", message);
    }
  });
});

function validateUserInput(formInputFields, alertDivClass) {
  var formData = {},
    error = false;
  $(".validate").removeClass("validate");

  formInputFields.forEach(function (formInputField) {
    var field = formInputField;
    var thisField = $("#" + field);
    var value = $("#" + field).val();

    if (value === "") {
      error = true;
      thisField.addClass("validate");
      $("." + alertDivClass)
        .empty()
        .html("Fill the missing fields!");
    } else {
      formData[field] = value;
    }
  });
  if (error) {
    $("." + alertDivClass)
      .removeClass("hide-alert")
      .addClass("alert-danger");
  } else {
    $("." + alertDivClass)
      .removeClass("alert-danger")
      .addClass("hide-alert");
  }

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
