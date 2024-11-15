const products = [
    {
        id: 1,
        name: "Shampoo 1",
        description:"La fórmula Pro-vitaminas transforma tu cabello, haciéndolo más fuerte y saludable. Excepcionalmente rico en vitaminas naturales y grasas esenciales. Tratamiento capilar de alta tecnología para revelar la belleza única que hay en toda mujer y en todo cabello. Natura Lumina. Tu cabello, tu verdad. Cabello regenerado en la medida exacta de cada daño. Reducción de hasta un 70% en la porosidad de los cabellos. Cabellos saludables desde la primera aplicación.",
        image: "../products/shampoo1.jpg",
        price: "18.500",
        category: "shampoo",
        stock: 4
    },
    {
        id: 2,
        name: "Shampoo 2",
        description:"Elaboración tenso-activa para la piel y el cabello en base a sulfatos de alcoholes grasos",
        image: "../products/shampoo2.jpg",
        price: "9.300",
        category: "shampoo",
        stock: 6
    },
    {
        id: 3,
        name: "Shampoo 3",
        description:"Dale un detox a tu pelo para tener un brillo natural. Limpia las impurezas del día a día como la contaminación, sudor y polvo del aire",
        image: "../products/shampoo3.jpg",
        price: "12.800",
        category: "shampoo",
        stock: 9
    },
    {
        id: 4,
        name: "Shampoo 4",
        description:"Limpia profundamente el cabello eliminando las impurezas y evitando el cabello grasoso. Úsalo si tu cabello es graso de raíz a puntas o sólo en la raíz.",
        image: "../products/shampoo4.jpg",
        price: "3.200",
        category: "shampoo",
        stock: 7
    },
    {
        id: 5,            
        name: "Acondicionador 1",
        description:"Reparación visible y nutrición progresiva, lavado tras lavado. Nutre para reparar la apariencia del pelo dañado.",
        image: "../products/acondicionador1.jpg",
        price:"6.500",
        category: "acondicionador",
        stock: 10
    },
    {
        id: 6,            
        name: "Acondicionador 2",
        description:"Elaborado a partir de ingredientes inspirados en la naturaleza para reparar el pelo dañado. Lleva tu pelo al paraíso",
        image: "../products/acondicionador2.jpg",
        price:"6.500",
        category: "acondicionador",
        stock: 2
    },
    {
        id: 7,            
        name: "Acondicionador 3",
        description:"Suaviza la cutícula del cabello, haciendo que sea más fácil de peinar y reduciendo la formación de nudos. Esto es beneficioso para quienes tienen el cabello largo, rizado o propenso a enredarse.",
        image: "../products/acondicionador3.jpg",
        price:"6.500",
        category: "acondicionador",
        stock: 3
    },
    {
        id: 8,            
        name: "Acondicionador 4",
        description:"En pocas palabras, la función principal de tu acondicionador es suavizar cada hebra para contribuir a la salud del cabello",
        image: "../products/acondicionador4.jpg",
        price:"5.500",
        category: "acondicionador",
        stock: 8
    },
    {
        id: 9,            
        name: "Acondicionador 5",
        description:"Acondicionador hidratante y regenerante que gracias a las proteínas vegetales y los aceites de argán, almendra y oliva, la hebra capilar queda totalmente hermoso",
        image: "../products/acondicionador5.jpg",
        price:"6.500",
        category: "acondicionador",
        stock: 1
    },
    {
        id: 10,            
        name: "Acondicionador 6",
        description:"Este Acondicionador Sólido ayuda a mantener el brillo y suavidad del cabello, reparándolo y nutriéndolo a la vez. Sin sulfatos, sin parabenos y sin siliconas",
        image: "../products/acondicionador6.jpg",
        price:"6.500",
        category: "acondicionador",
        stock: 23
    },
    {
        id: 11,            
        name: "Acondicionador 7",
        description:"El acondicionador para cabello es un producto de cuidado capilar, diseñado para desenredar, suavizar e hidratar",
        image: "../products/acondicionador7.jpg",
        price:"6.500",
        category: "acondicionador",
        stock: 12
    },
    {
        id: 12,            
        name: "Acondicionador 8",
        description:"Con proteína de fruta, aceite de coco y aminoácidos refuerza el pelo, define más los rizos y reduce el exceso de volumen debido al frizz.",
        image: "../products/acondicionador8.jpg",
        price:"2.500",
        category: "acondicionador",
        stock: 7
    },
    {
        id: 13,            
        name: "Mascarilla 1",
        description:"Su principal función es filtrar partículas y microorganismos, ayudando a prevenir contagios de virus y bacterias",
        image: "../products/mascarilla1.jpg",
        price:"10.500",
        category: "mascarilla",
        stock: 2
    },
    {
        id: 14,            
        name: "Mascarilla 2",
        description:"Esta mascarilla capilar tiene un efecto Detox que repara, hidrata profundamente tu cabello y lo regenera sellando la cutícula.",
        image: "../products/mascarilla2.jpg",
        price:"16.300",
        category: "mascarilla",
        stock: 9
    },
    {
        id: 15,            
        name: "Mascarilla 3",
        description:"Recomendado para tratamiento de cabellos secos, puntas partidas y pelo quebradizo (forma ciclindrica, color morado).",
        image: "../products/mascarilla3.jpg",
        price:"6.500",
        category: "mascarilla",
        stock: 5
    }
];


export const promesa = new Promise ((resolve,reject) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
});

export const getProductCategory = (categoria) => {
    if(categoria){
        return products.filter((prod) => prod.category === categoria);
    }
    else{
        return products;
    }
};

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};