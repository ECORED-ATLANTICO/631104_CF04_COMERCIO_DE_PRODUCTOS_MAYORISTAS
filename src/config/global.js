export default {
  global: {
    componenteFormativo: 'Cierre de ventas de productos mayoristas',
    descripcionCurso:
      'A los vendedores se les evalúa usualmente por sus ventas efectivas, no por sus intenciones o gestiones, en este sentido, el “cierre de venta de productos mayoristas”, entendido como el momento en el que el cliente acepta de manera formal la propuesta comercial, representa el resultado tangible del buen desempeño de un vendedor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mezcla de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Producto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Precio',
            hash: 't_1_2',
          },
          {
            numero: '1.3 ',
            titulo: 'Plaza',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Promoción',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Etiqueta empresarial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Propuesta comercial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Atención al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',

        numero: '5',
        titulo: 'Inclusión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Discapacidad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Normativa',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: ' Ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Técnicas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Objeciones',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: ' Formalización de la venta',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/631104_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'Es la razón de ser de la empresa. Es la persona o empresa que paga por los productos de la empresa.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'Son aquellos clientes potenciales que tienen como características necesitar el producto que ofrece la empresa y tener la capacidad adquisitiva para adquirirlo.',
    },
    {
      termino: 'Contrato',
      significado:
        'Documento que formaliza una operación comercial entre empresas o personas. Tiene validez jurídica y siempre lleva asociado un objeto.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'Es el proceso responsable de diseñar y operar las estrategias para que los clientes adquieran los productos de la empresa de una forma rentable.',
    },
    {
      termino: 'Mezcla de mercadeo',
      significado:
        'Hace alusión a las cuatro P del mercadeo. Son las cuatro variables básicas en el mercadeo: producto, precio, plaza, promoción.',
    },
    {
      termino: 'Precio',
      significado:
        'Es el valor de intercambio entre oferentes y demandantes. Es la única variable de la mezcla de mercadeo que genera ingresos para la compañía.',
    },
    {
      termino: 'Producto',
      significado:
        'Es el objeto de la transacción. En el mercadeo moderno un producto puede ser un tangible, un intangible, una marca, una persona o un lugar.',
    },
    {
      termino: 'Prospectar',
      significado:
        'Ejercicio que realizan las empresas para seleccionar sus posibles clientes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ardila, E. y Sastoque, F. (1984). <em>Técnica de ventas: el producto.</em>  SENA.',
      link: 'https://repositorio.sena.edu.co/handle/11404/1896',
    },
    {
      referencia:
        'Kotler, P. & Armstrong, G. (2007). <em>Marketing, versión para Latinoamérica. Decimoprimera edición. Pearson Educación.</em>',
      link: '',
    },
    {
      referencia:
        'Navarro, M. (2012). <em>Técnicas de ventas. Red Tercer Milenio.</em>',
      link:
        'https://www.academia.edu/22896902/T%C3%A9cnicas_de_ventas_MARIANA_ELIZABETH_NAVARRO_MEJIA',
    },
    {
      referencia:
        'Secretaria Distrital de Desarrollo Económico de Bogotá – Cámara de Comercio de Bogotá. (2010). <em>Cartilla práctica Etiqueta empresarial. Editorial Kimpres.</em>',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/1172/4614_cartilla_etiquetaempresarial.pdf?sequence=1&isAllowed=y',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Diana Carolina Jaramillo Rojas',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios Regional - Cauca',
        },
        {
          nombre: 'Diego Acevedo',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios Regional - Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Ángela María Maldonado Jaime',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
        {
          nombre: 'Erika Viviana Sandoval Rojas',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional - Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
