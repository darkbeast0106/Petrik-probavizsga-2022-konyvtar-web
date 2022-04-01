import React, { Component } from 'react';
import KonyvCard from './KonyvCard';
class KonyvList extends Component {
    handleRentClick = (id) => {
        const { rentClick } = this.props;
        if (rentClick) {
            rentClick(id)
        }
    }

    render() {
        const { books } = this.props;  
        const cardList = [];
        books.forEach(book => {
            cardList.push(<KonyvCard key={book.id} book={book} onClick={this.handleRentClick} />);
        });
        return (
            <div className="row">
                {cardList}
            </div>
        );
    }
}
 
export default KonyvList;