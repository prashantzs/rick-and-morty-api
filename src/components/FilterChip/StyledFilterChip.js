import styled from 'styled-components';

export const StyledFilterChip = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFDC7E;
    padding: 10px;
    margin-right: 1rem;
    border-radius: 0.25rem;
    justify-content: space-evenly;
`;

export const StyledFilterChipTitle = styled.div`
    color: #000;
`;

export const StyledFilterChipButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 10px;

    svg {
        width: 1rem;
        height: 1rem;
    }
`;