import React from 'react';
import SearchFormWine from '../../components/SearchFormWine';
import Header from "../../components/Header";
import "./searchpage.css"

const SearchPage = (props) => {
    return (
        <div>

            <div className="searchWrap">

                <Header />
                <SearchFormWine {...props} />
            </div>
            
        </div>
    )
}

export default SearchPage;