export class Reservations{
    //This is the model class for Reservations
}

    
    // Toggle table options based on seating selection
    const seatingRadios = document.getElementsByName("seating");
    const tableOptionsOutside = document.getElementById("tables-outside");
    const tableOptionsInside = document.getElementById("tables-inside");
    const tableOptionsBar = document.getElementById("tables-bar");

    function updateTableOptions() {
      const selectedSeating = (document.querySelector(
        'input[name="seating"]:checked'
      ) as HTMLInputElement).value;
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

    // Initialize the table options on page load
    updateTableOptions();