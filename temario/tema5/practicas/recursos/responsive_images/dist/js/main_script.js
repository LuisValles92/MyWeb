function openNav() {
    if (document.getElementById("idNav").style.display == "") {
        document.getElementById("idNav").style.display = "block";
    } else {
        document.getElementById("idNav").style.display = "";
    }
}

function f(element) {
    var htmlcollection_ul = document.getElementById("idUl").children;
    for (let i = 0; i < htmlcollection_ul.length; i++) {
        if (htmlcollection_ul.item(i).isSameNode(element)) {
            htmlcollection_ul.item(i).className = "liMarcado";
        } else {
            htmlcollection_ul.item(i).removeAttribute("class");
        }
    }
}

function f1(element) {
    f(element);
    document.getElementById("idH1").textContent = "Home";
    document.getElementById("idP").textContent = "The cello or violoncello is a bowed (and occasionally plucked) string instrument of the violin family. Its four strings are usually tuned in perfect fifths: from low to high, C2, G2, D3 and A3. The viola's four strings are each an octave higher. Music for the cello is generally written in the bass clef, with tenor clef and treble clef used for higher-range passages.";

    var nodoPicture = document.getElementById("pic");
    nodoPicture.children[0].setAttribute("srcset", "images\\cello1_large_2x.jpg, images\\cello1_large_1x.jpg");
    nodoPicture.children[1].setAttribute("srcset", "images\\cello1_medium.jpg");
    nodoPicture.children[2].setAttribute("src", "images\\cello1_small.jpg");
    nodoPicture.children[2].setAttribute("alt", "Seated artist playing cello.");

    document.getElementById("idP2").textContent = "Played by a cellist or violoncellist, it enjoys a large solo repertoire with and without accompaniment, as well as numerous concerti. As a solo instrument, the cello uses its whole range, from bass to soprano, and in chamber music such as string quartets and the orchestra's string section, it often plays the bass part, where it may be reinforced an octave lower by the double basses. Figured bass music of the Baroque-era typically assumes a cello, viola da gamba or bassoon as part of the basso continuo group alongside chordal instruments such as organ, harpsichord, lute or theorbo. Cellos are found in many other ensembles, from modern Chinese orchestras to cello rock bands.";
}

function f2(element) {
    f(element);
    document.getElementById("idH1").textContent = "Techniques";

    var nodoPicture = document.getElementById("pic");
    nodoPicture.children[0].setAttribute("srcset", "images\\cello2_large_2x.jpg, images\\cello2_large_1x.jpg");
    nodoPicture.children[1].setAttribute("srcset", "images\\cello2_medium.jpg");
    nodoPicture.children[2].setAttribute("src", "images\\cello2_small.jpg");
    nodoPicture.children[2].setAttribute("alt", "At night, a cello resting on the ground of a street.");

    document.getElementById("idP").textContent = "Playing the cello is done while seated with the instrument supported on the floor by the endpin. The left-hand fingertips stop the strings on the fingerboard, determining the pitch of the fingered note. The right hand bows (or sometimes, plucks) the strings to sound the notes. The left-hand fingertips stop the strings along their length, determining the pitch of each fingered note. Stopping the string closer to the bridge results in a higher-pitched sound, because the vibrating string length has been shortened. In the neck positions (which use just less than half of the fingerboard, nearest the top of the instrument), the thumb rests on the back of the neck; in thumb position (a general name for notes on the remainder of the fingerboard) the thumb usually rests alongside the fingers on the string and the side of the thumb is used to play notes. The fingers are normally held curved with each knuckle bent, with the fingertips in contact with the string. If a finger is required on two (or more) strings at once to play perfect fifths (in double stops or chords) it is used flat. In slower, or more expressive playing, the contact point can move slightly away from the nail to the pad of the finger, allowing a fuller vibrato.";
    document.getElementById("idP2").textContent = "Vibrato is a small oscillation in the pitch of a note, usually considered an expressive technique. Harmonics played on the cello fall into two classes; natural and artificial. Natural harmonics are produced by lightly touching (but not depressing) the string with the finger at certain places, and then bowing (or, rarely, plucking) the string. For example, the halfway point of the string will produce a harmonic that is one octave above the unfingered (open) string.";
}

function f3(element) {
    f(element);
    document.getElementById("idH1").textContent = "Etymology";
    document.getElementById("idP").textContent = 'The name cello is derived from the ending of the Italian violoncello, which means "little violone". Violone ("big viola") was a large-sized member of viol (viola da gamba) family or the violin (viola da braccio) family.';

    var nodoPicture = document.getElementById("pic");
    nodoPicture.children[0].setAttribute("srcset", "images\\cello3_large_2x.jpg, images\\cello3_large_1x.jpg");
    nodoPicture.children[1].setAttribute("srcset", "images\\cello3_medium.jpg");
    nodoPicture.children[2].setAttribute("src", "images\\cello3_small.jpg");
    nodoPicture.children[2].setAttribute("alt", "Shows a mixed score with one hand playing a cello.");

    document.getElementById("idP2").textContent = "Enjoy it and thanks for the visit!";
}

document.getElementById("idUl").children[0].focus();