const fs = require("fs");

/*
const loader = require("@assemblyscript/loader/umd");
const imports = {};
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/untouched.wasm"), imports);
module.exports = wasmModule.exports;
/*/
const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/untouched.wasm"));
const imports = {
    env: {
        abort(_msg, _file, line, column) {
            console.error("abort called at index.ts:" + line + ":" + column);
        }
    }
};
Object.defineProperty(module, "exports", {
    displayPoem: () => new WebAssembly.Instance(compiled, imports).exports
});
//*/


// const poemModule = require(__dirname + "/assembly/index.ts");
// poemModule.displayPoem();
