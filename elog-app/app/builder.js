import React from "react";
import {createForm45} from "./forms/form_45";
import {createForm195} from "./forms/form_195";


export default class Builder {
    constructor() {
    }

    build(data) {

      //Dummy data while we do not have porper data from the UI
      const tmpData = {
        region: 1014,
        CIE_ID: 39521,
        SOFT_VER: 0,
        REG_ID: 1014,
        FIN: 101400141,
        VRN: 1014141,
        FORM_VER_ID: 215
      };

      const date = new Date();
      const submitDate = date.getUTCFullYear() + "" + date.getUTCMonth() + "" + date.getUTCDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();

      switch(tmpData.region) {
        case 1006:
          return createForm45(tmpData, submitDate);
          break;
        case 1014:
          return createForm195(tmpData, submitDate);
          break;
        default:
          return createForm45(tmpData, submitDate);
      }     
    }
}