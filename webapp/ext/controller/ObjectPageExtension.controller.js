jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.suite.ui.generic.template.extensionAPI.extensionAPI");
jQuery.sap.require("com.sap.fiori.travel.libs.pdfmake");
sap.ui.controller("com.sap.fiori.travel.ext.controller.ObjectPageExtension", {

    onInit: function () { 
         debugger;                
    },

    handlePrint: function(){
        var oObj = this.getView().getBindingContext().getObject();
        if (oObj["status"] === "Draft" || 
            oObj["status"] === "Rework" ||
            oObj["status"] === "" )
        {
            sap.m.MessageBox.show(
                "Cannot print in current status", {
                    icon: sap.m.MessageBox.Icon.INFORMATION,
                    title: "Information"
                });
            return;
        }


        //var ident = document.getElementById("com.sap.fiori.travel.reqest::sap.suite.ui.generic.template.ObjectPage.view.Details::ZM_TRAV_REQ--objectPage-opwrapper");
        var ident = ""
        
        $.get({url: "https://www.sparksuite.com/images/logo.png", success: function( data ) { }, async: false });
        $.get({url: "../libs/pdfformat.html", success: function( data ) { ident = data; }, async: false });
        


        var opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'png', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(ident).set(opt).save();
    }

    
});

