import {Container} from "../../../components/Container.ts";
import {S} from './Feedback_Styles.ts'
import {Slider} from "./slider/Slider.tsx";
import {reviewsData} from "./Feedback_Data.ts";
import {MobileFeedback} from "./mobileFeedback/MobileFeedback.tsx";

export const Feedback = () => {
    return (
        <S.Feedback id="feedback">
            <Container>
                <S.FlexWrapperDesktop>
                    <S.TextContentDesktop>
                        <S.FeedbackTitle>Истории молодых профессионалов</S.FeedbackTitle>
                        <S.FeedbackSubtitle>
                            Молодые сотрудники и практиканты ВЭБ.РФ делятся своим опытом
                        </S.FeedbackSubtitle>
                    </S.TextContentDesktop>
                    <S.SliderDesktop>
                        <Slider reviews={reviewsData} autoPlayInterval={10000}/>
                    </S.SliderDesktop>
                </S.FlexWrapperDesktop>

                <S.MobileVersion>
                    <S.MobileHeader>
                        <S.FeedbackTitle>Истории молодых профессионалов</S.FeedbackTitle>
                        <S.FeedbackSubtitle>
                            Молодые сотрудники и практиканты ВЭБ.РФ делятся своим опытом
                        </S.FeedbackSubtitle>
                    </S.MobileHeader>
                    <MobileFeedback/>
                </S.MobileVersion>
            </Container>
        </S.Feedback>
    );
};




