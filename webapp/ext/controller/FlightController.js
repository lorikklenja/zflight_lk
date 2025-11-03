sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        /**
         * Generated event handler.
         *
         * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
         * @param aSelectedContexts the selected contexts of the table rows.
         */
        goToUrl: function(oContext, aSelectedContexts) {
            const oSelected = aSelectedContexts[0].getObject();
            var url = oSelected.Url
            if(url){
                window.open(url, "_blank");
            } else {
                MessageToast.show("The URL doesn't exist.");
            }
        }
    };
});
