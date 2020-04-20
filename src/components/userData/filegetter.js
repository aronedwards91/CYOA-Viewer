import { importBackupString } from "./index.js";

export const getBackupFromFile = (importElementID) => {
  var files = document.getElementById(importElementID).files;
  if (files.length <= 0) {
    return false;
  }
  console.warn('imported file', files);

  var fr = new FileReader();

  fr.onload = function (e) {
    var result = JSON.parse(e.target.result);
    // var formatted = JSON.stringify(result, null, 2);
    importBackupString(result, true);
  };

  fr.readAsText(files.item(0));
};
