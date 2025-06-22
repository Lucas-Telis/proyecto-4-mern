import styled from 'styled-components'

export const MainContainer = styled.main`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  padding: 2rem;
  gap: 3rem;
  min-height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-aling: center;
`
