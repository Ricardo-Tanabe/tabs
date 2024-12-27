const tabSelector = document.querySelectorAll('#options li')
const multableContainer = document.querySelector('.tab-container p')

const itemDict = {
    "Fist Tab": 'Texto utilizado durante o First Tab',
    "Second Tab": 'Outro modelo realizado no Second Tab',
    "Third Tab": 'Third Tab sendo digitado a caminho',
    "Fourth Tab": "Outro texto realizado por Fourth Tab completo"
}

function indexPersistItem(item) {
    if(item.classList.contains('persist')) {
        item.classList.remove("persist");
        if(item.nextElementSibling) {
            item.nextElementSibling.classList.add("persist");
        } else { tabSelector[0].classList.add("persist"); }
        return true;
    }
    return false;
}

tabSelector.forEach(element => {
    element.addEventListener('click', () => {
        tabSelector.forEach(item => { item.classList.remove("persist"); });
        element.classList.add("persist");
        multableContainer.innerHTML = itemDict[element.innerHTML]
        console.log(itemDict[element.innerHTML])
    });
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Tab') {
        e.preventDefault()
        Array.from(tabSelector).some(item => indexPersistItem(item));
        const itemPersist = document.querySelector('.persist');
        multableContainer.innerHTML = itemDict[itemPersist.innerHTML]
        console.log(itemDict[itemPersist.innerHTML])
    }
})