"use strict";

import * as jarvis from "./jarvis.js";

// Ready function
$(function () {
  /* --> DOM Elements <-- */
  const $companyName = $("#companyName");
  const $rfc = $("#rfc");
  const $address = $("#address");
  const $city = $("#city");
  const $state = $("#state");
  const $zip = $("#zipCode");
  const $website = $("#webPage");
  const $phone = $("#celnumber");
  const $email = $("#email");
  const $business = $("#businessActivity");
  const $logoFile = $("#logoFile");
  const $logoImg = $("#logoImg");
  const $cleanBtn = $("#cleanBtn");
  const $saveBtn = $("#saveBtn");
  const $errorRegModal = $("#regErrorModal");
  const $titleModal = $("#modal-title");
  const $txtModal = $("#modal-text");
  var flgPhoneOk = false;
  var flgEmailOk = false;
  var flgCpOk = false;

  /* --> Functions <-- */

  /* --> LimpiarCampos <-- */
  /* @params: none
   * @trigger: $cleanBtn.click()
   * @return: none
   * @description: This function is used to clear all the fields in the form.
   */
  function LimpiarCampos() {
    $companyName.val("");
    $rfc.val("");
    $address.val("");
    $city.val("");
    $state.val("");
    $zip.val("");
    $website.val("");
    $phone.val("");
    $email.val("");
    $business.val("");
    $logoFile.val("");
    $logoImg.attr("src", "../assets/logoDemo.jpg");
  }

  /* --> CreateCompany <-- */
  /* @params: none
   * @trigger: $saveBtn.click()
   * @return: An object with the company data.
   * @description: This function is used to create a new company.
   */
  function CreateCompany() {
    // Parse phone and zip to number
    try {
      var celNumber = Number($phone.val());
      var zipCode = Number($zip.val());
    } catch (error) {
      /* --> DEBUG <-- */
      //console.error(error);
    }

    // Get user object
    const user = jarvis.GetUser();

    const company = {
      userId: user.id,
      companyName: $companyName.val(),
      rfc: $rfc.val(),
      address: $address.val(),
      city: $city.val(),
      state: $state.val(),
      zip: zipCode,
      phone: celNumber,
      email: $email.val(),
      business: $business.val(),
      logo: $logoFile.val(),
      website: $website.val(),
    };

    return company;
  }

  /* --> Event Handlers <-- */
  $companyName.on("input", function (e) {
    // Locales
    let companyName = $(this).val();

    // Validate companyName
    if (companyName != "") {
      // Hide popover
      $companyName.popover("hide");
      $companyName.attr("data-bs-content", "");
    }
  });

  $companyName.on("click", function (e) {
    // Locales
    let companyName = $(this).val();

    // Validate companyName
    if (companyName != "") {
      // Hide popover
      $companyName.popover("hide");
      $companyName.attr("data-bs-content", "");
      // Destroy popover
      $companyName.popover("dispose");
    }
  });

  $rfc.on("input", function (e) {
    // Locales
    let rfc = $(this).val();

    // Validate rfc
    if (rfc != "") {
      // Hide popover
      $rfc.popover("hide");
      $rfc.attr("data-bs-content", "");
    }
  });

  $rfc.on("click", function (e) {
    // Locales
    let rfc = $(this).val();

    // Validate rfc
    if (rfc != "") {
      // Hide popover
      $rfc.popover("hide");
      $rfc.attr("data-bs-content", "");
      // Destroy popover
      $rfc.popover("dispose");
    }
  });

  $address.on("input", function (e) {
    // Locales
    let address = $(this).val();

    // Validate address
    if (address != "") {
      // Hide popover
      $address.popover("hide");
      $address.attr("data-bs-content", "");
    }
  });

  $address.on("click", function (e) {
    // Locales
    let address = $(this).val();

    // Validate address
    if (address != "") {
      // Hide popover
      $address.popover("hide");
      $address.attr("data-bs-content", "");
      // Destroy popover
      $address.popover("dispose");
    }
  });

  $city.on("input", function (e) {
    // Locales
    let city = $(this).val();

    // Validate city
    if (city != "") {
      // Hide popover
      $city.popover("hide");
      $city.attr("data-bs-content", "");
    }
  });

  $city.on("click", function (e) {
    // Locales
    let city = $(this).val();

    // Validate city
    if (city != "") {
      // Hide popover
      $city.popover("hide");
      $city.attr("data-bs-content", "");
      // Destroy popover
      $city.popover("dispose");
    }
  });

  $state.on("input", function (e) {
    // Locales
    let state = $(this).val();

    // Validate state
    if (state != "") {
      // Hide popover
      $state.popover("hide");
      $state.attr("data-bs-content", "");
    }
  });

  $state.on("click", function (e) {
    // Locales
    let state = $(this).val();

    // Validate state
    if (state != "") {
      // Hide popover
      $state.popover("hide");
      $state.attr("data-bs-content", "");
      // Destroy popover
      $state.popover("dispose");
    }
  });

  $zip.on("input", function (e) {
    // Validate only 5 digits numbers
    let zip = $(this).val();
    let regex = /^[0-9]{5}$/;

    // Validate zip
    if (regex.test(zip)) {
      // Hide popover
      $zip.popover("hide");
      $zip.attr("data-bs-content", "");
      // Set flag to true
      flgCpOk = true;
    } else {
      $zip.focus();
      // Show popover
      jarvis.showPopMsg(
        $zip,
        "El código postal debe contener 5 dígitos: 12345"
      );
      // Focus on zip
      $zip.focus();
      // Set flag to false
      flgCpOk = false;
    }
  });

  $zip.on("focus", function (e) {
    // Validate zip flag
    if (flgCpOk) {
      // Hide popover
      $zip.popover("hide");
      $zip.attr("data-bs-content", "");
      // Destroy popover
      $zip.popover("dispose");
    } else {
      // Set flag to false
      flgCpOk = false;
    }
  });

  $phone.on("input", function (e) {
    //Validate only 10 digits numbers
    let phone = $(this).val();
    let regex = /^[0-9]{10}$/;

    // Validate phone
    if (regex.test(phone)) {
      // Hide popover
      $phone.popover("hide");
      $phone.attr("data-bs-content", "");
      // Set flag to true
      flgPhoneOk = true;
    } else {
      $phone.focus();
      // Show popover
      jarvis.showPopMsg(
        $phone,
        "El número de teléfono debe contener 10 dígitos: 1234567890"
      );
      // Focus on phone
      $phone.focus();
      // Set flag to false
      flgPhoneOk = false;
    }
  });

  $phone.on("focus", function (e) {
    // Validate phone flag
    if (flgPhoneOk) {
      // Hide popover
      $phone.popover("hide");
      $phone.attr("data-bs-content", "");
      // Destroy popover
      $phone.popover("dispose");
    } else {
      // Set flag to false
      flgPhoneOk = false;
    }
  });

  $email.on("input", function (e) {
    // Locales
    let email = $(this).val();
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validate email
    if (regex.test(email)) {
      // Hide popover
      $email.popover("hide");
      $email.attr("data-bs-content", "");
      // Set flag to true
      flgEmailOk = true;
    } else {
      $email.focus();
      // Show popover
      jarvis.showPopMsg(
        $email,
        "El correo electrónico no es válido: dir@mail.com"
      );
      // Focus on email
      $email.focus();
      // Set flag to false
      flgEmailOk = false;
    }
  });

  $email.on("focus", function (e) {
    // Validate email flag
    if (flgEmailOk) {
      // Hide popover
      $email.popover("hide");
      $email.attr("data-bs-content", "");
      // Destroy popover
      $email.popover("dispose");
    } else {
      // Set flag to false
      flgEmailOk = false;
    }
  });

  $business.on("input", function (e) {
    // Locales
    let business = $(this).val();

    // Validate business
    if (business != "") {
      // Hide popover
      $business.popover("hide");
      $business.attr("data-bs-content", "");
    }
  });

  $business.on("click", function (e) {
    // Locales
    let business = $(this).val();

    // Validate business
    if (business != "") {
      // Hide popover
      $business.popover("hide");
      $business.attr("data-bs-content", "");
      // Destroy popover
      $business.popover("dispose");
    }
  });

  $saveBtn.on("click", function (e) {
    // Prevent default
    e.preventDefault();

    // Validate companyName
    if ($companyName.val() == "") {
      // Show popover
      jarvis.showPopMsg($companyName, "El nombre de la empresa es obligatorio");
      // Focus on companyName
      $companyName.focus();
      return;
    } else if ($rfc.val() == "") {
      // Show popover
      jarvis.showPopMsg($rfc, "El RFC es obligatorio");
      // Focus on rfc
      $rfc.focus();
      return;
    } else if ($address.val() == "") {
      // Show popover
      jarvis.showPopMsg($address, "Este campo es obligatorio");
      // Focus on address
      $address.focus();
      return;
    } else if ($city.val() == "") {
      // Show popover
      jarvis.showPopMsg($city, "La ciudad es obligatoria");
      // Focus on city
      $city.focus();
      return;
    } else if ($state.val() == "") {
      // Show popover
      jarvis.showPopMsg($state, "Este campo es obligatorio");
      // Focus on state
      $state.focus();
      return;
    } else if ($zip.val() == "") {
      // Show popover
      jarvis.showPopMsg(
        $zip,
        "El código postal debe contener 5 dígitos: 12345"
      );
      // Focus on zip
      $zip.focus();
      return;
    } else if ($phone.val() == "") {
      // Show popover
      jarvis.showPopMsg($phone, "Este campo es obligatorio");
      // Focus on phone
      $phone.focus();
      return;
    } else if ($email.val() == "") {
      // Show popover
      jarvis.showPopMsg($email, "Este campo es obligatorio");
      // Focus on email
      $email.focus();
      return;
    } else if ($business.val() == "") {
      // Show popover
      jarvis.showPopMsg($business, "Este campo es obligatorio");
      // Focus on business
      $business.focus();
      return;
    }

    // Validate flags
    if (flgPhoneOk && flgEmailOk && flgCpOk) {
      // Create company
      const company = CreateCompany();

      // Add company
      jarvis.AddNewCompany(
        company,
        $errorRegModal,
        $titleModal,
        "Error",
        $txtModal,
        "Error al agregar la empresa"
      );

      // Add company
      //alert("Empresa agregada correctamente");
    }
  });

  $cleanBtn.on("click", LimpiarCampos);
});
