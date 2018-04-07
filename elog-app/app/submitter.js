import React from "react";
import binaryToBase64 from "binaryToBase64";
import utf8 from 'utf8';

export default class Submitter {
  constructor(props) {
  }

  submit(elogKey, fileName, data) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://inter-w01-uat.dfo-mpo.gc.ca/ws/ElogXMLFileTransfer/ElogXMLFileTransfer.asmx', true);

    var bytesKey = utf8.encode(elogKey);
    var encodedKey = binaryToBase64(bytesKey);

    var bytesFileName = utf8.encode(fileName);
    var encodedFileName = binaryToBase64(bytesFileName);

    var bytesData = utf8.encode(data);
    var encodedData = binaryToBase64(bytesData);

    //create the SOAP request
    var strRequest =
      '<?xml version="1.0" encoding="utf-8"?>' +
      '<soap:Envelope ' +
      'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
      'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
      'xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
      '<soap:Body>' +
      '<SaveIncomingFile xmlns="http://www.dfo-mpo.gc.ca">' +
      `<p_elogkey>${encodedKey}</p_elogkey>` +
      `<p_filename>${encodedFileName}</p_filename>` +
      `<p_body>${encodedData}</p_body>>` +
      '</SaveIncomingFile>' +
      '</soap:Body>' +
      '</soap:Envelope>';

    //specify request headers
    xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    xmlhttp.setRequestHeader('Content-Length', 'length');
    //xmlhttp.setRequestHeader('Host', '"urn:inter-w01-uat.dfo-mpo.gc.ca"');
    xmlhttp.setRequestHeader('SOAPAction', '"http://www.dfo-mpo.gc.ca/SaveIncomingFile"');

    //FOR TESTING: display results in an alert box once the response is received
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        //TO DO
        //Handle response and errors if so
        alert(xmlhttp.responseText);
      }
    };

    //send the SOAP request
    xmlhttp.send(strRequest);
    return true;
  }
}