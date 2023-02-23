export function  setItemInLocalStorage(key:string,value:string){
    localStorage.setItem(key,value)
}

export function getItemFromLocalStorage(key:string):string{
    const value=localStorage.getItem(key) || "";
    return value
}