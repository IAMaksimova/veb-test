import {useState} from 'react';
import {reviewsData} from "../Feedback_Data.ts";
import {S} from './MobileFeedback_Styles.ts'
import {ModalMobileFeedback} from "./ModalMobileFeedback/ModalMobileFeedback.tsx";

export const MobileFeedback = () => {
    const [selectedReview, setSelectedReview] = useState<typeof reviewsData[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (review: typeof reviewsData[0]) => {
        setSelectedReview(review);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <S.MobileFeedback>
            <S.TestimonialsContainer>
                <S.TestimonialsTrack>
                    {reviewsData.map(review => (
                        <S.TestimonialCard key={review.id} onClick={() => openModal(review)}>
                            <S.Text>"{review.preview}"</S.Text>
                            <S.Author>
                                <S.Avatar src={review.ava} alt={review.name}/>
                                <S.AuthorInfo>
                                    <S.Name>{review.name}</S.Name>
                                    <S.Username>{review.role}</S.Username>
                                </S.AuthorInfo>
                            </S.Author>
                        </S.TestimonialCard>
                    ))}
                </S.TestimonialsTrack>
            </S.TestimonialsContainer>
            {isModalOpen && selectedReview && <ModalMobileFeedback selectedReview={selectedReview} closeModal={closeModal}/>}
        </S.MobileFeedback>
    );
}
