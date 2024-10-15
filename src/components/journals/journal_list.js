import React, { Component } from 'react';

const rawJournalData = [
    {title: "Post One", content: 'Post content', status: 'draft'},
    {title: "Post Two", content: 'Post content', status: 'published'},
    {title: "Post Three", content: 'Post content', status: 'published'},
    {title: "Post Four", content: 'Post content', status: 'published'}
]

export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            isOpen: true
        }
    }
    render() {
        return (
            <div>
                <h1></h1>
            </div>
        );
    }
}