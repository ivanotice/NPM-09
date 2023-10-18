// Función para verificar la conexión a internet y redireccionar si no hay
    function checkInternetConnection() {
      var statusDiv = document.getElementById("status");
      var countdownDiv = document.getElementById("countdown");
      var countdown = 30; // Duración de la cuenta regresiva en segundos
      var countdownInterval;

      function redirect() {
        clearInterval(countdownInterval);
        window.location.href = "inicio.html"; // Cambia "inicio.html" por la página a la que deseas redireccionar al usuario
      }

      function startCountdown() {
        countdownDiv.style.display = "block";
        countdownDiv.innerText = "" + countdown + " s";
        countdown--;

        if (countdown < 0) {
          redirect();
        }
      }

      if (navigator.onLine) {
        statusDiv.innerHTML = '<i class="fas fa-wifi wifi-icon"></i> Connected.';
      } else {
        statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle alert-icon"></i> Offline. CD:09';
        countdownDiv.style.display = "block";
        countdownInterval = setInterval(startCountdown, 1000);
      }

      window.addEventListener("online", function () {
        statusDiv.innerHTML = '<i class="fas fa-wifi wifi-icon"></i> Connected.';
        countdownDiv.style.display = "none";
        clearInterval(countdownInterval);
      });

      window.addEventListener("offline", function () {
        statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle alert-icon"></i> Offline.';
        countdownDiv.style.display = "block";
        countdownInterval = setInterval(startCountdown, 1000);
      });
    }

    // Llamar a la función inicialmente
    checkInternetConnection();

    // Verificar la conexión cuando se recupera la conexión
    window.addEventListener("online", checkInternetConnection);
