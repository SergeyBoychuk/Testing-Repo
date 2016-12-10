var count = 0,
    wordsArray = [
        "Voted best coffee shop in Palm Beach County!",
        "Come visit us soon and we'll give you a discount!",
        "This is a limited to offer so come soon!",
        "We welcome you to come visit us",
    ];
setInterval(function () {
    count+= 1;
    isFired = 1;
    $(".test").fadeOut(400, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
  });
}, 5000);

//# sourceMappingURL=sourcemaps/main.js.map
