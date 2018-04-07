
export const createForm216 = (data, date) => {
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
    <FIRST_ENTRY_DT>1234</FIRST_ENTRY_DT>
    <LGBK_NUM>str1234</LGBK_NUM>
    <PRTNSHP_ID>1234</PRTNSHP_ID>
    <LGBK_UID>str123</LGBK_UID>
    <REM>str1234</REM>
    <BAIT_USED NODE_ID="1234">
      <BT_TYP_ID>1234</BT_TYP_ID>
      <BT_USED_DT>1234</BT_USED_DT>
      <BT_WT>123.45</BT_WT>
      <BT_COND_ID>1234</BT_COND_ID>
      <DG_CLOSE_DT>1234</DG_CLOSE_DT>
      <REM>str1234</REM>
    </BAIT_USED>
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
    <HLIN NODE_ID="1234">
      <HLIN_CIE_ID>1234</HLIN_CIE_ID>
      <HLIN_NUM>str1234</HLIN_NUM>
      <DG_CLOSE_DT>1234</DG_CLOSE_DT>
      <REM>str1234</REM>
    </HLIN>
    <PCONS NODE_ID="1234">
      <SPECIE_ID>1234</SPECIE_ID>
      <SPECIE_FRM_ID>1234</SPECIE_FRM_ID>
      <WT>123.45</WT>
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
        <REM>str1234</REM>
        <EFFORT_DETAIL NODE_ID="1234">
          <SOAKED_DUR>1234</SOAKED_DUR>
          <END_LAT MODE="M" />
          <END_LONG MODE="M" />
          <END_NAFO_ID>1234</END_NAFO_ID>
          <NB_VNTCH>1234</NB_VNTCH>
          <NB_VNTCH_YOU>1234</NB_VNTCH_YOU>
          <NB_GEAR_HLD>1234</NB_GEAR_HLD>
          <TRPS_GRP_NUM>1234</TRPS_GRP_NUM>
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
    <TRANSFER NODE_ID="1234">
      <TRNSF_DT>1234</TRNSF_DT>
      <FROM_VRN>str1234</FROM_VRN>
      <FROM_VNAME>str1234</FROM_VNAME>
      <FROM_PND_NUM>str1234</FROM_PND_NUM>
      <TO_VRN>str1234</TO_VRN>
      <TO_VNAME>str1234</TO_VNAME>
      <TO_PND_NUM>str1234</TO_PND_NUM>
      <DG_CLOSE_DT>1234</DG_CLOSE_DT>
      <REM>str1234</REM>
      <TRANSFER_DTL NODE_ID="1234">
        <SPECIE_ID>1234</SPECIE_ID>
        <SPECIE_FRM_ID>1234</SPECIE_FRM_ID>
        <WT>123.45</WT>
        <REM>str1234</REM>
      </TRANSFER_DTL>
    </TRANSFER>
  </TRIP>
</ELOG>`;
}