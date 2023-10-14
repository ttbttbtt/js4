document.getElementById("addBtn").addEventListener("click",addBtn)
let arr=[]

function addBtn(){
    let std1=document.querySelector(".stdName").value     // имя
    let std2=document.querySelector(".stdSureName").value // фамилия
    console.log(std1,std2);

    let std_cont=document.querySelector(".StudentWrapper")// ol

    // так тоже можно создать объект
    // let stdobj=new Object()
    // stdobj.stdname1="qqq",
    // stdobj.stdname2="www"

    // создание объекта
    let stdobj={
        stdname1:std1,
        stdname2:std2
    }
    console.log(stdobj);

    arr.push(stdobj)                          // добавление объекта stdobj  в массив arr
    console.log(arr);

    let stdlist=document.createElement("li")  // создание тэга li
    // stdlist.innerHTML=`Имя: ${std1}   Фамилия: ${std2}`
    stdlist.innerHTML=`${std1} ${std2}`
    console.log(stdlist);

    std_cont.appendChild(stdlist)             // добавление в std_cont дочернего элемента stdlist

    let butt=document.createElement("button") // создание кнопки "Удалить"
    butt.innerHTML="Удалить"                  // добавление кнопки "Удалить"
    stdlist.appendChild(butt)

    document.querySelector(".stdName").value=""     // очистка имени
    document.querySelector(".stdSureName").value="" // очистка фамилии

    butt.onclick=del                          // при КЛИКе на кнопку butt вызывается функция del
}

function del(){
    // document.querySelectorAll('ol li').forEach((link, index) => {
    //     link.addEventListener('click', () => {
    //         console.log('Удалён объект с индексом ' + index + new Date());
    //     });
    //  });


    let elems = document.querySelectorAll('li');
    let i=1
    for (let elem of elems) {
        elem.addEventListener('click', function() {
            // console.log('Удалён '+i);
            elem.remove();
        }
        );
        i+=1
    }
}



console.log("")
console.log("------------------------------ З А Д А Ч И ------------------------------")


console.log("1. Задачка про кошку")
let cat = {
    name: "Ника",
    age: 2
}
console.log(cat)
console.log("")



console.log("2. Задачка про автомобиль")
let car = {
    mark: "Volkswagen",
    year: 2012
}
console.log(car)
car.year = 2023
console.log(car)
console.log("")



console.log("3. Задачка про книгу")
let book = {
    name: "Я вас любил...",
    autor: "А.С.Пушкин",
    year: 2000
}
console.log(book)
book.genre = "Стихотворение"
console.log(book)
console.log("")



console.log("4. Задачка про студента")
let stdnt = {
    name: "Иван",
    age: 22,
    gpa: 88
}
console.log(stdnt)
stdnt.gpa = 99
console.log(stdnt)
console.log("")



console.log("5. Задачка про фрукты")
let fruit = {
    name: "Яблоко",
    color: "Зелёное",
    taste: "Кислое"
}
console.log(fruit)
fruit.quantity = 2
console.log(fruit)
console.log("")