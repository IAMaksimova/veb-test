import React, {useCallback, useEffect, useState, useRef} from 'react';
import type {Review} from "./Feedback.tsx";
import {Slide} from "./Slide.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import decor from '../../../assets/images/design-elements/abstract11g.png'
import decor1 from '../../../assets/images/design-elements/abstract21g.png'

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

    // Переключение слайдов
    const goToNext = useCallback(() => {
        setCurrentIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, [reviews.length]);

    const goToPrev = useCallback(() => {
        setCurrentIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
    }, [reviews.length]);

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
        <SliderWrapper>
            <ArrowButton $direction="left" onClick={goToPrev} aria-label="Previous slide">
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
                    {reviews.map((review, index) => (
                        <SlideWrapper key={review.id}>
                            <Slide
                                id={review.id}
                                ava={review.ava}
                                name={review.name}
                                text={review.text}
                                role={review.role}
                                preview={review.preview}
                                isActive={index === currentIndex}
                            />
                        </SlideWrapper>
                    ))}
                </SliderTrack>

                <SlideProgress>
                    {reviews.map((_, index) => (
                        <ProgressDot
                            key={index}
                            $active={index === currentIndex}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </SlideProgress>
            </SliderContainer>

            <ArrowButton $direction="right" onClick={goToNext} aria-label="Next slide">
                &gt;
            </ArrowButton>
        </SliderWrapper>
    );
};

const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(10px, 2vw, 30px);
    //position: relative;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;

    position: relative; /* Добавляем относительное позиционирование */

    &::before, &::after {
        content: '';
        position: absolute;
        z-index: 1;
        background-size: contain;
        background-repeat: no-repeat;
        pointer-events: none;
    }

    /* Левый нижний элемент */
    &::before {
        background-image: url(${decor});
        bottom: 48px;
        left: 60px;
        width: clamp(60px, 7vw, 120px);
        height: clamp(70px, 9vh, 140px);
        transform: rotate(-15deg);
    }

    /* Правый верхний элемент */
    &::after {
        background-image: url(${decor1});
        top: -10px;
        right: 50px;
        width: clamp(70px, 8vw, 120px);
        height: clamp(90px, 12vh, 170px);
        transform: rotate(-15deg);
    }

    @media (max-width: 1300px) {
        &::before, &::after {
            width: clamp(50px, 8vw, 100px);
            height: clamp(60px, 10vh, 120px);
        }
    }

    @media ${theme.media.tablet} {
        &::before, &::after {
            width: clamp(40px, 6vw, 80px);
            height: clamp(50px, 8vh, 100px);
        }
    }

    @media ${theme.media.mobile} {
        &::before, &::after {
            display: none; /* Скрываем на мобильных */
        }
    }
`;

const SliderContainer = styled.div`
    width: 100%;
    max-width: 600px;
    overflow: hidden;
    position: relative;
    aspect-ratio: 1/1.2; /* Сохраняем пропорции слайдера */

    @media (max-width: 1024px) {
        max-width: 500px;
        aspect-ratio: 1/1.3;
    }

    @media (max-width: 768px) {
        max-width: 400px;
        aspect-ratio: 1/1.4;
    }

    @media (max-width: 480px) {
        max-width: 320px;
        aspect-ratio: 1/1.5;
    }
`;

const SliderTrack = styled.div<{
    $isDragging: boolean;
    $dragOffset: number;
}>`
    display: flex;
    transition: ${props => props.$isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'};
    will-change: transform;
    height: 100%;
    touch-action: pan-y;
`;

const SlideWrapper = styled.div`
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
`;

const ArrowButton = styled.button<{ $direction: 'left' | 'right' }>`
    background: transparent;
    border: none;
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: ${theme.colors.font};
    cursor: pointer;
    width: clamp(30px, 5vw, 50px);
    height: clamp(30px, 5vw, 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
    z-index: 10;
    opacity: 0.7;
    position: relative;

    &:hover {
        opacity: 1;
        transform: scale(1.1);
        color: ${theme.colors.accent};
    }

    @media (max-width: 480px) {
        position: absolute;
        ${props => props.$direction === 'left' ? 'left: 0' : 'right: 0'};
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
`;

// Дополнительные стили для улучшенного UX
const SlideProgress = styled.div`
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 5;
`;

const ProgressDot = styled.div<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.$active ? theme.colors.accent : 'rgba(0, 0, 0, 0.2)'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
