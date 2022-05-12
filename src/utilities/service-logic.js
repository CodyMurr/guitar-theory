export const notes = [
    "a",
    "a#",
    "b",
    "c",
    "c#",
    "d",
    "d#",
    "e",
    "f",
    "f#",
    "g",
    "g#"
];

export const tunings = {
    'standard': ['e', 'b', 'g', 'd', 'a', 'e'],
    'half-step': ['d#', 'a#', 'f#', 'c#', 'g#', 'd#'],
    'full-step': ['d', 'a', 'f', 'c', 'g', 'd'],
    '1.5-steps': ['c#', 'g#', 'e', 'b', 'f#', 'c#'],
    'drop-a': ['b', 'f#', 'd', 'a', 'e', 'a'],
    'drop-b': ['c#', 'g#', 'e', 'b', 'f#', 'b'],
    'drop-c': ['d', 'a', 'f', 'c', 'g', 'c'],
    'drop-d': ['e', 'b', 'g', 'd', 'a', 'd'],
    'drop-e': ['f#', 'c#', 'a', 'e', 'b', 'e'],
    'drop-f': ['g', 'd', 'a#', 'f', 'c', 'f'],
    'drop-g': ['a', 'e', 'c', 'g', 'd', 'g'],
    'open-a': [ 'e', 'a', 'e', 'c#', 'a', 'e'],
    'open-b': ['d#', 'b', 'f#', 'b', 'f#', 'b'],
    'open-c': ['e', 'c', 'g', 'c', 'g', 'c'],
    'open-d': ['d', 'a', 'f#', 'd', 'a', 'd'],
    'open-e': ['e', 'b', 'g#', 'e', 'b', 'e'],
    'open-f': ['f', 'a', 'f', 'c', 'f', 'c'],
    'open-g': ['d', 'b', 'g', 'd', 'g', 'd'],
}

export const progressions = {
    'major': [2, 2, 1, 2, 2, 2], 
    'minor': [2, 1, 2, 2, 1, 2]
}

export function getScale(root, prog) {
    let rootIdx = notes.indexOf(root);
    const noteArr = notes.slice(rootIdx).concat(notes.slice(0, rootIdx));
    const scaleArr = [];
    let idx = 0;
    for (let i = 0; i <= progressions[prog].length; i++) {
      scaleArr.push(noteArr[idx]);
      idx += progressions[prog][i];
    }
    return scaleArr;
}

export const fretStyles = {
    group1: {
        frets: [1, 2, 3, 4],
        width: '10.5%'
    },
    group2:  {
        frets: [5, 6, 7, 8],
        width: '8.5%'
    },
    group3: {
        frets: [9, 10, 11, 12],
        width: '6%'
    }
}