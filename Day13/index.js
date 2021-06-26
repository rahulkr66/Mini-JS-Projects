const addBtn = document.querySelector(".add");

addBtn.addEventListener('click', () => {
    addNote();
});

function addNote(text = '') {
    //console.log("add");
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
         <div class="tool">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <div class="main ${text?"":"hidden"}" ></div>
        <textarea class="${text?"hidden":""}"></textarea>
    `;
    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    deleteBtn.addEventListener('click', () => {
        note.remove();
    })

    textArea.value = text; //textarea has a value
    main.innerHTML = marked(text);

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
    })


    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');

    const notes = [];
    notesText.forEach(note => notes.push(note.value));

    
}
