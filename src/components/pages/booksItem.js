import React, { Component } from 'react';
import gotService from '../../services/gotService';
import ItemDetails, { Field } from '../itemDetails';

const gotServiceInstance = new gotService(); // Статический экземпляр

export default class BooksItem extends Component {
    render() {
        const { bookId } = this.props;

        return (
            <ItemDetails
                itemId={bookId}
                getData={gotServiceInstance.getBook}>
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publisher' label='Publisher' />
                <Field field='released' label='Released' />
            </ItemDetails>
        );
    }
}
