(function() {
  window.onscroll = function(e) {
    var doc = document.documentElement;
    var scrollPos = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    let header = document.getElementById('header');
    if (scrollPos > (0.8 * window.innerHeight)) {
      addClass(header, 'visible');
    } else {
      removeClass(header, 'visible');
    }
    // grayscale image
    var perc = Math.min(1, scrollPos / window.innerHeight) * 175 + '%';
    var tree = document.getElementById('tree');
    tree.style.webkitFilter = 'grayscale(' + perc + ')';
  }

  function hasClass(el, className) {
    if (!el) {
      return;
    }
    if (el.classList) {
      return el.classList.contains(className);
    }
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }

  function addClass(el, className) {
    if (!el) {
      return;
    }
    if (el.classList){
      el.classList.add(className);
    }
    else if (!hasClass(el, className)) {
      el.className += " " + className;
    }
  }

  function removeClass(el, className) {
    if (!el) {
      return;
    }
    if (el.classList){
      el.classList.remove(className);
    }
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  }

  function stopLoader() {
    let loader = document.getElementById('loader');
    addClass(loader, 'hidden');
  }

  window.onload = stopLoader;
})();
