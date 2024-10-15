import "./style.css"
import OpcionesBoton from "../OpcionesBoton";
import Comentario from "../Comentario";
import VistaPreviaImagenes from "../VistaPreviaImagenes";
import BannerRecomendaciones from "../BanerRecomendaciones";
import CardUsuario from "../CardUsuario";

export default function DetalleCarro() {
    return (
        <>
            <div className="contendor-DetalleCarro">
                <VistaPreviaImagenes />
                <BannerRecomendaciones />
                
            </div>
            <CardUsuario />
            <VistaPreviaImagenes />
            <BannerRecomendaciones />
            <CardUsuario />

            <div className="flex gap-2 px-8 mt-4 justify-center flex-wrap">
                <Comentario />
                <Comentario />
                <Comentario />
            </div>
        </>
    );
}
