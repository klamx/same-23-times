import styled from 'styled-components'

export const UList = styled.ul`
  overflow-x: hidden;
  overflow-y: auto;

  & li {
    align-items: center;
    display: flex;
    gap: 0.3rem;
    justify-content: space-between;
    list-style: none;
    padding: 0.5rem 2rem 0 2rem;
    text-align: left;
  }
`

export const ListElement = styled.li`
  & img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  & div {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  & i {
    font-size: 1.8rem;
    color: #ccc;

    &:hover {
      color: #ff0000;
    }
  }
`
