import styled from 'styled-components'

export const Container = styled.div<{ image: string }>`
  height: 84vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BannerInfos = styled.div`
  width: 250px;
  padding: 14px;
  margin: 20px 0 0 0;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 0 5px 5px 0;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`
export const Input = styled.input`
  box-sizing: border-box;
  height: 45px;
  margin: 20px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  font-size: 20px;
  text-align: center;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  ::placeholder {
    color: #a3a3a3;
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin: 0 20px 20px 20px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: inherit;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`
