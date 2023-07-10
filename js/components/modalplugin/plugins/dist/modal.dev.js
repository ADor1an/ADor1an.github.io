"use strict";

Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
};

function noop() {}

function _createModal(options) {
  var DEFAULT_WIDTH = '600px';
  var modalParent = document.querySelector('#vmodal');
  var modal = document.createElement('div');
  modal.classList.add('vmodal');
  modal.insertAdjacentHTML('afterbegin', "\n    <div class=\"vmodal-overlay\" data-close=\"true\">\n    <div class=\"vmodal-window\" style=\"width: ".concat(options.width || DEFAULT_WIDTH, "\" >\n        <div class=\"vmodal-header\">                \n            <div class=\"vmodal-title\" data-title>\n                <h1 class=\"vmodal-caption\">").concat(options.title || 'Title', "</h1>\n            </div>\n            <div data-image>\n            <picture>\n            ").concat(options.image || '', "\n                <img src=\"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80\" height=\"600px\" width=\"100%\" alt=\"\">\n            </picture>\n            </div>\n        </div>\n        <div class=\"vmodal-body\" data-content>\n            <h1>DEVELOPER ON JOB</h1>\n            ").concat(options.content || '', "\n        </div>\n    </div>\n</div>\n    ").concat(options.closable ? "\n    <button class=\"close-vmodal\" data-close=\"true\">\n    <svg data-close=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x-circle\" viewBox=\"0 0 16 16\">\n        <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n        <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\n    </svg>\n</button>" : '', "\n    "));

  var gallery = _createCarousel(options.galleries);

  gallery.appendAfter(modal.querySelector('[data-content]'));
  document.body.appendChild(modal);
  return modal;
}

function _createCarousel(options) {
  var wrap = document.createElement('div');
  wrap.classList.add('carousel-wrap');
  wrap.insertAdjacentHTML('afterbegin', "\n        <div class=\"gallery\">\n        <div data-gallery> \n        ".concat(options.gallery || '', "\n        </div>\n        </div>\n    "));
  return wrap;
}

$.modal = function (options) {
  var $modal = _createModal(options);

  var btnClose = document.querySelector('.close-vmodal');
  var ANIMATION_SPEED = 350;
  var notCollapsed = document.querySelector('.not-collapsed');
  var navBrand = document.querySelector('.navbar-brand');
  var closing = false;
  var destroyed = false;
  var modal = {
    open: function open() {
      if (destroyed) {
        return console.log('Modal was destroy');
      }

      !closing && $modal.classList.add('open');
      btnClose.style.visibility = 'visible';
      btnClose.classList.add('active');
      navBrand.style.visibility = 'hidden';
      notCollapsed.style.visibility = 'hidden';
    },
    close: function close() {
      $modal.classList.remove('open');
      $modal.classList.add('hide');
      btnClose.style.visibility = 'hidden';
      notCollapsed.style.visibility = 'visible';
      navBrand.style.visibility = 'visible';
      closing = true;
      setTimeout(function () {
        $modal.classList.remove('hide');
        closing = false;
      }, ANIMATION_SPEED);
      var modalWindow = $modal.querySelector('.vmodal-window');
      modalWindow.scrollTop = 0;
    }
  };

  var listener = function listener(event) {
    if (event.target.parentNode.dataset.close || event.target.dataset.close) {
      modal.close();
    }

    if (event.target.parentNode.dataset.open || event.target.dataset.open) {
      modal.open();
    }
  };

  $modal.addEventListener('click', listener);
  return Object.assign(modal, {
    destroy: function destroy() {
      $modal.parentNode.removeChild($modal);
      $modal.removeEventListener('click', listener);
      destroyed = true;
    },
    setContent: function setContent(html) {
      $modal.querySelector('[data-content]').innerHTML = html;
    },
    setTitle: function setTitle(html) {
      $modal.querySelector('[data-title]').innerHTML = html;
    },
    setImage: function setImage(html) {
      $modal.querySelector('[data-image]').innerHTML = html;
    },
    setGallery: function setGallery(html) {
      $modal.querySelector('[data-gallery]').innerHTML = html;
    }
  });
};