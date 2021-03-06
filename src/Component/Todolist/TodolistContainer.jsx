import React, {Component} from 'react';
import TodolistTable from './TodolistTable'
import TodolistAdd from './TodolistAdd'

export default class TodolistContainer extends Component {

    render() {

        //////////////////////////////////////////////
        //                                          //
        //      | id | todotext | edit | Delete|    //
        //      |    |          |      |       |    //
        //      |    |          |      |       |    //
        // _________________________________________//
        //      ____________________   _________    //
        //     | __________________ | |_Add_new_|   //
        //                                          //
        //////////////////////////////////////////////
        return (
            <div>
                <TodolistTable />
                <TodolistAdd />
            </div>
        )
    }
}

