import { lines } from "./lines";

const NEW_SONNET_SEPARATIONS: Array<i32> = [3, 7, 10];

export function displayPoem(): String {
    let poem: String = '';
    for (var i = 0; i < 16; i++) {
        var index = <f32>Math.random() * <f32>lines.length;
        var verse = lines[<i32>Math.floor(index)][i];
        poem += verse + '\n';
        if (NEW_SONNET_SEPARATIONS.includes(i)) {
            poem += '\n';
        }
    }

    return poem;
}
