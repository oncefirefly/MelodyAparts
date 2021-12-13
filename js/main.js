$(document).ready(function () {
  let currentFloor = 2;
  let floorPath = $(".home-image path");
  let counterUp = $(".counter-up");
  let counterDown = $(".counter-down");
  let modal = $(".modal");
  let modalCloseButton = $(".modal-close-button");
  let viewFlatsButton = $(".view-flats");
  let flatPath = $(".flats path");
  let flatLink = $(".flat-link");

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

  viewFlatsButton.on("click", toggleModal);

  floorPath.on("click", toggleModal);

  modalCloseButton.on("click", toggleModal);

  flatPath.on("mouseover", function () {
    let currentFlat = $(this).attr("data-flat") - 1;

    $(`.flat-link:eq(${currentFlat})`).toggleClass("current-flat-link");
  });

  flatPath.on("mouseout", function () {
    $(".flat-link").removeClass("current-flat-link");
  });

  flatLink.on("mouseover", function () {
    let currentFlat = +$(this).attr("data-flat-link");
    // console.log(currentFlat);

    let usCurrentFlat = currentFlat.toLocaleString("en-Us", {
      minimumIntegerDigits: 2,
      useGroupping: false,
    });

    $(`[data-flat = ${usCurrentFlat}]`).addClass("current-flat-path");
  });

  flatLink.on("mouseout", function () {
    $(".flats path").removeClass("current-flat-path");
  })

  function toggleModal() {
    modal.toggleClass("is-open");
  }
});
