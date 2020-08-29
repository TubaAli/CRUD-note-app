// const square = function(x){
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(3))

const event = {
    name: 'Birthday party',
    guestList: ['Tuba','Arham','Somi'],
    printGuestList(){
        console.log('Guest list for '+ this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest+ ' is attending the '+this.name)
        })
    }
}

event.printGuestList()