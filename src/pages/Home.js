import React, {Fragment, useState, useEffect} from 'react';
import { connect } from 'react-redux';

//import components
import Header from '../components/Header/Header';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import SearchBar from '../components/SearchBar/SearchBar';
import CharacterFilter from '../components/CharacterFilter/CharacterFilter';
import CharacterList from '../components/CharacterList/CharacterList';
import DisplayFilter from '../components/DisplayFilter/DisplayFilter';
import styled from 'styled-components';

const Home = (props) => {
    const [state, setState] = useState({characters: []});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const characters = props.result || [];

    const StyledBody = styled.div`
        width: 90vw;
        margin: 10vh auto 0;
        min-height: 80vh;
        border-radius: 2px;
        background-color: #FFF;
        box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
        display: flex;
        flex-direction: column;
    `;

    const StyledContainer = styled.div`
        display: flex;
    `;

    const StyledDrawer= styled.div`
        background-color: #FFF;
        width: 20%;
        box-shadow: inset -2px 0px 4px rgba(0, 0, 0, 0.25);
        background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
    `;

    const StyledGrid = styled.div`
        flex: 1;
    `;

    return (
        <StyledBody>
            <SearchBar/>
            <StyledContainer>
                <StyledDrawer>
                    <CharacterFilter/>
                </StyledDrawer>
                <StyledGrid>
                    <DisplayFilter/>
                    <CharacterList 
                        characters={characters}
                        loading={loading} />
                </StyledGrid>
            </StyledContainer>
            {
                //<Header/>
            }
            
            {
                // <SearchBar/>
                // <div>
                //     <div className="">
                //         <CharacterFilter/>
                //     </div>
                //     <div>
                //         <div>
                //             <DisplayFilter/>
                //         </div>
                //         <div>
                //             <CharacterList 
                //                 characters={characters}
                //                 loading={loading} />
                //         </div>
                //     </div>
                // </div>
            }
            
            
        </StyledBody>
    );
}

export default Home;