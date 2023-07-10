"use strict";

var subjects = [];
fetch('../../../pages/TrueDBOBJ.json').then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data.subjects);
  subjects = data.subjects;
  render();
})["catch"](function (error) {
  return console.error('Error loading JSON data:', error);
});
var objRegions = ['#nav-north', '#nav-center', '#nav-south', '#nav-east', '#nav-west', '#nav-south'];

function render() {
  objRegions.forEach(function (regionId) {
    var html = toHtMl(subjects, regionId);
    var regionElement = document.querySelector(regionId);

    if (regionElement) {
      regionElement.innerHTML = html;
    }
  });
}

function toHtMl(subjects, regionId) {
  return subjects.filter(function (subject) {
    return subject.idobj === regionId;
  }).map(function (subject) {
    return "\n            <div class=\"col-3 col-md-2 \">\n                <div class=\"service_el\" data-open=\"true\" >\n                    <div class=\"service_img\">\n                        <img class=\"obj-img\" src=\"".concat(subject.img, "\" data-btn=\"showInfo\" data-id=\"").concat(subject.id, "\"  alt=\"").concat(subject.title, "\" />\n                    </div>\n                    <div class=\"service_title\" data-title>\n                        ").concat(subject.title, "\n                    </div>\n                </div>\n            </div>\n        ");
  }).join('');
}

render();
var infoModal = $.modal({
  title: " \n    ",
  closable: true,
  content: " ",
  width: '80vw',
  galleries: ""
});
document.addEventListener('click', function (event) {
  var btnType = event.target.dataset.btn;
  var id = +event.target.dataset.id;
  console.log(id);
  console.log(subjects);

  if (btnType === 'showInfo') {
    var subject = subjects.find(function (s) {
      return s.id === id;
    });
    console.log(subject);
    infoModal.setTitle("\n        <h1 class=\"vmodal-caption\" data-title>".concat(subject.title, "</h1>\n        ")), infoModal.setImage("\n        <picture>\n            <img class=\"modal-main-image\" src=\"".concat(subject.img, "\" height=\"600px\" width=\"100%\" alt=\"\">\n        </picture>\n        ")), infoModal.setContent("\n        <div class=\"vmodal-body\">\n            ".concat(subject.content, "\n        </div>\n        ")), infoModal.setGallery("\n        <div class=\"picture-wrap\">\n        ".concat(subject.galleries, "\n        </div>\n            "));
    infoModal.open();
  }
}); // function render() {
//     objRegions.forEach(regionId => {
//         const html = toHtMl(subjects, objRegions, regionId)
//         document.querySelector(regionId).innerHTML = html
//     })
// }
// function render() {
//     const html = subjects.map(
//         // subject => toHTML(subject)
//         toHTML
//     ).join('')
//     document.querySelector(`${
//         objRegions.map( function (el) {
//             return el
//             })
//     }`).innerHTML = html
// }
// const toHTML = subject => `
//     <div class="col-3 col-md-2 ">
//         <div class="service_el" data-open="true" >
//             <div class="service_img">
//                 <img class="obj-img" src="${subject.img}" data-btn="showInfo" data-id="${subject.id}"  alt="${subject.title}" />
//             </div>
//             <div class="service_title" data-title>
//                 ${subject.title}
//             </div>
//         </div>
//     </div>
// `