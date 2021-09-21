  _N2.r(["documentReady", "smartslider-frontend", "SmartSliderWidgetBulletTransition", "ss-simple"], function () {
    new _N2.SmartSliderSimple('n2-ss-298', {
      "admin": false
      , "callbacks": ""
      , "background.video.mobile": 1
      , "randomize": {
        "randomize": 0
        , "randomizeFirst": 0
      }
      , "alias": {
        "id": 0
        , "smoothScroll": 0
        , "slideSwitch": 0
        , "scroll": 1
      }
      , "align": "normal"
      , "isDelayed": 0
      , "responsive": {
        "mediaQueries": {
          "all": false
          , "desktopportrait": ["(min-width: 1200px)"]
          , "tabletportrait": ["(orientation: landscape) and (max-width: 1199px) and (min-width: 901px)", "(orientation: portrait) and (max-width: 1199px) and (min-width: 701px)"]
          , "mobileportrait": ["(orientation: landscape) and (max-width: 900px)", "(orientation: portrait) and (max-width: 700px)"]
        }
        , "base": {
          "slideOuterWidth": 1200
          , "slideOuterHeight": 700
          , "sliderWidth": 1200
          , "sliderHeight": 700
          , "slideWidth": 1200
          , "slideHeight": 700
        }
        , "hideOn": {
          "desktopLandscape": false
          , "desktopPortrait": false
          , "tabletLandscape": false
          , "tabletPortrait": false
          , "mobileLandscape": false
          , "mobilePortrait": false
        }
        , "onResizeEnabled": true
        , "type": "fullwidth"
        , "sliderHeightBasedOn": "real"
        , "focusUser": 1
        , "focusEdge": "auto"
        , "breakpoints": [{
          "device": "tabletPortrait"
          , "type": "max-screen-width"
          , "portraitWidth": 1199
          , "landscapeWidth": 1199
                  }, {
          "device": "mobilePortrait"
          , "type": "max-screen-width"
          , "portraitWidth": 700
          , "landscapeWidth": 900
                  }]
        , "enabledDevices": {
          "desktopLandscape": 0
          , "desktopPortrait": 1
          , "tabletLandscape": 0
          , "tabletPortrait": 1
          , "mobileLandscape": 0
          , "mobilePortrait": 1
        }
        , "sizes": {
          "desktopPortrait": {
            "width": 1200
            , "height": 700
            , "max": 3000
            , "min": 1200
          }
          , "tabletPortrait": {
            "width": 701
            , "height": 408
            , "customHeight": false
            , "max": 1199
            , "min": 701
          }
          , "mobilePortrait": {
            "width": 320
            , "height": 186
            , "customHeight": false
            , "max": 900
            , "min": 320
          }
        }
        , "overflowHiddenPage": 0
        , "focus": {
          "offsetTop": ""
          , "offsetBottom": ""
        }
      }
      , "controls": {
        "mousewheel": 0
        , "touch": "horizontal"
        , "keyboard": 1
        , "blockCarouselInteraction": 1
      }
      , "playWhenVisible": 1
      , "playWhenVisibleAt": 0.5
      , "lazyLoad": 0
      , "lazyLoadNeighbor": 0
      , "blockrightclick": 0
      , "maintainSession": 0
      , "autoplay": {
        "enabled": 0
        , "start": 1
        , "duration": 8000
        , "autoplayLoop": 1
        , "allowReStart": 0
        , "pause": {
          "click": 1
          , "mouse": "0"
          , "mediaStarted": 1
        }
        , "resume": {
          "click": 0
          , "mouse": "0"
          , "mediaEnded": 1
          , "slidechanged": 0
        }
        , "interval": 1
        , "intervalModifier": "loop"
        , "intervalSlide": "current"
      }
      , "perspective": 1000
      , "layerMode": {
        "playOnce": 0
        , "playFirstLayer": 1
        , "mode": "skippable"
        , "inAnimation": "mainInEnd"
      }
      , "parallax": {
        "enabled": 1
        , "mobile": 0
        , "is3D": 1
        , "animate": 1
        , "horizontal": "mouse"
        , "vertical": "mouse"
        , "origin": "slider"
        , "scrollmove": "both"
      }
      , "postBackgroundAnimations": 0
      , "bgAnimations": 0
      , "mainanimation": {
        "type": "fade"
        , "duration": 500
        , "delay": 0
        , "ease": "easeOutQuad"
        , "shiftedBackgroundAnimation": "auto"
      }
      , "carousel": 1
      , "initCallbacks": function () {
        this.stages.done("ResizeFirst", function () {
          var i = document.documentElement
            , n = this.sliderElement.querySelectorAll(".n2-ss-shape-divider");
          n.length && n.forEach(function (n) {
            var t = n.querySelector(".n2-ss-shape-divider-inner");
            if (+n.dataset.ssSdAnimate) {
              var s = n.querySelector("svg");
              this.visible((function () {
                var i = s.querySelectorAll("*")
                  , t = 100 / (n.dataset.ssSdSpeed || 100)
                  , o = {};
                s.dataset.yoyo && (o = {
                  onComplete: function () {
                    this.reverse()
                  }
                  , onReverseComplete: function () {
                    this.restart()
                  }
                });
                for (var r = 0; r < i.length; r++) _N2.J.to(i[r], parseFloat(i[r].getAttribute("duration")) * t, Object.assign({
                  attr: {
                    d: i[r].getAttribute("to-d")
                  }
                  , delay: 0
                  , ease: "easeOutCubic"
                }, o, {
                  delay: i[r].getAttribute("delay")
                  , ease: i[r].getAttribute("ease")
                }))
              }))
            }
            var o = n.dataset.ssSdScroll;
            if ("shrink" === o || "grow" === o)
              if (IntersectionObserver) {
                var r, a, d = n.dataset.ssSdSide
                  , h = function (n, s) {
                    var o, a, d = (a = 0, window.matchMedia && /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera) ? (o = n2const.isIOS ? i.clientHeight : window.innerHeight, a = window.matchMedia("(orientation: landscape)").matches ? Math.min(screen.width, o) : Math.min(screen.height, o)) : a = window.n2Height || i.clientHeight, a)
                      , h = this.sliderElement.getBoundingClientRect().top + n;
                    r = Math.max(0, Math.min(100, Math.abs(s - h / d * 100))), t.style.transform = "scaleY(" + r / 100 + ")"
                  }.bind(this);
                "shrink" === o ? (r = 100, a = function () {
                  h("bottom" === d ? this.responsive.resizeContext.sliderHeight : 0, 0)
                }.bind(this)) : "grow" === o && (r = 0, a = function () {
                  h("bottom" === d ? this.responsive.resizeContext.sliderHeight : 0, 100)
                }.bind(this)), new IntersectionObserver((function (i) {
                  i[0].isIntersecting ? (window.addEventListener("scroll", a), window.addEventListener("resize", a)) : (window.removeEventListener("scroll", a), window.removeEventListener("resize", a)), a()
                })).observe(this.sliderElement)
              }
              else t.style.transform = "scaleY(1)"
          }.bind(this))
        }.bind(this));
        new _N2.SmartSliderWidgetBulletTransition(this, {
          "area": 12
          , "dotClasses": "n2-style-f3f9ef2a4871aea6dd37153dcae1cb6e-dot "
          , "mode": ""
          , "action": "click"
        });
      }
    });
  });