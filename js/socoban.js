(function() {
  "use strict"

  $(() => {
      $.ajax({
        url: "https://sokoban.doonoo.fr/",
        method: "get",
        datatype: "json",
        success: function (data){
          for (let key in data){
            if(data.hasOwnProperty(key)) {
              let content = data[key];

            }
          }
        },
        error: function () { }
      });
  })

}) ();
