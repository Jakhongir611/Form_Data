let doc = document
let form = doc.querySelector('form')
let form_in = doc.querySelector('.in')
let form_up = doc.querySelector('.up')

let sign_up = doc.querySelector('.sign_up')
let sign_in = doc.querySelector('.sign_in')
let x_1 = doc.querySelector('.btn_x_1')
let x_2 = doc.querySelector('.btn_x_2')
let btn_sign_in = doc.querySelector('.btn_sign_in')
let btn_sign_up = doc.querySelector('.btn_sign_up')
let main_page = doc.querySelector('.main_page')
let imya = doc.querySelector('#txt_1')
let familiya = doc.querySelector('#txt_2')
let pass = doc.querySelector('#pass')
let email = doc.querySelector('#email')
let file = doc.querySelector('#file')
let city = doc.querySelector('#city')
let data = doc.querySelector('#data')


x_1.addEventListener("click", (event) => {
    event.preventDefault()
    sign_in.classList.add('active')
    main_page.classList.remove('active')
})
x_2.addEventListener("click", (event) => {
    event.preventDefault()
    sign_up.classList.add('active')
    main_page.classList.remove('active')
})

btn_sign_in.addEventListener("click", (event)=>{
    event.preventDefault()
    sign_in.classList.remove('active')
    main_page.classList.add('active')
})
btn_sign_up.addEventListener("click", (event)=>{
    event.preventDefault()
    sign_up.classList.remove('active')
    main_page.classList.add('active')
})

form_up.addEventListener('submit', (event)=>{
    event.preventDefault()
    
    let inputs = doc.querySelectorAll('input')
    let check = doc.querySelector('#check')

    let form_data = {}

    inputs.forEach(item=>{
        form_data[item.name] = item.value
        form_data['check'] = check.checked
    })
    
    let obj = {
    name: imya.value,
    surname: familiya.value,
    password: pass.value,
    email: email.value,
    file: file.value,
    city: city.value,
    data: data.value
}
console.log(obj);

    imya.value = ""
    familiya.value = ""
    pass.value = ""
    email.value = ""
    file.value = ""
    city.value = ""
    data.value = ""
})















