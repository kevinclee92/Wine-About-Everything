import React from 'react';
import Jumbotron from '../../components/Jumbotron'
import SearchFormWine from '../../components/SearchFormWine';
import SearchFormWinery from '../../components/SearchFormWinery';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SearchPage = () => {
    return (
        <div>
            
            <Jumbotron>
                <Header />
                    <SearchFormWine>
                    </SearchFormWine>
                    {/* <SearchFormWinery>
                    </SearchFormWinery>
                <Footer /> */}
            </Jumbotron>
            
        </div>
    )
}

export default SearchPage;