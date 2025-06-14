import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import styled from "styled-components";
import type {Review} from "./Feedback.tsx";


export const Slide = (props: Review) => {
    return (
        <SSlide>
            <FlexWrapper wrap={'wrap'} justify={'space-between'} direction={'column'}>

                <FlexWrapper wrap={'wrap'} style={{height: '80%'}}>
                    <Avatar avatar={props.ava}/>
                    <Text>{props.text}</Text>
                </FlexWrapper>

                <FlexWrapper style={{height: '13%'}} direction={'column'}>
                    <Name>{props.name}</Name>
                    <Role>{props.role}</Role>
                </FlexWrapper>

            </FlexWrapper>
        </SSlide>
    );
};


const SSlide = styled.div`
    width: 35vw;
    height: 65vh;
    background: rgba(50, 62, 72, 0.11);
    padding: 30px;
`

const Avatar = styled.img<{ avatar: string }>`
    background-image: url(${props => props.avatar});
    background-size: contain;
    object-fit: cover;
    background-repeat: no-repeat;
    width: 6vw;
    height: 6vw;
    border-radius: 50%;
    //margin: 20px 0 0 20px;
`

const Text = styled.p`
    margin: 20px 0;
`

const Name = styled.span`
    font-family: 'Bad Script';
`
const Role = styled.span`
    color: rgba(128, 128, 128, 0.5);
`