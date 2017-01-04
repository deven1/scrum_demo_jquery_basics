
$(document).ready(function(e) {
  var colors = [
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var $footerListItems = $('#main-footer ul li');
  $footerListItems.each(function(index, element) {
    $(element).css('background', colors[index]);
  });
  for (var i = 0; i < $footerListItems.length; i++) {
    var li = $footerListItems[i];
    console.log(i);
    if ($(li).text() === 'Cool') {
      break;
    }
  }

  var $p = $('<p>')
    .addClass('yellow')
    .text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatum, fuga illum pariatur natus sequi molestiae possimus odio sint! Natus autem tempore nemo repellat rerum deserunt excepturi consectetur totam, ipsum.');
  $p.appendTo('#main-content');
  $p.css({
    position: "absolute",
    left: "+=100px",
    fontSize: "+=32px",
    backgroundColor: "yellow"
  });
});





