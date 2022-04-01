import React, { Component } from 'react';
class KonyvCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: "",
            rented: false
        };
    }

    handleRent = (book_id) => {
        fetch(`http://localhost:8000/api/books/${book_id}/rent`, {
            method: "POST",
        }).then(async response => {
            if (response.status === 200) {
                this.setState({
                    errors: "",
                    rented: true
                })
            } else {
                const data = await response.json();
                this.setState({
                    errors: data.message,
                    rented: false
                })
            }
        });
    }

    render() {
        const { book } = this.props;
        const { rented, errors } = this.state;
        return (
            <div className="col-sm-12 col-md-6 col-lg-4 card">
                <div className="card-body">
                    <h2>{book.title}</h2>
                    <h2>{book.author}</h2>
                    <p>Kiadási év: {book.publish_year}</p>
                    <p>Hossz: {book.page_count} oldal</p>
                    <img className='img-fluid' src={'szerzok/' + book.author + '.jpg'} alt={book.author} />
                    <button className='btn btn-light mt-3' onClick={() => this.handleRent(book.id)}>Kölcsönzés</button>
                    <p>
                        {rented ? "Sikeres foglalás" : errors !== "" ? errors : ""}
                    </p>
                </div>
            </div>
        );
    }
}

export default KonyvCard;