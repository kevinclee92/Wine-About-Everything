import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import SearchFormWine from '../../components/SearchFormWine';
import SearchFormWinery from '../../components/SearchFormWinery';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../RegisterPage/registerpage.css"
import "./searchpage.css"

const SearchPage = () => {
    return (
        <div className="registerWrap">
                <Header />
                    <SearchFormWine>
                    </SearchFormWine>
        </div>
    )
}

export default SearchPage;