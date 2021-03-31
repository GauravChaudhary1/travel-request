jQuery.sap.require("com.sap.fiori.travel.model.formatter");
sap.ui.define(['sap/suite/ui/generic/template/lib/AppComponent'], function(AppComponent) {
    return AppComponent.extend("com.sap.fiori.travel.Component", {
        metadata: {
            manifest: "json",
            dependencies: {
                libs: ["sap.m",
                    "sap.se.mi.plm.lib.attachmentservice"
                ],
                components: [
                    "sap.se.mi.plm.lib.attachmentservice.attachment.components.stcomponent"
                ]
            }
        }
    });
});
