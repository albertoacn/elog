import React from "react";
import { signedUID } from "./auth";

export const put = (responsesData, body) => {
  signedUID().then(res => {
    if (res !== null) {
      // TO TEST with AVD
      // fetch('http://10.0.2.2:3000/insert/', {
      fetch('https://elog-dfo-admin-dashboard.herokuapp.com/insert/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
          uid: res,
          responses: responsesData,
          xml: body
        }),
      }).then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      }).then(function (response) {
        //alert("ok");
      }).catch(function (error) {
        alert("DB is busy, please retry later");
      });
    } else {
      return false;
    }
  }).catch(err => alert(err));
};

export const getResults = () => {
  return
  signedUID().then(async (res) => {
    if (res !== null) {

      let response = await fetch(
        `https://elog-dfo-admin-dashboard.herokuapp.com/result/${res}`
        // `http://10.0.2.2:3000/result/${res}`
      );
      let data = await response.json();
      return data.results;
    } else {
      return false;
    }
  }).catch(err => alert(err));

};