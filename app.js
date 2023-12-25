
const draggables = document.querySelectorAll('.draggable');
const itemWrapper = document.getElementById('item-wrapper');
const draggableItemWrapper = document.querySelector('.draggable-item-wrapper')
const leftOver=draggableItemWrapper.childNodes


draggables.forEach(card => {
    card.addEventListener('dragstart', () => {
        card.classList.add('dragging')
        showAllCards();
    })
    card.addEventListener('dragend', () => {
        card.classList.remove('dragging')
        card.style.position = 'unset';
        showAllCards();
    }) 
})


itemWrapper.addEventListener('dragover', (event) => {
    event.preventDefault();
  
    const draggedItem = document.querySelector('.dragging');
    draggedItem.style.position = 'unset'
    itemWrapper.appendChild(draggedItem)

    draggables.forEach(card => {
        card.addEventListener('dragend', () => {
            card.classList.remove('dragging')
            card.style.position = 'unset'
            hideOtherCards(card); 
        })
    })
    
})

draggableItemWrapper.addEventListener('dragover', (event) => {
    event.preventDefault();
    
    const draggedItem = document.querySelector('.dragging');
    draggedItem.style.position = 'absolute'
    draggableItemWrapper.appendChild(draggedItem)
 
    draggables.forEach(card => {
        card.addEventListener('dragend', () => {
            card.classList.remove('dragging')
            card.style.position = 'absolute'
            showAllCards();
        })
    })
})



function hideOtherCards(currentCard) {
    draggables.forEach(card => {
        if (card !== currentCard) {
            card.classList.add('none')
        }
    });
}

function showAllCards() {
    draggables.forEach(card => {
        card.classList.remove('none')
    });
}