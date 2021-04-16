jQuery.sap.require("com.sap.fiori.travel.model.formatter");
sap.ui.define(['sap/suite/ui/generic/template/lib/AppComponent'], function(AppComponent) {
    return AppComponent.extend("com.sap.fiori.travel.Component", {
        metadata: {
            manifest: "json",
            dependencies: {
                libs: ["sap.m",
                    "sap.se.mi.plm.lib.attachmentservice",
                    "com.seagate.lib1"
                ],
                components: [
                    "sap.se.mi.plm.lib.attachmentservice.attachment.components.stcomponent",
                    "com.seagate.lib1.approvalflow.Component"
                ]
            }
        }
    });
});
