// for   
for(i = 0 ; i <= 5 ; i++){
    const num = i
    if(num == 2){
        console.log("2 is the best number")
    }
    console.log(num)
}

for(i = 1 ; i < 5 ; i++){
    console.log(`table of ${i} : `)
    for(j = 1 ; j <= 10 ; j++){
        console.log(`${i} * ${j} = ${i * j}`)
    }
}