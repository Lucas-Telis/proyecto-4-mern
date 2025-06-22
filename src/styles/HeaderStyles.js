import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
