/*=========================================================================================
  File Name: form-validation.js
  Description: jquery bootsreap validation js
  ----------------------------------------------------------------------------------------
  Item name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Saad Raza
  Author URL: http://www.themeforest.net/user/Saad Raza
==========================================================================================*/

(function(window, document, $) {
  'use strict';

  // Input, Select, Textarea validations except submit button
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

})(window, document, jQuery);
