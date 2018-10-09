import React from 'react';
import Jumbotron from '../../components/Jumbotron'
import SearchFormWine from '../../components/SearchFormWine';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SearchPage = () => {
    return (
        <div>
            <Header />
            <Jumbotron>
                Search Wines
                <SearchFormWine>
                </SearchFormWine>
            </Jumbotron>
        </div>
    )
}

export default SearchPage;