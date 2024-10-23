"use client";
import "./style.css";
import { useEffect } from "react";
import $ from "jquery";

export default function VistaPreviaImagenes({ imagenes = [], data }) {
    useEffect(() => {
        // Verificar si jQuery ($) está disponible
        if (typeof $ !== "undefined") {
            // Inicializar el popup
            const popup = {
                init: function () {
                    $("figure").click(function () {
                        popup.open($(this));
                    });

                    $(document)
                        .on("click", ".popup img", function () {
                            return false;
                        })
                        .on("click", ".popup", function () {
                            popup.close();
                        });
                },
                open: function ($figure) {
                    $(".gallery").addClass("pop");
                    const $popup = $('<div class="popup" />').appendTo(
                        $("body")
                    );
                    const $fig = $figure.clone().appendTo($(".popup"));
                    const $bg = $('<div class="bg" />').appendTo($(".popup"));
                    const $close = $(
                        '<div class="close"><svg><use xlink:href="#close"></use></svg></div>'
                    ).appendTo($fig);
                    const $shadow = $('<div class="shadow" />').appendTo($fig);
                    const src = $("img", $fig).attr("src");
                    $shadow.css({ backgroundImage: "url(" + src + ")" });
                    $bg.css({ backgroundImage: "url(" + src + ")" });
                    setTimeout(function () {
                        $(".popup").addClass("pop");
                    }, 10);
                },
                close: function () {
                    $(".gallery, .popup").removeClass("pop");
                    setTimeout(function () {
                        $(".popup").remove();
                    }, 100);
                },
            };

            popup.init();
        }

        // Cleanup: eliminar eventos al desmontar el componente
        return () => {
            $(document).off("click", ".popup img");
            $(document).off("click", ".popup");
        };
    }, [imagenes, data]);
    return (
        <>
            <div class="gallery">
                {imagenes.length > 0 &&
                    imagenes?.map((imagen) => (
                        <figure key={imagen.CodigoImagenCarro}>
                            <img src={imagen.url} alt="" />
                            <figcaption>
                                {data?.Modelo} <small> {data?.Marca}</small>
                            </figcaption>
                        </figure>
                    ))}
            </div>
            <svg>
                <symbol id="close" viewBox="0 0 18 18">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="#FFFFFF"
                        d="M9,0.493C4.302,0.493,0.493,4.302,0.493,9S4.302,17.507,9,17.507
			S17.507,13.698,17.507,9S13.698,0.493,9,0.493z M12.491,11.491c0.292,0.296,0.292,0.773,0,1.068c-0.293,0.295-0.767,0.295-1.059,0
			l-2.435-2.457L6.564,12.56c-0.292,0.295-0.766,0.295-1.058,0c-0.292-0.295-0.292-0.772,0-1.068L7.94,9.035L5.435,6.507
			c-0.292-0.295-0.292-0.773,0-1.068c0.293-0.295,0.766-0.295,1.059,0l2.504,2.528l2.505-2.528c0.292-0.295,0.767-0.295,1.059,0
			s0.292,0.773,0,1.068l-2.505,2.528L12.491,11.491z"
                    />
                </symbol>
            </svg>
        </>
    );
}
