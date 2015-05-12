# sliderbase

> A jQuery plugin to integrate a simple jQuery image slider to any website with ease.

## Installing with Bower

To install backTop with Bower:

```bash
bower install sliderbase
```

## How to use

- Include ``` <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>``` just before the ```</body>``` tag

- Include ``` <script src="PATH TO YOUR JS DIRECTORY/jquery.sliderbase.js"></script> ``` after the jquery include.

- Include ``` <div id="slider">
				<ul class="slides">
					<li class="slide"><img src="img/sliderbase-01.jpg" /></li>
					<li class="slide"><img src="img/sliderbase-02.jpg" /></li>
					<li class="slide"><img src="img/sliderbase-03.jpg" /></li>
					<li class="slide"><img src="img/sliderbase-04.jpeg" /></li>
					<li class="slide"><img src="img/sliderbase-05.jpeg" /></li>
				</ul>
			</div> ``` within your html ``` <body></body> ``` tag

- Include ``` <link href="css/sliderbase.css" rel="stylesheet" type="text/css" /> ``` before the ``` </head> ``` tag.

### Minimum setup

```js
$(document).ready( function() {
	$('#slider').sliderBase();
});
```

**Example with default options**

```js
$(document).ready( function() {
	$('#slider').sliderBase({
		'interval' : 5000,
		'speed' : 500,
		'arrow' : 'true',
	});
});
```

### Interval

To set an interval between each image to animate.


### Speed

To specify the slide animation speed between each image.

### Arrow

To specify whether to show or not to show the slider navigation arrows.


## Contributing

Please see [CONTRIBUTE.md](CONTRIBUTE.md) for info on contributing.


## Demo

<a href="http://codesalsa.net/sliderbase" target="_blank">Check out the demo</a> for more style and feature examples.

