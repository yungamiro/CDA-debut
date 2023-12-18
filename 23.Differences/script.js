function differences(arr1, arr2) {
    let combArrs = arr1.concat(arr2)
    console.log(combArrs);
    const uniArr = combArrs.filter((val, ind, self) =>{
        return self.indexOf(val) === self.lastIndexOf(val);
    })
    return uniArr

}

console.log(differences([1, 2, 3, 5], [1, 2, 3, 4, 5]));     //  [ 4 ]
console.log(differences(["x", "a", "c"], ["m","k","l"]));    //  [ 'x', 'a', 'c', 'm', 'k', 'l' ]
console.log(differences([999,777], [777,444,111]));          //  [ 999, 444, 111 ]


// La fonction filter() prend un callback comme argument,                                                                                                                                                           
// ce callback est appele pour chaque element dans le tableau
// et determine si l'element doit etre inclu ou filtre dans le resultat