function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Marco', 'Admin');
usuarios.set("Jose", 'user');
usuarios.set("Marluce", 'Admin');
usuarios.set("Josefa", 'Admin');
usuarios.set("Josiane", 'Admin');

console.log(getAdmins(usuarios));