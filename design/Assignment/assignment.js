var category_template, animals_template, animal_template, modal_template;

function updateBreadcrumb(category_index, animal_index) {
  $('.breadcrumb').empty();

  $('.breadcrumb').append('<li id="category"><a href="#">Category</a></li>');
  $('#category').click(function() {
    showCategory();
  });

  if (typeof category_index == 'number') {
    var name = animals_data.category[category_index].name;
    $('.breadcrumb').append('<li id="animals"><a href="#">' + name + '</a></li>');
    $('#animals').click(function() {
      showAnimals(category_index);
    });
  }

  if (typeof animal_index == 'number') {
    var name = animals_data.category[category_index].animals[animal_index].name;
    $('.breadcrumb').append('<li id="animal"><a href="#">' + name + '</a></li>');
    $('#animal').click(function() {
      showAnimal(category_index, animal_index);
    });
  }
}

function showCategory() {
  var html = category_template(animals_data);
  $('#content').html(html);

  $('.animals-entry').click(function() {
    var category_index = $(this).data('id');
    showAnimals(category_index);
  });

  updateBreadcrumb();
}

function showAnimals(category_index) {
  var data = animals_data.category[category_index];
  var html = animals_template(data);
  $('#content').html(html);

  $('.animal-entry').click(function() {
    var animal_index = $(this).data('id');
    showAnimal(category_index, animal_index);
  });

  updateBreadcrumb(category_index);
}

function showAnimal(category_index, animal_index) {
  var data = animals_data.category[category_index].animals[animal_index];
  var html = animal_template(data);
  $('#content').html(html);

  $('.modal-entry').click(function(e) {
    e.preventDefault();

    var data = { src: $(this).attr('href') };
    var html = modal_template(data);
    $('#modal-container').html(html);
    $('#image-modal').modal('show');
  });

  updateBreadcrumb(category_index, animal_index);
}

$(document).ready(function() {
  var source = $('#category-template').html();
  category_template = Handlebars.compile(source);
  source = $('#animals-template').html();
  animals_template = Handlebars.compile(source);
  source = $('#animal-template').html();
  animal_template = Handlebars.compile(source);
  source = $('#modal-template').html();
  modal_template = Handlebars.compile(source);

  showCategory();
});