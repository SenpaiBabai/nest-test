import { Data } from './app.schema';
export declare class AppService {
    data: Partial<Data[]>;
    constructor();
    findAll(): Promise<Data[]>;
    findById(id: any): Promise<Data>;
    createTodo(id: any, name: any, boolValue?: boolean): Promise<void>;
    deleteTodo(id: any): Promise<void>;
    editTodo(id: any, name: any, completed: any): Promise<void>;
}
