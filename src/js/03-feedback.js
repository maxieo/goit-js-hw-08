import throttle from "lodash.throttle"

const refs = {
    form: document.querySelector ('.feedback-form'),
    textarea: document.querySelector ('.feedback-form textarea')
}

const STORAGE_KEY = 'feedback-form-state'

savedMessage ()
const formData = {}


refs.form.addEventListener ('submit', onFormSubmit)
refs.textarea.addEventListener ('input', throttle (onTextarea, 500))

    refs.form.addEventListener ('input', e => {
        formData[e.target.name] = e.target.value
        console.log(formData);
    })

function onFormSubmit (e) {
    e.preventDefault ()

    e.currentTarget.reset()
    localStorage.removeItem (STORAGE_KEY)
}

function onTextarea (e) {
    const value = e.target.value
    localStorage.setItem(STORAGE_KEY, value)
}


function savedMessage () {
    const save = localStorage.getItem (STORAGE_KEY)

    if(save) {
        refs.textarea.value = save
    }
}