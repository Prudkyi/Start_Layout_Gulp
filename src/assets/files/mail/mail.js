$.ajax({
    url: 'files/mail/mail.php',
    type: 'post',
    dataType: 'html',
    data: {
        typeMess: 'typeThisMess',
        Name: 'arrDataForm[0]',
        Phone: 'arrDataForm[1]',
        Email: 'arrDataForm[2]',
        Massage: 'arrDataForm[3]'
    },
    success: function (data) {

    }
});