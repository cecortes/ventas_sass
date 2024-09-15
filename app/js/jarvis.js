/* --> Back4App <-- */
let parse_app_id = "zI19n4kqhTUi9vSeY8MYxSdMxIywBGjpDwTinItt";
let parse_js_key = "NosJveMsr4i0ES8zUwY8whPQ8RTnvGpNhhNnOM19";
let parse_server_url = "https://parseapi.back4app.com/";

/* --> Parse Instance <-- */
Parse.initialize(parse_app_id, parse_js_key);
Parse.serverURL = parse_server_url;

/* --> LoginUser <-- */
/* @params: usuario as object,
 *        : modalId as element,
 *        : modalTitle as element,
 *        : modalText as element,
 *        : modalMessage as element,
 *        : modalStyle as element,
 * @return: Nothing
 * @description: Login User using back4app
 *           if error clear fields and show Modal
 */
export function LoginUser(
  usuario,
  $modalId,
  $modalTitle,
  $tituloModal,
  $modalText,
  $modalMessage
) {
  Parse.User.logIn(usuario.username, usuario.password)
    .then(function (user) {
      // Do stuff after successful login
      console.log("Logged in user:", user);
    })
    .catch(function (error) {
      // The login failed. Check error to see why.
      console.error("Error: ", error.message);

      showModalError(
        $modalId,
        $modalTitle,
        $tituloModal,
        $modalText,
        error.message
      );

      // Clear fields
      $("#usernameInput").val("");
      $("#pwdInput").val("");
      $("#rememberRadio").prop("checked", false);
    });
}

/* --> LogoutUser <-- */
/* @params: Nothing
 * @return: Nothing
 * @description: Logout the user
 */
export function LogoutUser() {
  Parse.User.logOut();
}

/* --> CheckLoginUser <-- */
/* @params: Nothing
 * @return: true if the user is already logged in or false if not
 * @description: Check if the user is already logged in
 */
export function CheckLoginUser() {
  // Get the user from the current session
  const currentUser = Parse.User.current();

  // Check if the user is logged in
  if (currentUser) {
    // User is logged in
    //console.log("User is logged in");
    return true;
  } else {
    // User is not logged in
    //console.log("User is not logged in");
    return false;
  }
}

/* --> AddNewUser <-- */
/* @params: usuario as object,
 *        : modalId as element,
 *        : modalTitle as element,
 *        : modalText as element,
 *        : modalMessage as element,
 * @return: Nothing
 * @description: Add a new user using back4app
 *           if error show Modal
 */
export function AddNewUser(
  usuario,
  $modalId,
  $modalTitle,
  $tituloModal,
  $modalText,
  $modalMessage
) {
  // Extend of Parse.User
  const User = Parse.Object.extend("User");

  // Create a new instance of User
  const newUser = new User();
  newUser.set("noext", usuario.noExt);
  newUser.set("estado", usuario.state);
  newUser.set("nombre", usuario.username);
  newUser.set("cp", usuario.cp);
  newUser.set("municipio", usuario.muni);
  newUser.set("noint", usuario.noInt);
  newUser.set("direccion", usuario.address);
  newUser.set("telefono", usuario.phone);
  newUser.set("apellidos", usuario.lastname);
  newUser.set("username", usuario.email);
  newUser.set("colonia", usuario.col);
  newUser.set("password", usuario.password);
  newUser.set("email", usuario.email);

  // Save the new user
  newUser
    .save()
    .then(function (user) {
      /* --> Debug <-- */
      //console.log("New object created with ID: ", user.id);

      // Re direct to dashboard
      window.location.href = "../html/dashboard.html";
    })
    .catch(function (error) {
      /* --> Debug <-- */
      //console.error("Error: ", error.message);

      showModalError(
        $modalId,
        $modalTitle,
        $tituloModal,
        $modalText,
        error.message
      );
    });
}

/* --> ShowModalError <-- */
/* @params: $modalId as element,
 *         : $modalTitle as element,
 *         : $modalText as element,
 *         : $modalMessage as element,
 *         : $modalStyle as element,
 * @return: void
 * @description: Function to show a modal error
 */
export function showModalError(
  $modalId,
  $modalTitle,
  $tituloModal,
  $modalText,
  $modalMessage
) {
  $modalTitle.text($tituloModal);
  $modalText.text($modalMessage);
  //$modalStyle.removeClass("bg-gradient-success");
  //$modalStyle.addClass("glassmorph");
  $modalId.modal("show");
}

/* --> ShowPopMsg <-- */
/* @params: $popMsg as element,
 *         : $msg as string,
 * @return: void
 * @description: Show a popover message over the element
 *               if has the class popover,
 *               Focus on the element
 */
export function showPopMsg($popMsg, $msg) {
  $popMsg.attr("data-bs-content", $msg);
  $popMsg.popover("show");
  $popMsg.focus();
}
