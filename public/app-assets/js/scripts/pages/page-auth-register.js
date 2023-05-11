/*=========================================================================================
  File Name: form-validation.js
  Description: jquery bootstrap validation js
  ----------------------------------------------------------------------------------------
  
  Author: Saad Raza
  Author URL: http://www.themeforest.net/user/Saad Raza
==========================================================================================*/

$(function() {
    'use strict';

    var pageResetForm = $('.auth-register-form');

    // jQuery Validation
    // --------------------------------------------------------------------
    if (pageResetForm.length) {
        pageResetForm.validate({
            /*
            * ? To enable validation onkeyup
            onkeyup: function (element) {
              $(element).valid();
            },*/
            /*
            * ? To enable validation on focusout
            onfocusout: function (element) {
              $(element).valid();
            }, */
            rules: {
                'register-username': {
                    required: true
                },
                'register-email': {
                    required: true,
                    email: true
                },
                'register-password': {
                    required: true
                }
            }
        });
    }
});