import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import SearchFormWine from '../../components/SearchFormWine';
import SearchFormWinery from '../../components/SearchFormWinery';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./searchpage.css"

const SearchPage = (props) => {
    return (
        <div>

            <div className="searchWrap">

                <Header />
                <SearchFormWine props={props}>
                </SearchFormWine>
            </div>
            
        </div>
    )
}

export default SearchPage;