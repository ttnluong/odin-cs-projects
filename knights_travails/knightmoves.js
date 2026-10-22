function knightMoves(start, end) {
    const offsets = [
        [-1, +2], [+1, +2],
        [-2, +1], [+2, +1],
        [-2, -1], [+2, -1],
        [-1, -2], [+1, -2]
    ]

    let queue = [[start]];
    const visited = new Set([start.toString()])

    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length-1];
        if (current[0] === end[0] && current[1] === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach((square) => console.log(square));
            return path;
        }
        for (const offset of offsets) {
            const move = [current[0] + offset[0], current[1] + offset[1]];
            if (move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <=7) {
                if (!visited.has(move.toString())) {
                    visited.add(move.toString());
                    queue.push([...path, move]);
                }
        }
    }
    }
}

console.log(knightMoves([3, 3], [4, 3]));
