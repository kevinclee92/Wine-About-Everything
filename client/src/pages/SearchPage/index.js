import React from 'react';
import Jumbotron from '../../components/Jumbotron'
import SearchFormWine from '../../components/SearchFormWine';

const SearchPage = () => {
    return (
        <div>
            <Jumbotron>
                Search Wines
                <SearchFormWine>
                </SearchFormWine>
            </Jumbotron>
        </div>
    )
}

export default SearchPage;