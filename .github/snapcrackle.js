function snapCrackle(maxValue){

let teste =[] 
let numind=0


for(let i = 1;i<=maxValue;i++){
teste.push(i)
    }while(numind<teste.length){
        if((teste[numind]%2!=0)&&(teste[numind]%5==0)){
        teste[numind]="SnapCrackle"
    }else if ((teste[numind]%2!=0)){
        teste[numind]="Snap"
    }else if ((teste[numind]%5==0)){
        teste[numind]="Crackle"
    }numind+=1
}return teste
}
