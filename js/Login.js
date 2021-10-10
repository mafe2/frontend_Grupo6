function usrpas(){
    if (document.login.username.value=="admin" && document.login.password.value=="1234")
   { alert("Bienvenido.");
   window.location="Home_Administrador.html"
    }
    else {alert("Error en Usuario o Contraseña. Intenta de nuevo.")}
    }
  document.oncontextmenu=new Function("return false");