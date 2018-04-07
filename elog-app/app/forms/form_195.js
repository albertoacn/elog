
export const createForm49 = (data, date) => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <ELOG NODE_ID="1234">
    <GENERAL_INFO NODE_ID="1234">
      <CIE_ID>${data.CIE_ID}</CIE_ID>
      <SOFT_VER>${data.SOFT_VER}</SOFT_VER>
      <REG_ID>${data.REG_ID}</REG_ID>
      <FIN>${data.FIN}</FIN>
      <VRN>${data.VRN}</VRN>
      <FORM_VER_ID>${data.FORM_VER_ID}</FORM_VER_ID>
  </GENERAL_INFO>
  <TRIP NODE_ID="1234">
    <TRIP_NUM>1234</TRIP_NUM>
    <OPER_NAME>str1234</OPER_NAME>
    <START_DT>1234</START_DT>
    <CREW_NB>1234</CREW_NB>
    <PORT_ID>1234</PORT_ID>
    <OBS_IND>s</OBS_IND>
    <FIRST_ENTRY_DT>1234</FIRST_ENTRY_DT>
    <LGBK_NUM>str1234</LGBK_NUM>
    <PRTNSHP_ID>1234</PRTNSHP_ID>
    <LGBK_UID>str123</LGBK_UID>
    <REM>str1234</REM>
    <LOST_GEAR NODE_ID="1234">
      <LOST_DATE>1234</LOST_DATE>
      <GEAR_ID>1234</GEAR_ID>
      <NB_GEAR>1234</NB_GEAR>
      <LAT MODE="M" />
      <LONG MODE="M" />
      <DG_CLOSE_DT>1234</DG_CLOSE_DT>
      <REM>str1234</REM>
    </LOST_GEAR>
    <SAR NODE_ID="1234">
      <SAR_DT>1234</SAR_DT>
      <LAT MODE="M" />
      <LONG MODE="M" />
      <SPECIE_ID>1234</SPECIE_ID>
      <NB_SPCMN>1234</NB_SPCMN>
      <WT>123.45</WT>
      <SPCMN_COND_ID>1234</SPCMN_COND_ID>
      <DG_CLOSE_DT>1234</DG_CLOSE_DT>
      <REM>str1234</REM>
    </SAR>
    <DAILY_REPORT NODE_ID="1234">
      <DR_DT>1234</DR_DT>
      <LAT MODE="M" />
      <LONG MODE="M" />
      <ETA_DT>1234</ETA_DT>
      <PORT_ID>1234</PORT_ID>
      <DG_CLOSE_DT>1234</DG_CLOSE_DT>
      <REM>str1234</REM>
      <DR_GRP NODE_ID="1234">
        <TGT_SPECIE_ID>1234</TGT_SPECIE_ID>
        <FMA_ID>1234</FMA_ID>
        <GEAR_ID>1234</GEAR_ID>
        <LIC_NO>str1234</LIC_NO>
        <CATCH_DATE>1234</CATCH_DATE>
        <FSHD_IND>s</FSHD_IND>
        <REM>str1234</REM>
        <DR_DTL NODE_ID="1234">
          <SPECIE_ID>1234</SPECIE_ID>
          <SPECIE_FRM_ID>1234</SPECIE_FRM_ID>
          <KEPT_WT>123.45</KEPT_WT>
          <DISC_WT>123.45</DISC_WT>
          <NB_SPCMN_KEPT>1234</NB_SPCMN_KEPT>
          <NB_SPCMN_DISC>1234</NB_SPCMN_DISC>
          <REM>str1234</REM>
        </DR_DTL>
      </DR_GRP>
    </DAILY_REPORT>
    <HLIN NODE_ID="1234">
      <HLIN_DT>1234</HLIN_DT>
      <HLIN_CIE_ID>1234</HLIN_CIE_ID>
      <HLIN_NUM>str1234</HLIN_NUM>
      <AUTH_NUM>str1234</AUTH_NUM>
      <FSH_COMPL_IND>s</FSH_COMPL_IND>
      <ETA_DT>1234</ETA_DT>
      <TOT_WT_ONBRD>123.45</TOT_WT_ONBRD>
      <DG_CLOSE_DT>1234</DG_CLOSE_DT>
      <REM>str1234</REM>
    </HLIN>
    <HLOUT NODE_ID="1234">
      <HLOUT_CIE_ID>1234</HLOUT_CIE_ID>
      <HLOUT_NUM>str1234</HLOUT_NUM>
      <DG_CLOSE_DT>1234</DG_CLOSE_DT>
      <REM>str1234</REM>
    </HLOUT>
    <PCONS NODE_ID="1234">
      <SPECIE_ID>1234</SPECIE_ID>
      <SPECIE_FRM_ID>1234</SPECIE_FRM_ID>
      <WT>123.45</WT>
      <USG_ID>1234</USG_ID>
      <DG_CLOSE_DT>1234</DG_CLOSE_DT>
      <REM>str1234</REM>
    </PCONS>
    <EFFORT NODE_ID="1234">
      <START_DT>1234</START_DT>
      <END_DT>1234</END_DT>
      <LIC_NO>str1234</LIC_NO>
      <FMA_ID>1234</FMA_ID>
      <FSH_TYP_ID>1234</FSH_TYP_ID>
      <DG_CLOSE_DT>1234</DG_CLOSE_DT>
      <REM>str1234</REM>
      <TGT_SPECIES NODE_ID="1234">
        <SPECIE_ID>1234</SPECIE_ID>
      </TGT_SPECIES>
      <EFFORT_BY_GEAR NODE_ID="1234">
        <GEAR_ID>1234</GEAR_ID>
        <MSH_SZ>1234</MSH_SZ>
        <TRWL_CFG_ID>1234</TRWL_CFG_ID>
        <REM>str1234</REM>
        <EFFORT_DETAIL NODE_ID="1234">
          <TOW_NUM>1234</TOW_NUM>
          <SOAKED_DUR>1234</SOAKED_DUR>
          <START_NAFO_ID>1234</START_NAFO_ID>
          <END_NAFO_ID>1234</END_NAFO_ID>
          <AVG_GR_DPTH>1234</AVG_GR_DPTH>
          <AVG_TOW_SPD>123.45</AVG_TOW_SPD>
          <START_DEPL_DT>1234</START_DEPL_DT>
          <START_DEPL_LAT MODE="M" />
          <START_DEPL_LONG MODE="M" />
          <END_DEPL_DT>1234</END_DEPL_DT>
          <END_DEPL_LAT MODE="M" />
          <END_DEPL_LONG MODE="M" />
          <START_GRID_ID>1234</START_GRID_ID>
          <END_GRID_ID>1234</END_GRID_ID>
          <REM>str1234</REM>
          <CATCH NODE_ID="1234">
            <SPECIE_ID>1234</SPECIE_ID>
            <KEPT_WT>123.45</KEPT_WT>
            <DISC_WT>123.45</DISC_WT>
            <NB_SPCMN_DISC>1234</NB_SPCMN_DISC>
            <SPECIE_FRM_ID>1234</SPECIE_FRM_ID>
            <REM>str1234</REM>
          </CATCH>
        </EFFORT_DETAIL>
      </EFFORT_BY_GEAR>
    </EFFORT>
    <LANDING NODE_ID="1234">
      <START_DT>1234</START_DT>
      <PORT_ID>1234</PORT_ID>
      <ARR_DT>1234</ARR_DT>
      <DG_CLOSE_DT>1234</DG_CLOSE_DT>
      <REM>str1234</REM>
    </LANDING>
  </TRIP>
</ELOG>`;
}