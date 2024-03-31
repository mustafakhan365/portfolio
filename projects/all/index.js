jQuery(document).ready(function() {
    fetchAllProjects('/projects/cms/data.json', '#allcontent');
    fetchAllProjects('/projects/custom/data.json', '#allcontent');
    fetchAllProjects('/projects/front/data.json', '#allcontent');
});

function fetchAllProjects(endpoint, containerId) {
    jQuery.getJSON(endpoint).then(function(data) {
        jQuery.each(data, function(index, project) {
          let card = `
            <div class="card border-0 bg-dark" data-bs-toggle="modal" data-bs-target="#projectsModal">
              <img src="${project.image}" class="card-img-top" alt="...">
              <div class="card-body text-white p-4">
                <h5 class="card-title fw-bold fs-6 mb-2">${project.title}</h5>
                <p class="card-text fw-medium mb-0">${project.category}</p>
                <a data-bs-toggle="modal" data-bs-target="#projectsModal" class="viewproject fw-semibold text-decoration-none" style="color: #f9f9f9">View project</a>
              </div>
            </div>`;
          jQuery(containerId).append(card);
        });
      }).catch(function(error) {
        console.error('Error fetching JSON:', error);
    });
}