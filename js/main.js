$(document).ready(function () {
  let currentFloor = 2;
  let floorPath = $(".home-image path");
  let counterUp = $(".counter-up");
  let counterDown = $(".counter-down");

  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");

    currentFloor = $(this).attr("data-floor");

    $(".counter").text(currentFloor);
    $(`[data-floor = ${currentFloor}]`).toggleClass("current-floor");
  });

//   floorPath.on("click", function () {
//     floorPath.removeClass("current-floor");

//     currentFloor = $(this).attr("data-floor");

//     $(".counter").text(currentFloor);
//     $(`[data-floor = ${currentFloor}]`).toggleClass("current-floor");
//   });

  counterUp.on("click", function () {
    let usCurrentFloor;

    if (currentFloor < 18) {
      currentFloor++;

      usCurrentFloor = currentFloor.toLocaleString("en-Us", {
        minimumIntegerDigits: 2,
        useGroupping: false,
      });

      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on("click", function () {
    let usCurrentFloor;

    if (currentFloor > 2) {
      currentFloor--;

      usCurrentFloor = currentFloor.toLocaleString("en-Us", {
        minimumIntegerDigits: 2,
        useGroupping: false,
      });

      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});
