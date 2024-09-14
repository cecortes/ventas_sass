"use strict";

import * as jarvis from "./jarvis.js";

// Ready function
$(function () {
  /* --> DOM Elements <-- */
  const $nombre = $("#username");
  const $apellidos = $("#lastname");
  const $contraseña = $("#pass");
  const $confirmarContraseña = $("#re-pass");
  const $areaCode = $("#areacode");
  const $tel = $("#celnumber");
  const $mail = $("#mail");
  const $remail = $("#remail");
  const $direccion = $("#address");
  const $noExt = $("#no_ext");
  const $noInt = $("#no_int");
  const $colonia = $("#colonia");
  const $cp = $("#cp");
  const $estado = $("#estado");
  const $municipio = $("#municipio");
  const $btnReg = $("#regBtn");
  var flgPhoneOk = false;
  var flgCpOk = false;
  var flgMailOk = false;

  /* --> Events <-- */
  $nombre.on("input", function (e) {
    // Locales
    let name = $(this).val();

    // Validate Name
    if (name != "") {
      // Hide popover
      $nombre.popover("hide");
      $nombre.attr("data-bs-content", "");
    }
  });

  $nombre.on("click", function (e) {
    // Locals
    let name = $(this).val();

    if (name != "") {
      $nombre.popover("hide");
      $nombre.attr("data-bs-content", "");
      // Destroy popover
      $nombre.popover("dispose");
    }
  });

  $apellidos.on("input", function (e) {
    // Locales
    let lastname = $(this).val();

    // Validate Lastname
    if (lastname != "") {
      // Hide popover
      $apellidos.popover("hide");
      $apellidos.attr("data-bs-content", "");
    }
  });

  $apellidos.on("click", function (e) {
    // Locals
    let lastname = $(this).val();

    if (lastname != "") {
      $apellidos.popover("hide");
      $apellidos.attr("data-bs-content", "");
      // Destroy popover
      $apellidos.popover("dispose");
    }
  });

  $contraseña.on("input", function (e) {
    // Locales
    let pass = $(this).val();

    // Validate Password
    if (pass != "") {
      // Hide popover
      $contraseña.popover("hide");
      $contraseña.attr("data-bs-content", "");
    }
  });

  $contraseña.on("click", function (e) {
    // Locals
    let pass = $(this).val();

    if (pass != "") {
      $contraseña.popover("hide");
      $contraseña.attr("data-bs-content", "");
      // Destroy popover
      $contraseña.popover("dispose");
    }
  });

  $confirmarContraseña.on("input", function (e) {
    // Locales
    let pass = $(this).val();

    // Validate Password
    if (pass === $contraseña.val()) {
      // Hide popover
      $confirmarContraseña.popover("hide");
      $confirmarContraseña.attr("data-bs-content", "");
    }
  });

  $confirmarContraseña.on("click", function (e) {
    // Locals
    let pass = $(this).val();

    if (pass === $contraseña.val()) {
      $confirmarContraseña.popover("hide");
      $confirmarContraseña.attr("data-bs-content", "");
      // Destroy popover
      $confirmarContraseña.popover("dispose");
    }
  });

  $tel.on("input", function (e) {
    // Validate only 10 digits numbers
    let phone = $(this).val();
    let regex = /^\d{10}$/;

    // Validate Phone
    if (regex.test(phone)) {
      // Hide popover
      $tel.popover("hide");
      // Set flag on true
      flgPhoneOk = true;
    } else {
      $tel.focus();
      // Show popover
      jarvis.showPopMsg(
        $tel,
        "Este campo debe contener sólo 10 dígitos: 1234567890"
      );
      // Focus on txtPhone
      $tel.focus();
    }
  });

  $tel.on("focus", function (e) {
    // Validate Phone flag
    if (flgPhoneOk) {
      // Hide popover
      $tel.popover("hide");
      $tel.attr("data-bs-content", "");
      // Destroy popover
      $tel.popover("dispose");
    }
  });

  $direccion.on("input", function (e) {
    // Locales
    let address = $(this).val();

    // Validate Address
    if (address != "") {
      // Hide popover
      $direccion.popover("hide");
      $direccion.attr("data-bs-content", "");
    }
  });

  $direccion.on("click", function (e) {
    // Locales
    let address = $(this).val();

    if (address != "") {
      $direccion.popover("hide");
      $direccion.attr("data-bs-content", "");
      // Destroy popover
      $direccion.popover("dispose");
    }
  });

  $colonia.on("input", function (e) {
    // Locales
    let colony = $(this).val();

    // Validate Colony
    if (colony != "") {
      // Hide popover
      $colonia.popover("hide");
      $colonia.attr("data-bs-content", "");
    }
  });

  $colonia.on("click", function (e) {
    // Locales
    let colony = $(this).val();

    if (colony != "") {
      $colonia.popover("hide");
      $colonia.attr("data-bs-content", "");
      // Destroy popover
      $colonia.popover("dispose");
    }
  });

  $cp.on("input", function (e) {
    // Validate only 5 digits numbers
    let cp = $(this).val();
    let regex = /^\d{5}$/;

    // Validate CP
    if (regex.test(cp)) {
      // Hide popover
      $cp.popover("hide");
      // Set flag on true
      flgCpOk = true;
    } else {
      // Show popover
      jarvis.showPopMsg($cp, "Este campo debe contener sólo 5 dígitos: 12345");
      // Focus on txtCP
      $cp.focus();
    }
  });

  $cp.on("focus", function (e) {
    // Validate CP flag
    if (flgCpOk) {
      // Hide popover
      $cp.popover("hide");
      $cp.attr("data-bs-content", "");
      // Destroy popover
      $cp.popover("dispose");
    }
  });

  $mail.on("input", function (e) {
    // Locales
    let email = $(this).val();
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validate Email
    if (regex.test(email)) {
      // Hide popover
      $mail.popover("hide");
      // Set flag on true
      flgMailOk = true;
    } else {
      // Show popover
      jarvis.showPopMsg(
        $mail,
        "Este campo debe contener un correo válido: dir@mail.com"
      );
      // Focus on txtMail
      $mail.focus();
    }
  });

  $mail.on("focus", function (e) {
    // Validate Email flag
    if (flgMailOk) {
      // Hide popover
      $mail.popover("hide");
      $mail.attr("data-bs-content", "");
      // Destroy popover
      $mail.popover("dispose");
    }
  });

  $remail.on("input", function (e) {
    // Locales
    let email = $(this).val();

    // Validate Email
    if (email === $mail.val()) {
      // Hide popover
      $remail.popover("hide");
      $remail.attr("data-bs-content", "");
      // Destroy popover
      $remail.popover("dispose");
    }
  });

  $remail.on("click", function (e) {
    // Locales
    let email = $(this).val();

    if (email === $mail.val()) {
      $remail.popover("hide");
      $remail.attr("data-bs-content", "");
      // Destroy popover
      $remail.popover("dispose");
    }
  });

  $btnReg.on("click", function (e) {
    // Prevent default
    e.preventDefault();

    // Validate txt not null
    if ($nombre.val() == "") {
      // Show popover
      jarvis.showPopMsg($nombre, "Este campo es obligatorio");
      return;
    } else if ($apellidos.val() == "") {
      // Show popover
      jarvis.showPopMsg($apellidos, "Este campo es obligatorio");
      return;
    } else if ($contraseña.val() == "") {
      // Show popover
      jarvis.showPopMsg($contraseña, "Este campo es obligatorio");
      return;
    } else if ($confirmarContraseña.val() !== $contraseña.val()) {
      // Show popover
      jarvis.showPopMsg(
        $confirmarContraseña,
        "Las contraseñas no coinciden, favor de verificar"
      );
      return;
    } else if ($tel.val() == "") {
      // Show popover
      jarvis.showPopMsg($tel, "Este campo es obligatorio");
      return;
    } else if ($direccion.val() == "") {
      // Show popover
      jarvis.showPopMsg($direccion, "Este campo es obligatorio");
      return;
    } else if ($colonia.val() == "") {
      // Show popover
      jarvis.showPopMsg($colonia, "Este campo es obligatorio");
      return;
    } else if ($cp.val() == "") {
      // Show popover
      jarvis.showPopMsg($cp, "Este campo es obligatorio");
      return;
    } else if ($mail.val() == "") {
      // Show popover
      jarvis.showPopMsg($mail, "Este campo es obligatorio");
      return;
    } else if ($remail.val() !== $mail.val()) {
      // Show popover
      jarvis.showPopMsg(
        $remail,
        "Los correos no coinciden, favor de verificar"
      );
      return;
    }
  });
});
