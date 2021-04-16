jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.suite.ui.generic.template.extensionAPI.extensionAPI");
jQuery.sap.require("com.sap.fiori.travel.libs.html2pdf");
sap.ui.controller("com.sap.fiori.travel.ext.controller.ObjectPageExtension", {
    onInit: function () {
        this.extensionAPI.attachPageDataLoaded(this.handlePageDataLoaded.bind(this));
        this.extensionAPI.getTransactionController().attachAfterActivate(this.handleAfterActivate.bind(this));
        
    },

    handlePrint: function () {
        var oObj = this.getView().getBindingContext().getObject();
        if (oObj["status"] === "Draft" ||
            oObj["status"] === "Rework" ||
            oObj["status"] === "") {
            sap.m.MessageBox.show(
                "Cannot print in current status", {
                icon: sap.m.MessageBox.Icon.INFORMATION,
                title: "Information"
            });
            return;
        }
        var ident = ""
        var sUrl = sap.ui.require.toUrl("com/sap/fiori/travel/libs/pdfformat.html");
        var sImageUrl = sap.ui.require.toUrl("com/sap/fiori/travel/libs/logo.jpg");
        $.get({ url: sUrl, success: function (data) { ident = data; }, async: false });
        ident = ident.replace("%imageurl%", sImageUrl)

        var opt = {
            margin: 1,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(ident).set(opt).save();
    },

    handleChangeCC: function (oEvent) {
        if (oEvent.getSource().getId() === this.byId("idCC").getId()) {

            var idProjCode = oEvent.getSource().getId().replace("idCC", "chargecode::Prjcode::Field");
            var idProjCodeText = oEvent.getSource().getId().replace("idCC", "chargecode::post1::Field");
            var idCoscode = oEvent.getSource().getId().replace("idCC", "chargecode::Coscode::Field");
            var idCosCodeText = oEvent.getSource().getId().replace("idCC", "chargecode::costext::Field");
            if (sap.ui.getCore().byId(idProjCode)) {
                sap.ui.getCore().byId(idProjCode).setEditable(false);
            }
            if (sap.ui.getCore().byId(idProjCodeText)) {
                sap.ui.getCore().byId(idProjCodeText).setEditable(false);
            }
            if (sap.ui.getCore().byId(idCoscode)) {
                sap.ui.getCore().byId(idCoscode).setEditable(true);
            }
            if (sap.ui.getCore().byId(idCosCodeText)) {
                sap.ui.getCore().byId(idCosCodeText).setEditable(true);
            }
        } else if (oEvent.getSource().getId() === this.byId("idPC").getId()) {
            var idProjCode = oEvent.getSource().getId().replace("idPC", "chargecode::Prjcode::Field");
            var idProjCodeText = oEvent.getSource().getId().replace("idPC", "chargecode::post1::Field");
            var idCoscode = oEvent.getSource().getId().replace("idPC", "chargecode::Coscode::Field");
            var idCosCodeText = oEvent.getSource().getId().replace("idPC", "chargecode::costext::Field");
            if (sap.ui.getCore().byId(idProjCode)) {
                sap.ui.getCore().byId(idProjCode).setEditable(true);
            }
            if (sap.ui.getCore().byId(idProjCodeText)) {
                sap.ui.getCore().byId(idProjCodeText).setEditable(true);
            }
            if (sap.ui.getCore().byId(idCoscode)) {
                sap.ui.getCore().byId(idCoscode).setEditable(false);
            }
            if (sap.ui.getCore().byId(idCosCodeText)) {
                sap.ui.getCore().byId(idCosCodeText).setEditable(false);
            }
        }
    },
    onAfterRendering: function (evt) {

    },
    handlePageDataLoaded: function (oEvent) {
        var id = this.getView().getId() + "--chargecode::SideContentButton";
        if (this.getView().getModel('ui').getData().editable === true) {
            sap.ui.getCore().byId(id).setVisible(true);
        } else {
            sap.ui.getCore().byId(id).setVisible(false);
        }

        var idCoscode = this.getView().getId() + "--chargecode::Coscode::Field";
        var idCosCodeText = this.getView().getId() + "--chargecode::costext::Field";
        if (sap.ui.getCore().byId(idCoscode)) {
            sap.ui.getCore().byId(idCoscode).setEditable(false);
        }
        if (sap.ui.getCore().byId(idCosCodeText)) {
            sap.ui.getCore().byId(idCosCodeText).setEditable(false);
        }

        var idHeader = this.getView().getId() + "--objectPage";
        if(sap.ui.getCore().byId(idHeader)){
            sap.ui.getCore().byId(idHeader).setShowHeaderContent(true);
            sap.ui.getCore().byId(idHeader).setAlwaysShowContentHeader(true);
        }

        this.getView().getModel().attachPropertyChange(this.handleAfterActivate.bind(this));

    },

    handleAfterActivate: function(oEvent){
        console.log("set");
        // oEvent.getParameter('context').getObject()
    }
});

