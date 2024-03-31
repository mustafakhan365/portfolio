jQuery(document).ready(function() {
  jQuery.getJSON('/projects/custom/data.json').then(function(data) {
    jQuery.each(data, function(index, project) {
      let card = `
        <div class="card border-0 bg-dark" data-bs-toggle="modal" data-bs-target="#projectsModal">
          <img src="projects/images/${project.image}" class="card-img-top" alt="...">
          <div class="card-body text-white p-4">
            <h5 class="card-title fw-bold fs-6 mb-2">${project.title}</h5>
            <p class="card-text fw-medium mb-0">${project.category}</p>
            <a data-bs-toggle="modal" data-bs-target="#projectsModal" class="viewproject fw-semibold text-decoration-none" style="color: #f9f9f9">View project</a>
          </div>
        </div>`;
      jQuery('#customcontent').append(card);
    });
  }).catch(function(textStatus, errorThrown) {
    console.error('Error fetching JSON:', textStatus, errorThrown);
  });
});