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
