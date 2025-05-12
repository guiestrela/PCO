import Header from "../../components/Header";
import Banner from "../../components/Banner";
import SectionButton from "../../components/SectionButton";
import Footer from "../../components/Footer";
import SectionInfo from "../../components/SectionInfo";
import SectionEnter from "../../components/SectionEnter";
import SectionAud from "../../components/SectionAud";

function Home() {
    return (
        <>        
            <Header />  
            <Banner />
            <SectionButton /> 
            <SectionInfo />  
            <SectionEnter/>  
            <SectionAud />         
            <Footer />            
        </>
    );
}
export default Home;