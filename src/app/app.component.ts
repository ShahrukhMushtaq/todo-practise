import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY TODO APP';
  todolist = [{description : 'Do something',}];

  addTodo(newTodo){
    var newList = {description : newTodo};
    this.todolist.push(newList);

  }

  deleteTodo(todo){
    this.todolist = this.todolist.filter(t => t.description !== todo.description);

  }
private edit: boolean = false;
editTodo(){
  this.edit = true;
}

ngOnChanges(){
  this.edit = false;
}
}
