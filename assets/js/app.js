const ano = new Date().getFullYear() + 1;
const anoNovo = new Date(`January 01 ${ano} 00:00:00`);

const txtDias = document.querySelector('#dias');
const txtHoras = document.querySelector('#horas');
const txtMinutos = document.querySelector('#minutos');
const txtSegundos = document.querySelector('#segundos');
const txtAno = document.querySelector('#ano');

txtAno.innerHTML = ano

setTimeout(() => {
    document.querySelector('#spinner').style.display = 'none';
    document.querySelector('#cronometro').style.display = 'flex';
}, 1000)

const atualizarTempo = () => {
    const dataAtual = new Date()
    const diferenca = anoNovo - dataAtual

    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;
    const minutos = Math.floor(diferenca / 1000 / 60) % 60;
    const segundos = Math.floor(diferenca / 1000) % 60;

    txtSegundos.innerHTML = segundos < 10 ? '0' + segundos : segundos;
    txtMinutos.innerHTML = minutos < 10 ? '0' + minutos : minutos;
    txtHoras.innerHTML = horas < 10 ? '0' + horas : horas;
    txtDias.innerHTML = dias < 10 ? '0' + dias : dias;
}
setInterval(atualizarTempo, 1000)
