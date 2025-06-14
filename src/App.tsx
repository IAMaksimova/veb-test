import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
// import {Challenge} from "./layout/sections/challenge/Challenge.tsx";
// import {Directions} from "./layout/sections/directions/Directions.tsx";
// import {Conditions} from "./layout/sections/conditions/Conditions.tsx";
// import {Challenge} from "./layout/sections/challenge/Challenge.tsx";
// import {Feedback} from "./layout/sections/feedback/Feedback.tsx";
// import {Application} from "./layout/sections/application/Application.tsx";
// import {Partners} from "./layout/sections/partners/Partners.tsx";
// import {Footer} from "./layout/footer/Footer.tsx";

export type ScrollToSec = {
    scrollToSection: (sectionId: string) => void
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

    return (
        <>
            <Header scrollToSection={scrollToSection}/>
            <Main scrollToSection={scrollToSection}/>
            {/*<Challenge/>*/}
            {/*<Directions scrollToSection={scrollToSection}/>*/}
            {/*<Conditions/>*/}
            {/*<Feedback/>*/}
            {/*<Application/>*/}
            {/*<Partners/>*/}
            {/*<Footer/>*/}
        </>
    )
}

export default App
