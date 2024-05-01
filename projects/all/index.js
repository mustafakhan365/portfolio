jQuery(document).ready(function() {
    fetchAllProjects('/projects/cms/data.json', '#allcontent');
    fetchAllProjects('/projects/custom/data.json', '#allcontent');
    fetchAllProjects('/projects/front/data.json', '#allcontent');
});

function fetchAllProjects(endpoint, containerId) {
    jQuery.getJSON(endpoint).then(function(data) {
        jQuery.each(data, function(index, project) {
          let showLink = project.details.showLink === 'true' ? `
            <a class="h5 text-decoration-none fw-bold text" href="${project.details.link}" target="_blank" style="padding-left: 2rem;">
              Open Project 
              <svg style="width: 30px; cursor: pointer" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"><path d="m322.7 128.4 100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z" fill="#f8f9fa" class="fill-000000"></path></svg>
            </a>` : '';
          let card = `
            <div class="card border-0 bg-dark" data-bs-toggle="modal" data-bs-target="#projectsModal${project.allid}">
              <img src="${project.image}" class="card-img-top" alt="...">
              <div class="card-body text-white p-4">
                <h5 class="card-title fw-bold fs-6 mb-2">${project.title}</h5>
                <p class="card-text fw-medium mb-0">${project.category}</p>
                <a data-bs-toggle="modal" data-bs-target="#projectsModal${project.allid}" class="viewproject fw-semibold text-decoration-none" style="color: #f9f9f9">View project</a>
              </div>
            </div>
            <div class="modal fade" id="projectsModal${project.allid}" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="projectsModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content text-white bg-dark">
                  <div class="modal-header">
                    <h1 class="modal-title h4" id="projectsModalLabel">${project.details.title}</h1>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-bs-dismiss="modal" aria-label="Close" style="width: 30px; cursor: pointer">
                      <path d="m7 7 18 18M7 25 25 7" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" class="stroke-000000"></path>
                    </svg>
                  </div>
                  <div class="modal-body">
                    <div class="row flex-lg-nowrap mw-100 overflow-x-hidden">
                      <div class="col-12 col-lg-7">
                        <p class="fs-6 fst-italic">${project.details.description}</p>
                      </div>
                      <div class="col-12 col-lg-5">
                        <ul style="list-style: square; color: #00A8FF;">
                          <li>
                            <strong>Tech Stack:</strong> <span class="f2 text-white">${project.details.tech}</span>
                          </li>
                        </ul>
                        ${showLink}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        ${project.details.images.map((image, index) => (
                          '<img key="' + index + '" class="img-fluid my-4" src="' + image + '" alt="" />'
                        )).join('')}
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn rounded-pill px-4 py-2 fw-medium text-dark bg-white" data-bs-dismiss="modal">Back</button>
                    <button type="button" class="btn rounded-pill px-4 py-2 fw-medium text-white" style="background: #00A8FF; margin-left: -25px"><a class="text-decoration-none text-white" href='https://api.whatsapp.com/send?phone=923009818065' target='_blank'>Contact now</a></button>
                  </div>
              </div>
            </div>
          </div>`;
          jQuery(containerId).append(card);
        });
      }).catch(function(error) {
        console.error('Error fetching JSON:', error);
    });
}