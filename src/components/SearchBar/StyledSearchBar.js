import styled from 'styled-components';

export const StyledSearchBar = styled.div`
    height: 9rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #bdbdbd;
    padding: 2rem;
`;

export const StyledSearchForm = styled.form`
    height: 100%;
    width: 100%;
`;

export const StyledSearchInput = styled.input`
    border: 1px solid #bdbdbd;
    padding: 10px 20px 10px 50px;
    border-radius: 2px;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
`;

export default StyledSearchBar;