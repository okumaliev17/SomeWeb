let header = document.createElement('header') //Создан хедер
header.classList = 'header'// Назвали класс
document.body.append(header)// added header in body
let logo = document.createElement('div')// created logo
logo.classList = 'logo'// added logo to class
header.append(logo)// added header in logo
let img = document.createElement('img')
img.src="img/60b8ee61-142c-41fe-b23f-e55fb78ec381.jpg"
logo.append(img)

let slogan = document.createElement('h1')
slogan.classList = 'slogan'
slogan.innerHTML = 'slogan slogan slogan'
logo.append(slogan)

let nav = document.createElement ('nav')
nav.classList = 'nav'
header.append(nav)
let li = document.createElement('li')
nav.append(li)
let nav_item = document.createElement('a')
nav_item.classList = 'nav_item'
nav_item.innerHTML = 'Главная'
li.append(nav_item)

    let li1 = document.createElement('li')
    nav.append(li1)
     let nav_item1 = document.createElement('a')
     nav_item1.classList = "nav_item"
     nav_item1.innerHTML = 'О приложении'
    li1.append(nav_item1)

let li2 = document.createElement('li')
nav.append(li2)
let nav_item2 = document.createElement('li')
nav_item2.classList = 'nav_item'
nav_item2.innerHTML = "О проекте"
li2.append(nav_item2)

let li3 = document.createElement('li')
nav.append(li3)
let nav_item3 = document.createElement('a')
nav_item3.classList = 'nav_item'
nav_item3.innerHTML = 'Скачать'
li3.append(nav_item3)

let li4 = document.createElement('li')
nav.append(li4)
let nav_item4 = document.createElement('a')
nav_item4.classList = 'nav_item'
nav_item4.innerHTML = 'Контакты'
li4.append(nav_item4)

let cards = document.createElement('div')
cards.classList = 'cards'
header.append(cards)
let card1 = document.createElement('div')
card1.classList = 'card'
cards.append(card1)

let card2 = document.createElement('div')
card2.classList = 'card'
cards.append(card2)

let card3 = document.createElement('div')
card3.classList = 'card'
cards.append(card3)

let p1 = document.createElement('p')
p1.innerHTML  = "Часто ли Вы опаздываете <br> на работу(учебу)?"
card1.append(p1)

let p2 = document.createElement('p')
p2.innerHTML  = "Часто ли Вы опаздываете <br> на работу(учебу)?"
card2.append(p2)

let p3 = document.createElement('p')
p3.innerHTML  = "Часто ли Вы опаздываете <br> на работу(учебу)?"
card3.append(p3)
 
let about = document.createElement('p')
about.classList ='about'
about.innerHTML = 'О приложении'
document.body.append(about)

let video = document.createElement('div')
video.classList = 'video'
document.body.append(video)
let video_img = document.createElement('img')
video_img.src="img/rawpixel-559744-unsplash.jpg"
video.append(video_img)

let play = document.createElement('div')
play.classList = 'play'
document.body.append(play)
let play_btn = document.createElement('img')
play_btn.src="img/play-button.png"
play.append(play_btn)

let section = document.createElement('div')
section.classList = 'section'
document.body.append(section)

let sec_img = document.createElement('img')
sec_img.classList = 'imgs'
sec_img.src="img/question.jpg"
section.append(sec_img)

let sec_img2 = document.createElement('img')
sec_img2.classList = 'imgs'
sec_img2.src="img/question.jpg"
section.append(sec_img2)

let sec_img1 = document.createElement('img')
sec_img1.classList = 'imgs'
sec_img1.src="img/question.jpg"
section.append(sec_img1)

let sec_img3 = document.createElement('img')
sec_img3.classList = 'imgs'
sec_img3.src="img/question.jpg"
section.append(sec_img3)

let sec_img4 = document.createElement('img')
sec_img4.classList = 'imgs'
sec_img4.src="img/question.jpg"
section.append(sec_img4)

let e3 = document.createElement('div')
e3.classList = 'e3'
document.body.append(e3)
let proj = document.createElement('p')
proj.classList = 'proj'
proj.innerHTML = 'О проекте'
e3.append(proj)
let tproj = document.createElement('p')
tproj.classList = 'tproj'
tproj.innerHTML = 'Курс для начинающих предпринимателей, направленный на<br> качественный результат за 6 недель. Опытные бизнесмены,<br> инвесторы и профессионалы в своем деле помогают<br> участникам на всех этапах развития их бизнеса: от<br> разработки идеи до ее реализации.'
e3.append(tproj)

let download = document.createElement('p')
download.classList = 'download'
download.innerHTML = 'Скачать'
document.body.append(download)

let andr = document.createElement('div')
andr.classList = 'andr'
document.body.append(andr)
let andr_img = document.createElement ('img')
andr_img.src="img/android.png"
andr_img.style.height = '250px'
andr.append(andr_img)

let andr_img1 = document.createElement ('img')
andr_img1.src="img/icon.png"
andr_img1.style.height = '250px'
andr.append(andr_img1)

let dtext = document.createElement('p')
dtext.classList = 'dtext'
dtext.innerHTML = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6<br> недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают<br> участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'
document.body.append(dtext)

let footer = document.createElement ('footer')
footer.classList = 'footer'
document.body.append(footer)
let some = document.createElement('h1')
some.classList = 'some'
some.innerHTML = 'SOME'
footer.append(some)

let c2 = document.createElement('div')
c2.classList = 'c2'
footer.append(c2)

let social = document.createElement('img')
social.classList = 'social'
social.src="img/vk.png"
c2.append(social)

let social1 = document.createElement('img')
social1.classList = 'social'
social1.src="img/facebook.png"
c2.append(social1)

let social2 = document.createElement('img')
social2.classList = 'social'
social2.src="img/instagram (1).png"
c2.append(social2)

let contact = document.createElement('div')
contact.classList = 'contact'
footer.append(contact)

let contact_item = document.createElement('li')
contact_item.innerHTML = 'Контакты'
contact.append(contact_item)

let contact_item1 = document.createElement('li')
contact_item1.innerHTML = 'Адреса'
contact.append(contact_item1)

let contact_item2 = document.createElement('li')
contact_item2.innerHTML = 'Помощь'
contact.append(contact_item2)

let c3 = document.createElement('div')
c3.classList = 'c3'
footer.append(c3)
let c3_item = document.createElement('li')
c3_item.innerHTML = 'Tel.: +996 (312) 915000 <br> Еxt.<br> Fax: +996 (312) 915 028'
c3.append(c3_item)
let c3_item1 = document.createElement('li')
c3_item1.innerHTML = 'American University of Central Asia <br> 7/6 Aaly Tokombaev Street<br> Bishkek, Kyrgyz Republic 720060'
c3.append(c3_item1)
let c3_item2 = document.createElement('li')
c3_item2.innerHTML = 'Помощь<br>Помощь<br>Помощь'
c3.append(c3_item2)