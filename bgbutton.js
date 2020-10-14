$(document).ready(function () {
    $("#bg").click(function () {
        if ($("#bg").prop('checked')) {
            alert('Change background color to Green Neon!');
            $("body").css({ "background-color": "#39ff14" });
        } else {
            $("body").css({ "background-color": "white" });
        }
    });
});