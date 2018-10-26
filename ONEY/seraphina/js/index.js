(function(window, document) {
  "use strict";
  var pluginName = "particleground";

  function extend(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];
      if (!obj) continue;
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === "object") deepExtend(out[key], obj[key]);
          else out[key] = obj[key];
        }
      }
    }
    return out;
  }

  var $ = window.jQuery;

  function Plugin(element, options) {
    var canvasSupport = !!document.createElement("canvas").getContext;
    var canvas;
    var ctx;
    var particles = [];
    var paused = false;
    var imgs;
    var imgArray = [
      "https://78.media.tumblr.com/6b628d96df4863a8c4d0e7fea6d40b03/tumblr_myhba0a8nK1t5wir4o1_1280.png",
      "https://78.media.tumblr.com/9fa4f6f48b5b4f7299ac93a1973e5b04/tumblr_mygoezm9WT1t5wir4o1_500.png",
      "https://78.media.tumblr.com/e3ecc80ceac2a7444ab508e37a770f93/tumblr_myf8ksXI6O1t5wir4o1_500.png", 
      "https://78.media.tumblr.com/c226035bde49a91e771a1c390d2eee78/tumblr_mzt7gzfZQw1t5wir4o1_500.png", 
      "https://78.media.tumblr.com/f8a35eba9a8f17c06f1ae8054b28b587/tumblr_n18yvpA6cP1t5wir4o1_500.png",
      "https://78.media.tumblr.com/cee3ba7a86b59d70a53414905dd46876/tumblr_njjtqu3ndw1t5wir4o1_640.png",
      "https://78.media.tumblr.com/23f64564db2ad55aa15073c8b47f037d/tumblr_nws8r6wum21t5wir4o1_1280.png",
      "https://78.media.tumblr.com/a4138bb9717df5f05d888c3cf7f403bb/tumblr_nwk62ue4EI1t5wir4o1_1280.png",
      "https://78.media.tumblr.com/59ac89c5137e4f0e3c856c2c155df6d1/tumblr_o2nsd0ajfd1t5wir4o1_540.png",
      "https://78.media.tumblr.com/811f9119e008bea8a3f2b1f9e8ca31c3/tumblr_odabofA9DM1t5wir4o1_1280.png",
      "https://78.media.tumblr.com/7ef724745a8261a71bcedf44ef284716/tumblr_oi3c339ymn1t5wir4o1_1280.png",
      "https://78.media.tumblr.com/2d843625338a341303072acb02a32b48/tumblr_oi629dGb4E1t5wir4o1_1280.png",
      "https://78.media.tumblr.com/8abd9bb6afc5342bab32692d7f3463b2/tumblr_omyqnfGnid1t5wir4o1_1280.png",
      "https://78.media.tumblr.com/57e6c54bb152498caf0171f86a7c058a/tumblr_mygob4NpvV1t5wir4o1_250.png",
    ];
    var numParticles;

    options = extend({}, window[pluginName].defaults, options);
    /**
     * Init
     */
    function init() {
      if (!canvasSupport) {
        return;
      }
      //Create canvas
      canvas = document.createElement("canvas");
      canvas.className = "pg-canvas";
      canvas.style.display = "block";
      element.insertBefore(canvas, element.firstChild);
      ctx = canvas.getContext("2d");
      styleCanvas();
      // Create particles
      var numParticles = Math.round(
        canvas.width * canvas.height / options.density
      );
      for (var i = 0; i < numParticles; i++) {
        var p = new Particle();
        p.setStackPos(i);
        particles.push(p);
      }
      draw();
      hook("onInit");
    }
    /**
     * Style the canvas
     */
    function styleCanvas() {
      canvas.width = element.offsetWidth;
      canvas.height = element.offsetHeight;
    }
    /**
     * Draw particles
     */
    function draw() {
      if (!canvasSupport) {
        return;
      }
      // Wipe canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw particles
      for (var i = 0; i < particles.length; i++) {
        particles[i].draw(i);
      }
      // Call this function next time screen is redrawn
      if (!paused) {
        raf = requestAnimationFrame(draw);
      }
    }

    /**
     * Pause particle system
     */
    function pause() {
      paused = true;
    }

    /**
     * Start particle system
     */
    function start() {
      paused = false;
      draw();
    }

    /**
     * Particle
     */
    function Particle() {
      this.stackPos;
      this.active = true;
      this.layer = Math.ceil(Math.random() * 3);
      this.parallaxOffsetX = 0;
      this.parallaxOffsetY = 0;
      // Initial particle position
      this.position = {
        x: Math.ceil(Math.random() * canvas.width),
        y: Math.ceil(Math.random() * canvas.height)
      };
    }

    /**
     * Draw particle
     */
    Particle.prototype.draw = function(i) {
      imgs = new Image();
      var randomNumber = Math.floor(
        i / imgArray.length * (i / imgArray.length)
      );
      imgs.src = imgArray[randomNumber];
      ctx.drawImage(
        imgs,
        this.position.x + this.parallaxOffsetX,
        this.position.y + this.parallaxOffsetY
      );
    };

    /**
     * Setter: particle stacking position
     */
    Particle.prototype.setStackPos = function(i) {
      this.stackPos = i;
    };

    init();

    return {
      option: option,
      destroy: destroy,
      start: start,
      pause: pause
    };
  }

  window[pluginName] = function(elem, options) {
    return new Plugin(elem, options);
  };

  window[pluginName].defaults = {
    density: 300, // How many particles will be generated: one particle every n pixels

    parallax: true,
    parallaxMultiplier: 24, // The lower the number, the more extreme the parallax effect
    onInit: function() {},
    onDestroy: function() {}
  };
  if ($) {
    $.fn[pluginName] = function(options) {
      if (typeof arguments[0] === "string") {
        var methodName = arguments[0];
        var args = Array.prototype.slice.call(arguments, 1);
        var returnVal;
        this.each(function() {
          if (
            $.data(this, "plugin_" + pluginName) &&
            typeof $.data(this, "plugin_" + pluginName)[methodName] ===
              "function"
          ) {
            returnVal = $.data(this, "plugin_" + pluginName)[methodName].apply(
              this,
              args
            );
          }
        });
        if (returnVal !== undefined) {
          return returnVal;
        } else {
          return this;
        }
      } else if (typeof options === "object" || !options) {
        return this.each(function() {
          if (!$.data(this, "plugin_" + pluginName)) {
            $.data(this, "plugin_" + pluginName, new Plugin(this, options));
          }
        });
      }
    };
  }
})(window, document);

/**
 * requestAnimationFrame polyfill by Erik M�ller. fixes from Paul Irish and Tino Zijdel
 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license: MIT license
 */
(function() {
  var lastTime = 0;
  var vendors = ["ms", "moz", "webkit", "o"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] ||
      window[vendors[x] + "CancelRequestAnimationFrame"];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
})();

document.addEventListener(
  "DOMContentLoaded",
  function() {
    particleground(document.getElementById("particles"), {});
  },
  false
);
