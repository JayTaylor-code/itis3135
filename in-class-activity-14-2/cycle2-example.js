let $slideshow = $(".cycle-slideshow");

$slideshow.click(function() {
   if ($slideshow.is(".cycle-paused"))
      $slideshow.cycle("resume");                
   else
      $slideshow.cycle("pause");
});

$("#previous-btn").click(function() {
   $slideshow.cycle("stop");
   $slideshow.cycle("prev");
});

$("#next-btn").click(function() {
   $slideshow.cycle("stop");
   $slideshow.cycle("next");
});
