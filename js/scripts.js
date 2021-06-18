$(document).ready(function(){
    $(".design-click").click(function(){
        $("#design-icon").toggle();
        $("#design-description").toggle();
    });
    $(".development-click").click(function(){
        $("#development-icon").toggle();
        $("#development-description").toggle();
    });
    $(".product-click").click(function(){
        $("#product-icon").toggle();
        $("#product-description").toggle();
    })

});