$(function shoppingList(){
// submit the event as another function
  $('#js-shopping-list-form').submit(event => {
    //prevent submission to server
    event.preventDefault();

    const userItem = $(event.currentTarget).find('#shopping-list-entry');

    const newBox = $(
      `<li>
        <span class="shopping-item">${userItem.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>;`)

    $('ul').append(newBox);
  });

  $("ul").on('click', ".shopping-item-toggle", function(event){
      $(this).closest("li").children(".shopping-item").toggleClass("shopping-item__checked")
  });
  $("ul").on('click', ".shopping-item-delete", function(event){
    $(this).closest("li").remove();
  });
});
