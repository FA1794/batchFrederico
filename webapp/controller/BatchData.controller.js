sap.ui.define(['batchfrederico/controller/Home.controller', 'sap/m/MessageToast'], function (HomeController, MessageToast) {
  let oController, oRouter, oBatchDataModel;

  return HomeController.extend('batchfrederico.controller.BatchData', {
    onInit: function () {
      oController = this;
      oBundle = this.getOwnerComponent().getModel('i18n').getResourceBundle();
      oRouter = oController.getRouter();
      oRouter.getRoute('batchData').attachMatched(oController._onRouteMatched, oController);
      oController.createModel('batchData');
      oBatchDataModel = oController.getView().getModel('batchData');
    },

    _onRouteMatched: () => {
      oController.setModelStructure();
      oController.loadMockData();
    },

    setModelStructure: () => {
      const oModelStructure = {
        "generalBatchData": {},
        "inspectionLotData": {},
        "LIMSData": {},
        "MESData": {},
        "serializationData": {},
        "vendorData": {},
      };
      oController.setInitialData('batchData', oModelStructure);
      oController.setCurrentData('batchData', oModelStructure);
    },

    loadMockData: () => {
      const oGeneralData = [{
        label: "Material",
        value: "30907812",
        isEditable: false
      }, {
        label: "Material Description",
        value: "PoC Finished Good 1",
        isEditable: false
      }, {
        label: "Batch ID",
        value: "2090901",
        isEditable: false
      }, {
        label: "QTY",
        value: "33000 PC",
        isEditable: false
      }, {
        label: "Vendor Batch",
        value: "AABBCC",
        isEditable: false
      }, {
        label: "SLED",
        value: "01.06.2022",
        isEditable: false
      }, {
        label: "NID",
        value: "12.11.2021",
        isEditable: false
      }, {
        label: "Production date",
        value: "01.05.2021",
        isEditable: false
      }, {
        label: "Plant",
        value: "POC1",
        isEditable: false
      }, {
        label: "Process Order/Purchase Order",
        value: "2034567",
        isEditable: false
      }, {
        label: "Order Status",
        value: "TECO",
        isEditable: false
      }, {
        label: "Potency",
        value: "87%",
        isEditable: false
      }, {
        label: "Batch restrictions",
        value: "Batch cannot be sold outside EU",
        isEditable: false
      }, {
        label: "Component Check",
        value: "Passed",
        isEditable: false
      }, {
        label: "Autorelease relevant",
        value: "No",
        isEditable: false
      }, {
        label: "Attachments",
        value: "Batch_data.pdf",
        isEditable: true
      }];
      const oInspectionData = [{
        label: "Inspection lot number",
        value: "4000000000112"
      }, {
        label: "Inspection type",
        value: "Z04P"
      }, {
        label: "Creation Date",
        value: "10.09.2021"
      }, {
        label: "Current UD",
        value: "A-Approved"
      }, {
        label: "UD made By",
        value: "EELISABE"
      }, {
        label: "QP release status",
        value: "Released"
      }, {
        label: "QP release by",
        value: "EELISABE"
      }, {
        label: "Usage Decision Date",
        value: "01.10.2021"
      }, {
        label: "UD comments",
        value: "No remarks to approve"
      }, {
        label: "History Log",
        value: ""
      }];
      const oLIMSData = [{
        label: "QC Data Decision",
        value: "28.08.2021"
      }, {
        label: "QC Decision BY",
        value: "LABUSER1"
      }, {
        label: "QC Decision date",
        value: "PASS"
      }, {
        label: "Sample QTY",
        value: "5 PC"
      }, {
        label: "Potency Check",
        value: "PASSED"
      }, {
        label: "Density Check",
        value: "PASSED"
      }, {
        label: "CoA Status",
        value: "Received"
      }, {
        label: "Attachment List",
        value: "COA_Batch_312121"
      }];
      const oMESData = [{
        label: "MES order ID",
        value: "8928542"
      }, {
        label: "MES Order Status",
        value: "Completed"
      }, {
        label: "IPC Check",
        value: "PASSED"
      }, {
        label: "Yield Check",
        value: "PASSED"
      }, {
        label: "BRR Status",
        value: "Archived"
      }, {
        label: "Label Check",
        value: "PASSED"
      }, {
        label: "Deviation Exist",
        value: "NO"
      }];
      const oSerializationData = [{
        label: "Material",
        value: "30907812"
      }, {
        label: "Material Description",
        value: "PoC Finished Good 1"
      }, {
        label: "Batch ID",
        value: "2090901"
      }, {
        label: "Serialization Type",
        value: "Serialized and Traced."
      }, {
        label: "Serialized From",
        value: "01.02.2021"
      }, {
        label: "Country profile",
        value: "POC1"
      }, {
        label: "Batch Disposition status",
        value: "ACTIVE"
      }, {
        label: "GLN",
        value: "80000412943341"
      }, {
        label: "SN QTY Check",
        value: "PASSED"
      }];
      const oVendorData = [{
        label: "Material",
        value: "30907812"
      }, {
        label: "Material Description",
        value: "PoC Finished Good 1"
      }, {
        label: "Batch ID",
        value: "2090901"
      }, {
        label: "Vendor",
        value: "POC_Vendor"
      }, {
        label: "Purchase Order Number",
        value: "100000932"
      }, {
        label: "Purch Order QTY",
        value: "1890 PC"
      }, {
        label: "Vendor certificate check",
        value: "Certificate Received"
      }, {
        label: "Info record check",
        value: "PASSED"
      }, {
        label: "Attachment",
        value: "Vendor_cetificate.pdf"
      }];

      oController.setArrayPropertyForModel('batchData', '/currentData/generalBatchData', oGeneralData);
      oController.setArrayPropertyForModel('batchData', '/currentData/inspectionLotData', oInspectionData);
      oController.setArrayPropertyForModel('batchData', '/currentData/LIMSData', oLIMSData);
      oController.setArrayPropertyForModel('batchData', '/currentData/MESData', oMESData);
      oController.setArrayPropertyForModel('batchData', '/currentData/serializationData', oSerializationData);
      oController.setArrayPropertyForModel('batchData', '/currentData/vendorData', oVendorData);
    },

    openOptionsPopover: function (oEvent) {
      this.openActionPopup(oEvent, 'batchfrederico.fragment.OptionsProjectsPopover');
    },

    handleDownloadFile: function (oEvent) {
      console.log(oEvent);
    },

    handleUpdateFile: function () {
      oController._getDialog("batchfrederico.fragment.UpdateFile", oController).open();
    },

    onCloseUpdateFilePopup: function () {
      oController._getDialog("batchfrederico.fragment.UpdateFile", oController).destroy();
      oController._oDialog = null;
    },


    handleUploadComplete: function (oEvent) {
      var sResponse = oEvent.getParameter("response"),
        iHttpStatusCode = parseInt(/\d{3}/.exec(sResponse)[0]),
        sMessage;

      if (sResponse) {
        sMessage = iHttpStatusCode === 200 ? sResponse + " (Upload Success)" : sResponse + " (Upload Error)";
        MessageToast.show(sMessage);
      }
    },

    handleUploadPress: function () {
      var oFileUploader = this.byId("fileUploader");
      if (!oFileUploader.getValue()) {
        MessageToast.show("Choose a file first");
        return;
      }
      oFileUploader.checkFileReadable().then(function () {
        oFileUploader.upload();
      }, function (error) {
        MessageToast.show("The file cannot be read. It may have changed.");
      }).then(function () {
        oFileUploader.clear();
      });
    },

    handleTypeMissmatch: function (oEvent) {
      var aFileTypes = oEvent.getSource().getFileType();
      aFileTypes.map(function (sType) {
        return "*." + sType;
      });
      MessageToast.show("The file type *." + oEvent.getParameter("fileType") +
        " is not supported. Choose one of the following types: " +
        aFileTypes.join(", "));
    },

    handleValueChange: function (oEvent) {
      MessageToast.show("Press 'Upload File' to upload file '" +
        oEvent.getParameter("newValue") + "'");
    }

  });
});