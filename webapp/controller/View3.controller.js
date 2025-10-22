sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("fiori.app.fioridemo4.controller.View4", {
        onInit() {
        },

        onPressBackButton: function(){
            history.go(-1)
        },
        onPressGo:function(){
            this.getOwnerComponent().getRouter().navTo("RouteView4")
        }
    });
});