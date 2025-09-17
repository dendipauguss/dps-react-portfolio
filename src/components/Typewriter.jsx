import { useState, useEffect } from "react";

const Typewriter = ({ texts, fontSize = "text-3xl/normal", mode = "typewriter" }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (mode !== "typewriter") return; // jika bukan mode typewriter, hentikan animasi

        if (pause) return;

        const timeout = setTimeout(() => {
            if (!deleting && subIndex < texts[index].length) {
                setSubIndex(prev => prev + 1);
            } else if (!deleting && subIndex === texts[index].length) {
                setPause(true);
                setTimeout(() => {
                    setPause(false);
                    setDeleting(true);
                }, 2000); // jeda 2 detik sebelum menghapus
            } else if (deleting && subIndex > 0) {
                setSubIndex(prev => prev - 1);
            } else if (deleting && subIndex === 0) {
                setDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        }, deleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, deleting, index, texts, pause, mode]);

    return (
        <div className="flex justify-start mb-6">
            {mode === "typewriter" ? (
                <h1 className={`${fontSize} font-mono text-white border-r-2 border-orange-400 pr-2 min-h-[1em] opacity-65`}>
                    {subIndex === 0
                        ? <span className="invisible">_</span>
                        : texts[index].substring(0, subIndex)
                    }
                </h1>
            ) : (
                <h1 className={`${fontSize} font-mono text-white opacity-65`}>
                    {texts.join(" | ")}
                </h1>
            )}
        </div>
    );
};

export default Typewriter;
