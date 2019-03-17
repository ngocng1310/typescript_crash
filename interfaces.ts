/*  function showTodo(todo: {title:string, text: string}) {
   return todo.title + ': '+ todo.text;
 }

 let myTodo = {title: 'trash', text: 'take out trash'};

 console.log(showTodo(myTodo)); */

 interface Todo {
   title: string;
   text: string;
 }

function showTodo(todo: Todo) {
  return todo.title + ': '+ todo.text;
}
let myTodo = {title: 'trash', text: 'take out trash'};

console.log(showTodo(myTodo));