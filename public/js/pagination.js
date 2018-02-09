

// TRADING
  $(function () {
    $('body').on('click', '#trading .pagination a', function (e) {
      e.preventDefault();
      $('#load a').css('color', 'blue');
      $('#load').append('<img style="z-index: 100000;" src="/img/loading.gif" />');

      var url = $(this).attr('href');
      if ($(this).parents('#trading')) {
        getArticles(url);
      }
      //      window.history.pushState("", "", url);
    });

    function getArticles (url) {
      $.ajax({
        url: url,
        beforeSend: function (request) {  // нужно для защиты CSRF
          return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
        },
      }).done(function (data) {
        $("#trading").html(data);


        //social load
        $(".a2a_kit").each(function() {
          a2a.init('page');
        });
        $('.tooltiped').tooltipster({
          theme: 'tooltipster-shadow',
        });

        setTimers();

      }).fail(function () {
        alert('Articles could not be loaded.');
      });
    }
  });

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

// EVERYTHING

  $(function () {
    $('body').on('click', '#content .pagination a', function (e) {
      e.preventDefault();
      console.log(1);
      $('#load a').css('color', 'blue');
      $('#load').append('<img style="z-index: 100000;" src="/img/loading.gif" />');

      var url = $(this).attr('href');
      if ($(this).parents('#content')) {
        getArticles1(url);
      }
      //      window.history.pushState("", "", url);
    });

    function getArticles1 (url) {
      $.ajax({
        url: url,
        beforeSend: function (request) {  // нужно для защиты CSRF
          return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
        },
      }).done(function (data) {
        $("#content").html(data);


        //social load
        $(".a2a_kit").each(function() {
          a2a.init('page');
        });
        $('.tooltiped').tooltipster({
          theme: 'tooltipster-shadow',
        });

        setTimers()

      }).fail(function () {
        alert('Articles could not be loaded.');
      });
    }
  });

//ico_stage

  $(function () {
    $('body').on('click', '#ico_stage .pagination a', function (e) {
      e.preventDefault();
      console.log(2);
      $('#load a').css('color', 'blue');
      $('#load').append('<img style="z-index: 100000;" src="/img/loading.gif" />');

      var url = $(this).attr('href');
      if ($(this).parents('#ico_stage')) {
        getArticles2(url);
      }
      //      window.history.pushState("", "", url);
    });

    function getArticles2 (url) {
      $.ajax({
        url: url,
        beforeSend: function (request) {  // нужно для защиты CSRF
          return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
        },
      }).done(function (data) {
        $("#ico_stage").html(data);

        //social load
        $(".a2a_kit").each(function() {
          a2a.init('page');
        });
        $('.tooltiped').tooltipster({
          theme: 'tooltipster-shadow',
        });

        setTimers();
      }).fail(function () {
        alert('Articles could not be loaded.');
      });
    }
  });