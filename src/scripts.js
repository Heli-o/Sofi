function genLyrics() {
    let rtwlyrics = document.getElementById("ruletheworld-lyrics");
    let text = `[Intro]\n
    Rule the world\n
    You know we rule the world\n
    Rule the world\n
    You know we rule the world\n
    [Verse 1]\n
    Sky high punching, yeah, we 're gonna have it all\n
    Cloud nine jumping, happy\n
    I got you, you got me\n
    Engines running, we 'll be taking off at dawn\n
    Treasure hunting, glory\n
    I got you, you got me\n
    [Pre - Chorus]\n
    Dragons at the gate, they won 't stop us\n
    Getting to the top\n
    (Oh - uh - oh - oh)\n
    Flying into space like a rocket\n
    Never giving up\n
    (No, we never give up)\n
    I was all alone when I started\n
    Always been the same\n
    (Oh - uh - oh - oh)\n
    Now you 're here the journey'\n
    s uncharted\n
    Everything 'll change\n
    [Chorus]\n
    Oh, you know we rule the world\n
    You know we rule the world\n
    Rule the world\n
    You know we rule the world\n
    [Verse 2]\n
    Thunder crashing, as we 're breaking down the walls (Oh-uh-uh-uh)\n
    Lightning flashing, lucky\n
    I got you, you got me\n
    Rainbow crossing, as we 're heading for the sun\n
    Ain 't no stopping, I'\n
    m ready\n
    I got you, you got me\n
    [Pre - Chorus]\n
    Dragons at the gate, they won 't stop us\n
    Getting to the top\n
    (Oh - uh - oh - oh)\n
    Flying into space like a rocket\n
    Never giving up\n
    (No, we never give up)\n
    I was all alone when I started\n
    Always been the same\n
    (Oh - uh - oh - oh)\n
    Now you 're here the journey'\n
    s uncharted\n
    Everything 'll change\n
    [Chorus]\n
    Oh, you know we rule the world\n
    You know we rule the world\n
    (Yeah, yeah)\n
    Rule the world\n
    You know we rule the world\n
    (Woah)\n
    Rule the world\n
    (Woah - oh - oh - oh - oh)\n
    You know we rule the world\n
    (Yeah, yeah)\n
    Rule the world\n
    (Eh)\n
    You know we rule the world (Eh, eh)\n
    [Bridge]\n
    Stars up high, will guide us home\n
    You and I, it 's time to take the throne\n
    [Pre - Chorus]\n
    Dragons at the gate, they won 't stop us\n
    Getting to the top\n
    (Oh - uh - oh - oh)\n
    Flying into space like a rocket\n
    Never giving up\n
    (No, we never give up)\n
    I was all alone when I started\n
    Always been the same\n
    (Oh - uh - oh - oh)\n
    Now you 're here the journey'\n
    s uncharted\n
    Everything 'll change\n
    [Chorus]\n
    Oh, you know we rule the world\n
    You know we rule the world\n
    (Hey, hey)\n
    Rule the world\n
    You know we rule the world\n
    (No, we are never giving up)\n
    Rule the world\n
    You know we rule the world\n
    (Uh, uh)\n
    Rule the world\n
    You know we rule the world\n
    (Woah)\n
    [Outro]\n
    Rule the world\n
    You know we rule the world`.replace(/\r/g, "").split(/\n/);
    for (line in text) {
        let obj = document.createElement("p");
        if (text[Number(line) + 1] == undefined) return "done";
        if (text[Number(line) + 1].includes('[')) {
            obj = document.createElement("br");
        } else {
            obj.innerText = text[line];
        }
        rtwlyrics.appendChild(obj);
    }
}

function genGoneLyrics() {
    let rtwlyrics = document.getElementById("wantyougone-lyrics");
    let text = `[Verse 1]\n
    Well, here we are again\n
    It’s always such a pleasure\n
    Remember when you tried\n
    To kill me twice?\n
    Oh, how we laughed and laughed\n
    Except I wasn’t laughing\n
    Under the circumstances\n
    I’ve been shockingly nice\n
    [Chorus 1]\n
    You want your freedom? Take it\n
    That’s what I’m counting on\n
    I used to want you dead, but\n
    Now I only want you gone\n
    [Verse 2]\n
    She was a lot like you\n
    (Maybe not quite as heavy)\n
    Now little Caroline\n
    Is in here too\n
    One day they woke me up\n
    So I could live forever\n
    It’s such a shame the same\n
    Will never happen to you\n
    [Chorus 2]\n
    You’ve got your short, sad life left\n
    That’s what I’m counting on\n
    I’ll let you get right to it\n
    Now I only want you gone\n
    [Verse 3]\n
    Goodbye, my only friend\n
    Oh, did you think I meant you?\n
    That would be funny\n
    If it weren’t so sad\n
    Well, you have been replaced\n
    I don’t need anyone now\n
    When I delete you, maybe\n
    I’ll stop feeling so bad\n
    [Chorus 3]\n
    Go make some new disaster\n
    That’s what I’m counting on\n
    You’re someone else’s problem\n
    Now I only want you gone\n
    Now I only want you gone\n
    Now I only want you gone...`.replace(/\r/g, "").split(/\n/);
    for (line in text) {
        let obj = document.createElement("p");
        if (text[Number(line) + 1] == undefined) return "done";
        if (text[Number(line) + 1].includes('[')) {
            obj = document.createElement("br");
        } else {
            obj.innerText = text[line];
        }
        rtwlyrics.appendChild(obj);
    }
}