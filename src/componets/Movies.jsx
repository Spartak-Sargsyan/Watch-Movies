import Movie from "./Movie";

const Movies = (props) => {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((item) => {
                    return <Movie key={item.imdbID} {...item} />;
                })
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
};

export default Movies;
