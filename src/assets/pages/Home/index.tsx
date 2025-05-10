import Header from "../../components/Header";
import Banner from "../../components/Banner";
import SectionButton from "../../components/SectionButton";
import Footer from "../../components/Footer";
import SectionInfo from "../../components/SectionInfo";
import SectionEnter from "../../components/SectionEnter";

function Home() {
    return (
        <>        
            <Header />  
            <Banner />
            <SectionButton /> 
            <SectionInfo />  
            <SectionEnter/>           
            <Footer />            
        </>
    );
}
export default Home;