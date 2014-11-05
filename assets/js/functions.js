$( document ).ready(function() {

  $('.spinner-wrap').click(function() {
    
    var $this = $(this),
        audio = $this.siblings('audio')[0],
        bpm = Number($this.siblings('audio').data('bpm'))
        pulse = (60/bpm)*500;
    
    $this.toggleClass('playing');

    if($this.hasClass('playing')) {
      audio.play();
      pulsing();
      intervals = setInterval(function() { pulsing() }, pulse);
    }

    else {
      audio.pause();
      audio.currentTime = 0;
      clearInterval(intervals);
    }
  
    function pulsing() {
      $this.toggleClass('pulse');      
    }  
  });
});