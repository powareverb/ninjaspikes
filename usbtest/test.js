'use strict';

var usb = require('usb');

console.log("Hello World");

var items = usb.getDeviceList();

items.forEach(function(entry) {
    console.log(entry);
});

