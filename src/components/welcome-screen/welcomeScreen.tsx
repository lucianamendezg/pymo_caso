import HeroImage from "../layout/heroImage"
import Layout from "../layout/layout"
import luciana from "../../images/luciana-image.jpg"

export default function WelcomeScreen () {
    return (
        <Layout>
            <HeroImage
                title={'Hola, Soy Luciana'}
                subtitle={'Gracias por considerarme como candidata. Los entregables están en el menú. ¡Espero me la haya rifado!'}
                image={luciana}
            />
        </Layout>
    )
}