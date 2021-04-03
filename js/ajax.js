(function() {
  "use strict";

 import showMessage from "./login_logout.js";

  $(() => {
    $.ajax({
      url: URL_IS_CONNECTED,
      method: "get",
      dataType: "json"
    })
      .done(function (data) {
        if (data.hasOwnProperty("result")) {
          if (data.result) {
            let $login_logout = $("#login-logout");
            $login_logout.empty();
            if (data.hasOwnProperty("is_connected")) {
              if (data.is_connected) {
                /* connected -> logout form */
                $login_logout.append(
                  $("<button />")
                    .append("logout")
                    .click(function () {
                      $.ajax({
                        url: URL_LOGOUT,
                        method: "get",
                        dataType: "json"
                      })
                        .done(() => window.location.reload(true))
                        .error(function () {

                        })
                    })
                );
              } else {
                /* not connected -> login form */
                $login_logout.append(
                  $("<form />")
                    .attr("action", URL_LOGIN)
                    .attr("method", "post")
                    .append(
                      $("<input />")
                        .attr("type", "text")
                        .attr("name", "username"),
                      $("<input />")
                        .attr("type", "password")
                        .attr("name", "password"),
                      $("<button />")
                        .append("Login")
                        .attr("type", "submit")
                    )
                    .submit(function () {
                      let $data = $(this).serialize();
                      let $self = $(this);
                      $self.hide();
                      $("#message").hide();
                      $.ajax({
                        url: URL_LOGIN,
                        method: $(this).attr("method"),
                        data: $data,
                        dataType: "json"
                      })
                        .done(function (data) {
                          /* check result */
                          if (data.hasOwnProperty("result")) {
                            if (data.result) {
                              window.location.reload(true);
                            } else {
                              showMessage(data.message);
                              $self.show();
                            }
                          }
                          /* check message */
                          /* if result == true -> reload */
                          /* fill div#message */
                        })
                      return false;
                    })
                );
              }
            }
            $login_logout.fadeIn(2000);
          } else {
            /* displayErrorMessage(data); */
          }
        } else {

        }
      })
      .fail(function () {

      });
  });
}) ();
