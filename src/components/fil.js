

export const files = 
    [{
       id:1,
       marca:"Dodge",
       modelo:"Journey",
       foto: "https://firebasestorage.googleapis.com/v0/b/autosstore-ca6e9.appspot.com/o/auto1.png?alt=media&token=18534f67-dfe3-4b0a-bb4a-e21e9497b27c",
       estado:"Excelente, se exhibe sin detalles y gomas nuevas.",
       precio:10900,
       categoria:"camionetas"

       
    },
    {   
        id:2,
        marca:"Mercedez",
        modelo:"Clc 250",
        foto:"https://firebasestorage.googleapis.com/v0/b/autosstore-ca6e9.appspot.com/o/auto2.png?alt=media&token=bfd15261-75b7-4970-aaed-62deb6609434",
        estado:"Excelente, se exhibe sin detalles y gomas nuevas.",
        precio:18000,
        categoria:"autos"
    },
    {
        id:3,
        marca:"Volkswagen",
        modelo:"Passat",
        foto:"https://firebasestorage.googleapis.com/v0/b/autosstore-ca6e9.appspot.com/o/auto3.png?alt=media&token=14d28d8c-f181-4c8f-b7c4-2f940bf56ab0",
        estado:"Excelente, se exhibe sin detalles y gomas nuevas.",
        precio:12000,
        categoria:"autos"
    },
    {
        id:4,
        marca:"Toyota",
        modelo:"Hilux",
        foto:"https://firebasestorage.googleapis.com/v0/b/autosstore-ca6e9.appspot.com/o/auto4.png?alt=media&token=29e2e7cf-65bd-459d-804a-731c2cba3110",
        estado:"Excelente, se exhibe sin detalles y gomas nuevas.",
        precio:18000,
        categoria:"camionetas"
    }]

const getFetch = new Promise((res) =>{
  
    setTimeout(()=>{
                res(files)}
               ,2000);
    })
export default getFetch;