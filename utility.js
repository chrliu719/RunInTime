export function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const compareSongs = (song1, song2) => {
    return song1.features.tempo - song2.features.tempo
}