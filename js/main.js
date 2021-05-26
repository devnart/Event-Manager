
  function makeCircle(selector,percent = 1.0,tColor='#fff') {

    if(percent <=0.5) {
        var sColor = 'rgb(11, 243, 23)'
    }else if(percent <=0.75 && percent >0.5) {
        var sColor = '#E97636'

    }else {
        var sColor = 'rgb(243, 11, 11)'

    }
    var bar = new ProgressBar.Circle(selector, {

        color: tColor,
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: sColor, width: 1 },
        to: { color: sColor, width: 10 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-lincap', 'round');
      
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
      
        }
      });
      bar.text.style.fontFamily = '"Poppins", Helvetica, sans-serif';
      bar.text.style.fontSize = '0.7rem';
      bar.text.style.fontWeight = '700';
      
      bar.animate(percent);  // Number from 0.0 to 1.0
    
  }
makeCircle('#circle-hero',0.7,'#000497')
makeCircle('#circle1',0.7)
makeCircle('#circle2',0.5)
makeCircle('#circle3')
makeCircle('#circle6',0.63)
makeCircle('#circle5',0.29)
makeCircle('#circle4',0.9)