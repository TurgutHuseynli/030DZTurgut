//lvl111
let most = 0
let v = []
let total = ''
function nearestChapter(a, b){
    v = Object.values(a)
    most = v[0]
    for(let i of v){
        if(Math.abs(i-b) === Math.abs(most-b)){
            most = Math.max(most, i)
        }else if(Math.abs(i-b) < Math.abs(most - b)){
            most = i
        }
    }
    for(let i in a){
        if(a[i] === most){
            total = i
        }
    }
    return total
}
console.log(nearestChapter({
    'Chapter 1': 1,
    'Chapter 2': 15,
    'Chapter 3': 37
}, 10)) //Chapter 2
console.log(nearestChapter({
    'Chapter 1a' : 1,
    'Chapter 1b' : 9
}, 5)) //Chapter 1b
//lvl112    ????
//lvl113
let sp = []
let arr = []
function sumNumbers(a){
    total = 0
    arr = []
    for(let i of a){
        sp = i.split('')
        arr = []
        for(let i of sp){
            if(!isNaN(Number(i))){
                arr.push(Number(i))
            }
        }
        for(let i of arr){
            total += i
        }
    }
    return total
}
console.log(sumNumbers(['1aw', '2wo', 'ni9e'])) //12
//Я частично сделал это задание (113)
//lvl114
function freeShipping(a){
    total = 0
    v = Object.values(a)
    for(let i of v){
        total += i
    }
    return total > 50
}
console.log(freeShipping({milk: 3, headphones: 45})) //false
console.log(freeShipping({tv: 500})) //true
//lvl115
function afterNYears(a, b){
    total = {}
    for(let i in a){
        total[i] = a[i] + Math.abs(b)
    }
    return total
}
console.log(afterNYears({
    John: 30,
    Sam: 12
}, 6)) //{John: 36, Sam: 18}
//Тесты
// 1)
//выведите в консоли ширину и высоту окна браузера с помощью window
console.log(innerWidth, innerHeight)

// 2)
//создайте обработчик события для кнопки ниже, которая будет открывать новое окно в браузере при нажатии
{/* <button id='open'>Open</button> */}
// document.getElementById('open').addEventListener('click', () => {
//     window.open()
// })

// 3)
//создайте обработчик события для кнопки ниже, которая будет закрывать текущее окно в браузере при нажатии
{/* <button id='close'>Open</button> */}
// document.getElementById('close').addEventListener('click', () => {
//     window.close()
// })

// 4)
//создайте обработчик события для кнопки ниже, которая будет перемещать текущее окно в браузере при нажатии
{/* <button id='move'>Open</button> */}
// document.getElementById('move').addEventListener('click', () => {
//     window.moveTo()
// })

// 5)
//создайте обработчик события для кнопки ниже, которая будет менять размер текущего окно в браузере при нажатии
{/* <button id='remove'>Open</button> */}
// document.getElementById('remove').addEventListener('click', () => {
//     window.resizeTo()
// })

// 6)
//выведите в консоли ширину экрана пользователя в пикселях
console.log(screen.width) //1366

// 7)
//выведите в консоли высоту экрана пользователя в пикселях
console.log(screen.height) //768

// 8)
//выведите в консоли ширину экрана пользователя без панели задач и интерфейса вкладок в пикселях
console.log(screen.availWidth) //1366

// 9)
//выведите в консоли высоту экрана пользователя без панели задач и интерфейса вкладок в пикселях
console.log(screen.availHeight) //728

// 10)
//выведите в консоли сколько битов использует браузер пользователя
console.log(screen.colorDepth) //24

// 11)
//выведите в консоли глубину экрана пользователя в пикселях
console.log(screen.pixelDepth) //24

// 12)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на предыдущую страницу в браузере при нажатии
{/* <button id='back'>Open</button> */}
// document.getElementById('back').addEventListener('click', () => {
//     history.back()
// })

// 13)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на следующую страницу в браузере при нажатии
{/* <button id='next'>Open</button> */}
// document.getElementById('next').addEventListener('click', () => {
//     history.forward()
// })

// 14)
//с помощью какого свойства можно проверить включены ли у пользователя куки
console.log(navigator.cookieEnabled) //true
// 15)
//с помощью какого свойства можно проверить как называется имя приложения в браузере пользователя
console.log(navigator.appCodeName) //Mozilla

// 16)
//с помощью какого свойства можно проверить как называется имя браузера пользователя
console.log(navigator.appName) //NetScape
console.log(navigator.product) //Gecko

// 17)
//с помощью какого свойства можно проверить какая версия у браузера пользователя
console.log(navigator.appVersion)

// 18)
//с помощью какого свойства можно отправить заголовок браузера на сервер
console.log(navigator.userAgent)

// 19)
//с помощью какого свойства можно узнать операционную систему пользователя
console.log(navigator.platform) //Win32

// 20)
//с помощью какого свойства можно узнать язык браузера пользователя
console.log(navigator.language) //ru-RU

// 21)
//с помощью какого свойства можно узнать находится в данный момент пользователь в сети или нет
console.log(navigator.onLine) //true

// 22)
//с помощью какого свойства можно проверить включен ли java у пользователя
console.log(navigator.javaEnabled()) //false