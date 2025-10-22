sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("fiori.app.fioridemo4.controller.View3", {
        onInit() {
        },

        onPressBackButton: function(){
            history.go(-1)
        }
    });
});