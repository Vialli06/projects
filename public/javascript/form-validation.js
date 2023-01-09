
$(document).ready(function () {
    function checkForm() {
        var elements = $('.form-control');
        var canSubmit = true;

        for (var i = 0; i < elements.length; i++) {
            if (elements[i].value.length == 0) {
                canSubmit = false;
            }
        }
        console.log('canSubmit');
        console.log(canSubmit);
        if (canSubmit) {

            $('#submit').removeAttr('disabled');
        }
        else {
            $('#submit').attr('disabled', 'disabled');
        }
    }

    $('.form-control').change(function () {
        console.log('change events');
        checkForm();
    });
    checkForm();
});
