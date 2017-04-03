;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-add" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M82.371891 472.03588l859.254171 0c11.030195 0 19.98206 8.951865 19.98206 19.983084l0 39.966167c0 11.030195-8.951865 19.98206-19.98206 19.98206L82.371891 551.96719c-11.030195 0-19.98206-8.951865-19.98206-19.98206l0-39.966167C62.389831 480.987744 71.341696 472.03588 82.371891 472.03588"  ></path>' +
    '' +
    '<path d="M472.03281 941.628109 472.03281 82.373938c0-11.030195 8.951865-19.98206 19.983084-19.98206l39.965144 0c11.030195 0 19.98206 8.951865 19.98206 19.98206l0 859.254171c0 11.031219-8.951865 19.98206-19.98206 19.98206l-39.965144 0C480.984674 961.610169 472.03281 952.659328 472.03281 941.628109"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-heart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M516.563 830.602q109.227-97.867 161.558-147.917t113.79-118.353 85.343-120.587 23.884-102.382q0-72.818-48.933-120.587t-121.751-47.769q-56.895 0-105.828 31.845t-67.138 81.943h-91.022q-18.205-50.050-67.138-81.943t-105.828-31.845q-72.818 0-121.751 47.769t-48.933 120.587q0 50.050 23.884 102.382t85.343 120.587 113.79 118.353 161.558 147.917l4.563 4.563zM730.453 75.093q113.79 0 190.005 77.381t76.217 188.89q0 65.973-25.050 128.547t-92.139 139.956-121.751 129.712-175.2 161.558l-70.537 63.74-70.537-61.458q-156.995-141.072-226.414-211.609t-128.547-166.122-59.177-184.325q0-111.508 76.217-188.89t190.005-77.381q131.995 0 218.453 102.382 86.459-102.382 218.453-102.382z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-heart1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M956.774411 321.166697c0-141.408637-110.775966-256.038374-247.424182-256.038374-80.93738 0-152.791895 40.21798-197.931978 102.390995C466.277144 105.346303 394.422629 65.128323 313.486272 65.128323c-136.64924 0-247.423159 114.629737-247.423159 256.038374 0 83.777055 38.884612 158.148903 98.991572 204.858738l346.364589 358.417089 346.365612-358.418113C917.890822 479.314577 956.774411 404.942729 956.774411 321.166697z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pinglun2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M977.454545 186.247365C977.454545 134.933838 935.731963 93.090909 884.264546 93.090909L139.735452 93.090909C88.181004 93.090909 46.545455 134.798475 46.545455 186.247365L46.545455 698.116273C46.545455 749.429797 88.22568 791.272727 139.640844 791.272727L186.181818 791.272727 186.181818 977.454545 512 791.272727 884.524167 791.272727C935.858506 791.272727 977.454545 749.565161 977.454545 698.116273L977.454545 186.247365ZM884.363636 186.181818 884.363636 698.181818 502.393986 698.181818 279.272727 791.272727 279.272727 698.181818 139.636364 698.181818 139.636364 186.181818 884.363636 186.181818Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M853.333333 725.333333c-8.533333 0-25.6 0-34.133333-8.533333L512 401.066667 204.8 716.8c-17.066667 17.066667-42.666667 17.066667-59.733333 0s-17.066667-42.666667 0-59.733333L512 281.6l375.466667 375.466667c17.066667 17.066667 17.066667 42.666667 0 59.733333-8.533333 8.533333-25.6 8.533333-34.133334 8.533333z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-money-rmb" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M735.825718 447.784466H547.334763l210.92285-255.842922c12.388145-12.388145 12.388145-32.473599 0-44.862767l-0.364297-0.364297c-12.388145-12.388145-32.473599-12.388145-44.862767 0L480.065683 429.293323l-233.644341-292.02089c-12.388145-12.388145-32.473599-12.388145-44.862767 0l-0.364297 0.364297c-12.388145 12.388145-12.388145 32.473599 0 44.862767l212.253149 265.284969H223.62515c-17.520025 0-31.722492 14.202467-31.722492 31.722492v0.515747c0 17.520025 14.202467 31.722492 31.722492 31.722492h224.12043v127.921461H223.62515c-17.520025 0-31.722492 14.202467-31.722492 31.722492v0.515746c0 17.520025 14.202467 31.722492 31.722492 31.722493h224.12043v160.159699c0 17.520025 14.202467 31.722492 31.722493 31.722493h0.515746c17.520025 0 31.722492-14.202467 31.722492-31.722493V703.627389h224.12043c17.520025 0 31.722492-14.202467 31.722493-31.722493v-0.515746c0-17.520025-14.202467-31.722492-31.722493-31.722492H511.706311V511.745197h224.12043c17.520025 0 31.722492-14.202467 31.722493-31.722492v-0.515747c-0.001023-17.520025-14.20349-31.722492-31.723516-31.722492z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon11" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M757.146 548.777l-332.032 319.221c-9.947 9.495-22.607 14.317-35.419 14.317-13.415 0-26.828-5.276-36.777-15.674-19.595-20.347-18.991-52.603 1.355-72.195l293.751-282.447-293.751-282.447c-20.347-19.595-20.95-51.847-1.355-72.195s51.847-20.95 72.195-1.355l332.032 319.221c10.099 9.647 15.674 22.909 15.674 36.777s-5.727 27.13-15.674 36.777z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon11-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M266.854 475.223l332.032-319.221c9.948-9.495 22.607-14.317 35.419-14.317 13.415 0 26.828 5.276 36.777 15.674 19.595 20.347 18.991 52.603-1.356 72.195l-293.751 282.447 293.751 282.447c20.347 19.595 20.95 51.846 1.356 72.195s-51.846 20.95-72.195 1.356l-332.032-319.221c-10.1-9.647-15.674-22.909-15.674-36.777s5.727-27.13 15.674-36.777z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)