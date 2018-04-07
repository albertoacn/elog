import React from "react";

export default class Builder {
    constructor() {
    }

    build(data) {
        const tmpData = {
            CIE_ID: 39521,
            SOFT_VER: 0,
            REG_ID: 1014,
            FIN: 101400141,
            VRN: 1014141,
            FORM_VER_ID: 215
        };
        const date = new Date();
        const submitDate = date.getUTCFullYear() + "" + date.getUTCMonth() + "" + date.getUTCDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
        return `<?xml version="1.0" encoding="utf-8"?>
        <ELOG NODE_ID="1234">
          <GENERAL_INFO NODE_ID="1234">
            <CIE_ID>${tmpData.CIE_ID}</CIE_ID>
            <SOFT_VER>${tmpData.SOFT_VER}</SOFT_VER>
            <REG_ID>${tmpData.REG_ID}</REG_ID>
            <FIN>${tmpData.FIN}</FIN>
            <VRN>${tmpData.VRN}</VRN>
            <FORM_VER_ID>${tmpData.FORM_VER_ID}</FORM_VER_ID>
          </GENERAL_INFO>
          <TRIP NODE_ID="12341">
            <TRIP_NUM>1234</TRIP_NUM>
            <OPER_NAME>str1234</OPER_NAME>
            <START_DT>201802010800</START_DT>
            <CREW_NB>50</CREW_NB>
            <PORT_ID>3</PORT_ID>
            <OBS_IND>y</OBS_IND>
            <FIRST_ENTRY_DT>20180201080030</FIRST_ENTRY_DT>
            <LGBK_NUM>str1234</LGBK_NUM>
            <PRTNSHP_ID>3</PRTNSHP_ID>
            <LGBK_UID>LGBUID</LGBK_UID>
            <REM>str1234</REM>
            <LOST_GEAR NODE_ID="123411">
              <LOST_DATE>20180201</LOST_DATE>
              <START_TAG_NUM>str1234</START_TAG_NUM>
              <END_TAG_NUM>str1235</END_TAG_NUM>
              <GEAR_ID>5</GEAR_ID>
              <NB_GEAR>1234</NB_GEAR>
              <LAT MODE="M">48</LAT>
              <LONG MODE="M">-48</LONG>
              <DG_CLOSE_DT>20180201120000</DG_CLOSE_DT>
              <REM>str12310</REM>
            </LOST_GEAR>
            <BAIT_USED NODE_ID="123412">
              <BT_TYP_ID>1234</BT_TYP_ID>
              <BT_WT>123.45</BT_WT>
              <BT_COND_ID>1234</BT_COND_ID>
              <DG_CLOSE_DT>20180201120000</DG_CLOSE_DT>
              <REM>str12311</REM>
            </BAIT_USED>
            <SAR NODE_ID="123413">
              <SAR_DT>1234</SAR_DT>
              <LAT MODE="M">48</LAT>
              <LONG MODE="M">-48</LONG>
              <SPECIE_ID>1234</SPECIE_ID>
              <NB_SPCMN>1234</NB_SPCMN>
              <WT>123.45</WT>
              <SPCMN_COND_ID>1234</SPCMN_COND_ID>
              <DG_CLOSE_DT>20180201120000</DG_CLOSE_DT>
              <REM>str12312</REM>
            </SAR>
            <HLIN NODE_ID="123414">
              <HLIN_DT>1234</HLIN_DT>
              <HLIN_CIE_ID>1234</HLIN_CIE_ID>
              <HLIN_NUM>str1234</HLIN_NUM>
              <DG_CLOSE_DT>20180201120000</DG_CLOSE_DT>
              <REM>str12315</REM>
            </HLIN>
            <HLOUT NODE_ID="123415">
              <HLOUT_CIE_ID>1234</HLOUT_CIE_ID>
              <HLOUT_NUM>str1234</HLOUT_NUM>
              <DG_CLOSE_DT>20180201120000</DG_CLOSE_DT>
              <REM>str12316</REM>
            </HLOUT>
            <PCONS NODE_ID="123416">
              <SPECIE_ID>1234</SPECIE_ID>
              <SPECIE_FRM_ID>1234</SPECIE_FRM_ID>
              <WT>123.45</WT>
              <USG_ID>1234</USG_ID>
              <DG_CLOSE_DT>20180201120000</DG_CLOSE_DT>
              <REM>str12317</REM>
            </PCONS>
            <EFFORT NODE_ID="123417">
              <START_DT>2018012011000</START_DT>
              <END_DT>2018012011001</END_DT>
              <LIC_NO>014141</LIC_NO>
              <FMA_ID>1234</FMA_ID>
              <FSH_TYP_ID>1234</FSH_TYP_ID>
              <DG_CLOSE_DT>20180201120000</DG_CLOSE_DT>
              <REM>str12318</REM>
              <TGT_SPECIES NODE_ID="1234">
                <SPECIE_ID>1234</SPECIE_ID>
              </TGT_SPECIES>
              <EFFORT_BY_GEAR NODE_ID="1234">
                <GEAR_ID>1234</GEAR_ID>
                <MSH_SZ>1234</MSH_SZ>
                <TRP_SZ_ID>1234</TRP_SZ_ID>
                <REM>str12319</REM>
                <EFFORT_DETAIL NODE_ID="1234">
                  <SOAKED_DUR>4</SOAKED_DUR>
                  <START_DT>201802011000</START_DT>
                  <START_LAT MODE="M">48</START_LAT>
                  <START_LONG MODE="M">-48</START_LONG>
                  <END_DT>201802051000</END_DT>
                  <END_LAT MODE="M">52</END_LAT>
                  <END_LONG MODE="M" >-58</END_LONG>
                  <START_NAFO_ID>1234</START_NAFO_ID>
                  <END_NAFO_ID>1234</END_NAFO_ID>
                  <NB_GEAR_HLD>1234</NB_GEAR_HLD>
                  <NB_GEAR_LST>1234</NB_GEAR_LST>
                  <AVG_GR_DPTH>1234</AVG_GR_DPTH>
                  <TRPS_GRP_NUM>5</TRPS_GRP_NUM>
                  <START_GRID_ID>1234</START_GRID_ID>
                  <END_GRID_ID>1235</END_GRID_ID>
                  <FAR_GR_LAT MODE="M">52</FAR_GR_LAT>
                  <FAR_GR_LONG MODE="M">-58</FAR_GR_LONG>
                  <AGGLO_NUM>1234</AGGLO_NUM>
                  <REM>str12322</REM>
                  <CATCH NODE_ID="1234">
                    <SPECIE_ID>1234</SPECIE_ID>
                    <KEPT_WT>123.45</KEPT_WT>
                    <DISC_WT>123.45</DISC_WT>
                    <NB_SPCMN_DISC>1234</NB_SPCMN_DISC>
                    <SPECIE_FRM_ID>1234</SPECIE_FRM_ID>
                    <REM>str12320</REM>
                  </CATCH>
                </EFFORT_DETAIL>
              </EFFORT_BY_GEAR>
            </EFFORT>
            <LANDING NODE_ID="123418">
              <START_DT>201802010800</START_DT>
              <PORT_ID>123</PORT_ID>
              <ARR_DT>201802061000</ARR_DT>
              <DG_CLOSE_DT>20180206100000</DG_CLOSE_DT>
              <REM>str12321</REM>
            </LANDING>
          </TRIP>
        </ELOG>`;
    }
}