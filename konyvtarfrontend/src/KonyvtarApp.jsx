import React, { Component } from 'react';
import KonyvList from './KonyvList';
import KonyvForm from './KonyvForm';
import KonyvtarFooter from './KonyvtarFooter';
import KonyvtarHeader from './KonyvtarHeader';
class KonyvtarApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            title: "",
            author: "",
            publish_year: "",
            page_count: "",
            errors: "",
        };
    }
    componentDidMount() {
        this.getKonyvek();
    }

    render() {
        const form_id = "konyv_form";
        const { books, title, author, publish_year, page_count, errors } = this.state;
        const form_state = {
            title: title,
            author: author,
            publish_year: publish_year,
            page_count: page_count,
            errors: errors
        };
        return (
            <div className="container mb-3">
                <KonyvtarHeader form_id={form_id} />
                <main className='mt-3 mb-3'>
                    <KonyvList books={books} rentClick={this.handleRent} />
                    <KonyvForm form_id={form_id} formState={form_state}
                        onTitleInput={this.handleTitleInput}
                        onAuthorInput={this.handleAuthorInput}
                        onPublishYearInput={this.handlePublishYearInput}
                        onPageCountInput={this.handlePageCountInput}
                        onClick={this.handleFelvetel}
                    />
                </main>
                <KonyvtarFooter keszito="Budaházi Bence" />
            </div>
        );
    }

    handleTitleInput = (value) => {
        this.setState({
            title: value
        });
    }
    handleAuthorInput = (value) => {
        this.setState({
            author: value
        });
    }
    handlePublishYearInput = (value) => {
        this.setState({
            publish_year: value
        });
    }
    handlePageCountInput = (value) => {
        this.setState({
            page_count: value
        });
    }
    handleFelvetel = () => {
        const { title, author, publish_year, page_count } = this.state;
        const book = {
            title: title,
            author: author,
            publish_year: publish_year,
            page_count: page_count,
        };
        
        fetch("http://localhost:8000/api/books", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        }).then(async response => {
            if (response.status === 201) {
                this.setState({
                    title: "",
                    author: "",
                    publish_year: "",
                    page_count: "",
                    errors: "",
                })
                this.getKonyvek();
            } else {
                const data = await response.json();
                this.setState({
                    errors: data.message
                })
            }
        });
    }


    async getKonyvek() {
        fetch("http://localhost:8000/api/books")
        .then(async response => {
            if (response.status === 200) {
                const data = await response.json();
                this.setState({
                    books: data.data
                })
            }
        });
    }
}

export default KonyvtarApp;