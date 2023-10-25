//sade modal taska uygun scripts kodu

//createElement 
// let modal = document.createElement('div')
// let content = document.createElement('div')
// let btnCancel = document.createElement('i')
// let base = document.createElement('base')
// let btn = document.createElement('button')

//querySelector
// let body = document.querySelector('body')


////classList.add and textContent
// modal.classList.add('modal')
// content.classList.add('content')
// btnCancel.classList.add('fa-brands','fa-x-twitter')
// base.classList.add('base')
// content.textContent = 'Salam X-e basaraq baglaya bilersiz'
// btn.textContent = 'Click ME'


//append
// modal.append(content)
// modal.append(btnCancel)
// base.append(modal)
// base.append(btn)
// body.append(base)


//style
// modal.style.maxWidth = "1900px"
// modal.style.width = '100%'
// modal.style.minHeight = "100px"
// modal.style.height = "100%"
// // modal.style.backgroundColor = "#888"


//onclick
// btn.onclick = () =>{
//     modal.classList.toggle('aktiv')
//     btnCancel.onclick = () =>{
//         modal.classList.remove('aktiv')
//     }
// }







//bu da modal scripts


//createElement 
const bg = document.createElement("div");
const card = document.createElement("div");
const cardContent = document.createElement("div");
const btnCancel = document.createElement("span");
const cardImage = document.createElement("div");
const img = document.createElement("img"); 
const h3 = document.createElement("h3");
const p = document.createElement("p");
const input = document.createElement("input");
const btn = document.createElement("button");
const buton = document.createElement('button')

//querySelector
const body = document.querySelector('body')


// img.src ="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/03/ragnar-vikings.jpg";



//classList.add and setAttribute
bg.classList.add("bg");
card.classList.add("card");
cardContent.classList.add("card-content");
cardImage.classList.add("card-img");
cardImage.appendChild(img);
img.setAttribute('src','https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/03/ragnar-vikings.jpg');
input.classList.add('inputType')
btn.classList.add('second')
input.placeholder = "alpay@gmail.com"
input.setAttribute('type', 'email');
btn.setAttribute('type', 'submit');
buton.classList.add("buton");


//textContent
btnCancel.textContent = "X";
h3.textContent = "X-e basaraq baglaya bilersiz"
p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,ducimus!"
btn.textContent = 'Do Something'
buton.textContent = 'click me'



//append
cardContent.append(btnCancel)
cardContent.append(cardImage)
cardContent.append(h3)
cardContent.append(p)
cardContent.append(input)
cardContent.append(btn)
card.append(cardContent)
bg.append(buton)
bg.append(card)
body.append(bg)


//onclick
buton.onclick = () =>{
    card.classList.toggle('aktiv')
    btnCancel.onclick = () =>{
        card.classList.remove('aktiv')
    }
}