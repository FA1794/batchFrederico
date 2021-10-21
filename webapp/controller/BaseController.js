
sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel',
  "sap/ui/core/routing/History"
], function (Controller, JSONModel, History) {
  return Controller.extend('uPoem.controller.BaseController', {


    /* ------------------------------------------------------------------------------ */
    /* -------------------------------- START EVENTS -------------------------------- */
    /* ------------------------------------------------------------------------------ */

    /* ----- START LIFECYCLE ---- */

    /* ----- END LIFECYCLE ---- */

    /* ----- START COMPONENT EVENTS ----- */

    onNavBack: function () {
      this.getRouter().navTo("appHome", {}, true /*no history*/);
    },

    openActionPopup: function (oEvent, fragment) {
      if (this._oPopover) {
        if (!this._oPopover.isOpen()) {
          this._oPopover.destroy();
          this._oPopover = null;
          this._oPopover = sap.ui.xmlfragment(fragment, this);
          this.getView().addDependent(this._oPopover);
          this._oPopover.openBy(oEvent.getSource());
        } else {
          this._oPopover.destroy();
          this._oPopover = null;
        }
      } else {
        this._oPopover = sap.ui.xmlfragment(fragment, this);
        this.getView().addDependent(this._oPopover);
        this._oPopover.openBy(oEvent.getSource());
      }
    },

    _getDialog: function (sDialogFragmentName, controller) {
      if (!controller._oDialog) {
        controller._oDialog = sap.ui.xmlfragment(sDialogFragmentName, controller);
        controller.getView().addDependent(controller._oDialog);

        var popoverid = controller._oDialog.getId();
        var popoverElement = sap.ui.getCore().byId(popoverid);
        popoverElement.attachAfterOpen(function () {
          $("#" + popoverid).keydown(function (e) {
            if (e.keyCode === Constants.ESC_KEY_CODE) {
              controller._getDialog(popoverElement, controller).destroy();
              controller._oDialog = null;
            }
          });
        });
      }
      return controller._oDialog;
    },

    /* ----- END COMPONENT EVENTS ----- */

    /* ------------------------------------------------------------------------------ */
    /* ---------------------------------- END EVENTS -------------------------------- */
    /* ------------------------------------------------------------------------------ */

    /* ------------------------------------------------------------------------------ */
    /* -------------------------------- START ACTIONS ------------------------------- */
    /* ------------------------------------------------------------------------------ */

    /* ----- START GET/SET DATA ----- */

    /* ----- END GET/SET DATA ----- */

    /* ----- GET/SET MODELS DATA ----- */

    /**
     * 
     * @param {string} sName The name of the model to be created
     */
    createModel: function (sModelName) {
      const modelStructure = {
        "response": {},
        "initialData": {},
        "currentData": {},
        "aux": {}
      };
      const newModel = new JSONModel($.extend(true, {}, modelStructure));

      ///IMPORTANT DEFINE THE MAXIMUM SIZE FOR THE LIST TO THE PROJECT TILES
      newModel.setSizeLimit(1000);
      this.getView().setModel(newModel, sModelName);
    },

    setModelStructure: function (sModel) {
      const modelStructure = {
        "response": {},
        "initialData": {},
        "currentData": {},
        "aux": {}
      };
      const model = this.getView().getModel(sModel);
      model.setProperty("/", $.extend(true, {}, modelStructure));
    },

    // resets model to initial state - copies initialData to currentData
    resetModel: function (sModel) {
      const model = this.getView().getModel(sModel);
      const initialData = model.getProperty("/initialData");
      model.setProperty("/currentData", $.extend(true, {}, initialData));
    },

    // sets {data} as the /response in the model {sModel}
    setResponse: function (sModel, data) {
      const model = this.getView().getModel(sModel);
      model.setProperty("/response", $.extend(true, {}, data));
    },

    // sets {data} as the /initialData in the model {sModel}
    setInitialData: function (sModel, data) {
      const model = this.getView().getModel(sModel);
      model.setProperty("/initialData", $.extend(true, {}, data));
    },

    // sets {data} as the /currentData in the model {sModel}
    setCurrentData: function (sModel, data) {
      const model = this.getView().getModel(sModel);
      model.setProperty("/currentData", $.extend(true, {}, data));
    },

    // set starting data after reworking it to the business rules, assigning it to /initialData and /currentData clones of the data
    setStartingData: function (sModel, sProperty = '', data) {
      const model = this.getView().getModel(sModel);
      model.setProperty("/initialData" + sProperty, $.extend(true, {}, data));
      model.setProperty("/currentData" + sProperty, $.extend(true, {}, data));
    },

    // set starting array after reworking it to the business rules, assigning it to /initialData and /currentData clones of the array
    setStartingArray: function (sModel, sProperty = '', data) {
      const model = this.getView().getModel(sModel);
      model.setProperty("/initialData" + sProperty, $.extend(true, [], data));
      model.setProperty("/currentData" + sProperty, $.extend(true, [], data));
    },

    /**create and sets {data} on a sub-property of the reponse property {sProperty} in the model {sModel}
     */
    setPropertyForModel: function (sModel, sProperty, data) {
      const model = this.getView().getModel(sModel);
      model.setProperty(sProperty, $.extend(true, {}, data));
    },

    // create and sets {data} on a sub-property of the reponse property {sProperty} in the model {sModel} as an array
    setArrayPropertyForModel: function (sModel, sProperty, data) {
      let model = this.getView().getModel(sModel);
      model.setProperty(sProperty, $.extend(true, [], data));
    },

    /* ----- END GET/SET MODELS DATA ----- */

    /* ------------------------------------------------------------------------------ */
    /* ---------------------------------- END ACTIONS ------------------------------- */
    /* ------------------------------------------------------------------------------ */

    /* ----------------------------------------------------------------------------- */
    /* -------------------------------- START UTILS --------------------------------- */
    /* ------------------------------------------------------------------------------ */

    /* ----- START GENERIC FUNCTIONS ----- */

    getRouter: function () {
      return sap.ui.core.UIComponent.getRouterFor(this);
    },

    /* ----- END GENERIC FUNCTIONS ----- */


    /* ----- START AUX FUNCTIONS ----- */

    /* ----- END AUX FUNCTIONS ----- */


    /* ------------------------------------------------------------------------------ */
    /* ---------------------------------- END UTILS --------------------------------- */
    /* ------------------------------------------------------------------------------ */

    /* ------------------------------------------------------------------------------ */
    /* -------------------------------- START FORMATTERS ---------------------------- */
    /* ------------------------------------------------------------------------------ */


    /* ------------------------------------------------------------------------------ */
    /* ---------------------------------- END FORMATTERS ---------------------------- */
    /* ------------------------------------------------------------------------------ */

  });
});