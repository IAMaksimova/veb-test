import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Directions} from "./layout/sections/directions/Directions.tsx";
import {Challenge} from "./layout/sections/challenge/Challenge.tsx";
import {useMediaQuery} from "react-responsive";
import {Conditions} from "./layout/sections/conditions/Conditions.tsx";
import {Feedback} from "./layout/sections/feedback/Feedback.tsx";
import {Application} from "./layout/sections/application/Application.tsx";
import {Partners} from "./layout/sections/partners/Partners.tsx";

export type ScrollToSec = {
    scrollToSection: (sectionId: string) => void
}

export type IsMobile = {
    isMobile: boolean
}

function App() {

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const isMobile = useMediaQuery({maxWidth: 768})

    return (
        <>
            <Header scrollToSection={scrollToSection}/>
            <Main scrollToSection={scrollToSection} isMobile={isMobile}/>
            <Challenge/>
            <Directions scrollToSection={scrollToSection} isMobile={isMobile}/>
            <Conditions/>
            <Feedback/>
            <Application/>
            <Partners/>
            {/*<Footer/>*/}
        </>
    )
}

export default App
