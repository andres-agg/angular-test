
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const { 
    song: anotherSong,
    songDuration: duration,
    details:{ author }
} = audioPlayer;

// console.log('Song: ', anotherSong)
// console.log('Duration: ', duration)
// console.log('Author: ', author)


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']

const [, , trunks] = dbz;

console.log('Personaje 3: ', trunks)


export {};