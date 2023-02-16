const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

const dragOver = (event) => {
    event.preventDefault()
}
const dragLeave = (event) => {
    event.target.classList.remove('hovered')
}
const dragEnter = (event) => {
    event.target.classList.add('hovered')
}
const dragDrop = (event) => {
    event.target.classList.remove('hovered')
    event.target.append(item)
}

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragDrop)
})

const dragStart = (event) => {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

const dragEnd = (event) => {
    event.target.classList.remove('hide', 'hold')
}



item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)



