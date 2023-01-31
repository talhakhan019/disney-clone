import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
        <Background>
            <img src="https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg" alt="background" />
        </Background>
        <ImageTitle>
            <img src="./images/logo.svg" alt="title" />
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="./images/play-icon-black.png" alt="" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src="./images/play-icon-white.png" alt="" />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="./images/group-icon.png" alt="groupicon" />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2018 . 7m . Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem ipsum eius laudantium, pariatur accusantium cumque quo tenetur debitis corrupti dolor laboriosam excepturi, alias earum! Porro corrupti nesciunt assumenda sequi.

        </Description>
    </Container>
  )
}

export default Detail
const Container = styled.div`
    min-height: calc(100vh - 70px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
const ImageTitle  = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    img{
        width: 200px;
        object-fit: cover;
        margin-left: 30px;
        margin-top: 40px;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    align-items: center;
    height: 40px;
    background-color: rgb(249,249,249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    transition: 0.3s all ease;
    &:hover{
        background-color: rgb(198,198,198);
    }
`
const TrailerButton = styled(PlayButton)`
    background-color: rgb(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    text-transform: uppercase;
    color: #fff;
`
const AddButton = styled.button`
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: rgb(0,0,0,0.3);
    margin-right: 16px;
    cursor: pointer;
    transition: 0.3s all ease;
    span{
        font-size: 25px;
        color: white;
    }
    &:hover{
        opacity: 0.8;
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0,0,0,0.8);
`
const SubTitle = styled.div`
    margin-left: 30px;
    color: rgb(249,249,249);
    font-size: 15px;
    margin-top: 26px;
    min-height: 20px;
`
const Description = styled.div`
    margin-left: 30px;
    line-height: 1.4;
    font-size: 18px;
    margin-top: 16px;
    color: rgb(249,249,249);
    width: 500px;
    text-align: justify;
`