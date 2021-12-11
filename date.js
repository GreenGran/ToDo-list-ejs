//jshint esversion:6

//module
exports.getDate = function () {
    var options = {
        weekday: "short",
        day: "numeric",
        month: "long"
    };
    return new Date().toLocaleDateString("en-US", options);
};
exports.getday = function () {
    var options = {
        weekday: "long",

    };
    return new Date().toLocaleDateString("en-US", options);
};