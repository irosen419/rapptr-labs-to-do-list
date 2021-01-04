import React, { useState, useEffect } from 'react'

function Search({ renderNewForm, filterTasks }) {

    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        filterTasks(searchInput)
    }, [searchInput])

    const changeHandler = ({ target: { value } }) => {
        setSearchInput(value)
    }

    return (
        <div id="search">
            <input name="search"
                type="text"
                value={searchInput}
                placeholder="Search"
                onChange={changeHandler} />
            <button onClick={renderNewForm}>New</button>
        </div>
    )
}

export default Search