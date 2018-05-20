(function () {
  function getEl(id) {
    return document.getElementById(id) || document.all.getElementById(id);
  }

  function handleScroll(e) {
    const doc = document.documentElement;
    const scrollPos =
      (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const header = getEl('header');
    if (scrollPos > 0.8 * window.innerHeight) {
      addClass(header, 'visible');
    } else {
      removeClass(header, 'visible');
    }
    const winHeight = window.innerHeight;
    const tree = getEl('tree');
    const ebos = getEl('ebos');
    const msiads = getEl('msiads');
    filterImage(tree, scrollPos, winHeight);
    filterImage(ebos, scrollPos, winHeight);
    filterImage(msiads, scrollPos, winHeight);
  }

  function filterImage(el, scrollPos, winHeight) {
    if (!el) {
      return;
    }
    const top = el.getBoundingClientRect().top;
    // if (Math.abs(top) < winHeight) {
    const val = Math.min(1, Math.abs(top / winHeight) * 1.5);
    const perc = val * 100 + '%';
    // el.style.webkitFilter = `grayscale(${perc}) hue-rotate(${val*100}deg)`;
    // el.style.webkitFilter = `invert(${Math.max(0, Math.min(100, val*1000-750))}%)`;
    el.style.webkitFilter = `grayscale(${perc}) brightness(${Math.max(
      0,
      Math.min(1, 1.5 - 1.2 * val)
    )})`;
    // }
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
    if (el.classList) {
      el.classList.add(className);
    } else if (!hasClass(el, className)) {
      el.className += ' ' + className;
    }
  }

  function removeClass(el, className) {
    if (!el) {
      return;
    }
    if (el.classList) {
      el.classList.remove(className);
    } else if (hasClass(el, className)) {
      const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  }

  function stopLoader() {
    const loader = getEl('loader');
    addClass(loader, 'hidden');
  }

  window.onload = stopLoader;
  window.onscroll = handleScroll;
})();
