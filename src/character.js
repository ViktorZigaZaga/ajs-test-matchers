export default function sortCharacter(characterArray) {
    if (!characterArray) {
        return null;
    } 
    return characterArray.sort((a,b) => {
        if (a.health > b.health) {
            return -1;
        } if (a.health < b.health) {
            return 1;
        }
        return 0;
    });
}
