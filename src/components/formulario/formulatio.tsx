import { useState } from "react"
import HeroImage from "../layout/heroImage"
import Layout from "../layout/layout"
import Hospital from "../../images/hospital.jpeg"
import Logo from "../../images/logo.png"
import { TextBox } from "../shared/textBox"
import { Button } from "../shared/button"
import { useNavigate } from "react-router-dom";

interface FormularioHospitalesInterface  {
    nombre_hospital:string;
    casos_ultimo_mes: number;
    cubrebocas: number;
    kn95: number;
    caretas: number;
}

const FormularioHospitalesInitState = {
    nombre_hospital: "",
    casos_ultimo_mes: 0,
    cubrebocas: 0,
    kn95: 0,
    caretas: 0
}

interface ErrorInterface {
    casos_ultimo_mes: boolean;
    cubrebocas: boolean;
    kn95: boolean;
    caretas: boolean;
    error: boolean;
}

const initialErrors = {
    casos_ultimo_mes: false,
    cubrebocas: false,
    kn95: false,
    caretas: false,
    error:false
}

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
    const [formData, setFormData] = useState<FormularioHospitalesInterface>(FormularioHospitalesInitState);
    const [errorData, setFormError] = useState<ErrorInterface>(initialErrors);
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => { //changes state every time it something is typed
        const {id, value} = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const errorReset = () => {
        setFormError(initialErrors);
    };

    const changeFormError = (textBoxId: string) => {
        setFormError({...errorData, [textBoxId]:true});
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let errors = false;
        errorReset(); //tenemos que reiniciar los errores
        Object.entries(formData).forEach((id) => {
            const textBoxId = id[0];
            const value = id[1];
            if (textBoxId !== 'nombre_hospital') { //tenemos que checar si los demas son numeros
                let isnum = /^\d+$/.test(value);
                if (!isnum) {
                    errors = true; //asi indicamos que no podemos dar el submit
                    changeFormError(textBoxId);
                }
            }
        });
        if (!errors) {
            //send formData to google cloud
            await fetch('https://us-central1-spartan-grail-402612.cloudfunctions.net/info_formulario',
            {
                method: "POST", 
                body: JSON.stringify(formData),
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            }).then (
                response => console.log(response)
            ).
            catch( error =>
                console.log(error)
            )
            routeChange();   
        }
        setFormError({ ...errorData, ['error']: errors });
        };

    return (
        <div className="py-24 px-6 md:px-36">
            <form id='formulario-hospitales' onSubmit={onSubmit}>
                {/*Depende del error, cual es el text box que se presenta, 
                nombre del hospital no tiene error, se cambia con el 
                conditional operator*/}
                <TextBox textLabel="Nombre del Hospital:" id="nombre_hospital" onChange={onChange}/>
                    <TextBox textLabel="Número de casos registrados en el último mes:" id="casos_ultimo_mes" onChange={onChange}/>
                    <TextBox textLabel="Número de cubrebocas que necesitan:" id="cubrebocas" onChange={onChange}/>
                    <TextBox textLabel="Número de mascarillas KN95 que necesitan:" id="kn95" onChange={onChange}/>
                    <TextBox textLabel="Número de caretas que necesitan:" id="caretas" onChange={onChange}/>
                <Button title="Enviar" id="formulario-hospitales" />
                {
                    errorData['error'] && 
                        <div className="font-filson font-extrabold font-xl">
                            Los casos registrados, cubrebocas, mascarillas, y caretas tienen que ser numéricos. Porfavor, corrija su pedido.
                        </div>
                                
                }                
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
                    <img src={Logo} className="py-3 h-24 w-auto" alt="Placeholder Logo"/>
                </div>
            </div>
        </Layout>
    )
}