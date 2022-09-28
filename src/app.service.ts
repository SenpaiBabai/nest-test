import { Injectable } from '@nestjs/common';
import { dataTodo } from './data/todos';
import { Data } from './app.schema';

@Injectable()
export class AppService {
  data: Partial<Data[]>;
  constructor() {
    this.data = dataTodo;
  }

  async findAll() {
    return this.data;
  }

  async findById(id) {
    const data = this.data.filter((todo) => todo.id === id);

    if (data.length) {
      return data[0];
    }

    return null;
  }

  async createTodo(id, name, boolValue=true) {
    this.data.push({
      id: id,
      name: name,
      completed: boolValue,
    });
  }

  async deleteTodo(id) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        this.data.splice(i, 1);
      }
    }
  }

  async editTodo(id, name, completed) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        this.data[i].name = name;
        this.data[i].completed = completed;
      }
    }
  }
}
