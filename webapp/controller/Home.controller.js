sap.ui.define([
	"batchfrederico/controller/BaseController"
], function (BaseController) {
	let oController, oBundle, oMainController;
	return BaseController.extend("batchfrederico.controller.Home", {
		onInit: function () {
			oController = this;
			oBundle = this.getOwnerComponent().getModel('i18n').getResourceBundle();
			oRouter = oController.getRouter();
			/* oRouter.getRoute('businessCase').attachMatched(oController._onRouteMatched, oController); */
			oController.createModel('main');
			oMainController = oController.getView().getModel('main');
			oController.loadBatchMockData();
		},

		openBatchDataPage: function (oEvent) {
			const iBatchId = oController.getView().getModel("main").getProperty(oEvent.getSource().getBindingContext('main').getPath()).id;
			oRouter.navTo("batchData", { batchId: iBatchId });
		},


		loadBatchMockData: () => {
			let oData = [
				{ id: "1", label: "Batch 1" },
				{ id: "2", label: "Batch 2" },
				{ id: "3", label: "Batch 3" },
				{ id: "4", label: "Batch 4" },
				{ id: "5", label: "Batch 5" },
				{ id: "6", label: "Batch 6" },
				{ id: "7", label: "Batch 7" },
			];

			oController.setStartingArray('main', '/batchesData', oData);
		}

	});
});
