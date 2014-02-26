$(document).ready(function () {
    function show_section(id) {
        $('section').each(function (index, section) {
            if ($(section).attr('id') == id) {
                $(section).show();
            } else {
                $(section).hide();
            }
        });
    }
    
    $('header a').on('click', function (e) {
        e.preventDefault();
        alert("vous avez cliqué sur ' " + $(this).text() + "'");
        var epoq = $ (this).data('epoq');
        show_section(epoq)
    });
    $('#epoq_selector').on('change', function (e) {
        var epoq = $(this).val();
        show_section(epoq);
    });
    
    //gestion des événements sur des boutons de type radio
    $('header input[type="radio"]').on('change', function (e) {
        console.log($(this).val());
          var epoq = $(this).val();
        show_section(epoq);

    });
})