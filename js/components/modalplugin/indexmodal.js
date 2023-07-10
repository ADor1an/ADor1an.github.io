let subjects = [];
    fetch('../../../pages/TrueDBOBJ.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.subjects);
    subjects = data.subjects;
    render();
    })
    .catch(error => console.error('Error loading JSON data:', error));
const objRegions = [
    '#nav-north',
    '#nav-center',
    '#nav-south',
    '#nav-east',
    '#nav-west',
    '#nav-south'
]
function render() {
    objRegions.forEach(regionId => {
        const html = toHtMl(subjects, regionId);
        const regionElement = document.querySelector(regionId);
        if (regionElement) {
            regionElement.innerHTML = html;
        }
    });
}
function toHtMl(subjects, regionId) {
    return subjects
        .filter((subject) => subject.idobj === regionId)
        .map((subject) => `
            <div class="col-3 col-md-2 ">
                <div class="service_el" data-open="true" >
                    <div class="service_img">
                        <img class="obj-img" src="${subject.img}" data-btn="showInfo" data-id="${subject.id}"  alt="${subject.title}" />
                    </div>
                    <div class="service_title" data-title>
                        ${subject.title}
                    </div>
                </div>
            </div>
        `).join('');
}
render()
const infoModal = $.modal({
    title: ` 
    ` ,
    closable: true, 
    content:` ` ,
    width: '80vw',
    galleries: ``,
})

document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    console.log(id);
    console.log(subjects);
    if (btnType ==='showInfo' ) {
        const subject = subjects.find(s => s.id === id)
        console.log(subject);
        infoModal.setTitle(`
        <h1 class="vmodal-caption" data-title>${subject.title}</h1>
        `),
        infoModal.setImage(`
        <picture>
            <img class="modal-main-image" src="${subject.img}" height="600px" width="100%" alt="">
        </picture>
        `),
        infoModal.setContent(`
        <div class="vmodal-body">
            ${subject.content}
        </div>
        `),
        infoModal.setGallery(`
        <div class="picture-wrap">
        ${subject.galleries}
        </div>
            `)
        infoModal.open()
    }
})




// function render() {
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