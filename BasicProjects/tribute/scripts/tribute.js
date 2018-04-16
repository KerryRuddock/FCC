$(window).on( 'load', function() {
    
  /*
  ** Image Rotator
  */

  var bgImageArray = [
        "v1523659021/terrysface-zoomed.jpg",
        "v1523658991/terry-early-years.jpg", 
        "v1523659083/ny-marathon.jpg", 
        "v1523659025/training.jpg", 
        "v1523659005/terry-front-run.jpg", 
        "v1523659015/terry-on-stretcher.jpg", 
        "v1523658954/miles-to-go.jpg"
      ];
      
  // caches images, avoiding white flash between background replacements     
  var base ="https://res.cloudinary.com/djhkdplck/image/upload/";

  bgImageArray.forEach( function(img){
      new Image().src = base + img; 

  });

  var bgImg = {
    index: 0,
    
    fbwd: function () {
      this.index = 0;
      this.setBGImage();
    },
    
    fwd: function () {
      this.next();
    },
    
    next: function () {
      this.index++;
      this.setBGImage();
    },
    
    setBGImage: function () {
      $('.hero picture').css( 'background-image', "url(" + base + bgImageArray[this.index] + ")" );
    }
  };
    
  var tribStory = [
    [
      "Terry Fox - an activist in cancer research, ",
      "a hero to people worldwide.",
      "",
      "An athlete, ",
      "a humanitarian.",
      "",

      "Terry Fox - Canada's Marathon Man,",
      "his legacy lives on today.",
      ""
    ],
    [
      "Terry was a track and field champion in high school.",
      "He played first-string Varsity basketball,",
      "and was captain to his school's soccer team.",
      "In his senior year, it was discovered",
      "Terry had a very dangerous form of cancer.",
      "",
      "To keep the cancer from spreading, ",
      "his entire right leg would have to be amputated.",
      ""
    ],
    [    
      "The night before his surgery, ",
      "He read an article about Dick Traum, a NY runner.",
      "Dick was the first amputee to complete the NY marathon.",
      "Terry never forgot the article.",
      "He dreamed running across Canada.",
      "",
      "After the surgery, there was 16 months of follow-up treatment.",
      "At the clinic, he saw the other cancer patients.",
      "He saw their suffering. He listened to their cries."
    ],
    [
      "He could not forget what he had seen.",
      "He felt he was one of the lucky patients who survived.",
      "",
      "Terry wanted to raise money for Cancer Research",
      "and he was determined to take action to make it happen.",
      "He felt a responsibility. He wanted the hurting to stop.",
      "He had a special prosthetic made so he could run",    
      "and trained every day for 15 months, except for one.",
      "His mom forced him to take Christmas day off."
    ],
    [
      "On April 12, 1980, the Marathon of Hope began.",
      "Terry dipped his right leg into the Atlantic Ocean.",
      "He would run, a marathon a day, everyday.",
      "His goal - to receive a $1 donation from every Canadian.",
      "A testament to his will. Terry endured it all...",
      "Bad weather, the mental solitude, the physical pain.",
      "Terry ran 143 days, 3339 miles before he was forced to end his run",
      "At a tearful press conference, Terry sobbed the cancer has spread to his lungs",
      "He needed treatment, but if he could come back and finish, he would."
    ],
    [
      "$2 million dollars was raised before Terry had to stop running.",
      "Just days later, an impromptu telethon was organized in Terry Fox's name",
      "From his hospital bed, he watched the broadcast televised across Canada",
      "The Telethon raised $10 million dollars,",
      "and more importantly, the fund soon reached $24 million dollars,",
      "Terry's goal of getting $1 dollar from every Canadian was fulfilled",
      "Terry Fox single-handedly doubled the annual cancer research budget",
      "He became the youngest ever recipient of the Order of Canada",
      "Sadly, Terry succumbed to his cancer, dieing at age 22."
    ],
    [
      "As a Canadian, living at that time, we were all deeply affected by his death.",
      "However, Terry left more for his country than he could possibly realize.",
      "",
      "He left behind his spirit and determination,",
      "and a dream, which became his legacy.",
      "",
      "Thank you Terry Fox for caring about us.",
      "and thank you for watching.",
      ""
    ]
  ]; // end array
  
  var $line1 = $(".tribute-line1");
  var $line2 = $(".tribute-line2");
  var $line3 = $(".tribute-line3");

  var maxStorySegments = tribStory.length -1;
  var storySegment = 0;

  var maxLines = tribStory[storySegment].length;
  var line = 0;
  
  var paused = false;
  var tl = new TimelineMax({ onComplete: animateStory });
  
  
   // mouseenter/mouseleave
  $('.tribute-overlay').on( "mouseenter", function() {
    controls.togglePlay();
  });
  
  $('.tribute-overlay').on( "mouseleave", function() {
    controls.togglePlay();
  });
  
  // pause/play toggle btn
  $('.tribute-control-btn--toggle-play').on( "click", function() {
    controls.togglePlay();
  });
 
  // fast backward btn
  $('.tribute-control-btn--fbwd').on( "click", function() {
    storySegment = 0;
    line = 0; 
    bgImg.fbwd();
    controls.fbwd();   

    clearTimeLine();
    tl = new TimelineMax({ onComplete: animateStory });
    animateStory();
  });  
  
    // fast forward btn
  $('.tribute-control-btn--fwd').on( "click", function() {
    line = 0;
    clearTimeLine();
    tl = new TimelineMax({ onComplete: animateStory });
    if ( storySegment < maxStorySegments ) {
      storySegment++;
      bgImg.fwd();
      controls.fwd();
    }
    animateStory();
  });  
  

  function animateStory() {
   
    if ( ! paused ) {
      if ( line < maxLines ) {

        $line1.text( tribStory[storySegment][line] );
        $line2.text( tribStory[storySegment][line + 1] );
        $line3.text( tribStory[storySegment][line + 2] );
        
        // Note: Timeline invokes animateStory() after completing call to tl.to()
        tl.staggerTo([$line1, $line2, $line3], 3, { opacity: 1 }, 0.5);
        tl.to([$line1, $line2, $line3], 1, { opacity: 0 }, "+=3.0");
        line += 3;
      } else if ( storySegment < maxStorySegments ) {
        storySegment++;
        bgImg.next();
        line = 0;
        animateStory();
      } else {
        controls.end();
      } 
      
    } else {
      setTimeout ( function () {
        animateStory();
      }, 100 );
    }
  }
  animateStory();

/*
** Playback controls
*/  
  var controls = {
 
    end: function () {
        if ( $('.tribute-control-btn--toggle-play').find('.fa-pause').length !== 0 ) {
          $('.fa-pause').removeClass("fa-pause").addClass("fa-play");
          $('.hero--end').css('display', "block");
          tl.pause();
          paused = true;
        }     
    },   
    
    fbwd: function () {
        this.play();
    },
    
    fwd: function () {
        this.play();
    },
    
    pause: function() {    
        $('.fa-pause').removeClass("fa-pause").addClass("fa-play");
        $('.hero--paused').css('display', "block");
        tl.pause();
        paused = true;
    },
    
    play: function() {
        $('.fa-play').removeClass("fa-play").addClass("fa-pause");
        $('.hero--paused').css('display', "none");
        
        if ( $('.hero--end').css('display') === 'block' ) {
          $('.hero--end').css('display', "none");
            storySegment = 0;
            line = 0; 
            bgImg.fbwd();
        }
        tl.play();
        paused = false;
    },
    
    togglePlay: function() {
      
        // btn showing PAUSE indicates tribute currently playing 
        if ( $('.tribute-control-btn--toggle-play').find('.fa-pause').length !== 0 ) {
          this.pause();

        } // btn showing PLAY indicates tribute currently paused
        else if ( $('.tribute-control-btn--toggle-play').find('.fa-play').length !== 0 ) {
          this.play();
        }
      
    }
    
  }; // end obj controls 
  
  // helper functions
  function clearTimeLine() {
    tl.clear();    
    tl.eventCallback("onComplete", null);
  }
 
}); // end IIFE