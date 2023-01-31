import React from 'react'
import styled from 'styled-components'
function Movies() {
  return (
    <Container>
        <h4>Recomended For You</h4>
        <Content>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6606/1316606-h-ffe28d81d7fa"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6606/1316606-h-ffe28d81d7fa"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6606/1316606-h-ffe28d81d7fa"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6606/1316606-h-ffe28d81d7fa"/>
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies
const Container  =  styled.div`
    
`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.215, 0.610, 0.355, 1);
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        transform: scale(1.05);
        border-color: rgb(249,249,249,0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    }

`