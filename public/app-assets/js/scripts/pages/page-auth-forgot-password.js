/*=========================================================================================
  File Name: form-validation.js
  Description: jquery bootstrap validation js
  ----------------------------------------------------------------------------------------
  
  Author: Saad Raza
  Author URL: http://www.themeforest.net/user/Saad Raza
==========================================================================================*/

$(function() {
    'use strict';

    var pageForgotPasswordForm = $('.auth-forgot-password-form');

    // jQuery Validation
    // --------------------------------------------------------------------
    if (pageForgotPasswordForm.length) {
        pageForgotPasswordForm.validate({
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
                'forgot-password-email': {
                    required: true,
                    email: true
                }
            }
        });
    }
});