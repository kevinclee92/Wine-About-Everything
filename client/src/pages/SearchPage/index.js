import React from 'react';
import SearchFormWine from '../../components/SearchFormWine';
import Header from "../../components/Header";
import "./searchpage.css"

const SearchPage = (props) => {
    return (
        <div>

            <div className="searchWrap">

                <Header {...props} />
                <SearchFormWine {...props}>
                </SearchFormWine>
            </div>
            
        </div>
    )
}

export default SearchPage;