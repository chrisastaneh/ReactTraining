"use strict"

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Header} from './header.js';
import {Home} from './home.js';
import {Books} from './books.js';
import BookStore from '../stores/bookStore';


export class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            bookList:[]
        };
    }

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/books' render={(props) => (<Books {...props} bookList={this.state.bookList} />)}/>
                </Switch>
            </div>
        );
    }

    componentWillMount(){
        BookStore.addChangeListener(this._onBookChange.bind(this));
    }

    componentWillUnmount(){
        BookStore.removeChangeListener(this._onBookChange.bind(this));
    }

    _onBookChange(){
        this.setState({bookList: BookStore.getAllBooks()});
    }
}