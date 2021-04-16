import React from "react";
import { MoviesApi, TVApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = class extends React.Component {
    state = {
        movieResults: null, 
        tvResults: null,
        error: null,
        loading: false,
        searchTerm: ""
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if(searchTerm !== ""){
            this.searchByTerm(searchTerm);
        }
    }

    updateTerm = (event) => {
        const {target: {value}} = event;
        this.setState({
            searchTerm: value
        })
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        try {
            const {data: {results: movieResults}} = await MoviesApi.search(searchTerm);
            const {data: {results: tvResults}} = await TVApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            })
            this.setState({loading: true});
        } catch {
            this.setState({
                error: "can't Find search information"
            });
        } finally {
            this.setState({ loading: false });
        }

    }

    render() {
        const { movieResults, tvResults, searchTerm, error, loading, handleSubmit, updateTerm} = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
}

export default SearchContainer;