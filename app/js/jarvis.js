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
  $modalMessage,
  $modalId2
) {
  // Check if the user is already logged in
  if (CheckLoginUser()) {
    // logout the user
    LogoutUser();
  }
  $modalId2.modal("hide");

  Parse.User.logIn(usuario.username, usuario.password)
    .then(function (user) {
      // Do stuff after successful login
      //console.log("Logged in user:", user);
      // Redirect to dashboard
      window.location.href = "./html/dashboard.html";
    })
    .catch(function (error) {
      // The login failed. Check error to see why.
      //console.error("Error: ", error.message);
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

/* --> GetUser <-- */
/* @params: Nothing
 * @return: The user object
 * @description: Get the user from the current session
 */
export function GetUser() {
  // Get the user from the current session
  const currentUser = Parse.User.current();

  // Check if the user is logged in
  if (currentUser) {
    // User is logged in
    //console.log("User is logged in");
    return currentUser;
  } else {
    // User is not logged in
    //console.log("User is not logged in");
    return null;
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

      showModal(
        $modalId,
        $modalTitle,
        $tituloModal,
        $modalText,
        error.message,
        "error"
      );
    });
}

/* --> AddNewCompany <-- */
/* @params: empresa as object,
 *        : modalId as element,
 *        : modalTitle as element,
 *        : modalText as element,
 *        : modalMessage as element,
 * @return: True if the company was added or false if not.
 * @description: Add a new company using back4app
 *           if error show Modal
 */
export function AddNewCompany(
  empresa,
  $modalId,
  $modalTitle,
  $tituloModal,
  $modalText,
  $modalMessage,
  $addCompanyModal
) {
  // Extend of Parse.User
  const Company = Parse.Object.extend("companies");

  // Create a new instance of User
  const newCompany = new Company();
  newCompany.set("userId", empresa.userId);
  newCompany.set("companyName", empresa.companyName);
  newCompany.set("companyRfc", empresa.rfc);
  newCompany.set("companyAddr", empresa.address);
  newCompany.set("companyCity", empresa.city);
  newCompany.set("companyState", empresa.state);
  newCompany.set("companyZip", empresa.zip);
  newCompany.set("companyCel", empresa.phone);
  newCompany.set("companyMail", empresa.email);
  newCompany.set("companyActivity", empresa.business);
  newCompany.set("companyUrl", empresa.website);

  // Save the new company
  newCompany
    .save()
    .then(function (company) {
      /* --> Debug <-- */
      //console.log("New object created with ID: ", company.id);

      // Hide modal
      $addCompanyModal.modal("hide");

      // Show success modal
      showModal(
        $modalId,
        $modalTitle,
        $tituloModal,
        $modalText,
        "!! Empresa agregada exitosamente !!",
        "success"
      );

      // Clear fields
      $("#companyName").val("");
      $("#rfc").val("");
      $("#address").val("");
      $("#city").val("");
      $("#state").val("");
      $("#zipCode").val("");
      $("#celnumber").val("");
      $("#email").val("");
      $("#business").val("");
      $("#webPage").val("");
      $("#logoFile").val("");
      $("#logoImg").attr("src", "../assets/logoDemo.jpg");
    })
    .catch(function (error) {
      /* --> Debug <-- */
      //console.error("Error: ", error.message);

      //$addCompanyModal.modal("hide");

      showModal(
        $modalId,
        $modalTitle,
        $tituloModal,
        $modalText,
        error.message,
        "error"
      );
    });
}

/* --> ShowModal <-- */
/* @params: $modalId as element,
 *         : $modalTitle as element,
 *         : $modalText as element,
 *         : $modalMessage as element,
 *         : $type as string, if error, success or warning
 * @return: void
 * @description: Function to show a modal with the selected type
 */
export function showModal(
  $modalId,
  $modalTitle,
  $tituloModal,
  $modalText,
  $modalMessage,
  $type
) {
  $modalTitle.text($tituloModal);
  $modalText.text($modalMessage);
  if ($type === "error") {
    $modalId.removeClass("glass_success");
    $modalId.removeClass("glass_warning");
    $modalId.addClass("glass_error");
  } else if ($type === "success") {
    $modalId.removeClass("glass_error");
    $modalId.removeClass("glass_warning");
    $modalId.addClass("glass_success");
  } else if ($type === "warning") {
    $modalId.removeClass("glass_error");
    $modalId.removeClass("glass_success");
    $modalId.addClass("glass_warning");
  }
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
