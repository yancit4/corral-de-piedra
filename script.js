// ============================
// MENÚ PARA CELULAR
// ============================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });

    });

}


// ============================
// SCROLL DE PRODUCTOS
// ============================

const productsGrid =
    document.getElementById("productsGrid");

const productsLeft =
    document.getElementById("productsLeft");

const productsRight =
    document.getElementById("productsRight");


function scrollProducts(direction) {

    if (!productsGrid) return;

    const card =
        productsGrid.querySelector(".product-card");

    if (!card) return;

    const cardWidth =
        card.getBoundingClientRect().width;

    const gap = 25;

    productsGrid.scrollBy({

        left: direction * (cardWidth + gap),

        behavior: "smooth"

    });

}


if (productsLeft) {

    productsLeft.addEventListener("click", () => {
        scrollProducts(-1);
    });

}


if (productsRight) {

    productsRight.addEventListener("click", () => {
        scrollProducts(1);
    });

}


// ============================
// INFORMACIÓN DE PRODUCTOS
// ============================
//
// Aquí puedes modificar o agregar
// la información de cada queso.
//


const productDetails = {


    // ============================
    // HIERBAS FINAS
    // ============================

    "Queso de Hierbas Finas": `

        <div class="product-detail-content">

            <p class="detail-intro">
                Un queso de pasta chedarizada suave,
                elaborado artesanalmente y acompañado
                de una selección de hierbas que aportan
                un sabor intenso y característico.
            </p>


            <div class="detail-section">

                <h4>Perfil del queso</h4>

                <p>
                    Su sabor combina la suavidad de la pasta
                    con el carácter aromático de las hierbas
                    utilizadas en su elaboración.
                </p>

            </div>


            <div class="detail-section">

                <h4>Mezcla de hierbas</h4>

                <ul>

                    <li>Orégano</li>

                    <li>Salvia</li>

                    <li>Estragón</li>

                    <li>Albahaca</li>

                </ul>

            </div>


            <div class="detail-section">

                <h4>Características</h4>

                <ul>

                    <li>Pasta chedarizada suave</li>

                    <li>Sabor intenso</li>

                    <li>Maduración joven</li>

                    <li>Elaboración artesanal</li>

                </ul>

            </div>


            <div class="detail-section">

                <h4>Presentaciones</h4>

                <p>
                    Disponible en presentaciones de
                    <strong>250 g y 500 g</strong>.
                </p>

            </div>


            <div class="detail-highlight">

                <span>QUESO GOURMET</span>

                <strong>
                    Hierbas Finas
                </strong>

                <p>
                    Aromático · Intenso · Artesanal
                </p>

            </div>

        </div>

    `,


    // ============================
    // PROVOLONNE AHUMADO
    // ============================

    "Queso Provolonne Ahumado": `

        <div class="product-detail-content">

            <p class="detail-intro">
                Un queso de pasta chedarizada y sabor suave,
                sometido a un proceso de ahumado que le aporta
                un carácter profundo y distintivo.
            </p>


            <div class="detail-section">

                <h4>Perfil del queso</h4>

                <p>
                    Su sabor suave se complementa con las notas
                    características del proceso de ahumado,
                    creando un queso equilibrado y aromático.
                </p>

            </div>


            <div class="detail-section">

                <h4>Proceso de ahumado</h4>

                <p>
                    El queso pasa por un proceso de ahumado
                    de aproximadamente
                    <strong>30 a 36 horas</strong>.
                </p>

            </div>


            <div class="detail-section">

                <h4>Madera utilizada</h4>

                <p>
                    Para el proceso de ahumado se utiliza
                    <strong>cedro rojo</strong>, aportando
                    características particulares al producto.
                </p>

            </div>


            <div class="detail-section">

                <h4>Características</h4>

                <ul>

                    <li>Pasta chedarizada</li>

                    <li>Sabor suave</li>

                    <li>Maduración de queso joven</li>

                    <li>Ahumado de 30 a 36 horas</li>

                    <li>Elaboración artesanal</li>

                </ul>

            </div>


            <div class="detail-section">

                <h4>Presentaciones</h4>

                <p>
                    Disponible en presentaciones de
                    <strong>250 g y 500 g</strong>.
                </p>

            </div>


            <div class="detail-highlight">

                <span>QUESO ARTESANAL</span>

                <strong>
                    Provolonne Ahumado
                </strong>

                <p>
                    Suave · Ahumado · Artesanal
                </p>

            </div>

        </div>

    `,


    // ============================
    // MENONITA
    // ============================

    "Queso tipo Menonita": `

        <div class="product-detail-content">

            <p class="detail-intro">
                Un queso de sabor suave y pasta dura,
                con una característica cobertura de cera
                que distingue su presentación.
            </p>


            <div class="detail-section">

                <h4>Perfil del queso</h4>

                <p>
                    Su sabor suave y su pasta dura ofrecen
                    un perfil delicado dentro de la selección
                    de quesos artesanales de Corral de Piedra.
                </p>

            </div>


            <div class="detail-section">

                <h4>Características</h4>

                <ul>

                    <li>Sabor suave</li>

                    <li>Pasta dura</li>

                    <li>Cobertura de cera</li>

                    <li>Maduración semimadura</li>

                    <li>Elaboración artesanal</li>

                </ul>

            </div>


            <div class="detail-section">

                <h4>Tiempo de cura</h4>

                <p>
                    Cuenta con un tiempo de cura aproximado
                    de <strong>20 días</strong>, correspondiente
                    a una maduración semimadura.
                </p>

            </div>


            <div class="detail-section">

                <h4>Presentaciones</h4>

                <p>
                    Disponible en presentaciones de
                    <strong>250 g y 500 g</strong>.
                </p>

            </div>


            <div class="detail-highlight">

                <span>SELECCIÓN ESPECIAL</span>

                <strong>
                    Queso tipo Menonita
                </strong>

                <p>
                    Suave · Pasta dura · Semimaduro
                </p>

            </div>

        </div>

    `,


    // ============================
    // CURADO EN VINO TINTO
    // ============================

    "Queso Curado en Vino Tinto": `

        <div class="product-detail-content">

            <p class="detail-intro">
                Un queso de sabor intenso y pasta suave,
                sometido a un proceso de curación en vino
                tinto que aporta notas características
                y una presentación especial.
            </p>


            <div class="detail-section">

                <h4>Perfil del queso</h4>

                <p>
                    Su sabor intenso se combina con una
                    textura suave, resultado de un proceso
                    de cura de al menos 25 días.
                </p>

            </div>


            <div class="detail-section">

                <h4>Tiempo de cura</h4>

                <p>
                    El proceso de curación tiene una duración
                    de <strong>al menos 25 días</strong>.
                    Puede alcanzar una maduración
                    semimadura o madura.
                </p>

            </div>


            <div class="detail-section">

                <h4>Vinos utilizados</h4>

                <ul>

                    <li>Tempranillo</li>

                    <li>Bourdon</li>

                </ul>

            </div>


            <div class="detail-section">

                <h4>Características</h4>

                <ul>

                    <li>Sabor intenso</li>

                    <li>Pasta suave</li>

                    <li>Curado en vino tinto</li>

                    <li>Maduración semimadura o madura</li>

                    <li>Elaboración artesanal</li>

                </ul>

            </div>


            <div class="detail-section">

                <h4>Presentaciones</h4>

                <p>
                    Disponible en presentaciones de
                    <strong>250 g y 500 g</strong>.
                </p>

            </div>


            <div class="detail-highlight">

                <span>QUESO GOURMET</span>

                <strong>
                    Curado en Vino Tinto
                </strong>

                <p>
                    Intenso · Suave · Curado
                </p>

            </div>

        </div>

    `,


    // ============================
    // CURADO CON CENIZA
    // ============================

    "Queso Curado con Ceniza": `

        <div class="product-detail-content">

            <p class="detail-intro">
                Un queso de sabor intenso y pasta suave,
                con una cubierta de ceniza que forma parte
                de su proceso de curación y le proporciona
                una presentación distintiva.
            </p>


            <div class="detail-section">

                <h4>Perfil del queso</h4>

                <p>
                    Su sabor intenso y textura suave se
                    desarrollan durante un proceso de cura
                    de aproximadamente 25 días o más.
                </p>

            </div>


            <div class="detail-section">

                <h4>Proceso de curación</h4>

                <p>
                    El queso cuenta con un tiempo de cura
                    de <strong>25 días por lo menos</strong>,
                    permitiendo desarrollar sus características
                    de sabor y textura.
                </p>

            </div>


            <div class="detail-section">

                <h4>Cubierta de ceniza</h4>

                <p>
                    Su cubierta está elaborada con cenizas
                    de <strong>cedro o roble</strong>,
                    utilizadas como parte de su proceso
                    de curación.
                </p>

            </div>


            <div class="detail-section">

                <h4>Características</h4>

                <ul>

                    <li>Sabor intenso</li>

                    <li>Pasta suave</li>

                    <li>Tiempo de cura de 25 días o más</li>

                    <li>Contiene nuez moscada natural</li>

                    <li>Cubierta de ceniza de cedro o roble</li>

                    <li>Elaboración artesanal</li>

                </ul>

            </div>


            <div class="detail-highlight">

                <span>SELECCIÓN ESPECIAL</span>

                <strong>
                    Curado con Ceniza
                </strong>

                <p>
                    Intenso · Suave · Curación artesanal
                </p>

            </div>

        </div>

    `

};


