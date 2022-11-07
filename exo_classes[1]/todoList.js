const myList = document.getElementById('myList');
class TodoList {
    constructor (element) {
        this.listElement = element;
        this.textList = [];
    }

    static createListItem (text) {
        let createLi = document.createElement('li');
        createLi.textContent = text;
        return createLi
    }

    update () {
        this.listElement.append(TodoList.createListItem());
    }

    add (text) {
        this.textList.push(text);
        this.update(text);
        console.log(this.textList);

    }

    remove (index) {
        this.textList.splice(index, 1);
        console.log(this.textList);
    }
}

let todoApp = new TodoList(myList);
console.log(TodoList.createListItem('pppppppppp')); 
todoApp.add('hhhhhhhhhhh');
todoApp.add('uuuuuuuuuuu');
todoApp.add('oooooooooooo');
todoApp.remove(1);

let myHeader = document.createElement('header');
myHeader.setAttribute("class", "myHeader");
// document.body.insertBefore(myHeader, myList);
myList.after(myHeader);


