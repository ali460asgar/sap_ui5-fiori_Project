sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("fiori.app.fioridemo4.controller.View1", {
        onInit() {
        },

        onPressGoToV1: function(){
                this.getOwnerComponent().getRouter().navTo("RouteView2")
        },
        onPressGoToV2: function(){
                this.getOwnerComponent().getRouter().navTo("RouteView3")
        },
        onPressSubmitButton:function(){
        let oInputVal = this.getView().byId("inputVal1").getValue();
        let msg = `Welcome To ${oInputVal}`;
        this.getView().byId("textVal1").setText(msg);
        this.getView().byId("subButton").setType("Accept")
        this.getView().byId("textVal1").setTextAlign("Left");
        }
    });
});