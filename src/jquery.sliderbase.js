'use strict';

(function($) {

	$.fn.sliderBase = function(options) {
	
		// Slider option Settings
		var settings = $.extend({
            'interval' : 5000,
            'speed' : 500,
            'arrow' : 'true',
			'type'	: 'slide',
        }, options);
	
		// Configuration
		var speed = settings['speed'];
		var pause = settings['interval'];
		var arrow = settings['arrow'];
		var type = settings['slide'];
		var interval;
		
		var $slider = this;
		var $slideContainer = $slider.find('ul');
		var $slide = $slideContainer.find('li');
		var $slideLast = $slideContainer.children('li:last-child');
		
		var totalSlides = $slide.length;
		var slideWidth = $slide.width();
		var slideHeight = $slide.height();
		var slideContainerWidth = totalSlides * slideWidth;

		if(arrow =='true'){
		
			// Add the Previous and Next Buttons
			$slider.append("<a id='prev'></a><a id='next'></a>");
			
		}
		
		
		$slider.css({ width: slideWidth, height: slideHeight });
		
		$slideContainer.css({ width: slideContainerWidth, marginLeft: - slideWidth });
		
		$slideLast.prependTo($slideContainer);
		
		var $prevSlide = $('#prev');
		var $nextSlide = $('#next');
		
		
		function startSlider(){
			stopLoop();
			interval = setInterval(function () {
				moveRight();
			}, pause);
			
			$prevSlide.stop().animate({'left':'-40px'}, {queue: false}, 500).fadeOut();
			$nextSlide.stop().animate({'right':'-40px'}, {queue: false}, 500).fadeOut();
		}
		
		function pauseSlider(){
			clearInterval(interval);
			$prevSlide.fadeIn().animate({'left':'30px'}, {queue: false}, 500);
			$nextSlide.fadeIn().animate({'right':'30px'}, {queue: false}, 500);
		}
		
		$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
		
		
		
		function moveLeft() {
			$slideContainer.animate({
				left: + slideWidth
			}, speed, function () {
				$slideContainer.children('li:last-child').prependTo($slideContainer);
				$slideContainer.css('left', '');
			});
		};
		
		function moveRight() {
			$slideContainer.animate({
				left: - slideWidth
			}, speed, function () {
				$slideContainer.children('li:first-child').appendTo($slideContainer);
				$slideContainer.css('left', '');
			});
		};
		
		function stopLoop(){
			window.clearInterval(interval); //clear interval of loop
		}
		
		$('#prev').click(function () {
			moveLeft();
		});

		$('#next').click(function () {
			moveRight();
		});
	}
	
}(jQuery));