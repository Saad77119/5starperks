/*=========================================================================================
    File Name: ext-component-clipboard.js
    Description: Copy to clipboard
    --------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Saad Raza
    Author URL: http://www.themeforest.net/user/Saad Raza
==========================================================================================*/

'use strict';

var userText = $('#copy-to-clipboard-input');
var btnCopy = $('#btn-copy'),
  isRtl = $('html').attr('data-textdirection') === 'rtl';

// copy text on click
btnCopy.on('click', function () {
  userText.select();
  document.execCommand('copy');
  toastr['success']('', 'Copied to clipboard!', {
    rtl: isRtl
  });
});
