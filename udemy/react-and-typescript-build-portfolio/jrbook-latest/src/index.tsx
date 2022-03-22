import * as esbuild from "esbuild-wasm";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const App = () => {
    const ref = useRef<any>();
    const [input, setInput] = useState("");
    const [code, setCode] = useState("");

    useEffect(() => {
        ref.current = esbuild.initialize({
            worker: true,
            wasmURL: "/esbuild.wasm",
        });
    }, []);

    const handleClick = async () => {
        await ref.current.then(() => {
            esbuild
                .transform(input, {
                    loader: "jsx",
                    target: "es2015",
                })
                .then((result) => {
                    console.log("HEYA: ", result);
                });
        });
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setInput(event.target.value);
    };

    return (
        <div>
            <textarea value={input} onChange={handleInputChange}></textarea>
            <button onClick={handleClick}>Submit</button>
            <pre>{code}</pre>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
