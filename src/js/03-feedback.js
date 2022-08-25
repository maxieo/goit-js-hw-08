import throttle from "lodash.throttle"

const refs = {
    form: document.querySelector ('.feedback-form'),
    textarea: document.querySelector ('textarea[name="message"]'),
    email: document.querySelector ('input[name = "email"]')
}

const STORAGE_KEY = 'feedback-form-state'

let formData = {}

refs.form.addEventListener ('submit', onFormSubmit)
refs.form.addEventListener ('input', throttle (onTextarea, 500))

savedMessage ()

function onFormSubmit (e) {
    e.preventDefault ()

    e.currentTarget.reset()
    localStorage.removeItem (STORAGE_KEY)
    console.log(formData);
}

function onTextarea (e) {
    formData[e.target.name] = e.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}


function savedMessage () {
    const save = localStorage.getItem (STORAGE_KEY)

    if(save) {
        formData = JSON.parse (save)
            if (formData.email) {
                refs.email.value = formData.email
            }
            if (formData.message) {
                refs.textarea.value = formData.message
            }
    }
}

console.log('test');