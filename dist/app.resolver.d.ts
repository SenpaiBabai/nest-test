import { Data } from './app.schema';
import { AppService } from './app.service';
export declare class AppResolver {
    private appService;
    constructor(appService: AppService);
    allTodos(): Promise<Data[]>;
    findTodo(id: string): Promise<Data>;
    createTodo(id: string, name: string, completed?: boolean): Promise<void>;
    deleteTodo(id: string): Promise<void>;
    editTodo(id: string, name: string, completed?: boolean): Promise<void>;
}
