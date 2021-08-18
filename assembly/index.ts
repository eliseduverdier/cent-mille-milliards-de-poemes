import { lines } from "./lines";

export function displayPoem(): String {
    let poem = ''
    for (var i = 0; i < 16; i++) {
        var index = <f64>Math.random() * <f64>lines.length
        var verse = lines[<i32>Math.floor(index)][i];
        poem += verse + '\n';
        if ([3, 7, 10].includes(i)) { // new sonnet
            poem += '\n';
        }
    }

    return poem;
}
