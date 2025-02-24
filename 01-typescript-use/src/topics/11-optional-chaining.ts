

export interface Passenger {
    name: string;
    chindren?: string[];
}



const passenger1: Passenger = {
    name: 'Andres'
}

const passenger2: Passenger = {
    name: 'Melissa',
    chindren: ['Luz', 'Maria']
}

const printChildren = (passenger: Passenger) => {

    const howManyChildren = passenger.chindren?.length || 0;
    // const howManyChildren = passenger.chindren!.length;

    console.log(passenger.name, howManyChildren)

    return howManyChildren;
}

printChildren(passenger1)