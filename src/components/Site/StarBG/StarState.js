function StarState() {
    // Sweet spot is 1000
    // If you go past 1000 the animations won't start RIP
    return [...Array(1000)].map((_, i) => ({
        id: i.toString(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        color: Math.floor(Math.random()*16777215).toString(16),
        opacity: 1
    }));
}

export default StarState;