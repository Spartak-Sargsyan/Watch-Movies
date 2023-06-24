import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    };

    handleKye = (e) => {
        if (e.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleKyeClick = () =>
        this.props.searchMovies(this.state.search, this.state.type);

    handleFilter = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validate"
                        type="search"
                        placeholder="search"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKye}
                    />
                    <button
                        className="btn search-btn"
                        onClick={this.handleKyeClick}
                    >
                        Search
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === "movie"}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === "series"}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Search;