// ============================
// MODAL DE PRODUCTOS
// ============================

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const closeModal =
    document.getElementById("closeModal");

const productButtons =
    document.querySelectorAll(".details-btn");


productButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product =
            button.dataset.product;


        if (modalTitle) {

            modalTitle.textContent =
                product;

        }


        if (modalDescription) {

            modalDescription.innerHTML =
                productDetails[product] ||
                "<p>Próximamente más información sobre este producto.</p>";

        }


        if (modal) {

            modal.classList.add("active");

            document.body.classList.add("modal-open");

        }

    });

});


// ============================
// CERRAR MODAL DE PRODUCTO
// ============================

function closeProductModal() {

    if (modal) {

        modal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeProductModal
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        (event) => {

            if (event.target === modal) {

                closeProductModal();

            }

        }
    );

}


// ============================
// GALERÍA DE ÁLBUMES
// ============================
//
// Cada álbum tiene su propia carpeta.
// Dentro de cada carpeta están las fotos.
//
// Ejemplo:
//
// img/galeria/eventos/bodas.jpeg
// img/galeria/eventos/evento.jpeg
//
// img/galeria/tablas/1.jpeg
// img/galeria/tablas/2.jpeg
//
// etc.
//


const albumData = {


    // ============================
    // EVENTOS
    // ============================

    eventos: {

        title: "Eventos",

        folder: "eventos",

        images: [

            "bodas.jpeg",
            "evento.jpeg",
            "eventoqueso.jpeg",
            "expo.jpeg",
            "expo2.jpeg",
            "ferias.jpeg",
            "fiestas.jpeg",
            "masexpos.jpeg",
            "nose.jpeg",
            "otraexpo.jpeg"

        ]

    },


    // ============================
    // TABLAS
    // ============================

    tablas: {

        title: "Tablas",

        folder: "tablas",

        images: [

            "1.jpeg",
            "2.jpeg",
            "3.jpeg",
            "4.jpeg",
            "5.jpeg",
            "6.jpeg",
            "7.jpeg",
            "8.jpeg",
            "9.jpeg",
            "10.jpeg"

        ]

    },


    // ============================
    // QUESOS
    // ============================

    quesos: {

        title: "Quesos",

        folder: "quesos",

        images: [

            "1.jpeg",
            "2.jpeg",
            "3.jpeg",
            "4.jpeg",
            "5.jpeg",
            "6.jpeg",
            "7.jpeg",
            "8.jpeg",
            "9.jpeg",
            "10.jpeg"

        ]

    },


    // ============================
    // IDEAS DE COMIDAS
    // ============================

    comidas: {

        title: "Ideas de comidas",

        folder: "comida",

        images: [

            "1.jpeg",
            "2.jpeg",
            "3.jpeg",
            "4.jpeg",
            "5.jpeg",
            "6.jpeg",
            "7.jpeg",
            "8.jpeg",
            "9.jpeg",
            "10.jpeg"

        ]

    },


    // ============================
    // IDEAS DE POSTRES
    // ============================

    postres: {

        title: "Ideas de postres",

        folder: "postres",

        images: [

            "1.jpeg",
            "2.jpeg",
            "3.jpeg",
            "4.jpeg",
            "5.jpeg",
            "6.jpeg",
            "7.jpeg",
            "8.jpeg",
            "9.jpeg",
            "10.jpeg"

        ]

    }

};


