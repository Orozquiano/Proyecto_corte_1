export function count(counterEl: HTMLLIElement){
    counterEl.innerHTML=`${(+counterEl.innerHTML)+1}`
}