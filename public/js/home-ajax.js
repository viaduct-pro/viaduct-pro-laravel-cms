$(document).ready(function() {
  $('.tooltiped').tooltipster({
    theme: 'tooltipster-shadow',
  });
});

$('[aria-controls="ico_stage"]').on('click', function () {
  setTimeout(function () {
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
  }, 500);
});
$('.masked_usd').mask('000,000,000,000,000$', {reverse: true});
$('.masked_btc').mask('000,000,000,000,000BTC', {reverse: true});

$("#item-form").validate();
( $('#slug').val()=='undefined' || $('#slug').val()==null || $('#slug').val()=="" )
{
  $('#name').transliterate();
}

if ($(".table-list").length !== 0) {
  var table = $(".table-list").DataTable()

}

var lastResults = [];
// SELECT2 STANDARD

$(".select-coin").select2({
  multiple: false,
  ajax: {
    url: '/ajax-coins',
    dataType: 'json',
    type: "GET",
    quietMillis: 50,
    data: function (term) {
      return {
        term: term
      };
    },
    results: function (data) {
      return {
        results: $.map(data, function (item) {
          return {
            text: item.symbol+' ('+item.name+')',
            slug: item.name,
            id: item.value
          }
        })
      };
    }
  }
});


// SELECT2 COSTOM
//      $(".select-coin").select2({
//        createSearchChoice:function(term, data) {
//          if ( $(data).filter( function() {
//              return this.text.localeCompare(term)===0;
//            }).length===0) {
//            return {id:term, text:term};
//          }
//        },
//        multiple: false,
//        ajax: {
//          url: '/ajax-coins',
//          dataType: 'json',
//          type: "GET",
//          quietMillis: 50,
//          data: function (term) {
//            return {
//              term: term
//            };
//          },
//          results: function (data) {
//            return {
//              results: $.map(data, function (item) {
//                return {
//                  text: item.symbol+' ('+item.name+')',
//                  slug: item.name,
//                  id: item.value
//                }
//              })
//            };
//          }
//        }
//      });
//
//        $( ".select-coin" ).change(function() {
//          console.log(this.value);
//        });




$('#item-form').on('submit', function(e) {
  e.preventDefault();
  var name = $('#name').val();
  var description = $('#my_editor').val();
  var coins = $('#coins').val();
  var slug = $('#slug').val();
  $.ajax({
    beforeSend: function(request) {  // нужно для защиты от CSRF
      return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
    },
    type: "POST",
    url: '/ico-item',
    data: {
      name: name,
      description: description,
      coins: coins,
      slug: slug
    },
    success: function( msg ) {
      if(msg.status == 'success') {
        $("#form-block").fadeOut('fast', function(){
          $('#status').html(msg.html);
          $('#status').fadeIn('fast');
          setTimeout(function () {
            $('#status').fadeOut('fast', function () {
              $("#form-block").fadeIn('fast');
              $('input[type="text"], input[type="hidden"], textarea, #coins').val('');
              $('.select2-choice>span').text('');
            });
          }, 2000);
        });
      }
    }
  });
});

//Socket

var conn = new WebSocket('ws://104.237.155.197:8088');
conn.onopen = function (e) {
  console.log('Connection established!');
}
conn.onmessage = function (e) {
  console.log('New message: ' + e.data);
  $("#content").load("/ajax-items");
  $("#trading").load("/ajax-trading");
  $("#ico_stage").load("/ajax-stage").ready(function () {
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
  });
}


// $('input#noResultSearch').quicksearch(
//   'div.tab-content table tbody .first td div a',
//   {
//     'hide' : function () {
//       console.log($(this));
//       var el = $(this).parents('table tbody .first');
//
//       $(this).parents('table tbody .first').hide();
//       $(el).next('table tbody .second').hide();
//     },
//     'show': function () {
//       var el = $(this).parents('table tbody .first')
//
//       $(this).parents('table tbody .first').show();
//       $(el).next('table tbody .second').show();
//     },
// //      'noResults': $('table tbody').append("<tr style='width: 100%;'><td class='text-center' colspan='8'>No results!<td></tr>")
//   }
// );


// function splitTable (original) {
//   original.wrap('<div class=\'table-wrapper\' />')
//   var copy = original.clone()
//   copy.find('td:not(:first-child), th:not(:first-child)').css('display', 'none')
//   copy.removeClass('responsive')
//   original.closest('.table-wrapper').append(copy)
//   copy.wrap('<div class=\'pinned\' />')
//   original.wrap('<div class=\'scrollable\' />')
// };
//
// function unsplitTable (original) {
//   original.closest('.table-wrapper').find('.pinned').remove()
//   original.unwrap()
// };

// var switched = false
// var updateTables = function () {
  // if (($(window).width() < 767) && !switched) {
  //   switched = true
  //   $('table.responsive').each(function (i, element) {splitTable($(element))})
  //   return true
  // }
  // else if (switched && ($(window).width() > 767)) {
  //   switched = false
  //   $('table.responsive').each(function (i, element) {unsplitTable($(element))})
  // }
// }


$('#search').on('keyup',function(){
  var value = $(this).val();
  var tab = $('.nav-tabs .active > a').attr('aria-controls');
  if(tab == 'content' && value.length > 2 || tab == 'content' && value.length == 0){
    $.ajax({
      beforeSend: function(request) {  // нужно для защиты CSRF
        return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
      },
      type: "GET",
      url: '/search',
      data: {
        value: value,
      },
      success: function( msg ) {
        $('#content').html(msg);
      }
    });
  } else if (tab == 'ico_stage'  && value.length > 2  || tab == 'ico_stage' && value.length == 0) {
    $.ajax({
      beforeSend: function(request) {  // нужно для защиты CSRF
        return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
      },
      type: "GET",
      url: '/search-stage',
      data: {
        value: value,
      },
      success: function( msg ) {
        $('#ico_stage').html(msg);
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
  } else if (tab == 'trading'  && value.length > 2 || tab == 'trading' && value.length == 0) {
    $.ajax({
      beforeSend: function(request) {  // нужно для защиты CSRF
        return request.setRequestHeader('X-CSRF-Token', $("meta[name='csrf-token']").attr('content'));
      },
      type: "GET",
      url: '/search-trading',
      data: {
        value: value,
      },
      success: function( msg ) {
        $('#trading').html(msg);
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
  }
});