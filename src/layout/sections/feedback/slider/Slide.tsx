import {S} from './Slide_Styles.ts'
import type {Review} from "../Feedback_Data.ts";

export const Slide = (props: Review) => {
    return (
        <S.Slide>
            <S.SlideContent>
                <S.QuoteMark>“</S.QuoteMark>

                <S.TextWrapper>
                    <S.Text>{props.text}</S.Text>
                </S.TextWrapper>

                <S.AuthorSection>
                    <S.Avatar avatar={props.ava}/>
                    <S.AuthorInfo>
                        <S.Name>{props.name}</S.Name>
                        <S.Role>{props.role}</S.Role>
                    </S.AuthorInfo>
                </S.AuthorSection>
            </S.SlideContent>
        </S.Slide>
    );
};

