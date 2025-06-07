import React from "react";

export default function Grid() {
    const tiles = [];
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            tiles.push(<div key={`${x}-${y}`} className="tile" />);
        }
    }

    return <div className="grid">{tiles}</div>;
}
