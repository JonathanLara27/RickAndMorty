const fetch = require('node-fetch');

var controller = {
    getPersonajes: async (req, res) => {
        let url= process.env.URL+ 'character';
        const response = await fetch(url);
        const data = await response.json();
        let next= data.info.next.split('page=')[1];
        res.render('personajes', { pjs: data.results, next: next, prev: 1});
    },
    //obtenemos los personajes por pagina
    getPersonajesPage: async (req, res) => {
        let page= req.params.page;
        let url= process.env.URL+ 'character' + '?page=' + page;
        const response = await fetch(url);
        const data = await response.json();
        let next= data.info.next.split('page=')[1];
        let prev= data.info.prev.split('page=')[1];
        if(next == null || next == 42) {
            next=41;
        }
        if(prev == null) {
            next=1;
        }
        console.log(page);
        res.render('personajes', { pjs: data.results, next: next, prev: prev });
    }
};

module.exports = controller;