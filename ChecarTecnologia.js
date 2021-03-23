const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function especialidade(user) {
    for (let i = 0; i < user.length; i++) {
        console.log(`${user[i].nome} trabalha com ${user[i].tecnologias}`)
    }
}

function checaSeUsuarioUsaCSS(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].tecnologias.length; j++) {
            if (usuarios[i].tecnologias[j] === "CSS") {
                console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
            }
        }
    }
}

especialidade(usuarios);
checaSeUsuarioUsaCSS(usuarios);