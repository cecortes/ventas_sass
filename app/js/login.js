"use strict";

// Import jarvis core
import * as jarvis from "./jarvis.js";

// Ready function
$(function () {
  /* --> DOM Elements <-- */
  const $inputUsername = $("#usernameInput");
  const $inputPassword = $("#pwdInput");
  const $btnLogin = $("#loginBtn");
  const $radioRemember = $("#rememberRadio");
  const $spnRecover = $("#recoverSpan");
  const $spnRegister = $("#registerSpan");
  const $errorLoginModal = $("#loginErrorModal");
  const $titleModal = $("#modal-title");
  const $txtModal = $("#modal-text");

  /* --> Events <-- */
  $spnRecover.on("click", function () {
    window.location.href = "#";
  });

  $spnRegister.on("click", function () {
    window.location.href = "./html/registerUser.html";
  });

  $btnLogin.on("click", function (e) {
    // Prevent Default
    e.preventDefault();

    const username = $inputUsername.val();
    const password = $inputPassword.val();
    const remember = $radioRemember.is(":checked");

    // Validate fields
    if (username === "" || password === "") {
      jarvis.showModalError(
        $errorLoginModal,
        $titleModal,
        "Error",
        $txtModal,
        "Por favor, ingresar usuario y contraseña"
      );
      return;
    }

    const user = {
      username: username,
      password: password,
    };

    // Login User
    jarvis.LoginUser(
      user,
      $errorLoginModal,
      $titleModal,
      "Credenciales Incorrectas",
      $txtModal,
      ""
    );
  });
});
