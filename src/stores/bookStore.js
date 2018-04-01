import Dispatcher from '../dispatcher/appDispatcher';
import {EventEmitter} from 'events';


const CHANGE_EVENT = 'change';

let _bookStore = {
  books: []
};

class BookStoreClass extends EventEmitter{

    addChangeListener(cb){
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb){
        this.removeListener(CHANGE_EVENT, cb);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getAllBooks(){
        return _bookStore.books;
    }

}

const BookStore = new BookStoreClass();

Dispatcher.register( (action) => {

    switch (action.actionType){
        case 'read_books':
            _bookStore.books = action.data;
            BookStore.emitChange();
            break;
        default:
            return;
    }
} );

export default BookStore;