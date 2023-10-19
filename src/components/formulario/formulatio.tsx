import HeroImage from "../layout/heroImage"
import Layout from "../layout/layout"
import Hospital from "../../images/hospital.jpeg"
import Logo from "../../images/logo.png"
import { TextBox } from "../shared/textBox"
import { Button } from "../shared/button"

const TextSection = () => {
    return (
        <div className="bg-gradient-to-r from-orange to-pink font-filson text-2xl md:text-3xl text-white p-24 text-center">
            <p className="pb-12">
                México es el país con <span className="font-extrabold text-blue">mayor índice de contagios de COVID-19 del personal de salud</span>. 
            </p>
            <p>
            Organización X esta buscando apoyar a hospitales con insumos de protección médica
            </p>
        </div>
    )
}

const Preguntas = () => {
    return (
        <div className="py-24 px-6 md:px-36">
            <form id='formulario-hospitales'>
                <TextBox textLabel="Nombre del Hospital:" id="nombre_hospital"/>
                <TextBox textLabel="Número de casos registrados en el último mes:" id="casos_ultimo_mes"/>
                <TextBox textLabel="Número de cubrebocas que necesitan:" id="cubrebocas"/>
                <TextBox textLabel="Número de mascarillas KN95 que necesitan:" id="kn95"/>
                <TextBox textLabel="Número de caretas que necesitan:" id="caretas"/>
                <Button title="Enviar" id="formulario-hospitales"/>
            </form>
        </div>
    )
} 

export default function Formulario () {
    return (
        <Layout>
            <HeroImage
                title={'Formulario COVID-19'}
                subtitle={'¡Organización X esta aquí para ayudarte!'}
                image={Hospital}
            />
            <TextSection/>
            <div className="bg-gradient-to-b from-red to-pink grid grid-cols-1 lg:grid-cols-2 items-center">
                <div>
                    <Preguntas/>
                </div>
                <div className="px-12 pb-12 lg:p-36 align-center">
                    <p className="font-agoraSlab text-lg text-white">
                    Organización X tiene como misión lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.  
                    </p>
                    <img src={Logo} className="py-3 h-24 w-auto"/>
                </div>
            </div>
        </Layout>
    )
}