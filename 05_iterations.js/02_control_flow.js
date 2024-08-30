// break and continue  -->  control flow statements

for(i = 1 ; i<10 ; i++){
    if(i == 5){
        console.log("5 is detected")
        break
    }
    console.log(i)
}

for(i = 1 ; i<5 ; i++){
    if(i == 3){
        console.log("3 is detected")
        continue
    }
    console.log(i)
}