import React, { Component } from 'react';
import './itemDetails.css';

const Field = ({ item, field, label }) => {
    // Check if item exists and has the required field before rendering
    const fieldValue = item && item[field] ? item[field] : 'N/A'; // Default value in case the field is not found
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{fieldValue}</span> {/* Display the field value or 'N/A' */}
        </li>
    );
};


export { Field };

export default class ItemDetails extends Component {

    state = {
        item: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({ item });
            });
    }

    render() {
        const { item } = this.state;
        
        // If no item is selected, return error message immediately
        if (!item) {
            return <span className='select-error'>Please select an item in the list</span>; // Corrected className
        }

        const { name } = item;

        return (
            <div className='char-details rounded'>
                <h4>{name}</h4>
                <ul className='list-group list-group-flush'>
                    {
                        React.Children.map(this.props.children, (child) => 
                            React.cloneElement(child, { item })
                        )
                    }
                </ul>
            </div>
        );
    }
}
