import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('todo');
    },
    actions: {
        createTodo(newTitle) {
            this.store.createRecord('todo', {
               title: newTitle,
               complete: false
            });
        },
        updateTodo(todo) {
            console.log(todo);
        },
        deleteTodo(todo) {
            todo.deleteRecord();
        }
    }
});