// ============================
// ELEMENTOS DE LA GALERÍA
// ============================

const galleryModal =
    document.getElementById("galleryModal");

const galleryClose =
    document.getElementById("galleryClose");

const galleryTitle =
    document.getElementById("galleryTitle");

const galleryMainImage =
    document.getElementById("galleryMainImage");

const galleryCounter =
    document.getElementById("galleryCounter");

const galleryThumbnails =
    document.getElementById("galleryThumbnails");

const galleryPrev =
    document.getElementById("galleryPrev");

const galleryNext =
    document.getElementById("galleryNext");


let currentAlbum = null;

let currentImage = 0;


// ============================
// OBTENER RUTA DE IMAGEN
// ============================

function getImagePath(index) {

    if (!currentAlbum) return "";

    return `img/galeria/${currentAlbum.folder}/${currentAlbum.images[index]}`;

}


// ============================
// ABRIR ÁLBUM
// ============================

function openGallery(albumName) {

    const album =
        albumData[albumName];

    if (!album) return;


    if (
        !album.images ||
        album.images.length === 0
    ) {

        console.log(
            "Este álbum todavía no tiene imágenes."
        );

        return;

    }


    currentAlbum = album;

    currentImage = 0;


    if (galleryTitle) {

        galleryTitle.textContent =
            album.title;

    }


    createGalleryImages();

    updateGallery();


    if (galleryModal) {

        galleryModal.classList.add("active");

        document.body.classList.add("modal-open");

    }

}


