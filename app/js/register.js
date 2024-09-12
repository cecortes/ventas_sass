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
  const $email = $("#email");
  const $direccion = $("#address");
  const $noExt = $("#no_ext");
  const $noInt = $("#no_int");
  const $colonia = $("#colonia");
  const $cp = $("#cp");
  const $estado = $("#estado");
  const $municipio = $("#municipio");
  const $btnReg = $("#regBtn");

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
    }
  });
});
