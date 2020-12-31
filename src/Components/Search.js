function Search({ renderNewForm }) {
    return (
        <div id="search">
            <input name="search" type="text" />
            <button onClick={renderNewForm}>New</button>
        </div>
    )
}

export default Search