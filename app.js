$(document).ready(function () {
  $("#topBtn").hide();　//ボタンを非表示にする
  $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) { //ページの上から100pxスクロールした時
          $("#topBtn").fadeIn("fast"); //ボタンがフェードインする
      } else {
          $("#topBtn").fadeOut("fast");　//ボタンがフェードアウトする
      }})});