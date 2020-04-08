import React, { useEffect, Fragment } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import { connect } from 'react-redux';
import { API_URL } from '../../config.js';
import { fetchCharactersAsync, setPageIndex } from '../../actions/actionCreater';
import { StyledCharacterList, StyledLoadMoreWrapper, StyledLoadMore } from './StyledCharacterList';

const CharacterList = ({characters, isLoading, selectedFilters, currentPage, totalPages, getCharacters, setPageIndex}) => {

    const generateURL = (url, filters, pageIndex) => {
        const baseURL = url.concat('/character/?');
        const page = pageIndex > 1 ? 'page=' + pageIndex : '';
        const filterParams = filters.map(({key, filter}) => key.toLowerCase() + '=' + filter.toLowerCase()).join('&');

        return baseURL + [page, filterParams].filter(Boolean).join('&');
    }

    useEffect(() => {
        getCharacters(generateURL(API_URL, selectedFilters, currentPage));
    }, [selectedFilters, currentPage]);

    return (
        <StyledCharacterList className="columns is-mobile">
            {
                characters !== 0 &&
                <Fragment>
                    {
                        characters.map((character) => {
                            return <CharacterCard key={character.id} character={character} />
                        })
                    }
                    {
                        isLoading &&
                        <div>Loading...</div>
                    }
                    {
                        (currentPage < totalPages) &&
                        <StyledLoadMoreWrapper>
                            <StyledLoadMore onClick={() => setPageIndex(currentPage + 1)}>
                                Load More
                            </StyledLoadMore>
                        </StyledLoadMoreWrapper>
                    }
                </Fragment>
            }
        </StyledCharacterList>
    )
};

const mapStateToProps = (state) => {
    return {
        characters: state.character.filteredResults,
        isLoading: state.character.isLoading,
        selectedFilters: state.selectedFilters,
        currentPage: state.character.currentPage,
        totalPages: state.character.totalPages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCharacters: (URL) => {
            dispatch(fetchCharactersAsync(URL))
        },
        setPageIndex: (pageIndex) => {
            dispatch(setPageIndex(pageIndex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);