$(function(){
  
   $('select').styler();
   $(function () {
     $('[data-toggle="tooltip"]').tooltip();
   });
   $('.navbar__menu-item').on('click', function () {
      $(this).closest('.navbar__menu-list').toggleClass('active');
    });
   
});

//topstory
$(document).ready(function(){
   $(".topstory__article").mouseover(function(){
      idTopstoryCurrent=$(".topstory__content").data("topstory_current"),
      idTopstory=$(this).data("topstory"),
      $(".topstory__article").removeClass("on"),
      $(this).addClass("on"),
      $("#topstory_content_"+idTopstoryCurrent).removeClass("on"),
      $("#topstory_image_"+idTopstoryCurrent).removeClass("on"),
      $("#topstory_content_"+idTopstory).addClass("on"),
      $("#topstory_image_"+idTopstory).addClass("on"),
      $(".topstory__content").data("topstory_current",idTopstory) })});
      //sidebar
      (document,window),$(document).ready(function(){var t=$(".aside_menu-overlay"),n=$("#aside_menu"),i=n.data("open");$(".menu_aside-toggle").on("click",function(e){e.preventDefault(),i=i?(n.removeClass("open"),t.removeClass("active"),!1):(n.addClass("open"),t.addClass("active"),!0)}),$(t).on("click",function(e){e.preventDefault(),i=i?(n.removeClass("open"),t.removeClass("active"),!1):(n.addClass("open"),t.addClass("active"),!0)}),$(".aside_menu-btn_close a").on("click",function(e){e.preventDefault(),i=i?(n.removeClass("open"),t.removeClass("active"),!1):(n.addClass("open"),t.addClass("active"),!0)})}),$(document).ready(function(){var t,e,n=$(".sidebar-overlay"),i=$("#sidebar"),o=i.data("open");$(".sidebar-toggle").on("click",function(e){e.preventDefault(),o=o?(i.removeClass("open"),n.removeClass("active"),$("#button_menu").removeClass("open"),!1):(i.addClass("open"),n.addClass("active"),$("#button_menu").addClass("open"),!0)}),$(n).on("click",function(e){e.preventDefault(),o=o?(i.removeClass("open"),n.removeClass("active"),$("#button_menu").removeClass("open"),!1):(i.addClass("open"),n.addClass("active"),$("#button_menu").addClass("open"),!0)}),$(".sidebar-btn_close a").on("click",function(e){e.preventDefault(),o=o?(i.removeClass("open"),n.removeClass("active"),$("#button_menu").removeClass("open"),!1):(i.addClass("open"),n.addClass("active"),$("#button_menu").addClass("open"),!0)}),t=jQuery,(e=t(".dropdown")).on("show.bs.dropdown",function(e){t(this).find(".dropdown-menu").first().stop(!0,!0).slideDown()}),e.on("hide.bs.dropdown",function(e){t(this).find(".dropdown-menu").first().stop(!0,!0).slideUp()})});



   