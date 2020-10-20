$(document).ready(function () {
    var tnum = "en";
    $(document).click(function (e) {
        $(".translate_wrapper, .more_lang").removeClass("active");
    });

    $(".translate_wrapper .current_lang").click(function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass("active");

        setTimeout(function () {
            $(".more_lang").toggleClass("active");
        }, 5);
    });

    /*TRANSLATE*/
    translate(tnum);

    $(".more_lang .lang").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".more_lang").removeClass("active");

        var img = $(this).find("img").attr("src");
        var lang = $(this).attr("data-value");
        var tnum = lang;
        translate(tnum);

        $(".current_lang .lang-txt").text(lang);
        $(".current_lang img").attr("src", img);

        if (lang == "ar") {
            $("body").addClass("body-ar");
            $("body").removeClass("body-fr");
        } else if (lang == "fr") {
            $("body").removeClass("body-ar");
            $("body").addClass("body-fr");
        } else {
            $("body").removeClass("body-ar body-fr");
        }
    });

    function translate(tnum) {
        $('.header-text').text(trans[0][tnum]);
        $('.text').text(trans[1][tnum]);
        $('.email-text').text(trans[2][tnum]);
        $('.num-text').text(trans[3][tnum]);
        $('.pass-text').text(trans[4][tnum]);
        $('.textarea-text').text(trans[5][tnum]);

        $('.date-text').text(trans[6][tnum]);
        $('.select-text').text(trans[7][tnum]);
        $('.check-text').text(trans[8][tnum]);
        $('.radio-text').text(trans[9][tnum]);
        $('.upload-text').text(trans[10][tnum]);
        $('.button-text').text(trans[11][tnum]);
        $('.file-text').text(trans[12][tnum]);
        
        $('.form_input_name').attr("placeholder", trans[13][tnum]);
        $('.req-text').text(trans[14][tnum]);
        $('.form_input_placeholder').attr("placeholder", trans[15][tnum]);
        $('.form_input_label').attr("value", trans[16][tnum]);
        $('.label-text').text(trans[16][tnum]);
        $('.c_opt, .s_opt, .r_opt').attr("value", trans[17][tnum]);
        $('.select-op option').text(trans[17][tnum]);
        $('.c_val, .s_val, .r_val').attr("value", trans[18][tnum]);
        $('.form_input_button_value').attr("value", trans[19][tnum]);
        $('.form-group button').text(trans[19][tnum]);
        $('.form_input_step').attr("placeholder", trans[20][tnum]);
    }
});

// Responsive Menu
$(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(window).resize(function (e) {
        if ($(window).width() <= 768) {
            $("#wrapper").removeClass("toggled");
        } else {
            $("#wrapper").addClass("toggled");
        }
    });
});

// Loading
var bar = $('#progress_bar');
var percentage = parseInt($('#progress_percentage').html());

function stopProgress() {
    clearInterval(progress);
}

var progress = setInterval(function () {
    percentage++;
    if (percentage <= 90) {
        $('#progress_percentage').html(percentage + '%');
        if (percentage > 10) {
            bar.css('width', percentage + '%');
        }
    } else {
        stopProgress()
    }
}, 30);

  window.onload = function () {
      setInterval(function () {
          $("#loading").fadeOut(1000);
      }, 2000)
    
}