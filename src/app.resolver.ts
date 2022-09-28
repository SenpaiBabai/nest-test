import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Data } from './app.schema';
import { AppService } from './app.service';

@Resolver(() => Data)
export class AppResolver {
  constructor(private appService: AppService){}

  @Query(() => [Data])
  async allTodos() {
    return this.appService.findAll();
  }

  @Query(() => Data)
  async findTodo(@Args({name: 'id', nullable: false}) id: string) {
    return this.appService.findById(id);
  }
  
  @Mutation(() => Data)    
  async createTodo(
    @Args({name: 'id', nullable: false}) id: string,
    @Args({name: 'name', nullable: false}) name: string,
    @Args({name: 'completed', nullable: true}) completed?: boolean) {
      return this.appService.createTodo(id, name, completed);
  }

  @Mutation(() => Data)
  async deleteTodo(@Args({name: 'id', nullable: false}) id: string) { 
    return this.appService.deleteTodo(id);
  }

  @Mutation(() => Data)
  async editTodo(
    @Args({name: 'id', nullable: false}) id: string,
    @Args({name: 'name', nullable: false}) name: string,
    @Args({name: 'completed', nullable: true}) completed?: boolean) {
      return this.appService.editTodo(id, name, completed);
    }

}
