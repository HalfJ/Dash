var showUploadWindow = function () {
    $("#uploadWindow")[0].classList.remove("hide");
    $("#uploadWindow")[0].classList.remove("slideOutRight");
    $("#uploadWindow")[0].classList.add("slideInRight");
    $("#uploadBackButton")[0].classList.remove("noOpacity");

};

var hideUploadWindow = function () {
    $("#uploadWindow")[0].classList.remove("slideInRight");
    $("#uploadWindow")[0].classList.add("slideOutRight");

    $("#uploadBackButton")[0].classList.add("noOpacity");

};


var initializeMenus = function () {
    //upload triggers
    $("#uploadButton")[0].addEventListener("click", showUploadWindow);
    $("#uploadBackButton")[0].addEventListener("click", hideUploadWindow);

};
$(document).ready(initializeMenus);