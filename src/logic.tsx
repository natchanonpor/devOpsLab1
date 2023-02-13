export function logic(a: number,b: number, c?: number) {
    if(c){
        return c;
    }
    return a + b;
}