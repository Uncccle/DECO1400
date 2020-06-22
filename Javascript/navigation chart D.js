$(".first-menu").children("li").each(function() {
    $(this).mouseenter(() => {
        let whenHover;
        whenHover = $("." + $(this).attr("class").split(' ')[2].toString() + "-content");
        whenHover.addClass('open');
    }),
    $('html, .main, .main_top, .Header-left').mouseenter(function() {
        $("#submenu-content-area").children("div").each(function () {
            console.log(1);
            $(this).removeClass('open');
        })
    });
});