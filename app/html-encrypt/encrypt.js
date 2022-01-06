function doencrypt(theform) {
  if (theform.code.value == "") {
      return false;
  } else {
      enctext = encrypt(theform.code.value);
      codetocopy = "<script Language='Javascript'>\n";
      codetocopy += "<!-- Encrypted by TkDot -->\n";
      // codetocopy += "<!-- Tools : https://tkdot.tk/app/encrypt-html/ -->\n";
      codetocopy += "document.write(unescape('" + enctext + "'));\n";
      codetocopy += "//-->\n";
      codetocopy += "</script\>";
      theform.ecode.value = codetocopy;
      theform.sac.disabled = false;
  }
  return false;
}

function sandc(thisform) {
  thisform.ecode.focus();
  thisform.ecode.select();
  copytext = thisform.ecode.createTextRange();
  copytext.execCommand("Copy");
  alert("Copied the Encrypted HTML Code to clipboard, you may now paste this into your website");
}

function encrypt(tx) {
  var hex = '';
  var i;
  for (i = 0; i < tx.length; i++) {
      hex += '%' + hexfromdec(tx.charCodeAt(i))
  }
  return hex;
}

function hexfromdec(num) {
  if (num > 65535) {
      return ("err!")
  }
  first = Math.round(num / 4096 - .5);
  temp1 = num - first * 4096;
  second = Math.round(temp1 / 256 - .5);
  temp2 = temp1 - second * 256;
  third = Math.round(temp2 / 16 - .5);
  fourth = temp2 - third * 16;
  return ("" + getletter(third) + getletter(fourth));
}

function getletter(num) {
  if (num < 10) {
      return num;
  } else {
      if (num == 10) {
          return "A"
      }
      if (num == 11) {
          return "B"
      }
      if (num == 12) {
          return "C"
      }
      if (num == 13) {
          return "D"
      }
      if (num == 14) {
          return "E"
      }
      if (num == 15) {
          return "F"
      }
  }
}