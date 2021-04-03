const URL_IS_CONNECTED = "http://127.0.0.1:8000/php/is_connected.php";
const URL_LOGIN = "http://127.0.0.1:8000/php/login.php";
const URL_LOGOUT = "http://127.0.0.1:8000/php/logout.php";

let showMessage = (message) => {
  $("#message").html(message).fadeIn();
};

export{showMessage}
