import React, {useCallback, useEffect, useState, useRef} from 'react';
import {Slide} from "./Slide.tsx";
import {S} from './Slider_Styles.ts'
import type {Review} from "../Feedback_Data.ts";

type Slider = {
    reviews: Review[];
    autoPlayInterval?: number;
}

export const Slider: React.FC<Slider> = ({
                                             reviews
                                         }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const goToNext = useCallback(() => {
        setCurrentIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, [reviews.length]);

    const goToPrev = useCallback(() => {
        setCurrentIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
    }, [reviews.length]);

    useEffect(() => {
        if (!trackRef.current || !sliderRef.current) return;

        const track = trackRef.current;
        const slider = sliderRef.current;
        const slideWidth = slider.offsetWidth;
        const centerPosition = -currentIndex * slideWidth;

        track.style.transform = `translateX(${centerPosition + dragOffset}px)`;
    }, [currentIndex, dragOffset]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStartX(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !trackRef.current) return;

        const currentX = e.clientX;
        const diff = dragStartX - currentX;
        setDragOffset(-diff);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;

        setIsDragging(false);

        if (dragOffset > 50) {
            goToNext();
        } else if (dragOffset < -50) {
            goToPrev();
        }

        setDragOffset(0);
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            setDragOffset(0);
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setDragStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;

        const currentX = e.touches[0].clientX;
        const diff = dragStartX - currentX;
        setDragOffset(-diff);
    };

    const handleTouchEnd = () => {
        if (!isDragging) return;

        setIsDragging(false);

        if (dragOffset > 50) {
            goToNext();
        } else if (dragOffset < -50) {
            goToPrev();
        }

        setDragOffset(0);
    };

    return (
        <S.SliderWrapper>
            <S.ArrowButton $direction="left" onClick={goToPrev} aria-label="Previous slide">
                &lt;
            </S.ArrowButton>

            <S.SliderContainer ref={sliderRef}>
                <S.SliderTrack
                    ref={trackRef}
                    $isDragging={isDragging}
                    $dragOffset={dragOffset}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {reviews.map((review, index) => (
                        <S.SlideWrapper key={review.id}>
                            <Slide
                                id={review.id}
                                ava={review.ava}
                                name={review.name}
                                text={review.text}
                                role={review.role}
                                preview={review.preview}
                                isActive={index === currentIndex}
                            />
                        </S.SlideWrapper>
                    ))}
                </S.SliderTrack>

                <S.SlideProgress>
                    {reviews.map((_, index) => (
                        <S.ProgressDot
                            key={index}
                            $active={index === currentIndex}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </S.SlideProgress>
            </S.SliderContainer>

            <S.ArrowButton $direction="right" onClick={goToNext} aria-label="Next slide">
                &gt;
            </S.ArrowButton>
        </S.SliderWrapper>
    );
};

