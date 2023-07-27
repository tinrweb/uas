let nama, npm;

nama = prompt("Masukan Nama:");
npm = prompt("Masukan NPM:");

const nameComponent = document.getElementById("namaa");
const npmComponent = document.getElementById("npmm");






if (nama.length > 0) {
    nameComponent.innerHTML = " : " + nama;
}

if (npm.length > 0) {
    npmComponent.innerHTML = " : " + npm;
}