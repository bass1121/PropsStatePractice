//child component wrapped up in app
import React, { Component } from 'react';
import { JournalEntry } from "./journal_entry";

const rawJournalData = [
    {title: "Post One", content: 'Post content', status: 'draft'},
    {title: "Post Two", content: 'Post content', status: 'published'},
    {title: "Post Three", content: 'Post content', status: 'published'},
    {title: "Post Four", content: 'Post content', status: 'published'}
];

// CLASS COMPONENT
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: "Hi there",
            isOpen: true
        }
    }
    render() {
        return (
            <div>
                <h2>{this.props.greeting}</h2>
                <JournalEntry title="TITLE" content="journal entry content" />
            </div>
        );
    }
}