function compras(tb1, tb2) {
    const comprarSorvete = tb1 || tb2;
    const comprarTv50 = tb1 && tb2;
    const comprarTv32 = tb1 != tb2;
    const manterSaldavel = !comprarSorvete;
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaldavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))