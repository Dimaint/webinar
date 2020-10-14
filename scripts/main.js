$(function () {
  cardsResult = $(".cards_result");
  let maxCards = 12;
  $.each(cardsResult, function (key, value) {
    $(this).find(".cards_result-item").slice(maxCards).addClass("hide");
  });
});

$("#showmore-results").click(function () {
  cardsResult.find(":hidden").removeClass("hide");
});

$(function () {
  cardsPhoto = $(".cards_trust_photo");
  let maxCards = 12;
  $.each(cardsPhoto, function (key, value) {
    $(this).find(".cards_trust_photo-item").slice(maxCards).addClass("hide");
  });
});

$("#showmore-photo").click(function () {
  cardsPhoto.find(":hidden").removeClass("hide");
});

$(function () {
  $(".toggle-menu").click(function () {
    $(".nav").slideToggle()
  });
});
