import styled from "styled-components";
import { theme } from "../../../styles/Theme.ts";
import common1 from '../../../assets/gallery-photos/common-1.jpg';
import common2 from '../../../assets/gallery-photos/common-2.jpg';
import common3 from '../../../assets/gallery-photos/common-3.jpg';
import solo1 from '../../../assets/gallery-photos/solo-1.jpg';
import solo2 from '../../../assets/gallery-photos/solo-2.jpg';
import solo3 from '../../../assets/gallery-photos/solo-3.jpg';
import solo4 from '../../../assets/gallery-photos/solo-4.jpg';
import solo5 from '../../../assets/gallery-photos/solo-5.jpg';
import { useState } from "react";
import { FaHeart,  FaExpand } from "react-icons/fa";

export const Gallery = () => {
    const [activePhoto, setActivePhoto] = useState<string | null>(null);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

    const photos = [
        { id: 1, src: common1, alt: '', orientation: 'horizontal' },
        { id: 2, src: common2, alt: '', orientation: 'vertical' },
        { id: 3, src: solo1, alt: '', orientation: 'horizontal' },
        { id: 4, src: solo2, alt: '', orientation: 'horizontal' },
        { id: 5, src: solo3, alt: '', orientation: 'vertical' },
        { id: 6, src: solo4, alt: '', orientation: 'vertical' },
        { id: 7, src: solo5, alt: '', orientation: 'vertical' },
        { id: 8, src: common3, alt: '', orientation: 'horizontal' },
    ];


    const openPhoto = (src: string) => {
        setActivePhoto(src);
        document.body.style.overflow = 'hidden';
    };

    const closePhoto = () => {
        setActivePhoto(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <SGallery id="gallery">
            {/*<GalleryHeader>*/}
            {/*    <GalleryTitle>Студенческая жизнь</GalleryTitle>*/}
            {/*    <GalleryDescription>*/}
            {/*        Яркие моменты из жизни наших практикантов*/}
            {/*    </GalleryDescription>*/}
            {/*</GalleryHeader>*/}

            <PhotoGrid>
                {photos.map((photo) => (
                    <PhotoItem
                        key={photo.id}
                        orientation={photo.orientation}
                        onClick={() => openPhoto(photo.src)}
                        onMouseEnter={() => setHoveredPhoto(photo.id)}
                        onMouseLeave={() => setHoveredPhoto(null)}
                    >
                        <img src={photo.src} alt={photo.alt} />

                        <PhotoOverlay>
                            <PhotoActions>
                                <ExpandButton aria-label="Увеличить фото">
                                    <FaExpand />
                                </ExpandButton>
                            </PhotoActions>
                        </PhotoOverlay>

                        {favorites.includes(photo.id) && (
                            <FavoriteBadge>
                                <FaHeart />
                            </FavoriteBadge>
                        )}
                    </PhotoItem>
                ))}
            </PhotoGrid>

            {activePhoto && (
                <PhotoModal onClick={closePhoto}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <CloseButton onClick={closePhoto}>&times;</CloseButton>
                        <img src={activePhoto} alt="Увеличенное фото" />
                    </ModalContent>
                </PhotoModal>
            )}
        </SGallery>
    );
};

const SGallery = styled.section`
  padding: 80px 0;
  background: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to bottom, rgba(0,0,0,0.03), transparent);
    z-index: 1;
  }

  @media ${theme.media.mobile} {
    padding: 60px 0;
  }
`;

const GalleryHeader = styled.div`
  max-width: 800px;
  margin: 0 auto 60px;
  padding: 0 20px;
  text-align: center;
`;

const GalleryTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: ${theme.colors.primaryFont};
  position: relative;
  line-height: 1.2;

  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: ${theme.colors.accent};
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }

  @media ${theme.media.mobile} {
    font-size: 2.2rem;
  }
`;

const GalleryDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${theme.colors.secondaryFont};
  margin-top: 30px;

  @media ${theme.media.mobile} {
    font-size: 1rem;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: 25px;
  padding: 0 20px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PhotoItem = styled.div<{ orientation: string }>`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  /* Разные пропорции для вертикальных и горизонтальных фото */
  grid-row: ${props => props.orientation === 'vertical' ? 'span 2' : 'span 1'};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    
    img {
      transform: scale(1.05);
    }
    
    div {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const PhotoActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const PhotoButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(5px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

const FavoriteButton = styled(PhotoButton)`
  color: ${theme.colors.accent};
`;

const ExpandButton = styled(PhotoButton)``;

const PhotoCaption = styled.div`
  color: white;
  font-size: 1rem;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  margin-top: auto;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const FavoriteBadge = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  color: ${theme.colors.accent};
  background: rgba(255, 255, 255, 0.9);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

const PhotoModal = styled.div`
    overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;

  img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  transition: color 0.2s ease;
  opacity: 0.7;

  &:hover {
    color: ${theme.colors.accent};
    opacity: 1;
  }
`;