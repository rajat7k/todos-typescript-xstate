import Styled from 'styled-components'

export const HomePageMainContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: auto;
`
export const HomePageHeading = Styled.p`
    margin-top: 40px;
    font-size: 60px;
    font-weight: 500;
`

export const TodoAddContainer = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
`
export const HomePageSubHeading = Styled.p`
    font-size: 30px;
`

export const HeadingBoldSpan = Styled.span`
    font-weight: 600;
`

export const TodoInputContainer = Styled.input`
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #e4e7eb;
    border-radius: 5px;
    padding: 15px;
    &:focus{
        outline: none;
        border: 2px solid black;
    }
`
export const HomePageBtn = Styled.button`
    margin-top: 15px;
    color: #f9fbfe;
    background-color: #4c63b6;
    padding: 8px 20px;
    width: fit-content;
    font-size: 20px;
    border-width: 0px;
    border-radius: 5px;
    cursor: pointer;
`

export const TodoListContainer = Styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 60px;
`

export const TodoList = Styled.ul`
display: flex;
    flex-direction: column;
`


export const TodoItemBox=Styled.div`
display: flex;
    margin-left: -30px;
    align-items: center;
    margin-bottom: 20px;
`

export const TodoCheckBox=Styled.input`
width: 22px;
    height: 22px;
    margin-right: 20px;
    cursor: pointer;
    `

export const TodoContextBox=Styled.div`
display: flex;
    align-items: center;
    background-color: #e6f6ff;
    border-left: 10px solid #096f92;
    border-radius: 5px;
    width: 100%;
    justify-content: space-between;
    padding-right: 15px;
    padding-left: 30px;
`
export const TodoItemDeleteIcon=Styled.i`
cursor: pointer;
`