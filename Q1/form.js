function doLogin() {
  var user = {
    name: document.getElementById("username").value,
    password: document.getElementById("password").value
  };

  var promiseSuccess = document.getElementById("promise-success");
  var promiseFail = document.getElementById("promise-fail");

  let promise = new Promise(function(resolve, reject) {
    if (user.name == "Ajyal" && user.password == "Ajyal") {
      resolve("Login Successful");
    } else {
      reject("Failed To Login");
    }
  });

  var resolveHandler = message => {
    promiseSuccess.innerHTML =
      "<span style='color: green;'>" + message + "</span>";
    setTimeout(function() {
      promiseSuccess.style.display = "none";
    }, 3000);
  };

  var rejectHandler = message => {
    promiseFail.innerHTML = "<span style='color: red;'>" + message + "</span>";
    setTimeout(function() {
      promiseFail.style.display = "none";
    }, 3000);
  };

  promise.then(resolveHandler, rejectHandler);

  return promise;
}
