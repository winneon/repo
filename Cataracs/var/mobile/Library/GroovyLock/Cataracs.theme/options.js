// Show a horizontal clock instead of a vertical clock. Default is false.
var horizontal = false;

// Shows the a battery visual behind the clock when your device is charging.
// Default is true.
var battery = true;

// 24 hour time. true = 24 hours, false = 12 hours. Default is false.
var hours24 = false;

// Spacing between the widget and top of your screen (vertical clock only).
// Default is 155 pixels.
var vertical_spacing = 140;

// Spacing between the widget and top of your screen (horizontal clock only).
// Default is 60 pixels.
var horizontal_spacing = 45;

// The seperator between the hours and minutes of the horizontal clock. Default is ".".
var horizontal_separator = ".";

// Allow the widget to move up when notifications are present on the lockscreen.
// Default is true.
var notification_support = true;

// Spacing between the widget and the top of your screen when
// notifications are present on the lockscreen. Default is 10 pixels.
var notification_spacing = 10;

// Enter your woeid here if you want your current temperature.
// To find your woeid, go to http://woeid.rosselliot.co.nz/ and enter your location.
// Default is "2434077" (Kyle, TX).
var woeid = "2434077";

// Temperature unit. Default is "c" (Celcius).
var unit = "c";

// Show a background colour behind the widget. Default is "transparent".
// For colour information, go to http://www.colorpicker.com/ for hex codes.
var bg_colour = "transparent";

// Change the background colour opacity. Default is 1.0.
var bg_opacity = 1.0;

// Show the background blur. Default is false. This option is BUGGY.
// If you choose to have blur on, it may take time to create the blur every so often.
// Also, if you reset your wallpaper to something else, you MUST respring!
var blur = false;

// Blur radius for the background blur behind Cataracs. Default is 25 pixels.
var radius = 25;

// Update the blur to support the iPhone 6. This is /required/ if you intend
// to us the blur if you are on a iPhone 6. Default is false.
var iPhone_6_blur = false;

// Update the blur to support the iPhone 6 Plus. This is /required/ if you intend
// to us the blur if you are on a iPhone 6 Plus. Default is false.
var iPhone_6_Plus_blur = false;

// Show the current temperature. Default is false.
var temp = false;

// Show the date under the time. Default is false.
var date = false;

// Show a shadow under the widget. Default is false.
var shadow = false;

// The border width of the clock (thickness). Default is 2 pixels.
var border_width = 2;

// The font family of the clock. Default is "Gotham".
// Some examples include "Arial", "Times New Roman", and "Helvetica".
var font_family = "Gotham";

// Change the x / y position of the widget. THIS OVERRIDES ANY SPACING OPTIONS ABOVE,
// INCLUDING THE NOTIFICATION SUPPORT. Some examples include "0, 0", "25, 30", and "50, 50".
// Default is "auto, auto" (disables this option).
var xy = "auto, auto";

// Change the scale (size) as a multiplier of the widget. Default is 1.
// Note: This is a bit buggy, and it will look strange / big if you go past 2.
var scale = 1;