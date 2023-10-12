export function decreaseText(text,count=20){
    return text.length>count?text.slice(0,20)+"...":text
}