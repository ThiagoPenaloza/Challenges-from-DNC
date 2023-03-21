function tabuada() {
    var num = window.document.getElementById(`num`)
    var end = document.getElementById(`end`)
    var n = Number(num.value)
    var e = Number(end.value)
    var x = 0
    var r = ''
    var res = window.document.getElementById(`resposta`)
    if ( n == 0 || e == 0) {
        window.alert('[error] Confira os dados!')
    } else {
    res.innerHTML = `A Tabuada do ${n} é: <br>`
    do{
        r = n*x
        res.innerHTML += `${x} X ${n} = ${r} <br>`
        x++
    } while (x <= e)
    }
}