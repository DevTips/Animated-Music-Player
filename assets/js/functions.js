$( document ).ready(function() {

  $('.spinner-wrap').click(function() {
    
    var $this = $(this),
        audio = $this.siblings('audio')[0],
        bpm = Number($this.siblings('audio').data('bpm'))
        pulse = (60/bpm)*1000;
    
    
    if (audio.paused === false) {
      audio.pause();
      audio.currentTime = 0;
      $this.removeClass('playing');
      clearInterval(intervals);
    }
    
    else {
      audio.play();
      $this.addClass('playing');
      pulsing();
      intervals = setInterval(function() {pulsing()}, pulse);
      
    }
    
    
    function pulsing() {
      
      $this.addClass('pulse');
      
      setTimeout(function() {
        $this.removeClass('pulse');  
      }, pulse-100);
      
    }
    
    
  });

});