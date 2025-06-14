import React, {useCallback, useEffect, useState, useRef} from 'react';
import type {Review} from "./Feedback.tsx";
import {Slide} from "./Slide.tsx";
import styled from "styled-components";

type Slider = {
    reviews: Review[];
    autoPlayInterval?: number;
}

export const Slider: React.FC<Slider> = ({
                                             reviews,
                                             autoPlayInterval = 5000
                                         }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // Переключение слайдов
    const goToNext = useCallback(() => {
        setCurrentIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, [reviews.length]);

    const goToPrev = useCallback(() => {
        setCurrentIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
    }, []);


    // Автопрокрутка
    useEffect(() => {
        if (!isAutoPlaying || !autoPlayInterval) return;

        const interval = setInterval(goToNext, autoPlayInterval);
        return () => clearInterval(interval);
    }, [isAutoPlaying, autoPlayInterval, goToNext]);

    // Центрирование текущего слайда
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
        setIsAutoPlaying(false);
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
        setIsAutoPlaying(true);
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            setDragOffset(0);
            setIsAutoPlaying(true);
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setDragStartX(e.touches[0].clientX);
        setIsAutoPlaying(false);
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
        setIsAutoPlaying(true);
    };

    return (
        <SliderWrapper>
            <ArrowButton $direction="left" onClick={goToPrev}>
                &lt;
            </ArrowButton>

            <SliderContainer ref={sliderRef}>
                <SliderTrack
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
                    {reviews.map((review) => (
                        <SlideWrapper key={review.id}>
                            <Slide
                                id={review.id}
                                ava={review.ava}
                                name={review.name}
                                text={review.text}
                                role={review.role}
                            />
                        </SlideWrapper>
                    ))}
                </SliderTrack>
            </SliderContainer>

            <ArrowButton $direction="right" onClick={goToNext}>
                &gt;
            </ArrowButton>

        </SliderWrapper>
    );
};

const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;
`;

const SliderContainer = styled.div`
    width: 35vw;
    overflow: hidden;
    position: relative;
`;

const SliderTrack = styled.div<{
    $isDragging: boolean;
    $dragOffset: number;
}>`
    display: flex;
    transition: ${props => props.$isDragging ? 'none' : 'transform 0.5s ease'};
    will-change: transform;
    height: 68vh;
`;

const SlideWrapper = styled.div`
    flex: 0 0 auto;
    box-sizing: border-box;
`;

const ArrowButton = styled.button<{ $direction: 'left' | 'right' }>`
    background: transparent;
    border: none;
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
    z-index: 10;

    &:hover {
        color: rgba(0, 0, 0, 0.8);
        background: rgba(0, 0, 0, 0.05);
    }
`

