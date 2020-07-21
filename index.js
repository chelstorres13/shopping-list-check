function shoppingListCheck(){
//add items typed in
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let shoppingItemName = $('#shopping-list-entry').val();
  $('.shopping-list').prepend(`<li>
        <span class="shopping-item">${shoppingItemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)

  });
    //toggle between check and uncheck
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
   });
  //remove items
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {$(this).closest('li').remove();
   });

}
$(shoppingListCheck());
