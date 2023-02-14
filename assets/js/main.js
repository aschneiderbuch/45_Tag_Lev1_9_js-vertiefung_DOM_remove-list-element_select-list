console.log("test");

/* 
onClick
selectedIndex
remove()

*/

// click
// ausgewählte Option
// Option in html löschen

const btnSelect = document.querySelector("#farbeAuswahlen")
console.log(btnSelect); // alle 

const btnEntfernen = document.querySelector("#button");
console.log(btnSelect)




// Szenario 1    // geht nicht richtig 
                
btnSelect.addEventListener("change", (e) => {
    e.preventDefault();


    const btnSelectIndex = Number(btnSelect.selectedIndex);
    console.log(btnSelectIndex); // 0

    console.log(btnSelect.options)
    console.log(btnSelect.options[btnSelectIndex].text); // zeigt text an
    console.log(btnSelect.options[btnSelectIndex]); // zeigt value a

    console.log(btnEntfernen);
    btnEntfernen.addEventListener("click", (e) => {
        e.preventDefault();

        console.log(btnSelectIndex)
        switch (btnSelectIndex) {
            case 0:
                console.log("ins switch case 0")
                btnSelect.removeChild(btnSelect.options[0]);
                break
            case 1:
                btnSelect.removeChild(btnSelect.options[1]);
                break
            case 2:
                btnSelect.removeChild(btnSelect.options[2]);
                break
            case 3:
                btnSelect.removeChild(btnSelect.options[3]);
                break
            case 4:
                btnSelect.removeChild(btnSelect.options[4]);
                break
            case 5:
                btnSelect.removeChild(btnSelect.options[5]);
                break
            case 6:
                btnSelect.removeChild(btnSelect.options[6]);
                break
            case 7:
                btnSelect.removeChild(btnSelect.options[7]);
                break
            case 8:
                btnSelect.removeChild(btnSelect.options[8]);
                break
            case 9:
                btnSelect.removeChild(btnSelect.options[9]);
                break
        }
    });

});


/* // Sezenario 2 
const liste = document.querySelector("#farbeAuswahlen");
console.log(liste);

btnEntfernen.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(liste.selectedIndex); // 0 
    liste.remove(liste.selectedIndex);
    console.log(liste)

}); */