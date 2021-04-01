jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.suite.ui.generic.template.extensionAPI.extensionAPI");
jQuery.sap.require("com.sap.fiori.travel.libs.html2pdf");
sap.ui.controller("com.sap.fiori.travel.ext.controller.ObjectPageExtension", {

    onInit: function () {
                        
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
        var ident = ""
        $.get({url: "../libs/pdfformat.html", success: function( data ) { ident = data; }, async: false });
        
        
        var opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(ident).set(opt).save();
    }    
});

