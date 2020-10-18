const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
     await saveOrphanage(db, {
        lat: "-27.2207199",
        lng: "-49.6573958",
        name: "Carinhoso",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social",
        whatsapp: "4867574839",
        images: [
            "https://img.r7.com/images/orfanato-st-josephs-em-burlington-eua-28082018222825010?dimensions=460x305",
            
            "https://images.squarespace-cdn.com/content/56b10ce8746fb97c2d267b79/1493132514613-XC3BWZ4IED7QS47T8DGW/orfanatos+n%C3%A3o+existem4.jpg?content-type=image%2Fjpeg"            
        ].toString(),
        instructions: "Venha compartilhar amor, carinho e atenção. As crianças esperam por você!",
        opening_hours: "Horário de visitas das 8h às 18h",
        open_on_weekends: "1"
    }) 

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages); 

    //consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage);

    // deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))
})