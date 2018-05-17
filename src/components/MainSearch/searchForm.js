import React from 'react'

const SearchForm = ({onChange, handleSubmit, inputValue}) => {
    return (
        <div>
            <h4>Search any character by name</h4>
            <p>Example: Spider-Man</p>

            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-filed col s6 offset-s3">
                        <input onChange={onChange} placeholder="Search name" id="name-search"
                               value={inputValue} type='text'/>
                        <label htmlFor="name-search">Enter Name</label>
                    </div>

                    <div className="row">
                        <button
                            className="col s4 offset-s4 waves-effect waves-light red darken-3 btn white-text"
                            style={{marginTop: '5vh'}}
                            type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
};

export default SearchForm;