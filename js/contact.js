$(function () {

    $('#fh5co-contact').validator();

    $('#fh5co-contact').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#fh5co-contact').find('.messages').html(alertBox);
                        $('#fh5co-contact')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});