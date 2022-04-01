import React, { Component } from 'react';
import KonyvFormInput from './KonyvFormInput';
class KonyvForm extends Component {
    handleTitleInput = (value) => {
        const { onTitleInput } = this.props;
        if (onTitleInput) {
            onTitleInput(value);
        }
    }
    handleAuthorInput = (value) => {
        const { onAuthorInput } = this.props;
        if (onAuthorInput) {
            onAuthorInput(value);
        }
    }
    handlePublishYearInput = (value) => {
        const { onPublishYearInput } = this.props;
        if (onPublishYearInput) {
            onPublishYearInput(value);
        }
    }
    handlePageCountInput = (value) => {
        const { onPageCountInput } = this.props;
        if (onPageCountInput) {
            onPageCountInput(value);
        }
    }
    handleButtonClick = () => {
        const { onClick } = this.props;
        if (onClick) {
            onClick();
        }
    }

    render() {
        const { form_id, formState } = this.props;
        const { title, author, publish_year, page_count, errors } = formState;
        const errorAlert = (<div className="alert alert-danger" role="alert">
            {errors}
        </div>);
        return (
            <div id={form_id} className="mt-5">
                <h2>Új könyv felvétele</h2>
                {errors !== "" ? errorAlert : ""}
                <KonyvFormInput id="title" placeholder="Cím" value={title} onInput={this.handleTitleInput} />
                <KonyvFormInput id="author" placeholder="Szerző" value={author} onInput={this.handleAuthorInput} />
                <KonyvFormInput id="publish_year" placeholder="Kiadás éve" value={publish_year} onInput={this.handlePublishYearInput} />
                <KonyvFormInput id="page_count" placeholder="Hossz (oldal)" value={page_count} onInput={this.handlePageCountInput} />
                <button onClick={this.handleButtonClick} className='btn btn-light'>Felvétel</button>
            </div>
        );
    }
}

export default KonyvForm;