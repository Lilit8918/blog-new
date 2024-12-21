let isLoggedIn = false; 

const createContainer = () => {
  const container = document.createElement("div");
  container.setAttribute("class", "container-root");
  return container;
};

function createLoginLayout() {
  const container = createContainer();

  const header = document.createElement("header");
  header.setAttribute("class", "header");

  const homeLink = document.createElement("a");
  homeLink.setAttribute("href", "home.html");
  homeLink.innerText = "Home";

  const registrationLink = document.createElement("a");
  registrationLink.setAttribute("href", "registration.html");
  registrationLink.innerText = "Register"; 

  const formWrapper = document.createElement("div");
  formWrapper.setAttribute("class", "form-wrapper");

  const loginContainer = document.createElement("div");
  loginContainer.setAttribute("class", "login-container");

  const form = document.createElement("form");

  const inputUsername = document.createElement("input");
  inputUsername.setAttribute("type", "text");
  inputUsername.setAttribute("placeholder", "Username");

  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("placeholder", "Password");

  const buttonLogin = document.createElement("button");
  buttonLogin.setAttribute("type", "submit");
  buttonLogin.innerText = "Login";

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    isLoggedIn = true; 
    window.location.href = "home.html"; 
  });

  header.appendChild(homeLink);
  header.appendChild(registrationLink); 

  form.appendChild(inputUsername);
  form.appendChild(inputPassword);
  form.appendChild(buttonLogin);

  loginContainer.appendChild(form);
  formWrapper.appendChild(loginContainer);

  container.appendChild(header);
  container.appendChild(formWrapper);

  document.body.appendChild(container);
}

createLoginLayout();
