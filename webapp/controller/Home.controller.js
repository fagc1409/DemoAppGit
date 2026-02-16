sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("demoapp.demo.controller.Home", {
        onInit() {
        },

        onClick: function(){

            MessageBox.success("Bienvenidos");
        }
    });
});