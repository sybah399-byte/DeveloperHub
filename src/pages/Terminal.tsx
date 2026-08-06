import { useState, useRef, useEffect } from "react";
import "../styles/terminal.css";

export default function Terminal() {

    const [command, setCommand] = useState("");
    const [history, setHistory] = useState<string[]>([
        "DeveloperHub Terminal",
        "Type a command and press Enter."
    ]);

    const [running, setRunning] = useState(false);

    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });

    }, [history]);

    async function runCommand() {

        if (!command.trim() || running) return;

        const cmd = command.trim();

        const time = new Date().toLocaleTimeString();

        setHistory(prev => [

            ...prev,

            `[${time}] > ${cmd}`

        ]);

        setCommand("");

        setRunning(true);

        try {

            const result =
                await window.electronAPI.runCommand(cmd);

            if (result.output?.trim()) {

                setHistory(prev => [

                    ...prev,

                    result.output

                ]);

            }

            if (result.error?.trim()) {

                setHistory(prev => [

                    ...prev,

                    "ERROR:",

                    result.error

                ]);

            }

        }

        catch (err) {

            setHistory(prev => [

                ...prev,

                String(err)

            ]);

        }

        setRunning(false);

    }

    function clearTerminal() {

        setHistory([]);

    }

    return (

        <div className="terminal">

            <div className="terminal-header">

                <h2>Integrated Terminal</h2>

                <button
                    onClick={clearTerminal}
                >
                    Clear
                </button>

            </div>

            <div className="terminal-window">

                {

                    history.map((line, index) => (

                        <pre
                            key={index}
                            className="terminal-line"
                        >
                            {line}
                        </pre>

                    ))

                }

                {

                    running && (

                        <pre>

                            Running...

                        </pre>

                    )

                }

                <div ref={bottomRef} />

            </div>

            <div className="terminal-input">

                <span>$</span>

                <input

                    value={command}

                    placeholder="Enter command..."

                    disabled={running}

                    onChange={e =>

                        setCommand(e.target.value)

                    }

                    onKeyDown={e => {

                        if (e.key === "Enter") {

                            runCommand();

                        }

                    }}

                />

                <button

                    disabled={running}

                    onClick={runCommand}

                >

                    Run

                </button>

            </div>

        </div>

    );

}