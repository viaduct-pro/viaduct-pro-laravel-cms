// ordering Everything

$('body').on('click', '.sort > .sorting, .sorting_asc, .sorting_desc', function () {
  console.log($(this));
  var tab = $('.nav-tabs .active > a').attr('aria-controls');
  var sort = $(this).attr('id');

  var className = $(this).attr('class');
  var ord = '';
  console.log(className);
  if (className == 'sorting' || className == 'sorting_desc')
  {
    ord = 'asc';
  }
  else if (className == 'sorting_asc')
  {
    ord = 'desc';
  }
  console.log(tab);
  console.log(sort);

  if (tab == 'content')
  {
    $.ajax({
      beforeSend: function(request) {  // нужно для защиты CSRF
        return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
      },
      type: "GET",
      url: '/sort',
      data: {
        sort: sort,
        order: ord,
      },
      success: function( msg ) {
        $('#content').html(msg);

        $(".a2a_kit").each(function() {
          a2a.init('page');
        });
        $('.tooltiped').tooltipster({
          theme: 'tooltipster-shadow',
        });

        if($(window).width() < 767){
          $('table.responsive').each(function (i, element) {splitTable($(element))})
        }
        setTimers()
      }
    });
  } else if (tab == 'ico_stage')
  {
    $.ajax({
      beforeSend: function(request) {  // нужно для защиты CSRF
        return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
      },
      type: "GET",
      url: '/sort-stage',
      data: {
        sort: sort,
        order: ord,
      },
      success: function( msg ) {
        $('#ico_stage').html(msg);

        $(".a2a_kit").each(function() {
          a2a.init('page');
        });
        $('.tooltiped').tooltipster({
          theme: 'tooltipster-shadow',
        });
        if($(window).width() < 767){
          $('table.responsive').each(function (i, element) {splitTable($(element))})
        }
        setTimers()
      }
    });
  } else if (tab == 'trading') {
    $.ajax({
      beforeSend: function(request) {  // нужно для защиты CSRF
        return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
      },
      type: "GET",
      url: '/sort-trading',
      data: {
        sort: sort,
        order: ord,
      },
      success: function( msg ) {
        $('#trading').html(msg);

        $(".a2a_kit").each(function() {
          a2a.init('page');
        });
        $('.tooltiped').tooltipster({
          theme: 'tooltipster-shadow',
        });

        if($(window).width() < 767){
          $('table.responsive').each(function (i, element) {splitTable($(element))})
        }
        setTimers()
      }
    });
  }

  var setTimers = function () {
    $('.timer').each(function (e, i) {
      time = $(i).text();
      var toDate = new Date();

      toDate = new Date(time * 1000);
      $(i).countdown({until: toDate,
        layout: '<b>{dn} D {hnn} H {mnn} M {desc}</b>',
        description: '- Left till close',
        compact: true
      });
    });
  }
});