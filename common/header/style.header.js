import styled from 'styled-components'

export const Items = styled.ul.attrs({
  className: '',
})`
    display:flex;
    justify-content:space-around;
    padding:1rem;
    align-items:center;
    margin-left:1rem;
    list-style:none;
    & li{
        color:${props=>props.isLoading ? 'yellow' :"red"};
    }
`

export const Num = styled.span`
margin-right: 0.5rem;
background-color: gray;
border-radius: 50%;
padding: 0.5rem;
color: black;
`
export const Btn = styled.button`
margin-right: 0.5rem;
background-color: gray;
border-radius: 50%;
padding: 0.5rem;
color: black;
`
