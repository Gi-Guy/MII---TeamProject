    
    const seatingRadios = document.getElementsByName("seating");
    const tableOptionsOutside = document.getElementById("tables-outside");
    const tableOptionsInside = document.getElementById("tables-inside");
    const tableOptionsBar = document.getElementById("tables-bar");

    function updateTableOptions() {
      const selectedSeating = (document.querySelector('input[name="seating"]:checked') as HTMLInputElement).value;
      tableOptionsOutside.classList.remove("active");
      tableOptionsInside.classList.remove("active");
      tableOptionsBar.classList.remove("active");

      if (selectedSeating === "outside") {
        tableOptionsOutside.classList.add("active");
      } else if (selectedSeating === "inside") {
        tableOptionsInside.classList.add("active");
      } else if (selectedSeating === "bar") {
        tableOptionsBar.classList.add("active");
      }
    }

    seatingRadios.forEach((radio) => {
      radio.addEventListener("change", updateTableOptions);
    });

    
    updateTableOptions();

    
    const reservationForm = document.getElementById("reservationForm");
    reservationForm.addEventListener("submit", (e) => {
      e.preventDefault(); 

      
      const date = (document.getElementById("reservation-date") as HTMLInputElement).value;
      const time = (document.getElementById("reservation-time") as HTMLInputElement).value;
      const guests = (document.getElementById("guests") as HTMLInputElement).value;
      const seating = (document.querySelector('input[name="seating"]:checked') as HTMLInputElement).value;
      const table = (document.querySelector('input[name="table"]:checked') as HTMLInputElement).value;

      
      const reservationData = {
        date,
        time,
        guests,
        seating,
        table,
      };

      
      localStorage.setItem("reservationData", JSON.stringify(reservationData));

      
      window.location.href = "MainPage.html";
    });