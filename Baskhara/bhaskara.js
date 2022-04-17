function delta(a, b, c) {
    const resultado = (b*b) - (4*(a*c))
    return resultado
}
function bhaskara(a, b, c) {
    const valorDelta = delta(a, b, c)
    if (valorDelta < 0)
        return  ({ X1: "Inexistente", X2: "Ineexistente"})
    else {
        const valor_x1 = (-b + Math.sqrt(valorDelta)) /(2 * a)
        const valor_x2 = (-b - Math.sqrt(valorDelta)) /(2 * a)
        return ({X1: valor_x1, X2: valor_x2})
    }
}
function handleBtnCalcular () {
    const a = document.getElementById('valorA').value
    const b = document.getElementById('valorB').value
    const c = document.getElementById('valorC').value
    const raizes = bhaskara(a, b, c)
    document.getElementById('ResultadoX1').innerHTML = raizes.X1
    document.getElementById('ResultadoX2').innerHTML = raizes.X2
}

document.getElementById('btnCalcular').addEventListener(
    'click', handleBtnCalcular
)
