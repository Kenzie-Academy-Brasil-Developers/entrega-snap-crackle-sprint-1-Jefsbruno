function snapCrackle(maxValue){

let teste =[] 
let numind=0
let impar=maxValue%2
let mult=maxValue%5

for(let i = 1;i<=maxValue;i++){
teste.push(i)
    }while(numind<teste.length){
        if((teste[numind]%2!=0)&&(teste[numind]%5==0)){
        teste[numind]="SnapCrackle"
    }else if ((teste[numind]%2!=0)){
        teste[numind]="Snap"
    }numind+=1
}return teste
}
