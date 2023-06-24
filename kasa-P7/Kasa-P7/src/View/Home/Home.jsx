
import Banner from "../../components/Banner/Banner";
import BannerBackground from  "../../assets/background-banner.png"

import ContainerCard from "../../components/ContainerCard/ContainerCard";


function Home() {

    return (
        <>
            <Banner imageBackground={BannerBackground} 
                    textBackground="Chez vous, partout et ailleurs"
            />
            < ContainerCard />
        </>
    )
}

export default Home