// ============================
// CREAR MINIATURAS
// ============================

function createGalleryImages() {

    if (!galleryThumbnails) return;


    galleryThumbnails.innerHTML = "";


    currentAlbum.images.forEach(
        (imageName, index) => {


            const thumbnail =
                document.createElement("button");


            thumbnail.className =
                "gallery-thumbnail";


            thumbnail.type =
                "button";


            const image =
                document.createElement("img");


            image.src =
                getImagePath(index);


            image.alt =
                `${currentAlbum.title} - imagen ${index + 1}`;


            image.onerror = () => {

                thumbnail.style.display = "none";

            };


            thumbnail.appendChild(image);


            thumbnail.addEventListener(
                "click",
                () => {

                    currentImage = index;

                    updateGallery();

                }
            );


            galleryThumbnails.appendChild(
                thumbnail
            );

        }
    );

}


// ============================
// ACTUALIZAR IMAGEN PRINCIPAL
// ============================

function updateGallery() {

    if (!currentAlbum) return;

    if (!galleryMainImage) return;


    const imagePath =
        getImagePath(currentImage);


    galleryMainImage.src =
        imagePath;


    galleryMainImage.alt =
        `${currentAlbum.title} - imagen ${currentImage + 1}`;


    galleryMainImage.onerror = () => {

        galleryMainImage.alt =
            "No se encontró esta imagen.";

    };


    if (galleryCounter) {

        galleryCounter.textContent =
            `${currentImage + 1} / ${currentAlbum.images.length}`;

    }


    document
        .querySelectorAll(".gallery-thumbnail")
        .forEach((thumbnail, index) => {

            thumbnail.classList.toggle(

                "active",

                index === currentImage

            );

        });

}


// ============================
// ABRIR ÁLBUM AL HACER CLICK
// ============================

document
    .querySelectorAll(".album-item")
    .forEach(album => {


        album.addEventListener(
            "click",
            () => {

                const albumName =
                    album.dataset.album;

                openGallery(albumName);

            }
        );

    });


// ============================
// IMAGEN ANTERIOR
// ============================

if (galleryPrev) {

    galleryPrev.addEventListener(
        "click",
        () => {

            if (!currentAlbum) return;


            currentImage--;


            if (currentImage < 0) {

                currentImage =
                    currentAlbum.images.length - 1;

            }


            updateGallery();

        }
    );

}


// ============================
// IMAGEN SIGUIENTE
// ============================

if (galleryNext) {

    galleryNext.addEventListener(
        "click",
        () => {

            if (!currentAlbum) return;


            currentImage++;


            if (
                currentImage >=
                currentAlbum.images.length
            ) {

                currentImage = 0;

            }


            updateGallery();

        }
    );

}


// ============================
// CERRAR GALERÍA
// ============================

function closeGallery() {

    if (galleryModal) {

        galleryModal.classList.remove("active");

        document.body.classList.remove("modal-open");

    }

}


if (galleryClose) {

    galleryClose.addEventListener(
        "click",
        closeGallery
    );

}


if (galleryModal) {

    galleryModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                galleryModal
            ) {

                closeGallery();

            }

        }
    );

}


// ============================
// TECLADO
// ============================

document.addEventListener(
    "keydown",
    (event) => {


        // ESC

        if (event.key === "Escape") {

            closeProductModal();

            closeGallery();

        }


        // GALERÍA

        if (

            galleryModal &&

            galleryModal.classList.contains(
                "active"
            )

        ) {


            // Flecha izquierda

            if (event.key === "ArrowLeft") {

                if (!currentAlbum) return;


                currentImage--;


                if (currentImage < 0) {

                    currentImage =
                        currentAlbum.images.length - 1;

                }


                updateGallery();

            }


            // Flecha derecha

            if (event.key === "ArrowRight") {

                if (!currentAlbum) return;


                currentImage++;


                if (
                    currentImage >=
                    currentAlbum.images.length
                ) {

                    currentImage = 0;

                }


                updateGallery();

            }

        }

    }
);


// ============================
// ANIMACIONES AL HACER SCROLL
// ============================

const elements =
    document.querySelectorAll(
        ".product-card, .value, .album-item"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});