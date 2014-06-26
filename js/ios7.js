// Basic iOS 7 CSS // Apache 2 license // hbang.ws
var split = document.title.split(" \u00b7 ")[0];
$("header h1").html(split);
$("a").attr("target", "_blank");
$("img").parent().addClass("screens");
(function (a, b){
	"use strict";
	navigator.userAgent.indexOf("Cydia") != -1 ?
		(
			a.title = b,
			a.documentElement.classList.add("cydia", "depiction")
		) : a.documentElement.classsList.remove("cydia", "depiction");
})(document, split);