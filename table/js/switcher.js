! function(a) {
    "use strict";
    a(document).ready(function() {
        a("#openSwitcher").on("click", function() {
            a("#openSwitcher").css("display", "none"), a("#colorSwitcher").animate({
                left: "0px"
            }, 200, "linear", function() {
                a("#closeSwitcher").fadeIn(200)
            })
        }), a("#closeSwitcher").on("click", function() {
            a("#closeSwitcher").css("display", "none"), a("#colorSwitcher").animate({
                left: "-202px"
            }, 200, "linear", function() {
                a("#openSwitcher").fadeIn(200)
            })
        })
    })
}(jQuery);