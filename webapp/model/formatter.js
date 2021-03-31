jQuery.sap.declare("com.sap.fiori.travel.model.formatter");


com.sap.fiori.travel.model.formatter = {
	returnAttachmentKey: function (travreq, DraftUUID) {
		var objectKey = "";
		if (travreq !== undefined && travreq !== null && travreq !== "00000000") {
			objectKey = travreq;
		} else if (DraftUUID !== undefined && DraftUUID !== null && DraftUUID !== "") {
			objectKey = DraftUUID.replace(/[^a-zA-Z0-9]/g, "");
		}
		return objectKey;
	}
}