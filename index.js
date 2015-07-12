function onValChange(i) {
    if (i) {
        if (!isNaN(i)) {
            var s = parseInt(i);
            if (s > 0 && s <= 10) {
                var r = Math.floor(Math.random() * 10 + 1);
                $(".msg").hide();
                $("#msg" + r).fadeIn(400, "linear");
            } else {
                alert("please enter a number between 0 to 11");
            }

        } else {
            alert("please enter a number!");
        }
    }
    return false;

}




jQuery(document).ready(function ($) {
    $(".msg").hide();
    $("#cno").on("change", function () {
        onValChange(this.value);
    });

    $("#cnoo").on("change", function () {
        onValChange(this.value);
    });
});
