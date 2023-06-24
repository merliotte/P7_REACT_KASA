import Header from "../../components/Header/Header";

import Banner from "../../components/Banner/Banner";
import BannerBackground from  "../../assets/background-banner.png"
import Footer from "../../components/Footer/Footer";

import ContainerCard from "../../components/ContainerCard/ContainerCard";


function Home() {

    return (
        <>
            <Header />
            <Banner imageBackground={BannerBackground} 
                    textBackground="Chez vous, partout et ailleurs"
            />
            < ContainerCard />
            < Footer />
        </>
    )
}

export default Home