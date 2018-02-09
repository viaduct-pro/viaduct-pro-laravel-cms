var a2a_config = a2a_config || {}
a2a_config.vars = {
  vars: ['menu_type', 'static_server', 'linkmedia', 'linkname', 'linkurl', 'linkname_escape', ['ssl', 'http:' != document.location.protocol && 'https://static.addtoany.com/menu'], 'show_title', 'onclick', 'num_services', 'hide_embeds', 'prioritize', 'exclude_services', 'custom_services', ['templates', {}], 'orientation', ['track_links', !1], ['track_links_key', ''], 'tracking_callback', 'track_pub', 'color_main', 'color_bg', 'color_border', 'color_link_text', 'color_link_text_hover', 'color_arrow', 'color_arrow_hover', ['localize', '', 1], ['add_services', !1, 1], 'locale', 'delay', 'icon_color', 'no_3p', 'show_menu', 'target'],
  process: function () {for (var a, b, c, d, e, f = a2a_config.vars.vars, g = 0, h = f.length; g < h; g++) if ('string' == typeof f[g] ? (a = f[g], b = window['a2a_' + a], d = !1) : (a = f[g][0], b = window['a2a_' + a], c = f[g][1], d = !0, e = f[g][2]), void 0 !== b && null != b) {if (a2a_config[a] = b, !e) try {delete window['a2a_' + a]} catch (i) {window['a2a_' + a] = null}} else d && !a2a_config[a] && (a2a_config[a] = c)}
}, a2a_config.vars.process(), a2a_config.static_server = a2a_config.static_server || 'https://static.addtoany.com/menu'
var a2a = a2a || {
  total: 0,
  kit_services: [],
  icons_img_url: a2a_config.static_server + '/icons.36.png',
  head_tag: document.getElementsByTagName('head')[0],
  canonical_url: function () {
    if (!document.querySelector) return !1
    var a, b, c = document.querySelector('meta[property="og:url"]')
    return c ? a = c.content : (b = document.querySelector('link[rel="canonical"]'), a = !!b && b.href), a
  }(),
  ieo: function () {
    for (var a = -1, b = document.createElement('b'); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]>1<![endif]--\x3e", +b.innerHTML;) ;
    return a2a.ieo = function () {return a}, a
  },
  quirks: document.compatMode && 'BackCompat' == document.compatMode ? 1 : null,
  has_menter: document.documentElement && 'onmouseenter' in document.documentElement,
  has_touch: 'ontouchend' in window,
  has_pointer: window.PointerEvent || navigator.msPointerEnabled,
  fn_queue: [],
  dom: {
    isReady: !1, ready: function (a) {
      var b = function () {
          if (!document.body) return setTimeout(a2a.dom.ready(a))
          a(), a2a.dom.isReady = !0
        },
        c = function (a) {(document.addEventListener || 'load' === a.type || 'complete' === document.readyState) && (d(), b())},
        d = function () {document.addEventListener ? (document.removeEventListener('DOMContentLoaded', c, !1), window.removeEventListener('load', c, !1)) : (document.detachEvent('onreadystatechange', c), window.detachEvent('onload', c))}
      if ('complete' === document.readyState) b() else if (document.addEventListener) document.addEventListener('DOMContentLoaded', c, !1), window.addEventListener('load', c, !1) else {
        document.attachEvent('onreadystatechange', c), window.attachEvent('onload', c)
        var e = !1
        try {e = null == window.frameElement && document.documentElement} catch (f) {}
        e && e.doScroll && function g () {
          if (!a2a.dom.isReady) {
            try {e.doScroll('left')} catch (f) {return setTimeout(g, 50)}
            d(), b()
          }
        }()
      }
    }
  },
  ready: function () {a2a.locale || (a2a.type = 'page', a2a.cbs('ready'), a2a.ready = function () {})},
  init: function (a, b, c) {
    var d, e, f, g, h = a2a.c, b = b || {}, i = {}, j = null, k = {}, l = location.href, m = function (a, b) {
      a2a.total++, a2a.n = a2a.total, a2a['n' + a2a.n] = a
      var c, d, e = a.node = a2a.set_this_index(a.node), f = document.createElement('div'),
        g = a2a.getData(e)['a2a-media'], h = a2a.getData(e)['a2a-title'], i = a2a.getData(e)['a2a-url']
      if (!e) return void(a2a.c.show_menu || a2a.total--)
      a.linkname_escape && (d = a2a.getByClass('a2a_linkname_escape', e.parentNode)[0] || a2a.getByClass('a2a_linkname_escape', e.parentNode.parentNode)[0]) && (a.linkname = d.textContent || d.innerText), a.linkmedia = b.linkmedia = g || a.linkmedia, a.linkname = b.linkname = h || a.linkname, a.linkurl = b.linkurl = i || a.linkurl, h && (a.linkname_implicit = !1), i && (a.linkurl_implicit = !1), 'textContent' in document ? f.textContent = a.linkname : f.innerText = a.linkname, c = f.childNodes[0], c && (a.linkname = c.nodeValue), delete f, e.a2a_kit ? a2a.kit(a, b) : a2a.button(a)
    }
    a2a.make_once(a)
    for (var n in b) h[n] = b[n];
    for (var n in h) i[n] = h[n];
    if (e = h.target) if ('string' == typeof e) {
      if (f = e.substr(0, 1), g = e.substr(1), '.' == f) return a2a.multi_init(a2a.HTMLcollToArray(a2a.getByClass(g, document)), a, b), void(h.target = !1)
      j = a2a.gEl(g), d = j.className, d.indexOf('a2a_kit') >= 0 && d.indexOf('a2a_target') < 0 && (j = null)
    } else j = h.target
    a = h.menu_type ? 'mail' : a, a && (a2a.type = a, h.vars.process()), k.type = a2a.type, k.node = j, k.linkmedia = h.linkmedia, k.linkname = h.linkname || document.title || location.href, k.linkurl = h.linkurl || location.href, k.linkname_escape = h.linkname_escape, k.linkname_implicit = !h.linkname_escape && (document.title || l) == k.linkname, k.linkurl_implicit = l == k.linkurl, k.orientation = h.orientation || !1, k.track_links = h.track_links || !1, k.track_links_key = h.track_links_key || '', k.track_pub = h.track_pub || !1, h.linkmedia = h.linkname = h.linkurl = h.linkname_escape = h.show_title = h.custom_services = h.exclude_services = h.orientation = h.num_services = h.track_pub = h.target = !1, 'custom' == h.track_links && (h.track_links = !1, h.track_links_key = ''), a2a.last_type = a2a.type, window['a2a' + a2a.type + '_init'] = 1, a2a.locale && !c ? a2a.fn_queue.push(function (a, b) {return function () {m(a, b)}}(k, i)) : (m(k, i), h.menu_type = !1, a2a.init_show())
  },
  init_all: function (a) {!a2a.unindexed(function (b) {b.className.indexOf('a2a_follow') >= 0 ? a2a.init('feed') : a2a.init(a)}, !0) && a2a.gEl('a2a_menu_container') && a2a.init(a)},
  multi_init: function (a, b, c) {for (var d = 0, e = a.length; d < e; d++) c.target = a[d], a2a.init(b, c)},
  button: function (a) {
    var b = a.node, c = a.type, d = a2a.gEl('a2a' + c + '_dropdown'), e = a2a.has_menter
    b.getAttribute('onclick') && -1 != (b.getAttribute('onclick') + '').indexOf('a2a_') || b.getAttribute('onmouseover') && -1 != (b.getAttribute('onmouseover') + '').indexOf('a2a_') || (a2a.add_event(b, 'click', function (a) {
      if (a2a.preventDefault(a), a2a.stopPropagation(a), 'block' == d.style.display) {
        var e = a2a[c].time_open
        a2a[c].onclick || e && 'OK' == e ? a2a.toggle_dropdown('none', c) : (a2a[c].last_focus = document.activeElement, d.focus())
      } else a2a.show_menu(b), a2a[c].last_focus = document.activeElement, d.focus()
    }), !a2a[a2a.type].onclick && e && (a2a.c.delay ? b.onmouseenter = function () {a2a[a2a.type].over_delay = setTimeout(function () {a2a.show_menu(b)}, a2a.c.delay)} : b.onmouseenter = function () {a2a.show_menu(b)}, b.onmouseleave = function () {a2a.miniLeaveDelay(), a2a[a2a.type].over_delay && clearTimeout(a2a[a2a.type].over_delay)})), 'a' == b.tagName.toLowerCase() && 'page' == a2a.type && (b.href = 'https://www.addtoany.com/share#url=' + encodeURIComponent(a.linkurl) + '&title=' + encodeURIComponent(a.linkname).replace(/'/g, '%27'))
  },
  kit: function (a, b) {
    var c = a2a.type, d = {
        behance: {name: 'Behance', icon: 'behance', color: '007EFF', url: 'https://www.behance.net/${id}'},
        facebook: {name: 'Facebook', icon: 'facebook', color: '3B5998', url: 'https://www.facebook.com/${id}'},
        flickr: {name: 'Flickr', icon: 'flickr', color: 'FF0084', url: 'https://www.flickr.com/photos/${id}'},
        foursquare: {name: 'Foursquare', icon: 'foursquare', color: 'F94877', url: 'https://foursquare.com/${id}'},
        github: {name: 'GitHub', icon: 'github', color: '2A2A2A', url: 'https://github.com/${id}'},
        google_plus: {name: 'Google+', icon: 'google_plus', color: 'DD4B39', url: 'https://plus.google.com/${id}'},
        instagram: {name: 'Instagram', icon: 'instagram', color: 'E4405F', url: 'https://www.instagram.com/${id}'},
        linkedin: {name: 'LinkedIn', icon: 'linkedin', color: '007BB5', url: 'https://www.linkedin.com/in/${id}'},
        linkedin_company: {
          name: 'LinkedIn',
          icon: 'linkedin',
          color: '007BB5',
          url: 'https://www.linkedin.com/company/${id}'
        },
        pinterest: {name: 'Pinterest', icon: 'pinterest', color: 'BD081C', url: 'https://www.pinterest.com/${id}'},
        snapchat: {name: 'Snapchat', icon: 'snapchat', color: '2A2A2A', url: 'https://www.snapchat.com/add/${id}'},
        tumblr: {name: 'Tumblr', icon: 'tumblr', color: '35465C', url: 'http://${id}.tumblr.com'},
        twitter: {name: 'Twitter', icon: 'twitter', color: '55ACEE', url: 'https://twitter.com/${id}'},
        vimeo: {name: 'Vimeo', icon: 'vimeo', color: '1AB7EA', url: 'https://vimeo.com/${id}'},
        youtube: {name: 'YouTube', icon: 'youtube', color: 'FF0000', url: 'https://www.youtube.com/user/${id}'},
        youtube_channel: {
          name: 'YouTube Channel',
          icon: 'youtube',
          color: 'FF0000',
          url: 'https://www.youtube.com/channel/${id}'
        }
      }, e = ['facebook_like', 'twitter_tweet', 'google_plusone', 'google_plus_share', 'pinterest_pin', 'linkedin_share'],
      f = a2a.counters.avail, g = function (a, b) {
        if (a && !a2a.in_array(a, e)) for (var d = 0, f = b ? a2a[c].services : a2a.services, g = f.length; d < g; d++) if (a == f[d][1]) return [f[d][0], f[d][2], f[d][3], f[d][4], f[d][5]]
        return !b && [a, a]
      }, h = function (a, b) {
        for (var c, d = 0, e = a.attributes.length, f = b; d < e; d++) c = a.attributes[d], c.name && 'data-' == c.name.substr(0, 5) && (f[c.name.substr(5)] = c.value);
        return f
      },
      i = function () {s = a.linkurl = a2a.getData(l)['a2a-url'] || s, u = a.linkname = a2a.getData(l)['a2a-title'] || u, v = a.linkmedia = a2a.getData(l)['a2a-media'] || v, a2a.linker(this)},
      j = function (b, c, d) {
        var e = {node: c, service: b, title: u, url: s}, f = a2a.cbs('share', e)
        void 0 !== f && (f.url && (a.linkurl = f.url, a.linkurl_implicit = !1), f.title && (a.linkname = f.title, a.linkname_implicit = !1), a2a.linker(c), f.stop && d && a2a.preventDefault(d))
      }, k = a2a.c.templates, l = a.node, m = a2a.getData(l), n = l.a2a_follow,
      o = a2a.HTMLcollToArray(l.getElementsByTagName('a')), p = o.length, q = document.createElement('div'),
      r = encodeURIComponent, s = a.linkurl, t = r(a.linkurl).replace(/'/g, '%27'), u = a.linkname,
      v = (r(a.linkname).replace(/'/g, '%27'), a.linkmedia),
      w = (v && r(a.linkmedia).replace(/'/g, '%27'), m['a2a-icon-color'] || a2a.c.icon_color),
      x = w ? w.split(',', 2) : w, y = x ? x[0] : x, z = x ? x[1] : x,
      A = l.className.match(/a2a_kit_size_([\w\.]+)(?:\s|$)/), B = A ? A[1] : '16', C = B + 'px', D = {}, E = {},
      F = a.linkurl_implicit && a2a.canonical_url ? encodeURIComponent(a2a.canonical_url).replace(/'/g, '%27') : t,
      G = l.className.indexOf('a2a_vertical_style') >= 0
    B && !isNaN(B) && (a2a.svg.load(), w && 'unset' != w && a2a.svg.works() && (y && 'unset' != y && (D.backgroundColor = y), z && 'unset' != z.trim() && (z = z.trim())), l.style.lineHeight = E.height = E.lineHeight = C, E.width = 2 * B + 'px', E.fontSize = '16px', G && (E.height = E.lineHeight = B / 2 + 'px', E.fontSize = '10px', E.width = B + 'px'), 32 != B && (D.backgroundSize = D.height = D.lineHeight = D.width = C, E.borderRadius = D.borderRadius = (.14 * B).toFixed() + 'px', E.fontSize = (parseInt(E.height, 10) + (G ? 4 : 0)) / 2 + 'px')), a2a.kit.facebook_like = function () {
      da.href = s, da.width = '90', da.layout = 'button_count', da.ref = 'addtoany', da = h(M, da), M.style.width = da.width + 'px'
      var a = function () {
        FB.init({
          appId: '0',
          status: !1,
          xfbml: !0,
          version: 'v2.9'
        }), FB.Event.subscribe('edge.create', function (a, b) {a2a.GA.track('Facebook Like', 'facebook_like', a, 'pages', 'AddToAny Share/Save Button'), j('Facebook Like', M)})
      }, b = a2a.i18n()
      b = b ? b.replace(/-/g, '_') : 'en_US', 2 == b.length && (b += '_' + b.toUpperCase())
      for (var c in da) ca += ' data-' + c + '="' + da[c] + '"';
      window.fbAsyncInit || (window.fbAsyncInit = a, I = document.createElement('span'), I.id = 'fb-root', document.body.insertBefore(I, document.body.firstChild)), a2a.kit.facebook_like_script || function (a, c, d) {
        var e, f = a.getElementsByTagName(c)[0]
        a.getElementById(d) || (e = a.createElement(c), e.id = d, e.src = '//connect.facebook.net/' + b + '/sdk.js#xfbml=1&version=v2.9', f.parentNode.insertBefore(e, f))
      }(document, 'script', 'facebook-jssdk'), a2a.kit.facebook_like_script = 1, M.innerHTML = '<div class="fb-like"' + ca + '></div>'
      try {FB.XFBML.parse(M)} catch (d) {}
    }, a2a.kit.twitter_tweet = function () {
      da.url = s, da.lang = a2a.i18n() || 'en', da.related = 'AddToAny,micropat'
      var a = k.twitter, b = 'string' == typeof a ? a.lastIndexOf('@') : null
      b && -1 !== b && (b++, b = a.substr(b).split(' ', 1), b = b[0].replace(/:/g, '').replace(/\//g, '').replace(/-/g, '').replace(/\./g, '').replace(/,/g, '').replace(/;/g, '').replace(/!/g, ''), da.related = b + ',AddToAny'), da = h(M, da)
      var c = document.createElement('a')
      c.className = 'twitter-share-button'
      for (var d in da) c.setAttribute('data-' + d, da[d]);
      M.appendChild(c), a2a.kit.twitter_tweet_script || function (a, b, c) {
        var d, e, f = a.getElementsByTagName(b)[0]
        a.getElementById(c) || (e = a.createElement(b), e.id = c, e.src = '//platform.twitter.com/widgets.js', f.parentNode.insertBefore(e, f), window.twttr = window.twttr || (d = {
          _e: [],
          ready: function (a) {d._e.push(a)}
        }))
      }(document, 'script', 'twitter-wjs'), a2a.kit.twitter_tweet_script = 1
      try {
        twttr.ready(function (a) {
          a2a.twitter_bind || (a.events.bind('click', function (a) {
            if (a && 'tweet' == a.region) {
              var b = function () {
                var b = a.target.src.split('#')[1] || ''
                if (b && b.indexOf('url=') > -1) {
                  for (var c = {}, d = b.split('&'), e = d.length, f = 0; f < e; f++) {
                    var g = d[f].split('=')
                    c[g[0]] = g[1]
                  }
                  return c
                }
                return !1
              }()
              b && b.url && (a2a.GA.track('Twitter Tweet', 'twitter_tweet', unescape(b.url), 'pages', 'AddToAny Share/Save Button'), j('Twitter Tweet', M))
            }
          }), a2a.twitter_bind = 1), a.widgets && a.widgets.load()
        })
      } catch (e) {}
    }, a2a.kit.pinterest_pin = function () {
      da['pin-config'] = 'beside', da['pin-do'] = 'buttonPin', da.media = v, da.url = s, da = h(M, da)
      var a = document.createElement('a')
      for (var b in da) a.setAttribute('data-' + b, da[b]);
      'beside' == da['pin-config'] && 'buttonPin' == da['pin-do'] && (M.style.width = '76px'), a.href = '//www.pinterest.com/pin/create/button/?url=' + da.url + (da.media ? '&media=' + da.media : '') + (da.description ? '&description=' + encodeURIComponent(da.description).replace(/'/g, '%27') : ''), a2a.add_event(M, 'click', function () {a2a.GA.track('Pinterest Pin', 'pinterest_pin', s, 'pages', 'AddToAny Share/Save Button'), j('Pinterest Pin', M)}), M.appendChild(a), a2a.kit.pinterest_pin_script || function (a) {
        var b = a.createElement('script'), c = a.getElementsByTagName('script')[0]
        b.type = 'text/javascript', b.async = !0, b.src = '//assets.pinterest.com/js/pinit.js', c.parentNode.insertBefore(b, c)
      }(document), a2a.kit.pinterest_pin_script = 1
    }, a2a.kit.linkedin_share = function () {
      da.counter = 'right', da.onsuccess = 'a2a.kit.linkedin_share_event', da.url = s, da = h(M, da)
      for (var a in da) ca += ' data-' + a + '="' + da[a] + '"';
      a2a.kit.linkedin_share_event = function () {a2a.GA.track('LinkedIn Share', 'linkedin_share', s, 'pages', 'AddToAny Share/Save Button'), j('LinkedIn Share', M)}, a2a.kit.linkedin_share_script || function (a) {
        var b = a.createElement('script'), c = a.getElementsByTagName('script')[0]
        b.type = 'text/javascript', b.async = !0, b.src = '//platform.linkedin.com/in.js', c.parentNode.insertBefore(b, c)
      }(document), a2a.kit.linkedin_share_script = 1, M.innerHTML = '<script type="IN/Share"' + ca + '><\/script>'
    }, a2a.kit.google_plus = function () {
      window.google_plus_cb_a2a = function (a) {a.state && 'off' == a.state || (a2a.GA.track('Google +1', 'google_plusone', a.href, 'pages', 'AddToAny Share/Save Button'), j('Google +1', M))}, da.href = s, da.size = 'medium', da.annotation = 'bubble', 'google_plus_share' == R && (da.action = 'share'), da = h(M, da)
      var a = a2a.i18n() || 'en-US'
      window.___gcfg = window.___gcfg || {lang: a}
      for (var b in da) ca += ' data-' + b + '="' + da[b] + '"';
      M.innerHTML = '<div class="g-plus' + ('share' == da.action ? '' : 'one') + '" data-callback="google_plus_cb_a2a"' + ca + '></div>', a2a.kit.google_plus_script || (!function (a) {
        var b = a.createElement('script'), c = a.getElementsByTagName('script')[0]
        b.type = 'text/javascript', b.async = !0, b.src = 'https://apis.google.com/js/platform.js', c.parentNode.insertBefore(b, c)
      }(document), a2a.kit.google_plus_script = 1)
    }, a2a.kit.google_plusone = a2a.kit.google_plus_share = a2a.kit.google_plus
    for (var H = 0; H < p; H++) {
      var I, J, K, L, M = o[H], N = M.className, O = N.match(/a2a_button_([\w\.]+)(?:\s|$)/),
        P = N.indexOf('a2a_dd') >= 0, Q = N.indexOf('a2a_counter') >= 0, R = !!O && O[1], S = M.childNodes, T = g(R),
        U = n && d[R] ? d[R].name : T[0], V = ' noopener', W = '_blank', X = n && d[R] ? d[R].icon : T[1],
        Y = n && d[R] ? d[R].color : T[2] || 'CAE0FF', Z = T[3] || {}, $ = Z.type, _ = T[4], aa = !1, ba = !1, ca = '',
        da = {}
      if (P ? (b.target = M, a2a.init(c, b, 1), R = 'a2a', Y = '0166FF', X = 'a2a', ba = !!Q && 1) : 'feed' == R || 'print' == R ? (W = '', V = '') : Q && R && a2a.in_array(R, f) ? ba = 1 : R && a2a.in_array(R, e) && (a2a.kit[R](), aa = 1), R && !aa) {
        if (P || (M.target = W, !n || !d[R] && g(R, !0) ? 'feed' == R ? M.href = M.href || a.linkurl : (M.href = '/#' + R, a2a.add_event(M, 'mousedown', i), a2a.add_event(M, 'keydown', i), M.rel = 'nofollow' + V) : M.href = function (a, b) {
            var c, e = h(a, {}), f = e['a2a-follow'], g = d[b]
            return f && g && (c = g.url.replace('${id}', f)), c || a.href
          }(M, R), M.a2a = {}, M.a2a.customserviceuri = _, M.a2a.stype = $, M.a2a.linkurl = a.linkurl, M.a2a.servicename = U, M.a2a.safename = R, Z.src && (M.a2a.js_src = Z.src), Z.url && (M.a2a.url = Z.url), Z.pu && (M.a2a.popup = 1), Z.media && (M.a2a.media = 1), n || a2a.add_event(M, 'click', function (a, b, d, e, f) {
            return function (g) {
              var h = screen.height,
                i = 'event=service_click&url=' + r(location.href) + '&title=' + r(document.title || '') + '&ev_service=' + r(a) + '&ev_service_type=kit&ev_menu_type=' + c + '&ev_url=' + r(d) + '&ev_title=' + r(e).replace(/'/g, '%27')
              j(b, f, g), f.a2a.popup && !a2a.defaultPrevented(g) && 'javascript:' != f.href.substr(0, 11) && (a2a.preventDefault(g), window.open(f.href, '_blank', 'toolbar=0,personalbar=0,resizable,scrollbars,status,width=550,height=450,top=' + (h > 450 ? Math.round(h / 2 - 225) : 40) + ',left=' + Math.round(screen.width / 2 - 275))), a2a.util_frame_post(c, i), a2a.GA.track(b, a, d, 'pages', 'AddToAny Share/Save Button')
            }
          }(R, U, s, u, M))), S.length) {
          for (var ea, fa = 0, ga = S.length; fa < ga; fa++) if (ea = S[fa].className, 1 == S[fa].nodeType && 'a2a_label' != ea && (L = !0, 'string' == typeof ea && ea.indexOf('a2a_count') >= 0)) {
            K = !0
            break
          }
          if (!L) {
            I = document.createElement('span'), I.className = 'a2a_svg a2a_s__default a2a_s_' + X + ' a2a_img_text', Y && (I.style.backgroundColor = '#' + Y), J = a2a.svg.get(X, I, z), 'pending' !== J && (I.innerHTML = J)
            for (var ha in D) I.style[ha] = D[ha];
            M.insertBefore(I, S[0])
          }
        } else {
          I = document.createElement('span'), I.className = 'a2a_svg a2a_s__default a2a_s_' + X, Y && (I.style.backgroundColor = '#' + Y), J = a2a.svg.get(X, I, z), 'pending' !== J && (I.innerHTML = J)
          for (var ha in D) I.style[ha] = D[ha];
          M.appendChild(I), I = document.createElement('span'), I.className = 'a2a_label', I.innerHTML = U || ('feed' == c ? a2a.c.localize.Subscribe : a2a.c.localize.Share), M.appendChild(I)
        }
        if (G && B && B < 20 && (ba = !1), ba && !K) {
          I = document.createElement('span'), I.className = 'a2a_count', I.a2a = {}, I.a2a.kit = l
          for (var ha in E) I.style[ha] = E[ha];
          M.appendChild(I), P ? (a2a.counters.get('facebook', I, F), I.a2a.is_a2a_dd_counter = 1, l.a2a_dd_counter = I) : a2a.counters.get(R, I, F)
        }
        'a2a_dd' != N && a2a.kit_services.push(M)
      }
    }
    l.className.indexOf('a2a_default_style') >= 0 && (q.style.clear = 'both', l.appendChild(q))
  },
  counters: {
    get: function (a, b, c) {
      var d, e, f = decodeURIComponent(c), g = a2a.counters[a], h = g.api, i = (g.cb, b.a2a.is_a2a_dd_counter)
      if (d = g[f] = g[f] || {}, 'undefined' != typeof d.num) return void(i ? a2a.counters.sum(b, d.num, a) : a2a.counters.set(b, d.num, a))
      if (d.queued = d.queued || [], d.queued.push(b), g.n = g.n || 0, g.n++, g['cb' + g.n] = function (c) {
          var e = a2a.counters[a].cb(c, b)
          if (void 0 !== e) for (var f = 0; f < d.queued.length; f++) queued_count_element = d.queued[f], d.num = e, queued_count_element.a2a.is_a2a_dd_counter ? a2a.counters.sum(queued_count_element, e, a) : a2a.counters.set(queued_count_element, e, a)
        }, 'linkedin' == a) {
        var j = 'abcdefghijklmnopqrstuvwxyz'.charAt(g.n - 1), k = '=linkedinTempCounterCallbacks.cb' + j
        window.linkedinTempCounterCallbacks = window.linkedinTempCounterCallbacks || {}, window.linkedinTempCounterCallbacks['cb' + j] = g['cb' + g.n]
      } else var k = '=a2a.counters.' + a + '.cb' + g.n
      1 == d.queued.length && (e = h[0] + c + (h[1] || '&callback') + k, a2a.dom.ready(function () {a2a.loadExtScript(e)}))
    },
    set: function (a, b, c) {a.innerHTML = '<span>' + a2a.counters.format(b) + '</span>', 'a2a' != c && a2a.counters.sum(a, b, c)},
    sum: function (a, b, c) {
      var d = a.a2a.kit, e = d.a2a_counts_sum || 0, f = d.a2a_counts_summed
      'a2a' == c || f && -1 != f.indexOf(c) || (e = d.a2a_counts_sum = e + b, f = d.a2a_counts_summed = f || [], f.push(c)), d.a2a_dd_counter && a2a.counters.set(d.a2a_dd_counter, e, 'a2a')
    },
    format: function (a) {return a > 999 && (a < 1e6 ? a > 1e4 ? a = (a / 1e3).toFixed() + 'k' : (a += '', a = a.charAt(0) + ',' + a.substring(1)) : a = a < 1e9 ? (a / 1e6).toFixed(a % 1e6 > 94999) + 'M' : '1B+'), a},
    avail: ['facebook', 'linkedin', 'pinterest', 'reddit', 'tumblr'],
    facebook: {
      api: ['https://graph.facebook.com/?id=', '&callback'],
      cb: function (a, b) {return a && a.share && !isNaN(a.share.share_count) ? a.share.share_count : 0}
    },
    linkedin: {
      api: ['https://www.linkedin.com/countserv/count/share?url='],
      cb: function (a, b) {if (a && !isNaN(a.count)) return a.count}
    },
    pinterest: {
      api: ['https://widgets.pinterest.com/v1/urls/count.json?url='],
      cb: function (a, b) {if (a && !isNaN(a.count)) return a.count}
    },
    reddit: {
      api: ['https://www.reddit.com/api/info.json?url=', '&jsonp'], cb: function (a, b) {
        var c = a.data
        if (a && c && c.children) {
          for (var d, e = 0, f = [], g = c.children; e < g.length; e++) (d = g[e].data) && !isNaN(d.ups) && f.push(d.ups);
          if (f.length > 0) return Math.max.apply(null, f)
        }
      }
    },
    tumblr: {
      api: ['https://api.tumblr.com/v2/share/stats?url='],
      cb: function (a, b) {if (a && a.response && !isNaN(a.response.note_count)) return a.response.note_count}
    },
    twitter: {
      api: ['https://cdn.api.twitter.com/1/urls/count.json?url='],
      cb: function (a, b) {if (a && !isNaN(a.count)) return a.count}
    }
  },
  overlays: function () {
    function a (a) {return a.target ? 3 === a.target.nodeType ? a.target.parentNode : a.target : a.srcElement}

    function b (b, c, d, e) {
      var f, g, j, k, l, m, n, o, p = a(b), q = p, r = 0, s = 0
      if (a2a.matches(p, e) && 'false' !== p.getAttribute('data-a2a-overlay')) {
        if (j = p.width < h || p.height < h, k = 'naturalWidth' in p && (p.naturalWidth < i || p.naturalHeight < i), j || k) return
        g = a2a.getPos(p), c.style.display = '', l = c.clientHeight || c.offsetHeight, m = c.clientWidth || c.offsetWidth, d[0] && ('bottom' === d[0] ? s = p.height - l : 'center' === d[0] && (s = u((p.height - l) / 2))), d[1] && ('right' === d[1] ? r = p.width - m : 'center' === d[1] && (r = u((p.width - m) / 2))), n = g.left + r, o = g.top + s, c.style.left = n + 'px', c.style.top = o + 'px', c.setAttribute('data-a2a-media', p.src)
      } else if ('none' !== c.style.display) {
        for (; (f = q) && "body" !== q.tagName.toLowerCase();) {
          if (f === c) return
          q = q.parentNode
        }
        c.style.display = 'none'
      }
    }

    for (var c = a2a.c.overlays || [], d = !!a2a.evOpts() && {passive: !0}, e = window, f = e.innerWidth, g = e.innerHeight, h = f && (f < 375 || g < 375) ? 150 : 200, i = 200, j = 0, k = c.length; j < k; j++) {
      var l, m = c[j], n = m.services || ['pinterest', 'facebook'], o = '', p = m.html, q = m.position, r = m.style,
        s = m.size || 32, t = m.target, u = Math.round
      if (q = q && q.length > 2 ? q.split(' ') : ['top', 'left'], r = !r || 'horizontal' !== r && 'default' !== r ? 'vertical' : 'default', t = t || 'img', p) document.body.insertAdjacentHTML('beforeend', p), l = document.body.lastChild else {
        for (var v = 0, w = n.length; v < w; v++) {o += '<a class="a2a_button_' + n[v] + '"></a>'}
        l = document.createElement('div'), l.className = 'a2a_kit a2a_kit_size_' + s + ' a2a_overlay_style a2a_' + r + '_style', l.innerHTML = o, document.body.insertBefore(l, null)
      }
      l.style.display = 'none', l.style.position = 'absolute', a2a.add_event(document.body, 'mouseover', function (a, c, d) {return function (e) {b(e, a, c, d)}}(l, q, t), d)
    }
    a2a.c.overlays = []
  },
  init_show: function () {
    var a = a2a_config, b = a2a[a2a.type], c = a2a.show_menu
    a.bookmarklet && (b.no_hide = 1, c()), a.show_menu && (b.no_hide = 1, c(!1, a.show_menu))
  },
  unindexed: function (a, b) {
    function c (b) {
      for (var c, d, e = 0, f = b.length; e < f; e++) if (c = b[e], ('undefined' == typeof c.a2a_index || '' === c.a2a_index) && c.className.indexOf('a2a_target') < 0 && c.parentNode.className.indexOf('a2a_kit') < 0 && (d = a(c)), d) return d
      return null
    }

    if (b) return c(a2a.getByClass('a2a_kit', document)) || c(a2a.HTMLcollToArray(document.getElementsByName('a2a_dd')).concat(a2a.getByClass('a2a_dd', document)))
    c(a2a.getByClass('a2a_kit', document).concat(a2a.getByClass('a2a_dd', document), a2a.HTMLcollToArray(document.getElementsByName('a2a_dd'))))
  },
  set_this_index: function (a) {
    function b (a) {
      if (!(a.className.indexOf('a2a_kit') >= 0)) return !1
      a.a2a_kit = 1, a.className.indexOf('a2a_follow') >= 0 && (a.a2a_follow = 1)
    }

    var c = a2a.n
    return a ? (a.a2a_index = c, b(a), a) : a2a.unindexed(function (a) {return a.a2a_index = c, b(a), a}, !0)
  },
  gEl: function (a) {return document.getElementById(a)},
  getByClass: function (a, b, c) {
    return document.getElementsByClassName && /\{\s*\[native code\]\s*\}/.test('' + document.getElementsByClassName) ? a2a.getByClass = function (a, b, c) {
      b = b || a2a.gEl('a2a' + a2a.type + '_dropdown')
      for (var d, e = b.getElementsByClassName(a), f = c ? new RegExp('\\b' + c + '\\b', 'i') : null, g = [], h = 0, i = e.length; h < i; h += 1) d = e[h], f && !f.test(d.nodeName) || g.push(d);
      return g
    } : document.evaluate ? a2a.getByClass = function (a, b, c) {
      c = c || '*', b = b || a2a.gEl('a2a' + a2a.type + '_dropdown')
      for (var d, e, f = a.split(' '), g = '', h = 'http://www.w3.org/1999/xhtml' === document.documentElement.namespaceURI ? 'http://www.w3.org/1999/xhtml' : null, i = [], j = 0, k = f.length; j < k; j += 1) g += '[contains(concat(\' \',@class,\' \'), \' ' + f[j] + ' \')]';
      try {d = document.evaluate('.//' + c + g, b, h, 0, null)} catch (l) {d = document.evaluate('.//' + c + g, b, null, 0, null)}
      for (; e = d.iterateNext();) i.push(e);
      return i
    } : a2a.getByClass = function (a, b, c) {
      c = c || '*', b = b || a2a.gEl('a2a' + a2a.type + '_dropdown')
      for (var d, e, f = a.split(' '), g = [], h = '*' === c && b.all ? b.all : b.getElementsByTagName(c), i = [], j = 0, k = f.length; j < k; j += 1) g.push(new RegExp('(^|\\s)' + f[j] + '(\\s|$)'));
      for (var l = 0, m = h.length; l < m; l += 1) {
        d = h[l], e = !1
        for (var n = 0, o = g.length; n < o && (e = g[n].test(d.className)); n += 1) ;
        e && i.push(d)
      }
      return i
    }, a2a.getByClass(a, b, c)
  },
  HTMLcollToArray: function (a) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b[b.length] = a[d];
    return b
  },
  matches: function (a, b) {
    var c
    if (a.matches) c = 'matches' else if (a.msMatchesSelector) c = 'msMatchesSelector' else {
      if (!a.webkitMatchesSelector) return a2a.matches = function (a, b) {return !1}, !1
      c = 'webkitMatchesSelector'
    }
    return a2a.matches = function (a, b) {return a[c](b)}, a2a.matches(a, b)
  },
  evOpts: function () {
    var a = !1
    try {
      var b = Object.defineProperty({}, 'passive', {get: function () {a = !0}})
      window.addEventListener('test', null, b)
    } catch (c) {}
    return a2a.evOpts = function () {return a}, a
  },
  add_event: function (a, b, c, d) {
    if (a.addEventListener) {
      if ('object' == typeof d) {
        var e = !!d.useCapture
        d = a2a.evOpts() ? d : e
      }
      return a.addEventListener(b, c, d), {destroy: function () {a.removeEventListener(b, c, d)}}
    }
    var f = function () {c.call(a, window.event)}
    return a.attachEvent('on' + b, f), {destroy: function () {a.detachEvent('on' + b, f)}}
  },
  stopPropagation: function (a) {a || (a = window.event), a.cancelBubble = !0, a.stopPropagation && a.stopPropagation()},
  preventDefault: function (a) {a.preventDefault ? a.preventDefault() : a.returnValue = !1},
  defaultPrevented: function (a) {return !!(a.defaultPrevented || !1 === a.returnValue || 'undefined' == typeof a.defaultPrevented && a.getPreventDefault && a.getPreventDefault())},
  onLoad: function (a) {
    var b = window.onload
    'function' != typeof window.onload ? window.onload = a : window.onload = function () {b && b(), a()}
  },
  in_array: function (a, b, c, d, e) {
    if ('object' == typeof b) {
      a = a.toLowerCase()
      for (var f, g = b.length, h = 0; h < g; h++) if (f = d ? b[h][d] : b[h], f = e ? f[e] : f, c) {if (a == f.toLowerCase()) return b[h]} else if (-1 != a.indexOf(f.toLowerCase()) && '' !== f) return b[h]
    }
    return !1
  },
  serialize: function (a, b) {
    var c = []
    for (var d in a) if (a.hasOwnProperty(d)) {
      var e = b ? b + '[' + d + ']' : d, f = a[d]
      c.push('object' == typeof f ? a2a.serialize(f, e) : encodeURIComponent(e) + '=' + encodeURIComponent(f))
    }
    return c.join('&')
  },
  miniLeaveDelay: function () {
    var a = a2a.type, b = 'a2a' + a, c = a2a.gEl, d = a2a.getStyle
    'none' != d(c(b + '_dropdown'), 'display') && 'none' == d(c(b + '_full'), 'display') && (a2a[a].out_delay = setTimeout(function () {a2a.toggle_dropdown('none', a), a2a[a].out_delay = null}, 501))
  },
  miniEnterStay: function () {a2a[a2a.type].out_delay && clearTimeout(a2a[a2a.type].out_delay)},
  toggle_dropdown: function (a, b) {
    if ('none' != a || !a2a[b].no_hide) {
      var c = a2a.gEl, d = c('a2a' + b + '_dropdown'), e = c('a2a' + b + '_shim'),
        f = (document.activeElement, a2a.show_menu.key_listener)
      d.style.display = a, e && 'none' == a2a.getStyle(c('a2a' + b + '_full'), 'display') && (e.style.display = a), a2a.miniEnterStay(), 'none' == a ? (a2a.show_menu['doc_click_listener_' + b].destroy(), delete a2a[b].doc_click_close_mini, delete a2a[b].time_open, f && f[b] && f[b].destroy()) : a2a[b].onclick || a2a[b].time_open || (a2a[b].time_open = setTimeout(function () {a2a[b].time_open = 'OK'}, 501))
    }
  },
  getData: function (a) {
    if (!a) return {}
    for (var b, c = 0, d = a.attributes.length, e = {}; c < d; c++) b = a.attributes[c], b.name && 'data-' == b.name.substr(0, 5) && (e[b.name.substr(5)] = b.value);
    return e
  },
  getStyle: function (a, b) {return a.currentStyle ? a.currentStyle[b.replace(/-(\w)/gi, function (a, b) {return b.toUpperCase()})] : window.getComputedStyle(a, null).getPropertyValue(b)},
  getPos: function (a) {
    var b, c = Math.round
    return 'undefined' == typeof a.getBoundingClientRect ? a2a.getPosOld(a) : (b = a.getBoundingClientRect(), {
      left: c(b.left + a2a.getScrollDocDims('w')),
      top: c(b.top + a2a.getScrollDocDims('h'))
    })
  },
  getPosOld: function (a) {
    var b = 0, c = 0
    do {b += a.offsetLeft || 0, c += a.offsetTop || 0, a = a.offsetParent} while (a)
    return {left: b, top: c}
  },
  getDocDims: function (a) {
    var b = 0, c = 0
    return 'number' == typeof window.innerWidth ? (b = window.innerWidth, c = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (b = document.documentElement.clientWidth, c = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (b = document.body.clientWidth, c = document.body.clientHeight), 'w' == a ? b : c
  },
  getScrollDocDims: function (a) {
    var b = 0, c = 0
    return 'number' == typeof window.pageYOffset ? (b = window.pageXOffset, c = window.pageYOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (b = document.body.scrollLeft, c = document.body.scrollTop) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (b = document.documentElement.scrollLeft, c = document.documentElement.scrollTop), 'w' == a ? b : c
  },
  show_more_less: function (a) {
    var b = a2a.type, c = 'a2a' + b, d = a2a.gEl
    d(c + '_show_more_less')
    a2a.show_full(), a2a.embeds_fix(!0)
  },
  focus_find: function () {
    var a = a2a.gEl('a2a' + a2a.type + '_find')
    'none' != a.parentNode.style.display && a.focus()
  },
  default_services: function (a) {for (var b = a || a2a.type, c = a2a[b].main_services_col_1, d = c.length, e = 0; e < d; e++) c[e].style.display = ''},
  do_find: function () {
    var a, b = a2a.type, c = a2a[b].main_services, d = c.length, e = a2a.gEl('a2a' + b + '_find').value,
      f = a2a.in_array
    if ('' !== e) {
      a = e.split(' ')
      for (var g, h = 0; h < d; h++) g = c[h].a2a.serviceNameLowerCase, f(g, a, !1) ? c[h].style.display = '' : c[h].style.display = 'none'
    } else a2a.default_services()
  },
  selection: function () {
    var a, b = document.getElementsByTagName('meta'), c = b.length
    if (window.getSelection) a = window.getSelection() else if (document.selection) {
      try {a = document.selection.createRange()} catch (g) {a = ''}
      a = a.text ? a.text : ''
    }
    if (a && '' != a) return a
    if (a2a['n' + a2a.n].linkurl == location.href) for (var d, e, f = 0; f < c; f++) if ((d = b[f].getAttribute('name')) && 'description' == d.toLowerCase()) {
      e = b[f].getAttribute('content')
      break
    }
    return e ? e.substring(0, 1200) : ''
  },
  collections: function (a) {
    var b = a2a.gEl, c = a2a[a], d = 'a2a' + a
    c.main_services_col_1 = a2a.getByClass('a2a_i', b(d + '_full_services'), 'a'), c.main_services = c.main_services_col_1, c.email_services = a2a.getByClass('a2a_i', b(d + '_2_col1', 'a')), c.all_services = c.main_services.concat(c.email_services)
  },
  cbs: function (a, b) {
    var c = a2a.c.callbacks || [], d = a2a.c.tracking_callback, e = {}
    d && (d[a] ? c.push(d) : d[0] == a ? (e[a] = d[1], c.push(e)) : 'function' == typeof d && (e[a] = d, c.push(e)), a2a.c.tracking_callback = null)
    for (var f, g = 0, h = c.length; g < h; g++) if ('function' == typeof(f = c[g][a]) && (returned = f(b), 'ready' == a && (f = null), 'undefined' != typeof returned)) return returned
  },
  linker: function (a) {
    function b (a) {return encodeURIComponent(a).replace(/'/g, '%27').replace('%24%7Blink%7D', '${link}').replace('%24%7Blink_noenc%7D', '${link_noenc}').replace('%24%7Blink_nohttp%7D', '${link_nohttp}').replace('%24%7Btitle%7D', '${title}').replace('%24%7Bmedia%7D', '${media}')}

    var c, d = location.href, e = document.title || d, f = a2a['n' + (a.parentNode.a2a_index || a2a.n)], g = f.type,
      h = f.linkurl_implicit && d != f.linkurl ? d : f.linkurl, i = encodeURIComponent(h).replace(/'/g, '%27'),
      j = f.linkname_implicit && e != f.linkname ? e : f.linkname, k = encodeURIComponent(j).replace(/'/g, '%27'),
      l = f.linkmedia, m = !!l && encodeURIComponent(l).replace(/'/g, '%27'),
      n = encodeURIComponent(a2a.selection()).replace(/'/g, '%27'),
      o = !f.track_links || 'page' != g && 'mail' != g ? '' : '&linktrack=' + f.track_links + '&linktrackkey=' + encodeURIComponent(f.track_links_key),
      p = a.a2a.customserviceuri || !1, q = a.a2a.safename, r = a.a2a.stype, s = a.a2a.js_src, t = a.a2a.url,
      u = a.a2a.media, v = a2a.c.templates, w = v[q], x = 'email', y = a2a.c.ssl ? 's' : ''
    if (u && m)  else if (r && 'js' == r && s) a.target = '', c = 'javascript:' == s.substr(0, 11) ? s.replace('${link}', h) : 'javascript:a2a.loadExtScript("' + s + '")' else if (t && (q != x || q == x && a2a.has_touch) && !o) {
      if (a.target = '', 'object' == typeof w) for (var z in w) t = a2a.urlParam(t, z, b(w[z])); else 'string' == typeof w && (t = a2a.urlParam(t, 'text', b(w)))
      c = t.replace('${link}', i).replace('${media}', m).replace('${link_noenc}', h).replace('${link_nohttp}', h.replace(/^https?:\/\//, '')).replace('${title}', k)
    } else p && 'undefined' != p && (c = p.replace(/A2A_LINKNAME_ENC/, k).replace(/A2A_LINKURL_ENC/, i).replace(/A2A_LINKNOTE_ENC/, n))
    return a.href = c || 'http' + y + '://www.addtoany.com/add_to/' + q + '?linkurl=' + i + '&linkname=' + k + (m ? '&linkmedia=' + m : '') + o + function () {
      var a = ''
      return w ? a = '&' + a2a.serialize({template: w}) : v[x] && r && r == x && (a = '&' + a2a.serialize({template: v[x]})), a
    }() + ('feed' == g ? '&type=feed' : '') + '&linknote=' + n, !0
  },
  show_full: function () {
    var a = a2a.type, b = 'a2a' + a, c = a2a.gEl, d = a2a.getByClass, e = c(b + '_find'), f = c(b + '_overlay'),
      g = c(b + '_shim'), h = c(b + '_full'), i = d('a2a_full_header', h)[0], j = c(b + '_full_services'),
      k = d('a2a_full_footer', h)[0]
    h.classList && a2a.getStyle(f, 'transition-duration') && (h.classList.add('a2a_starting'), f.classList.add('a2a_starting')), h.style.display = f.style.display = 'block', g && (g.style.display = 'block'), h.classList && setTimeout(function () {
      h.classList.remove('a2a_starting'), f.classList.remove('a2a_starting')
    }, 1), j.style.cssText = 'height:calc(10px)', j.style.height.length && (j.style.height = 'calc(100% - ' + (i.offsetHeight + k.offsetHeight) + 'px)'), h.focus(), a2a.show_full.key_listener = a2a.add_event(document, 'keydown', function (b) {
      var b = b || window.event, c = b.which || b.keyCode, d = document.activeElement
      27 == c && e != d ? a2a.hide_full(a) : c > 40 && c < 91 && e != d && e.focus()
    })
  },
  hide_full: function (a) {
    function b () {f.style.display = e.style.display = c(d + '_modal').style.display = 'none', shim = c(d + '_shim'), shim && ('none' == a2a.getStyle(c(d + '_dropdown'), 'display') ? shim.style.display = 'none' : (a2a.embeds_fix(), c(d + '_show_more_less').focus())), a2a.show_full.key_listener.destroy(), setTimeout(function () {delete a2a.show_full.key_listener}, 1), f.addEventListener && f.removeEventListener('transitionend', b, !1)}

    var c = a2a.gEl, d = 'a2a' + a, e = c(d + '_full'), f = c(d + '_overlay')
    e.classList && a2a.getStyle(f, 'transition-duration') ? (f.addEventListener('transitionend', b, !1), e.classList.add('a2a_starting'), f.classList.add('a2a_starting')) : b()
  },
  show_menu: function (a, b) {
    a ? a2a.n = a.a2a_index : (a2a.n = a2a.total, a2a[a2a.type].no_hide = 1)
    var c, d, e, f, g, h, i, j, k, l = a2a['n' + a2a.n], m = a2a.type = l.type, n = 'a2a' + m,
      o = a2a.gEl(n + '_dropdown'), p = a2a.has_touch, q = p ? 'touchstart' : 'click',
      r = !(!p || !a2a.evOpts()) && {passive: !0}
    a2a.gEl(n + '_title').value = l.linkname, a2a.toggle_dropdown('block', m), c = [o.clientWidth, o.clientHeight], d = a2a.getDocDims('w'), e = a2a.getDocDims('h'), f = a2a.getScrollDocDims('w'), g = a2a.getScrollDocDims('h'), a ? (h = a.getElementsByTagName('img')[0], h ? (i = a2a.getPos(h), j = h.clientWidth, k = h.clientHeight) : (i = a2a.getPos(a), j = a.offsetWidth, k = a.offsetHeight), i.left - f + c[0] + j > d && (i.left = i.left - c[0] + j - 8), ('up' == l.orientation || 'down' != l.orientation && i.top - g + c[1] + k > e && i.top > c[1]) && (i.top = i.top - c[1] - k), o.style.left = (i.left < 0 ? 0 : i.left) + 2 + 'px', o.style.top = i.top + k + 'px', a2a.embeds_fix()) : (b || (b = {}), o.style.position = b.position || 'absolute', o.style.left = b.left || d / 2 - c[0] / 2 + 'px', o.style.top = b.top || e / 2 - c[1] / 2 + 'px'), a2a[m].doc_click_close_mini || a2a[m].no_hide || (a2a[m].doc_click_close_mini = function (a) {return function (b) {!a2a.ieo() && 'number' == typeof b.button && b.button > 0 || (a2a[m].last_focus && a2a[m].last_focus.focus(), a2a.toggle_dropdown('none', a))}}(m), a2a.show_menu['doc_click_listener_' + m] = a2a.add_event(document, q, a2a[m].doc_click_close_mini, r)), a2a.show_menu.key_listener = a2a.show_menu.key_listener || {}, a2a.show_menu.key_listener[m] = a2a.add_event(document, 'keydown', function (a) {
      var a = a || window.event
      27 != (a.which || a.keyCode) || a2a.show_full.key_listener || a2a.toggle_dropdown('none', m)
    }), a2a.svg.load()
    var s = encodeURIComponent,
      t = 'event=menu_show&url=' + s(location.href) + '&title=' + s(document.title || '') + '&ev_menu_type=' + m
    a2a.util_frame_post(m, t)
  },
  embeds_fix: function (a) {
    var b, c, d, e, f, g = a2a.gEl, h = a2a.type, i = 'a2a' + h, j = g(i + '_shim')
    j || (j = document.createElement('iframe'), j.className = 'a2a_shim', j.id = i + '_shim', j.title = 'AddToAny Shim', j.setAttribute('frameBorder', '0'), j.setAttribute('src', 'javascript:"";'), j.tabIndex = -1, document.body.appendChild(j)), a ? (j.style.left = j.style.top = '0', j.style.width = '', j.style.height = '') : (b = g(i + '_dropdown'), c = parseInt(b.style.left), d = parseInt(b.style.top), e = b.clientWidth || b.offsetWidth, f = b.clientHeight || b.offsetHeight, j.style.left = c + 'px', j.style.top = d + 'px', j.style.width = e + 'px', j.style.height = f + 'px')
  },
  bmBrowser: function (a) {
    var b = a2a.c.localize.Bookmark, c = a2a['n' + a2a.n]
    if (document.all ? 1 == a ? b = a2a.c.localize.AddToYourFavorites : window.external.AddFavorite(c.linkurl, c.linkname) : 1 != a && (a2a.gEl('a2apage_note_BROWSER').innerHTML = '<div class="a2a_note_note">' + a2a.c.localize.BookmarkInstructions + '</div>'), 1 == a) return b
  },
  copyLink: function (a) {
    var b = a2a.gEl, c = (a2a.getByClass, b('a2apage_overlay')), d = (b('a2apage_shim'), b('a2apage_full')),
      e = b('a2apage_modal'), f = b('a2a_copy_link_copied'), g = b('a2a_copy_link_text')
    a2a.copyLink.full_shown = 'none' != a2a.getStyle(d, 'display'), a2a.copyLink.clickListen || (a2a.add_event(g, 'click', function (a) {g.setSelectionRange ? g.setSelectionRange(0, g.value.length) : g.select(), document.execCommand && document.execCommand('copy') && (f.style.display = 'block', setTimeout(function () {e.style.display = f.style.display = 'none', a2a.copyLink.full_shown ? d.style.display = 'block' : a2a.hide_full('page')}, 700))}), a2a.copyLink.clickListen = 1), a2a.type = 'page', 'none' == a2a.getStyle(c, 'display') && a2a.show_full(), d.style.display = 'none', g.value = a, c.style.display = e.style.display = 'block', e.focus()
  },
  loadExtScript: function (a, b, c) {
    var d = document.createElement('script')
    if (d.charset = 'UTF-8', d.src = a, document.body.appendChild(d), 'function' == typeof b) var e = setInterval(function () {
      var a = !1
      try {a = b.call()} catch (d) {}
      a && (clearInterval(e), c.call())
    }, 100)
  },
  track: function (a) {
    var b = new Image(1, 1)
    b.src = a, b.width = 1, b.height = 1
  },
  GA: function (a) {
    var b = window, c = a2a.type, d = function () {
      if ('function' == typeof urchinTracker) a2a.GA.track = function (a, b, c, d, e) {urchinTracker('/addtoany.com/' + d), urchinTracker('/addtoany.com/' + d + '/' + (c || a2a['n' + a2a.n].linkurl)), urchinTracker('/addtoany.com/services/' + b)} else if ('object' == typeof pageTracker) a2a.GA.track = function (a, b, d, e, f) {'feed' != c && pageTracker._trackSocial('AddToAny', a, d || a2a['n' + a2a.n].linkurl), pageTracker._trackEvent(f, a, d || a2a['n' + a2a.n].linkurl)} else if ('object' == typeof _gaq) a2a.GA.track = function (a, b, d, e, f) {'feed' != c && _gaq.push(['_trackSocial', 'AddToAny', a, d || a2a['n' + a2a.n].linkurl]), _gaq.push(['_trackEvent', f, a, d || a2a['n' + a2a.n].linkurl])} else {
        if ('string' != typeof GoogleAnalyticsObject) return
        a2a.GA.track = function (a, d, e, f, g) {'feed' != c && b[GoogleAnalyticsObject]('send', 'social', 'AddToAny', a, {page: e || a2a['n' + a2a.n].linkurl}), b[GoogleAnalyticsObject]('send', 'event', g, a, e || a2a['n' + a2a.n].linkurl)}
      }
    }
    a2a.GA.track = function () {}, a || /loaded|complete/.test(document.readyState) ? d() : a2a.onLoad(d)
  },
  add_services: function () {
    var a, b = a2a.type, c = a2a.gEl, d = parseInt(a2a[b].num_services), e = c('a2a' + b + '_full_services'),
      f = c('a2a' + b + '_mini_services')
    if (a2a[b].custom_services) {
      var g = a2a[b].custom_services, h = g.length, i = a2a.make_service, j = 0
      g.reverse()
      for (var k, l = 0; l < h; l++) g[l] && (j += 1, k = i(g[l][0], g[l][0].replace(/ /g, '_'), !1, null, {}, g[l][1], g[l][2]), e.insertBefore(k, e.firstChild), k = i(g[l][0], g[l][0].replace(/ /g, '_'), !1, null, {}, g[l][1], g[l][2]), f.insertBefore(k, f.firstChild))
    }
    if ('page' == b && a2a.c.add_services) for (var g = a2a.c.add_services, h = g.length, i = a2a.make_service, j = 0, m = a2a.c.ssl, l = 0; l < h; l++) g[l] && (j += 1, m && (g[l].icon = !1), k = i(g[l].name, g[l].safe_name, !1, null, {}, !1, g[l].icon), e.insertBefore(k, e.firstChild), k = i(g[l].name, g[l].safe_name, !1, null, {}, !1, g[l].icon), f.insertBefore(k, f.firstChild));
    if (a = a2a.getByClass('a2a_i', f, 'a'), a.length > d) for (var l = 0, n = a.length; l < n - d; l++) f.removeChild(f.lastChild)
  },
  util_frame_make: function (a) {
    var b = document.createElement('iframe'), c = document.createElement('div'), d = encodeURIComponent,
      e = document.referrer ? d(document.referrer) : '', f = d(location.href),
      g = (d(document.title || ''), navigator.browserLanguage || navigator.language, a2a.c.no_3p ? '&no_3p=1' : '')
    b.id = 'a2a' + a + '_sm_ifr', b.width = b.height = 1, b.style.width = b.style.height = c.style.width = c.style.height = '1px', b.style.top = b.style.left = b.frameborder = b.style.border = 0, b.style.position = c.style.position = 'absolute', b.style.zIndex = c.style.zIndex = 1e5, b.title = 'AddToAny Utility Frame', b.setAttribute('transparency', 'true'), b.setAttribute('allowTransparency', 'true'), b.setAttribute('frameBorder', '0'), b.src = 'https://static.addtoany.com/menu/sm.16.html#type=' + a + '&event=load&url=' + f + '&referrer=' + e + g, c.style.top = '0', c.style.visibility = 'hidden', a2a.gEl('a2a' + a + '_dropdown').parentNode.insertBefore(c, null), c.insertBefore(b, null)
  },
  util_frame_listen: function (a) {
    a2a.util_frame_make(a), window.postMessage && !a2a[a].message_event && (a2a.add_event(window, 'message', function (a) {
      if ('.addtoany.com' === a.origin.substr(-13)) {
        var b = 'string' == typeof a.data ? a.data.split('=') : [''], c = b[0].substr(4), d = b[1], e = c.substr(0, 4)
        c == e + '_services' && (d = '' != d && d.split(','), a2a.top_services(d, e, ' a2a_sss'), a2a.collections(e), a2a.default_services(e)), e && (a2a.gEl('a2a' + e + '_sm_ifr').style.display = 'none')
      }
    }), a2a[a].message_event = 1)
  },
  util_frame_post: function (a, b) {window.postMessage && a2a.gEl('a2a' + a + '_sm_ifr').contentWindow.postMessage(b, '*')},
  urlParam: function (a, b, c) {
    var d, e, f = new RegExp('[?&]' + b.replace(/[.\\+*?\[\^\]$(){}=!<>|:\-]/g, '\\$&') + '=([^&#]*)', 'i'),
      g = f.exec(a)
    if (null === g) {d = /\?/.test(a) ? '&' : '?', e = a + d + b + '=' + c} else d = g[0].charAt(0), e = a.replace(f, d + b + '=' + c)
    return e
  },
  fix_icons: function () {
    var a = a2a.ieo()
    if (a && a < 9) {
      var b = a2a.getByClass('a2a_s_a2a', document), b = b[0], c = a2a.fix_icons.tryNum || 0
      if (b && !b.a2aFixed && !b.currentStyle.backgroundImage.split('"')[1] && c < 999) return a2a.fix_icons.tryNum = c + 1, setTimeout(a2a.fix_icons, 99)
      for (var d, e, f, g, h = 0, i = a2a.getByClass('a2a_svg', document), j = i.length; h < j; h++) g = i[h], d = g.currentStyle, e = d.backgroundImage.split('"')[1], !g.a2aFixed && e && (f = new Image, f.style.backgroundColor = d.backgroundColor, f.style.border = 0, f.style.height = d.height, f.style.width = d.width, f.src = e, g.style.background = 'none', g.insertBefore(f, g.firstChild)), g.a2aFixed = 1
    } else fix_icons = function () {}
  },
  arrange_services: function () {
    var a = a2a.type, b = a2a.c.prioritize
    b && a2a.top_services(b, a), a2a.add_services()
  },
  top_services: function (a, b, c) {
    var d = b || a2a.type, e = a2a.in_array, f = a2a.make_service, g = parseInt(a2a[d].num_services),
      h = a2a.gEl('a2a' + d + '_full_services'), i = a2a.gEl('a2a' + d + '_mini_services'),
      j = a2a.getByClass('a2a_i', h, 'a'), k = a2a.getByClass('a2a_i', i, 'a'), l = []
    if (a) {
      for (var m = a.length - 1, c = c; m > -1; m--) {
        var n = a[m], o = e(n, j, !0, 'a2a', 'safename')
        o && (c && (o.className = o.className + c), h.insertBefore(o, h.firstChild), l.push(o))
      }
      if (l.length > 0) {
        for (var p, q, r, m = 0, c = c; m < l.length; m++) (p = e(l[m].a2a.safename, k, !0, 'a2a', 'safename')) ? r = p : (q = l[m].a2a, r = f(q.servicename, q.safename, q.serviceIcon, q.serviceColor, {
          src: q.js_src,
          url: q.url,
          type: q.serviceType,
          pu: q.popup,
          media: q.media
        })), c && (r.className = r.className + c), i.insertBefore(r, i.firstChild);
        if (k = a2a.getByClass('a2a_i', i, 'a'), k.length > g) for (var m = 0, s = k.length; m < s - g; m++) i.removeChild(i.lastChild)
      }
    }
  },
  css: function () {
    var a, b, c = a2a.c, d = c.css = document.createElement('style'), e = c.color_main || 'EEE',
      f = c.color_bg || 'FFF', g = c.color_border || 'CCC', h = c.color_link_text || '0166FF',
      i = c.color_link_text_hover || '2A2A2A', j = (c.color_link_text_hover, c.color_link_text || '2A2A2A'),
      k = (e.toLowerCase(), c.color_link_text || '2A2A2A'), l = c.color_border || g, m = '{background-position:0 ',
      n = 'px!important}.a2a_i_', o = '.a2a_menu', p = 'border', q = 'background-color:', r = 'color:', s = 'margin:',
      t = 'padding:'
    a = '.a2a_menu,.a2a_menu * {-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;float:none;margin:0;padding:0;position: static;height:auto;width:auto;}.a2a_menu {border-radius: 6px;display:none;direction:ltr;background:#' + f + ';font: 16px sans-serif-light, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Arial, Helvetica, "Liberation Sans", sans-serif;' + r + '#000;line-height:12px;' + p + ': 1px solid #' + g + ';vertical-align:baseline;outline: 0; overflow:hidden;}.a2a_mini {min-width:200px;position:absolute;width: 300px;z-index:9999997;}.a2a_overlay {display: none;background: #' + g + '; _height: expression( ((e=document.documentElement.clientHeight)?e:document.body.clientHeight)+"px" ); _width: expression( ((e=document.documentElement.clientWidth)?e:document.body.clientWidth)+"px" ); filter: alpha(opacity=50); opacity: .7;position: fixed;_position: absolute; top: 0;right: 0;left: 0;bottom: 0;z-index: 9999998;-webkit-tap-highlight-' + r + ' rgba(0,0,0,0);transition: opacity .14s;}.a2a_full {background: #' + f + ';height: auto;height: calc(320px);top: 15%;_top: expression(40+((e=document.documentElement.scrollTop)?e:document.body.scrollTop)+"px"); left: 50%;margin-left: -320px; position: fixed;_position: absolute; text-align: center;width: 640px;z-index: 9999999;     transition: transform .14s, opacity .14s;}.a2a_full_header,.a2a_full_services,.a2a_full_footer {' + p + ': 0;' + s + ' 0;' + t + ' 12px;box-sizing: ' + p + '-box;}.a2a_full_header {padding-bottom: 8px;}.a2a_full_services {height: 280px; overflow-y: scroll;' + t + ' 0 12px;-webkit-overflow-scrolling: touch;}.a2a_full_services .a2a_i {display: inline-block;float: none;width: 181px;width: calc(33.334% - 18px);}div.a2a_full_footer {font-size: 12px;text-align: center;' + t + ' 8px 14px;}div.a2a_full_footer a,div.a2a_full_footer a:visited {display: inline;font-size: 12px;line-height:14px;' + t + ' 8px 14px; }div.a2a_full_footer a:hover,div.a2a_full_footer a:focus {background: none;' + p + ': 0;' + r + ' #' + h + ';}div.a2a_full_footer a span.a2a_s_a2a,div.a2a_full_footer a span.a2a_w_a2a {background-size: 14px;' + p + '-radius: 3px;display: inline-block;height:14px;line-height:14px;' + s + ' 0 3px 0 0;vertical-align: top;*vertical-align: middle; width:14px;}.a2a_modal {background: #' + f + ';font: 24px sans-serif-light, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Arial, Helvetica, "Liberation Sans", sans-serif;height: auto;top: 50%;_top: expression(40+((e=document.documentElement.scrollTop)?e:document.body.scrollTop)+"px"); left: 50%;margin-left: -320px; margin-top: -36px; position: fixed;_position: absolute; text-align: center;width: 640px;z-index: 9999999;     transition: transform .14s, opacity .14s;-webkit-tap-highlight-' + r + ' rgba(0,0,0,0);}.a2a_copy_link_container {position: relative;}span.a2a_s_link#a2a_copy_link_icon,span.a2a_w_link#a2a_copy_link_icon {background-size: 48px;' + p + '-radius: 0;display: inline-block;height:48px;left: 0;line-height:48px;' + s + ' 0 3px 0 0;position: absolute;vertical-align: top;*vertical-align: middle; width:48px;}#a2a_copy_link_text {' + q + ' transparent;_' + q + ' #' + f + ';' + p + ': 0;' + r + ' #' + k + ';font: inherit;height: 48px;left: 62px;' + t + ' 0;position: relative;width: 564px;width: calc(100% - 76px);}#a2a_copy_link_copied {' + q + ' #0166ff;background: linear-gradient(90deg, #0166ff 80%, #9cbfff);' + r + ' #fff;display: none;font: inherit;font-size: 16px;' + t + ' 6px 8px;}@media print {.a2a_floating_style,' + o + ',.a2a_overlay {visibility: hidden;}}@keyframes a2aFadeIn {from { opacity: 0; }  to { opacity: 1; }}.a2a_starting {opacity: 0;}.a2a_starting.a2a_full {transform: scale(.8);}@media (max-width: 639px) {.a2a_full {' + p + '-radius: 0;top: 15%;left: 0;margin-left: auto;width: 100%;}.a2a_modal {left: 0;margin-left: 10px;width: calc(100% - 20px);}}@media (min-width: 318px) and (max-width: 437px) {.a2a_full .a2a_full_services .a2a_i {width: calc(50% - 18px);}}@media (max-width: 317px) {.a2a_full .a2a_full_services .a2a_i {width: calc(100% - 18px);}}@media (max-height: 436px) {.a2a_full {bottom: 40px;height: auto;top: 40px;}}' + o + ' a {' + r + '#' + h + ';text-decoration:none;font: 16px sans-serif-light, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Arial, Helvetica, "Liberation Sans", sans-serif;line-height:14px;height:auto;width:auto;outline:none;-moz-outline:none;}' + o + ' a:visited{' + r + '#' + h + '}' + o + ' a:hover,' + o + ' a:active,' + o + ' a:focus{' + r + ' #' + i + ';' + p + '-' + r + ' #' + e + ';' + p + '-style: solid;' + q + ' #' + e + ';text-decoration: none;}' + o + ' span.a2a_s_find {background-size: 24px;height:24px;left: 8px;position:absolute;top: 7px;width:24px;}' + o + ' span.a2a_s_find svg {' + q + ' #' + f + ';}' + o + ' span.a2a_s_find svg path {fill: #' + l + ';}#a2a_menu_container{display:inline-block} #a2a_menu_container{_display:inline} ' + o + '_find_container {' + p + ': 1px solid #' + l + ';' + p + '-radius: 6px;' + t + ' 2px 24px 2px 0;position: relative;text-align: left;}.a2a_cols_container .a2a_col1{overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}' + o + ' input,' + o + ' input[type="text"],input.a2a_copy_link_text,input.a2a_copy_link_text[type="text"] { display:block;background-image:none;box-shadow:none;line-height:100%;' + s + '0;outline:0;overflow:hidden;' + t + '0;-moz-box-shadow:none;-webkit-box-shadow:none;-webkit-appearance:none} ' + o + '_find_container input' + o + '_find {' + q + ' transparent;_' + q + ' #' + f + ';' + p + ': 0;' + r + ' #' + k + ';font: inherit;font-size: 16px;height: 28px;line-height: 20px;left: 38px;outline: 0;' + t + ' 2px 0;position: relative;width: 99%;}' + ('undefined' != typeof document.body.style.maxHeight ? '.a2a_clear{clear:both}' : '.a2a_clear{clear:both;height:0;width:0;line-height:0;font-size:0}') + ' .a2a_svg {background-repeat:no-repeat;display:block;overflow:hidden;height:32px;line-height:32px;width:32px;}.a2a_svg svg{background-repeat: no-repeat;background-position: 50% 50%;' + p + ': none;display: block;left: 0;' + s + ' 0 auto;overflow: hidden;' + t + ' 0;position: relative;top: 0;}a.a2a_i,i.a2a_i{display:block;float:left;' + p + ':1px solid #' + f + ';line-height:24px;' + t + '6px 8px;text-align:left;white-space:nowrap;overflow: hidden;text-overflow: ellipsis;width:132px;}a.a2a_i span,a.a2a_more span {display: inline-block;overflow: hidden;vertical-align: top;*vertical-align: middle; }a.a2a_i .a2a_svg {' + s + ' 0 6px 0 0;}a.a2a_i .a2a_svg,a.a2a_more .a2a_svg {background-size: 24px;height:24px;line-height:24px;width:24px;}a.a2a_sss:hover {' + p + '-left: 1px solid #' + g + ';}a' + o + '_show_more_less{' + p + '-bottom:1px solid #' + f + ';' + p + '-left:0;' + p + '-right:0;line-height:24px;' + s + '6px 0 0;' + t + '6px;-webkit-touch-callout:none}a' + o + '_show_more_less span{display:inline-block;height:24px;' + s + '0 6px 0 0;} .a2a_kit .a2a_svg { background-repeat: repeat; }.a2a_default_style a{float:left;line-height:16px;' + t + '0 2px}.a2a_default_style a:hover .a2a_svg,.a2a_floating_style a:hover .a2a_svg,.a2a_overlay_style a:hover .a2a_svg svg {opacity: .7;}.a2a_overlay_style.a2a_default_style a:hover .a2a_svg {opacity: 1;}.a2a_default_style .a2a_count,.a2a_default_style .a2a_svg,.a2a_floating_style .a2a_svg,.a2a_vertical_style .a2a_svg,.a2a_vertical_style .a2a_count,' + o + ' .a2a_svg {' + p + '-radius:4px ;}.a2a_default_style .a2a_dd, .a2a_default_style .a2a_svg,.a2a_default_style .a2a_counter img { float: left;}.a2a_default_style .a2a_img_text{margin-right:4px}.a2a_default_style .a2a_divider{' + p + '-left:1px solid #000;display:inline;float:left;height:16px;line-height:16px;' + s + '0 5px}.a2a_kit a{cursor:pointer}.a2a_floating_style { ' + q + ' #fff; ' + p + '-radius: 6px; position: fixed; z-index: 9999995;}.a2a_floating_style,.a2a_overlay_style {animation: a2aFadeIn .2s ease-in;' + t + ' 4px;}.a2a_vertical_style a { clear: left;display: block;overflow: hidden;' + t + ' 4px;text-decoration: none; }.a2a_floating_style.a2a_default_style { bottom: 0;}.a2a_floating_style.a2a_default_style a,.a2a_overlay_style.a2a_default_style a { ' + t + ' 4px;}.a2a_count {' + q + ' #fff;' + p + ': 1px solid #ccc;box-sizing: ' + p + '-box;' + r + ' #2a2a2a;display: block;float: left;font: 12px Arial,Helvetica,sans-serif;height: 16px;margin-left: 4px;position: relative;text-align: center;width: 50px;}.a2a_count:before,.a2a_count:after {' + p + ': solid transparent;' + p + '-width: 4px 4px 4px 0;content: "";height: 0;left: 0;line-height: 0;' + s + ' -4px 0 0 -4px;position: absolute;top: 50%;width: 0;}.a2a_count:before {' + p + '-right-' + r + ' #ccc;}.a2a_count:after {' + p + '-right-' + r + ' #fff;margin-left: -3px;}.a2a_count span {    animation: a2aFadeIn .14s ease-in;}.a2a_vertical_style .a2a_counter img {display: block;}.a2a_vertical_style .a2a_count {float: none;margin-left: 0;margin-top: 6px; }.a2a_vertical_style .a2a_count:before,.a2a_vertical_style .a2a_count:after {' + p + ': solid transparent;' + p + '-width: 0 4px 4px 4px;content: "";height: 0;left: 50%;line-height: 0;' + s + ' -4px 0 0 -4px;position: absolute;top: 0;width: 0;}.a2a_vertical_style .a2a_count:before {' + p + '-bottom-' + r + ' #ccc;}.a2a_vertical_style .a2a_count:after {' + p + '-bottom-' + r + ' #fff;margin-top: -3px;}.a2a_nowrap{white-space:nowrap}.a2a_note{' + s + '0 auto;' + t + '9px;font-size:12px;text-align:center}.a2a_note .a2a_note_note{' + s + '0;' + r + '#' + j + '}.a2a_wide a{display:block;margin-top:3px;' + p + '-top:1px solid #' + e + ';text-align:center}.a2a_label {position: absolute !important;clip: rect(1px 1px 1px 1px); clip: rect(1px, 1px, 1px, 1px); clip-path: polygon(0px 0px, 0px 0px, 0px 0px);-webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);overflow: hidden; height: 1px;width: 1px;}iframe.a2a_shim {' + q + ' transparent;' + p + ': 0;bottom: 0;filter: alpha(opacity=0); height: 100%;left: 0;right: 0;top: 0;position: absolute;width: 100%;z-index: 9999996;_height: expression( ((e=document.documentElement.clientHeight)?e:document.body.clientHeight)+"px" ); _width: expression( ((e=document.documentElement.clientWidth)?e:document.body.clientWidth)+"px" ); }.a2a_kit,' + o + ',.a2a_modal,.a2a_overlay {-ms-touch-action:manipulation;touch-action:manipulation;}.a2a_dd img {' + p + ':0;}.a2a_button_facebook_like iframe {max-width: none;}iframe[id^="PIN_"][id$="_nag"] {display: none !important;}.a2a_i_a2a' + m + '0!important}.a2a_i_a2a_sm' + m + '-17' + n + 'agregator' + m + '-34' + n + 'amazon' + m + '-51' + n + 'aol' + m + '-68' + n + 'app_net' + m + '-85' + n + 'baidu' + m + '-102' + n + 'balatarin' + m + '-119' + n + 'behance' + m + '-136' + n + 'bibsonomy' + m + '-153' + n + 'bitty' + m + '-170' + n + 'blinklist' + m + '-187' + n + 'blogger' + m + '-204' + n + 'blogmarks' + m + '-221' + n + 'bookmark' + m + '-238' + n + 'bookmarks_fr' + m + '-255' + n + 'box' + m + '-272' + n + 'buddymarks' + m + '-289' + n + 'buffer' + m + '-306' + n + 'care2' + m + '-323' + n + 'chrome' + m + '-340' + n + 'citeulike' + m + '-357' + n + 'dailyrotation' + m + '-374' + n + 'default' + m + '-391' + n + 'delicious' + m + '-408' + n + 'designfloat' + m + '-425' + n + 'diary_ru' + m + '-442' + n + 'diaspora' + m + '-459' + n + 'digg' + m + '-476' + n + 'dihitt' + m + '-493' + n + 'diigo' + m + '-510' + n + 'dzone' + m + '-527' + n + 'email' + m + '-544' + n + 'evernote' + m + '-561' + n + 'facebook' + m + '-578' + n + 'fark' + m + '-595' + n + 'feed' + m + '-612' + n + 'feedblitz' + m + '-629' + n + 'feedbucket' + m + '-646' + n + 'feedly' + m + '-663' + n + 'feedmailer' + m + '-680' + n + 'find' + m + '-697' + n + 'firefox' + m + '-714' + n + 'flickr' + m + '-731' + n + 'flipboard' + m + '-748' + n + 'folkd' + m + '-765' + n + 'foursquare' + m + '-782' + n + 'github' + m + '-799' + n + 'gmail' + m + '-816' + n + 'google' + m + '-833' + n + 'google_classroom' + m + '-850' + n + 'google_plus' + m + '-867' + n + 'hatena' + m + '-884' + n + 'instapaper' + m + '-901' + n + 'itunes' + m + '-918' + n + 'jamespot' + m + '-935' + n + 'kakao' + m + '-952' + n + 'kik' + m + '-969' + n + 'kindle' + m + '-986' + n + 'klipfolio' + m + '-1003' + n + 'known' + m + '-1020' + n + 'line' + m + '-1037' + n + 'link' + m + '-1054' + n + 'linkedin' + m + '-1071' + n + 'livejournal' + m + '-1088' + n + 'mail_ru' + m + '-1105' + n + 'mendeley' + m + '-1122' + n + 'meneame' + m + '-1139' + n + 'miro' + m + '-1156' + n + 'mixi' + m + '-1173' + n + 'myspace' + m + '-1190' + n + 'netlog' + m + '-1207' + n + 'netvibes' + m + '-1224' + n + 'netvouz' + m + '-1241' + n + 'newsalloy' + m + '-1258' + n + 'newsisfree' + m + '-1275' + n + 'newsvine' + m + '-1292' + n + 'nujij' + m + '-1309' + n + 'odnoklassniki' + m + '-1326' + n + 'oknotizie' + m + '-1343' + n + 'oldreader' + m + '-1360' + n + 'outlook_com' + m + '-1377' + n + 'pinboard' + m + '-1394' + n + 'pinterest' + m + '-1411' + n + 'plurk' + m + '-1428' + n + 'pocket' + m + '-1445' + n + 'podnova' + m + '-1462' + n + 'print' + m + '-1479' + n + 'printfriendly' + m + '-1496' + n + 'protopage' + m + '-1513' + n + 'pusha' + m + '-1530' + n + 'qzone' + m + '-1547' + n + 'reddit' + m + '-1564' + n + 'rediff' + m + '-1581' + n + 'renren' + m + '-1598' + n + 'segnalo' + m + '-1615' + n + 'share' + m + '-1632' + n + 'sina_weibo' + m + '-1649' + n + 'sitejot' + m + '-1666' + n + 'skype' + m + '-1683' + n + 'slashdot' + m + '-1700' + n + 'sms' + m + '-1717' + n + 'snapchat' + m + '-1734' + n + 'stumbleupon' + m + '-1751' + n + 'stumpedia' + m + '-1768' + n + 'svejo' + m + '-1785' + n + 'symbaloo' + m + '-1802' + n + 'telegram' + m + '-1819' + n + 'thefreedictionary' + m + '-1836' + n + 'thefreelibrary' + m + '-1853' + n + 'tumblr' + m + '-1870' + n + 'twiddla' + m + '-1887' + n + 'twitter' + m + '-1904' + n + 'typepad' + m, a += '-1921' + n + 'viadeo' + m + '-1938' + n + 'viber' + m + '-1955' + n + 'vimeo' + m + '-1972' + n + 'vk' + m + '-1989' + n + 'wanelo' + m + '-2006' + n + 'webnews' + m + '-2023' + n + 'wechat' + m + '-2040' + n + 'whatsapp' + m + '-2057' + n + 'winksite' + m + '-2074' + n + 'wordpress' + m + '-2091' + n + 'wykop' + m + '-2108' + n + 'xing' + m + '-2125' + n + 'y18' + m + '-2142' + n + 'yahoo' + m + '-2159' + n + 'yim' + m + '-2176' + n + 'yoolink' + m + '-2193' + n + 'youmob' + m + '-2210' + n + 'youtube' + m + '-2227' + n + 'yummly' + m + '-2244px!important}', d.setAttribute('type', 'text/css'), a2a.head_tag.appendChild(d), d.styleSheet ? d.styleSheet.cssText = a : (b = document.createTextNode(a), d.appendChild(b))
  },
  svg_css: function () {
    a2a.init('page')
    var a = a2a.c.css.sheet || a2a.c.css.styleSheet || {}, b = 'insertRule' in a, c = 'addRule' in a
    all_services = a2a.services.concat([[0, 0, 'a2a', '0166FF']])
    for (var d, e, f = 0, g = all_services.length; f < g; f++) d = '.a2a_s_' + all_services[f][2], e = 'background-color:#' + all_services[f][3] + ';', b ? a.insertRule(d + '{' + e + '}', 0) : c && a.addRule(d, e, 0);
    a2a.svg.load(!0), a2a.svg_css = function () {}
  },
  svg: {
    icons: {},
    queue: [],
    tagO: '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">',
    tagC: '</svg>',
    fill: function (a, b) {return a.replace(/#FFF/gi, b)},
    get: function (a, b, c) {
      var d = a2a.svg, e = d.fill
      return icons = d.icons, svg_tag_open = d.tagO, svg_tag_close = d.tagC, svg_src = icons[a], svg_src_default = icons.a2a, svg_src ? (svg_src = c ? e(svg_src, c) : svg_src, svg_tag_open + svg_src + svg_tag_close) : svg_src_default ? (svg_src_default = c ? e(svg_src_default, c) : svg_src_default, svg_tag_open + svg_src_default + svg_tag_close) : (a2a.svg.queue.push({
        name: a,
        node: b,
        color: c
      }), 'pending')
    },
    set: function (a) {
      var b = a2a.svg, c = b.queue
      if (icons = b.icons = a, svg_tag_open = b.tagO, svg_tag_close = b.tagC, icons.a2a) for (var d, e, f, g = 0, h = c.length; g < h; g++) d = c[g], e = d.name, color = d.color, f = icons[e] ? icons[e] : icons.a2a, f = color ? b.fill(f, color) : f, d.node.innerHTML = svg_tag_open + f + svg_tag_close
    },
    load: function (a) {
      var b = a2a.svg.works(), c = new window.Image
      c.onerror = function () {a2a.svg.loadCSS(!1)}, c.onload = function () {
        var d = 1 === c.width && 1 === c.height
        b && !a ? a2a.svg.loadJS(document) : a2a.svg.loadCSS(d), a2a.svg.load = function (a) {return function (b) {b && a2a.svg.loadCSS(a)}}(d)
      }, a2a.svg.load = function () {}, c.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
    },
    loadCSS: function (a) {
      var b = a2a.c.static_server, c = a2a.fix_icons, d = ['icons.23.svg.css', 'icons.23.png.css', 'icons.23.old.css'],
        e = a2a.svg.works(), f = window.document.createElement('link'),
        g = a && e && 'https://static.addtoany.com/menu' != b ? b + '/' : b + '/svg/'
      f.rel = 'stylesheet', f.href = g + d[a && e ? 0 : a ? 1 : 2], a2a.head_tag.appendChild(f), c(), a2a.svg.loadCSS = c
    },
    loadJS: function () {
      var a = document, b = a2a.c.static_server, c = a.createElement('script'), d = a.getElementsByTagName('script')[0],
        e = 'https://static.addtoany.com/menu' != b ? b + '/' : b + '/svg/'
      c.async = !0, c.src = e + 'icons.23.svg.js', d.parentNode.insertBefore(c, d), a2a.svg.loadJS = function () {}
    },
    works: function () {
      var a = window,
        b = !(!a.document.createElementNS || !a.document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect || !document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1') || a.opera && -1 === navigator.userAgent.indexOf('Chrome'))
      return a2a.svg.works = function () {return b}, b
    }
  },
  make_service: function (a, b, c, d, e, f, g) {
    var h, i, j = document.createElement('a'), k = a2a.c, l = function () {a2a.linker(this)}, m = a2a.type, e = e || {},
      n = k.icon_color, o = n ? n.split(',', 2) : n, p = o ? o[0] : o, q = o ? o[1] : o
    return j.rel = 'nofollow noopener', j.className = 'a2a_i', j.href = '/#' + b, j.target = '_blank', j.a2a = {}, j.a2a.safename = b, j.a2a.servicename = a, j.a2a.serviceNameLowerCase = a.toLowerCase(), j.a2a.serviceIcon = c, j.a2a.serviceColor = d, j.a2a.serviceType = e.type, j.innerHTML = '<span></span>' + a + ' ', h = j.firstChild, e.type && (j.a2a.stype = e.type), e.src && (j.a2a.js_src = e.src), e.url && (j.a2a.url = e.url), e.pu && (j.a2a.popup = 1), e.media && (j.a2a.media = 1), f && (j.a2a.customserviceuri = f), g ? (h.style.backgroundImage = 'url(' + g + ')', h.className = 'a2a_svg a2a_s__default') : n && a2a.svg.works() ? (h.className = 'a2a_svg a2a_s__default a2a_s_' + c, p && 'unset' != p ? h.style.backgroundColor = p : d && (h.style.backgroundColor = '#' + d), q && (q = q.trim())) : c ? (h.className = 'a2a_svg a2a_s__default a2a_s_' + c, d && (h.style.backgroundColor = '#' + d)) : h.className = 'a2a_svg a2a_s__default', g || 'pending' !== (i = a2a.svg.get(c, h, q)) && (h.innerHTML = i), a2a.add_event(j, 'mousedown', l), a2a.add_event(j, 'keydown', l), a2a.add_event(j, 'click', function (b) {
      var c = a2a['n' + a2a.n], d = {node: j, service: a, title: c.linkname, url: c.linkurl}, e = a2a.cbs('share', d)
      void 0 !== e && (e.url && (c.linkurl = e.url, c.linkurl_implicit = !1), e.title && (c.linkname = e.title, c.linkname_implicit = !1), a2a.linker(j), e.stop && a2a.preventDefault(b))
    }), a2a.add_event(j, 'click', function (c) {
      var d = encodeURIComponent, e = a2a['n' + a2a.n], f = 'page' == m ? 'pages' : 'subscriptions',
        g = 'page' == m ? 'AddToAny Share/Save Button' : 'AddToAny Subscribe Button', h = screen.height,
        i = 'event=service_click&url=' + d(location.href) + '&title=' + d(document.title || '') + '&ev_service=' + d(b) + '&ev_service_type=menu&ev_menu_type=' + m + '&ev_url=' + d(e.linkurl) + '&ev_title=' + d(e.linkname).replace(/'/g, '%27')
      j.a2a.popup && !a2a.defaultPrevented(c) && 'javascript:' != j.href.substr(0, 11) && (a2a.preventDefault(c), window.open(j.href, '_blank', 'toolbar=0,personalbar=0,resizable,scrollbars,status,width=550,height=450,top=' + (h > 450 ? Math.round(h / 2 - 225) : 40) + ',left=' + Math.round(screen.width / 2 - 275))), a2a.util_frame_post(m, i), a2a.GA.track(a, b, e.linkurl, f, g)
    }), j
  },
  i18n: function () {
    if ('https://static.addtoany.com/menu' != a2a.c.static_server) return !1
    var a = ['ar', 'id', 'ms', 'bn', 'bs', 'bg', 'ca', 'ca-AD', 'ca-ES', 'cs', 'cy', 'da', 'de', 'dv', 'el', 'et', 'es', 'es-AR', 'es-VE', 'eo', 'en-US', 'eu', 'fa', 'fr', 'fr-CA', 'gd', 'he', 'hi', 'hr', 'is', 'it', 'ja', 'ko', 'ku', 'lv', 'lt', 'li', 'hu', 'mk', 'nl', 'no', 'pl', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ru', 'sr', 'fi', 'sk', 'sl', 'sv', 'ta', 'te', 'tr', 'uk', 'vi', 'zh-CN', 'zh-TW'],
      b = a2a.c.locale || (navigator.browserLanguage || navigator.language).toLowerCase(), c = a2a.in_array(b, a, !0)
    if (!c) {
      var d = b.indexOf('-');
      -1 != d && (c = a2a.in_array(b.substr(0, d), a, !0))
    }
    return !('en-us' == b || !c) && c
  }
}
a2a.c = a2a_config, a2a.make_once = function (a) {
  if (a2a.type = a2a.c.menu_type || a, !a2a[a2a.type] && !window['a2a' + a2a.type + '_init']) {
    a2a[a2a.type] = {}, window.a2a_show_dropdown = a2a.show_menu, window.a2a_miniLeaveDelay = a2a.miniLeaveDelay, window.a2a_init = a2a.init, a2a['create_' + a2a.type + '_dropdown'] = function (a, b) {
      var c, d, e, f = a2a.gEl, g = a2a.type = a, h = 'a2a' + g, i = a2a.c, j = a2a.ieo(), k = a2a.has_menter,
        l = document.createElement('i'), m = document.createDocumentFragment(), n = document.createDocumentFragment(),
        o = (document.createElement('a'), i.icon_color), p = o ? o.split(',', 2) : o, q = p ? p[0] : p,
        r = p ? p[1] : p, s = r || '#FFF', t = ' style="background-color:' + (q && 'unset' != q ? q : '#0166ff') + '"',
        u = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="' + s + '"><path d="M14 7h4v18h-4z"/><path d="M7 14h18v4H7z"/></g></svg>',
        v = i.localize
      a2a.css(), v = i.localize = {
        Share: v.Share || 'Share',
        Save: v.Save || 'Save',
        Subscribe: v.Subscribe || 'Subscribe',
        Email: v.Email || 'Email',
        Bookmark: v.Bookmark || 'Bookmark',
        ShowAll: v.ShowAll || 'Show all',
        ShowLess: v.ShowLess || 'Show less',
        FindAnyServiceToAddTo: v.FindAnyServiceToAddTo || 'Find any service',
        PoweredBy: v.PoweredBy || 'By',
        AnyEmail: 'Any email',
        ShareViaEmail: v.ShareViaEmail || 'Share via email',
        SubscribeViaEmail: v.SubscribeViaEmail || 'Subscribe via email',
        BookmarkInYourBrowser: v.BookmarkInYourBrowser || 'Bookmark in your browser',
        BookmarkInstructions: v.BookmarkInstructions || 'Press Ctrl+D or &#8984;+D to bookmark this page',
        AddToYourFavorites: v.AddToYourFavorites || 'Add to Favorites',
        SendFromWebOrProgram: v.SendFromWebOrProgram || 'Send from any other email service',
        EmailProgram: v.EmailProgram || 'Email application',
        More: v.More || 'More&#8230;'
      }
      var w = '<div class="a2a_overlay" id="a2a' + g + '_overlay"></div>'
      w += '<div id="a2a' + g + '_modal" class="a2a_menu a2a_modal" role="dialog" tabindex="-1" aria-label="Copy link" style="display:none">',
      'page' == g && (w += '<div class="a2a_copy_link_container"><span id="a2a_copy_link_icon" class="a2a_svg a2a_s_link"' + t + ' onclick="a2a.gEl(\'a2a_copy_link_text\').click()"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="' + s + '" d="M24.4 21.18c0-.36-.1-.67-.36-.92l-2.8-2.8a1.24 1.24 0 0 0-.92-.38c-.38 0-.7.14-.97.43.02.04.1.12.25.26l.3.3.2.24c.08.12.14.24.17.35.03.1.05.23.05.37 0 .36-.13.66-.38.92a1.25 1.25 0 0 1-.92.37 1.4 1.4 0 0 1-.37-.03 1.06 1.06 0 0 1-.35-.18 2.27 2.27 0 0 1-.25-.2 6.82 6.82 0 0 1-.3-.3l-.24-.25c-.3.28-.44.6-.44.98 0 .36.13.66.38.92l2.78 2.8c.24.23.54.35.9.35.37 0 .68-.12.93-.35l1.98-1.97c.26-.25.38-.55.38-.9zm-9.46-9.5c0-.37-.13-.67-.38-.92l-2.78-2.8a1.24 1.24 0 0 0-.9-.37c-.36 0-.67.1-.93.35L7.97 9.92c-.26.25-.38.55-.38.9 0 .36.1.67.37.92l2.8 2.8c.24.25.55.37.92.37.36 0 .7-.13.96-.4-.03-.04-.1-.12-.26-.26s-.24-.23-.3-.3a2.67 2.67 0 0 1-.2-.24 1.05 1.05 0 0 1-.17-.35 1.4 1.4 0 0 1-.04-.37c0-.36.1-.66.36-.9.26-.26.56-.4.92-.4.14 0 .26.03.37.06.12.03.23.1.35.17.1.1.2.16.25.2l.3.3.24.26c.3-.28.44-.6.44-.98zM27 21.17c0 1.07-.38 2-1.15 2.73l-1.98 1.98c-.74.75-1.66 1.12-2.73 1.12-1.1 0-2-.38-2.75-1.14l-2.8-2.8c-.74-.74-1.1-1.65-1.1-2.73 0-1.1.38-2.04 1.17-2.82l-1.18-1.17c-.8.8-1.72 1.18-2.82 1.18-1.08 0-2-.36-2.75-1.12l-2.8-2.8C5.38 12.8 5 11.9 5 10.82c0-1.08.38-2 1.15-2.74L8.13 6.1C8.87 5.37 9.78 5 10.86 5c1.1 0 2 .38 2.75 1.15l2.8 2.8c.74.73 1.1 1.65 1.1 2.72 0 1.1-.38 2.05-1.17 2.82l1.18 1.18c.8-.8 1.72-1.2 2.82-1.2 1.08 0 2 .4 2.75 1.14l2.8 2.8c.76.76 1.13 1.68 1.13 2.76z"/></svg></span><input id="a2a_copy_link_text" type="text" title="Copy link"/><div id="a2a_copy_link_copied">&check;</div></div>'), w += '</div>', w += '<div class="a2a_menu a2a_full" id="a2a' + g + '_full" role="dialog" tabindex="-1" aria-label="' + ('feed' == g ? v.Subscribe : v.Share) + '"><div class="a2a_full_header"><div id="a2a' + g + '_find_container" class="a2a_menu_find_container"><input id="a2a' + g + '_find" class="a2a_menu_find" type="text" onclick="a2a.focus_find()" onkeyup="a2a.do_find()" autocomplete="off" title="' + v.FindAnyServiceToAddTo + '"/><span id="a2a' + g + '_find_icon" class="a2a_svg a2a_s_find" onclick="a2a.focus_find()"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#CCC" d="M19.7 18.2l-4.5-4.5c.7-1.1 1.2-2.3 1.2-3.6 0-3.5-2.8-6.3-6.3-6.3s-6.3 2.8-6.3 6.3 2.8 6.3 6.3 6.3c1.4 0 2.6-.4 3.6-1.2l4.5 4.5c.6.6 1.3.7 1.7.2.5-.4.4-1.1-.2-1.7zm-9.6-3.6c-2.5 0-4.5-2.1-4.5-4.5 0-2.5 2.1-4.5 4.5-4.5 2.5 0 4.5 2.1 4.5 4.5s-2 4.5-4.5 4.5z"/></svg></span></div></div><div class="a2a_full_services" id="a2a' + g + '_full_services" role="presentation"></div><div class="a2a_full_footer"><a href="https://www.addtoany.com" title="Share Buttons" rel="noopener" target="_blank"><span class="a2a_svg a2a_s__default a2a_s_a2a"' + t + '>' + u + '</span>AddToAny</a></div></div><div id="a2a' + g + '_dropdown" class="a2a_menu a2a_mini"' + (k ? ' onmouseenter="a2a.miniEnterStay()"' : '') + (!a2a[g].onclick && k ? ' onmouseleave="a2a.miniLeaveDelay()"' : '') + ' tabindex="-1" aria-label="' + ('feed' == g ? v.Subscribe : v.Share) + '" style="display:none"><div id="a2a' + g + '_title_container" class="a2a_menu_title_container" style="display:none"><div id="a2a' + g + '_title" class="a2a_menu_title"></div></div><div class="a2a_mini_services" id="a2a' + g + '_mini_services"></div>', w += '<div id="a2a' + g + '_cols_container" class="a2a_cols_container"><div class="a2a_col1" id="a2a' + g + '_col1"' + ('mail' == g ? ' style="display:none"' : '') + '></div><div id="a2a' + g + '_2_col1"' + ('mail' != g ? ' style="display:none"' : '') + '></div><div class="a2a_clear"></div></div>', 'mail' != g && (w += '<div class="a2a' + g + '_wide a2a_wide"><a href="" id="a2a' + g + '_show_more_less" class="a2a_menu_show_more_less a2a_more" title="' + v.ShowAll + '"><span class="a2a_svg a2a_s__default a2a_s_a2a"' + t + '>' + u + '</span>' + v.More + '</a></div>'), w += '</div>'
      var x = f('a2a_menu_container') || document.createElement('div')
      a2a.add_event(x, 'click', a2a.stopPropagation), a2a.add_event(x, 'touchstart', a2a.stopPropagation, !!a2a.evOpts() && {passive: !0}), x.innerHTML = w, 'a2a_menu_container' != x.id && (x.style.position = 'static', j && j < 9 ? document.body.insertBefore(x, document.body.firstChild) : document.body.insertBefore(x, null))
      var y = a2a.make_service
      if ('mail' != g) {
        for (var z = 0, A = b.most, B = A.length, C = parseInt(a2a[g].num_services), D = 0, E = a2a[g].exclude_services; z < B; z++) {
          var F = A[z]
          E && a2a.in_array(F[1], E, !0) || m.appendChild(y(F[0], F[1], F[2], F[3], F[4])), !(D < C) || E && a2a.in_array(F[1], E, !0) || (n.appendChild(y(F[0], F[1], F[2], F[3], F[4])), D++)
        }
        f(h + '_full_services').appendChild(m), f(h + '_mini_services').appendChild(n)
      }
      c = f(h + '_full_services'), l.className = 'a2a_i', d = l.cloneNode(), c.appendChild(l), c.appendChild(d)
      for (var z = 0, G = b.email, H = G.length; z < H; z++) {
        var F = G[z]
        E && a2a.in_array(F[1], E, !0) || f(h + '_2_col1').appendChild(y(F[0], F[1], F[2], F[3], F[4]))
      }
      if ('feed' != g) {
        var I = y('Email app', 'email_app', 'email', null, null, 'mailto:?subject=A2A_LINKNAME_ENC&body=A2A_LINKURL_ENC')
        I.className = 'a2a_i a2a_emailer a2a_email_client', I.id = 'a2a' + g + '_email_client', I.target = '', f(h + '_2_col1').appendChild(I)
      }
      a2a[g].services = b.most.concat(b.email), 'mail' != g && (a2a.add_event(f(h + '_overlay'), 'click', function (a) {a2a.hide_full(g)}), a2a.add_event(f(h + '_show_more_less'), 'click', function (a) {a2a.preventDefault(a), a2a.show_more_less()})), a2a.arrange_services(), a2a.util_frame_listen(g), a2a.collections(g), a2a.default_services(), 'mail' != g && (e = f(h + '_find'), e.onkeydown = function (a) {
        var a = a || window.event, b = a.which || a.keyCode, c = a2a.type
        if (13 == b) {for (var d, f = 0, g = a2a[c].main_services, h = g.length; f < h; f++) if (d = g[f], 'none' != d.style.display) return d.focus(), !1} else 27 == b && ('' == e.value && e.blur(), e.value = '', a2a.do_find())
      })
    }
    var b = {}
    b.page = {
      most: [['Facebook', 'facebook', 'facebook', '3B5998', {
        media: 1,
        pu: 1
      }], ['Twitter', 'twitter', 'twitter', '55ACEE', {pu: 1}], ['Google+', 'google_plus', 'google_plus', 'DD4B39', {pu: 1}], ['Pinterest', 'pinterest', 'pinterest', 'BD081C', {
        type: 'js',
        src: 'https://static.addtoany.com/menu/pinmarklet.js',
        media: 1,
        pu: 1
      }], ['Email', 'email', 'email', '0166FF', {url: 'mailto:?subject=${title}&body=${link}'}], ['LinkedIn', 'linkedin', 'linkedin', '007BB5', {pu: 1}], ['Reddit', 'reddit', 'reddit', 'ff4500'], ['Tumblr', 'tumblr', 'tumblr', '35465C', {pu: 1}], ['WordPress', 'wordpress', 'wordpress', '464646'], ['Google Gmail', 'google_gmail', 'gmail', 'DD5347', {
        type: 'email',
        pu: 1
      }], ['WhatsApp', 'whatsapp', 'whatsapp', '12AF0A'], ['StumbleUpon', 'stumbleupon', 'stumbleupon', 'EF4E23'], ['AIM', 'aim', 'aim', '00C2FF'], ['Amazon Wish List', 'amazon_wish_list', 'amazon', 'F90'], ['AOL Mail', 'aol_mail', 'aol', '2A2A2A', {
        type: 'email',
        pu: 1
      }], ['Balatarin', 'balatarin', 'balatarin', '079948'], ['BibSonomy', 'bibsonomy', 'bibsonomy', '2A2A2A'], ['Bitty Browser', 'bitty_browser', 'bitty', '999'], ['Blinklist', 'blinklist', 'blinklist', '3D3C3B'], ['Blogger Post', 'blogger_post', 'blogger', 'FDA352'], ['BlogMarks', 'blogmarks', 'blogmarks', '535353'], ['Bookmarks.fr', 'bookmarks_fr', 'bookmarks_fr', '96C044'], ['Box.net', 'box_net', 'box', '1A74B0'], ['BuddyMarks', 'buddymarks', 'buddymarks', '96C044'], ['Buffer', 'buffer', 'buffer', '2A2A2A'], ['Care2 News', 'care2_news', 'care2', '6EB43F'], ['CiteULike', 'citeulike', 'citeulike', '2781CD'], ['Copy Link', 'copy_link', 'link', '0166FF', {
        type: 'js',
        src: 'javascript:a2a.copyLink(\'${link}\')'
      }], ['Delicious', 'delicious', 'delicious', '39F'], ['Design Float', 'design_float', 'designfloat', '8AC8FF'], ['Diary.Ru', 'diary_ru', 'diary_ru', '912D31'], ['Diaspora', 'diaspora', 'diaspora', '2E3436'], ['Digg', 'digg', 'digg', '2A2A2A'], ['diHITT', 'dihitt', 'dihitt', 'FF6300'], ['Diigo', 'diigo', 'diigo', '4A8BCA'], ['Douban', 'douban', 'douban', '071', {pu: 1}], ['Draugiem', 'draugiem', 'draugiem', 'F60', {pu: 1}], ['DZone', 'dzone', 'dzone', '82C251'], ['Evernote', 'evernote', 'evernote', '8BE056'], ['Facebook Messenger', 'facebook_messenger', 'facebook_messenger', '0084FF', {pu: 1}], ['Fark', 'fark', 'fark', '555'], ['Flipboard', 'flipboard', 'flipboard', 'C00', {pu: 1}], ['Folkd', 'folkd', 'folkd', '0F70B2'], ['Google Bookmarks', 'google_bookmarks', 'google', '4285F4'], ['Google Classroom', 'google_classroom', 'google_classroom', 'FFC112'], ['Hacker News', 'hacker_news', 'y18', 'F60'], ['Hatena', 'hatena', 'hatena', '00A6DB'], ['Houzz', 'houzz', 'houzz', '7AC143', {
        type: 'js',
        src: 'https://www.houzz.com/js/clipperBookmarklet.js',
        media: 1
      }], ['Instapaper', 'instapaper', 'instapaper', '2A2A2A'], ['Jamespot', 'jamespot', 'jamespot', 'FF9E2C'], ['Kakao', 'kakao', 'kakao', 'FCB700', {pu: 1}], ['Kik', 'kik', 'kik', '2A2A2A'], ['Kindle It', 'kindle_it', 'kindle', '2A2A2A'], ['Known', 'known', 'known', '2A2A2A'], ['Line', 'line', 'line', '00C300'], ['LiveJournal', 'livejournal', 'livejournal', '113140'], ['Mail.Ru', 'mail_ru', 'mail_ru', '356FAC'], ['Mendeley', 'mendeley', 'mendeley', 'A70805'], ['Meneame', 'meneame', 'meneame', 'FF7D12'], ['Mixi', 'mixi', 'mixi', 'D1AD5A'], ['MySpace', 'myspace', 'myspace', '2A2A2A'], ['Netlog', 'netlog', 'netlog', '2A2A2A'], ['Netvouz', 'netvouz', 'netvouz', '6C3'], ['NewsVine', 'newsvine', 'newsvine', '055D00'], ['NUjij', 'nujij', 'nujij', 'D40000'], ['Odnoklassniki', 'odnoklassniki', 'odnoklassniki', 'F2720C'], ['Oknotizie', 'oknotizie', 'oknotizie', '88D32D'], ['Outlook.com', 'outlook_com', 'outlook_com', '0072C6', {type: 'email'}], ['Papaly', 'papaly', 'papaly', '3AC0F6', {pu: 1}], ['Pinboard', 'pinboard', 'pinboard', '1341DE', {pu: 1}], ['Plurk', 'plurk', 'plurk', 'CF682F'], ['Pocket', 'pocket', 'pocket', 'EE4056'], ['Polyvore', 'polyvore', 'polyvore', '2A2A2A', {
        type: 'js',
        src: 'https://static.addtoany.com/menu/polyvore.js',
        media: 1,
        pu: 1
      }], ['Print', 'print', 'print', '0166FF', {
        type: 'js',
        src: 'javascript:print()'
      }], ['PrintFriendly', 'printfriendly', 'printfriendly', '6D9F00'], ['Protopage Bookmarks', 'protopage_bookmarks', 'protopage', '413FFF'], ['Pusha', 'pusha', 'pusha', '0072B8'], ['Qzone', 'qzone', 'qzone', '2B82D9'], ['Rediff MyPage', 'rediff', 'rediff', 'D20000'], ['Refind', 'refind', 'refind', '1492ef'], ['Renren', 'renren', 'renren', '005EAC', {pu: 1}], ['Segnalo', 'segnalo', 'segnalo', 'FF6500'], ['Sina Weibo', 'sina_weibo', 'sina_weibo', 'E6162D'], ['SiteJot', 'sitejot', 'sitejot', 'FFC808'], ['Skype', 'skype', 'skype', '00AFF0'], ['Slashdot', 'slashdot', 'slashdot', '004242'], ['SMS', 'sms', 'sms', '6CBE45', {url: 'sms://?&body=${title}%20${link}'}], ['StockTwits', 'stocktwits', 'stocktwits', '40576F', {pu: 1}], ['Stumpedia', 'stumpedia', 'stumpedia', 'FFC808'], ['Svejo', 'svejo', 'svejo', '5BD428'], ['Symbaloo Feeds', 'symbaloo_feeds', 'symbaloo', '6DA8F7'], ['Telegram', 'telegram', 'telegram', '2CA5E0'], ['Threema', 'threema', 'threema', '2A2A2A', {url: 'threema://compose?text=${title}%20${link}'}], ['Trello', 'trello', 'trello', '0079BF', {pu: 1}], ['Tuenti', 'tuenti', 'tuenti', '0075C9'], ['Twiddla', 'twiddla', 'twiddla', '2A2A2A'], ['TypePad Post', 'typepad_post', 'typepad', 'D2DE61'], ['Viadeo', 'viadeo', 'viadeo', '2A2A2A', {pu: 1}], ['Viber', 'viber', 'viber', '7C529E', {url: 'viber://forward?text=${title}%20${link}'}], ['VK', 'vk', 'vk', '587EA3', {pu: 1}], ['Wanelo', 'wanelo', 'wanelo', '9cb092'], ['WeChat', 'wechat', 'wechat', '7BB32E'], ['Wykop', 'wykop', 'wykop', '367DA9'], ['XING', 'xing', 'xing', '165B66', {pu: 1}], ['Yahoo Bookmarks', 'yahoo_bookmarks', 'yahoo', '400090'], ['Yahoo Mail', 'yahoo_mail', 'yahoo', '400090', {type: 'email'}], ['Yahoo Messenger', 'yahoo_messenger', 'yim', '400090', {url: 'ymsgr:sendim?+&m=${link}'}], ['Yoolink', 'yoolink', 'yoolink', 'A2C538'], ['YouMob', 'youmob', 'youmob', '3B599D'], ['Yummly', 'yummly', 'yummly', 'E16120', {
        type: 'js',
        src: 'https://www.yummly.com/js/yumlet.js',
        media: 1,
        pu: 1
      }]],
      email: [['Google Gmail', 'google_gmail', 'gmail', 'DD5347', {
        type: 'email',
        pu: 1
      }], ['AOL Mail', 'aol_mail', 'aol', '2A2A2A', {
        type: 'email',
        pu: 1
      }], ['Outlook.com', 'outlook_com', 'outlook_com', '0072C6', {type: 'email'}], ['Yahoo Mail', 'yahoo_mail', 'yahoo', '400090', {type: 'email'}]]
    }, b.feed = {
      most: [['Feed', 'feed', 'feed', 'E3702D', {url: '${link_noenc}'}], ['Feedly', 'feedly', 'feedly', '2BB24C'], ['My Yahoo', 'my_yahoo', 'yahoo', '400090'], ['FeedBlitz', 'feedblitz', 'feedblitz', 'FF8B23', {type: 'email'}], ['AOL Reader', 'my_aol', 'aol', '2A2A2A'], ['The Old Reader', 'oldreader', 'oldreader', 'D73F31'], ['Agregator', 'agregator', 'agregator', '359440'], ['Bitty Browser Preview', 'bitty_browser_preview', 'bitty', '999'], ['Daily Rotation', 'daily_rotation', 'dailyrotation', '2A2A2A'], ['Feed Mailer', 'feed_mailer', 'feedmailer', '78A8D1'], ['FeedBucket', 'feedbucket', 'feedbucket', 'E3702D'], ['iTunes', 'itunes', 'itunes', 'FB233A', {url: 'itpc://${link_nohttp}'}], ['Miro', 'miro', 'miro', 'D41700'], ['Netvibes', 'netvibes', 'netvibes', '7CA900'], ['NewsAlloy', 'newsalloy', 'newsalloy', '8E2B3D'], ['NewsIsFree', 'newsisfree', 'newsisfree', '316CA9'], ['Outlook', 'outlook', 'outlook_com', '0072C6', {url: 'feed://${link_nohttp}'}], ['PodNova', 'podnova', 'podnova', 'B50419'], ['Protopage News Feeds', 'protopage_news_feeds', 'protopage', '413FFF'], ['Symbaloo Bookmarks', 'symbaloo_bookmarks', 'symbaloo', '6DA8F7'], ['The Free Dictionary', 'the_free_dictionary', 'thefreedictionary', '004B85'], ['The Free Library', 'the_free_library', 'thefreelibrary', '004B85'], ['WINKsite', 'winksite', 'winksite', '6FE738']],
      email: [['FeedBlitz', 'feedblitz', 'feedblitz', 'FF8B23', {type: 'email'}]]
    }, a2a.services = b.page.most.concat(b.feed.most)
    var c = a2a.type, d = a2a[c], e = 'feed' == c ? 'feed' : 'page', f = a2a.c
    location.host.split('.').slice(-1)
    d.onclick = f.onclick || !1, d.show_title = f.show_title || !1, d.num_services = f.num_services || 8, d.exclude_services = f.exclude_services || !1, d.custom_services = f.custom_services || !1, a2a.locale = a2a.i18n(), a2a.locale && 'custom' != a2a.locale ? (a2a.loadExtScript(f.static_server + '/locale/' + a2a.locale + '.js', function () {return '' != a2a_localize}, function () {
      for (f.localize = a2a_localize, a2a['create_' + a2a.type + '_dropdown'](c, b[e]); a2a.fn_queue.length > 0;) a2a.fn_queue.shift()();
      a2a.locale = null, a2a.GA(1), a2a.init_show(), a2a.ready()
    }), f.menu_type = !1) : (a2a['create_' + a2a.type + '_dropdown'](c, b[e]), a2a.GA())
  }
}, function () {document.body && (a2a.overlays(), a2a.init_all('page'), a2a.ready()), a2a.dom.ready(function () {a2a.overlays(), a2a.init_all('page'), a2a.ready()})}()