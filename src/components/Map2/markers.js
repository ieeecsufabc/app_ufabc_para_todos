
const stands = [
    {// esquerda inferior
        name: "1",
        description: "Bacharelado em Ciência e Tecnologia",
        top: '58.6%',
        left: '24.4%',
        width: "6%",
        height: "4.15%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "2",
        description: "Bacharelado em Biotecnologia",
        top: '62.75%',
        left: '24.4%',
        width: "6%",
        height: "4.15%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "3",
        description: "Bacharelado/Licenciatura em Ciências Biológicas",
        top: '66.94%',
        left: '24.4%',
        width: "6%",
        height: "7.95%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "4",
        description: "Bacharelado em Ciência da Computação",
        top: '74.9%',
        left: '24.4%',
        width: "6%",
        height: "4.15%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "5",
        description: "Bacharelado em Química",
        top: '79.06%',
        left: '24.4%',
        width: "6%",
        height: "7.92%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "6",
        description: "Licenciatura em Química",
        top: '86.98%',
        left: '24.4%',
        width: "6%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {//inferior
        name: "7",
        description: "Bacharelado em Física",
        top: '95.2%',
        left: '30.3%',
        width: "11.3%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "8",
        description: "Licenciatura em Física",
        top: '95.2%',
        left: '41.6%',
        width: "11.3%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "9",
        description: "Bacharelado em Matemática",
        top: '95.2%',
        left: '52.9%',
        width: "11.3%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "10",
        description: "Licenciatura em Matemática",
        top: '95.2%',
        left: '64.2%',
        width: "11.3%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "11",
        description: "Bacharelado em Neurociência",
        top: '95.2%',
        left: '75.5%',
        width: "6%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {//direita inferior
        name: "12",
        description: "Engenharia Ambiental e Urbana",
        top: '82.8%',
        left: '87.3%',
        width: "6.5%",
        height: "8.2%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "13",
        description: "EIAR - Engenharia de Instrumentação, Automação e Robótica",
        top: '74.7%',
        left: '87.3%',
        width: "6.5%",
        height: "8.2%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "14",
        description: "Engenharia de Materiais",
        top: '66.5%',
        left: '87.3%',
        width: "6.5%",
        height: "8.2%",
        color: "transparent",
        fontSize: 18
    },
    {//direita superior
        name: "15",
        description: "Engenharia de Energia",
        top: '38.51%',
        left: '87.3%',
        width: "6.5%",
        height: "4.15%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "16",
        description: "Bacharelado em Engenharia Biomédica",
        top: '30.32%',
        left: '87.3%',
        width: "6%",
        height: "8.2%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "17",
        description: "Engenharia de Gestão",
        top: '26.3%',
        left: '87.3%',
        width: "6%",
        height: "4.0%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "18",
        description: "IAR/CECS/DINAMA",
        top: '18.1%',
        left: '87.3%',
        width: "6%",
        height: "8.2%",
        color: "transparent",
        fontSize: 18
    },
    {// superior
        name: "19",
        description: "Engenharia Aeroespacial",
        top: '12.6%',
        left: '76.15%',
        width: "5.7%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "20",
        description: "Assessoria de Relações Internacionais",
        top: '12.6%',
        left: '70.41%',
        width: "5.7%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "21",
        description: "NuTS - Núcleo de Tecnologias Sustentáveis",
        top: '12.6%',
        left: '64.7%',
        width: "5.7%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "22",
        description: "Pró-Reitoria de Pesquisa",
        top: '12.6%',
        left: '59.05%',
        width: "5.7%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "23",
        description: "PROAP",
        top: '12.6%',
        left: '53.3%',
        width: "5.7%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "24",
        description: "Bacharelado em Políticas Públicas",
        top: '12.6%',
        left: '47.62%',
        width: "5.7%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "25",
        description: "Licenciatura em Filosofia",
        top: '12.6%',
        left: '41.9%',
        width: "5.7%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "26",
        description: "Bacharelado em Filosofia",
        top: '12.6%',
        left: '30.6%',
        width: "11.3%",
        height: "4.3%",
        color: "transparent",
        fontSize: 18
    },
    {//esquerda superior
        name: "27",
        description: "1) Bacharelado em Relações Internacionais\n2) Entidade InseRI\n3) CARI",
        top: '21.06%',
        left: '24.4%',
        width: "6%",
        height: "8%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "28",
        description: "Bacharelado em Planejamento Territorial",
        top: '29.1%',
        left: '24.4%',
        width: "6%",
        height: "8%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "29",
        description: "Bacharelado em Ciências Econômicas",
        top: '37.15%',
        left: '24.4%',
        width: "6%",
        height: "8%",
        color: "transparent",
        fontSize: 18
    },
    {
        name: "30",
        description: "Bacharelado em Ciências e Humanidades",
        top: '45.15%',
        left: '24.4%',
        width: "6%",
        height: "8.2%",
        color: "transparent",
        fontSize: 18
    }
]

const balcao = [
    {
        name: "PALCO",
        description: "Palco de apresentações",
        top: '49.9%',
        left: '84.91%',
        width: '11.5%',
        height: '12.5%',
        color: "transparent",
        fontSize: 14
    },
    {
        name: "EDITORA UFABC",
        description: "Conheça a Escola Preparatória da UFABC!",
        top: '0.2%',
        left: '66.2%',
        width: '14%',
        height: '4.99%',
        color: "transparent",
        fontSize: 14
    },
    {
        name: "Credenciamento",
        description: "Venha fazer o seu credenciamento aqui!",
        top: '7.3%',
        left: '27.5%',
        width: '12%',
        height: '4.5%',
        color: "transparent",
        fontSize: 14
    },
    {
        name: "PROEC",
        description: "Pró Reitoria de Extensão e Cultura",
        top: '0.2%',
        left: '43%',
        width: '18%',
        height: '4.99%',
        color: "transparent",
        fontSize: 14
    }

]
/*{rooms.map(({name, description, top, left}, index) => (
              <Marker
                onPress={() => this.onEventClick(name, description)}
                top={top}
                width='15.7%'
                height='8%'
                left={left}
                color="transparent"
                key={index}
                text={name}
              />
            ))}
*/ 
export {
    stands,
    balcao
};
