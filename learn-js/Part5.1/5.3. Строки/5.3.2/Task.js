"use strict"

function checkSpam (inputstr) {
  let str = inputstr.toLowerCase();
  if (str.indexOf('viagra') !=-1 || str.indexOf('xxx') != -1) {
    return true
  }
  else {
    return false
  }
}

alert (checkSpam('buy ViAgRA now')) // == true
alert (checkSpam('free xxxxx'))// == true
alert (checkSpam("innocent rabbit"))// == false