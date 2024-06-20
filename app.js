let music = {
    'Atif Aslam': {
        'Rafta Rafta': {
            artistName: 'Atif Aslam',
            artistImage: 'imagesartist/download (1).jfif',
            songName: 'Rafta Rafta',
            songAudio: 'imagesartist/128-Rafta Rafta - Atif Aslam 128 Kbps.mp3',
        },
        'Rangreza': {
            artistName: 'Atif Aslam',
            artistImage: 'imagesartist/atif2.jfif',
            songName: 'Rangreza',
            songAudio: 'imagesartist/Rangreza-(Mr-Jat.in).mp3',
        },
        'Kaise Btaye Q tjhko Chahe': {
            artistName: 'Atif Aslam',
            artistImage: 'imagesartist/rafta.jfif',
            songName: 'Kaise Btaye Q tjhko Chahe',
            songAudio: 'imagesartist/Kaise Bataye Kyun Tujhko Chahe-(Mr-Jat.in).mp3',
        },
        'Tere Sang Yaara': {
            artistName: 'Atif Aslam',
            artistImage: 'imagesartist/atif.jfif',
            songName: 'Tere Sang Yaara',
            songAudio: 'imagesartist/TereSangYaara-AtifAslamSongSlowedAndReverbLofiMix_110.m4a',
        },
    },
    'Arjit Singh': {
        'Jo tu mera hamdard hai': {
            artistName: 'Arjit Singh',
            artistImage: 'imagesartist/download.jfif',
            songName: 'Jo tu mera hamdard hai',
            songAudio: 'imagesartist/Jo Tu Mera Humdard Hai-(Mr-Jat.in).mp3',
        },
        'Lo Maan liya humne': {
            artistName: 'Arjit Singh',
            artistImage: 'imagesartist/lo maan.jfif',
            songName: 'Lo Maan liya humne',
            songAudio: 'imagesartist/Lo-Maan-Liya-Humne-Hai-Pyar-Nahi-Tumko(PagalWorldl).mp3',
        },
        'Muskrunae ki wajah tum ho': {
            artistName: 'Arjit Singh',
            artistImage: 'imagesartist/lo maan.jfif',
            songName: 'Muskrunae ki wajah tum ho',
            songAudio: 'imagesartist/Muskurane-Ki-Wajah-Tum-Ho(PagalWorldl).mp3',
        },
    },
    'Arman Malik': {
        'Bol do na zara': {
            artistName: 'Arman Malik',
            artistImage: 'imagesartist/armaan.jfif',
            songName: 'Bol do na zara',
            songAudio: 'imagesartist/Chal Diya Dil Tere Piche Piche-(Mr-Jat.in).mp3',
        },
    },
    'Young Stunners': {
        'Azmaa Le': {
            artistName: 'Young Stunners',
            artistImage: 'imagesartist/azma.jpg',
            songName: 'Azmaa Le',
            songAudio: 'imagesartist/Aazma-Le(PagalWorldl).mp3',
        },
        'Afsany': {
            artistName: 'Young Stunners',
            artistImage: 'imagesartist/afsany.jfif',
            songName: 'Afsany',
            songAudio: 'imagesartist/AFSANAY - Young Stunners   Talhah Yunus   Talha Anjum   Prod. By Jokhay (Official Music Video).m4a',
        }
    },

};

let audioPage = document.getElementById('songArea');

let main = document.getElementById('main');
let mainPage = document.getElementById('main2');

let navbar = document.querySelector('nav');

let selectArea1 = document.getElementById('select-1');
let selectArea2 = document.getElementById('select-2');

let singer;
let song;
let artist;

if (window.innerWidth > 992) {
    singer = document.getElementById('opt');
    song = document.getElementById('opt2');
    artist = document.getElementById('opt');
}
else {
    singer = document.getElementById('opt3');
    song = document.getElementById('opt4');
    artist = document.getElementById('opt3');
}





// Area


setTimeout(() => {
    document.getElementById('loaderPage').style.display = 'none';
    mainPage.style.display = 'flex';
    mainPage.style.flexDirection = 'column';
    navbar.style.display = 'flex';
    main.style.display = 'flex';
}, 4000);

singer.innerHTML = `<option value='Select Artist'>Select Artist</option>`;

for (let key in music) {
    singer.innerHTML += `<option value='${key}'>${key}</option>`;
    for (let key1 in music[key]) {
        main.innerHTML += `
        <div class="custom-card mb-3" >
            <div class="img-group">
                <img src='${music[key][key1].artistImage}' class="card-img-top" alt="..." height="200">
                <div class='text'>
               <h4 class="card-title">${music[key][key1].songName}</h4>

                 <h5 class="card-text">${key}</h5>

                </div>
            </div>
            <div class="">
                <button class="custom-btn" onclick='show("${key}","${key1}")'>Play</button>
            </div>
        </div>

        `;
    }
}
// onclick='play("${key}", "${key1}", this)'



song.innerHTML = "<option>Select Song</option>";
function artistVal() {
    console.log(song);
    song.innerHTML = "";
    song.innerHTML = "<option value='Select Song'>Select Song</option>";
    console.log(artist.value);
    for (let key1 in music[artist.value]) {
        console.log(key1);
        song.innerHTML += `<option value='${key1}'>${key1}</option>`
    }
    if (artist.value !== 'Select Artist') {
        song.innerHTML += `<option value='Select All'>All Songs</option>`
    } else {
        song.innerHTML = "<option>Select Song</option>";
    }
}
function search() {

    setTimeout(() => {
        document.getElementById('dlt').style.display = 'flex';
        mainPage.style.display = 'none';
        document.getElementById('loaderPage2').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('loaderPage2').style.display = 'none';
            document.getElementById('details').innerHTML = '';
            if (song.value == 'Select Song') {
                document.getElementById('details').innerHTML = `
               <img src='imagesartist/searchnotfound.png' height='50' width='50'/> Search Result Not Found
        `
            } else {
                if (song.value !== 'Select All') {
                    document.getElementById('details').innerHTML = `
                <div class="container">
                    <div class="custom-card mb-3">
                        <div class="img-group">
                            <img src='${music[artist.value][song.value].artistImage}' class="card-img-top" alt="..." height="200">
                            <div class='text'>
                             <h4 class="card-text">${music[artist.value][song.value].artistName}</h4>
            
                                <h5 class="card-title">${music[artist.value][song.value].songName}</h5>
                                <p>This song is written by ${music[artist.value][song.value].artistName}</p>
                            </div>
                        </div>
                        <div class="">
                            <button class="custom-btn" onclick='show("${music[artist.value][song.value].artistName}","${music[artist.value][song.value].songName}")'>Play</button>
                        </div>
                    </div>
                    </div>
                    `
                } else {
                    for (let key in music[artist.value]) {
                        document.getElementById('details').innerHTML += `
                                    <div class="container">    
                        <div class="custom-card mb-3">
                        <div class="img-group">
                            <img src='${music[artist.value][key].artistImage}' class="card-img-top" alt="..." height="200">
                            <div class='text'>
                                                    <h4 class="card-title">${music[artist.value][key].songName}</h4>
        
                             <h5 class="card-text">${music[artist.value][key].artistName}</h5>
                                    <p>This song is written by ${music[artist.value][key].artistName}</p>
                            </div>
                        </div>
                        <div class="">
                            <button class="custom-btn" onclick='show("${music[artist.value][key].artistName}","${music[artist.value][key].songName}")'>Play</button>
                        </div>
                    </div>
                    </div>
                    `
                        // console.log(music[artist.value][key]);
                    }
                }
            }
        }, 1200);
    }, 100);
}
function show(singer, song) {

    audioPage.style.display = 'flex';
    mainPage.style.display = 'none';
    main.style.display = 'none';

    navbar.style.display = 'none';
    console.log(music[singer][song]);
    audioPage.innerHTML = `
    <div class='audio-block'>
    <div class='back-button'>
      <a href='#' class='mt-3 ms-3' onclick='back()'>
<svg height='30' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#f5f5f5" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>      </a>
    </div>
        <div class='page'>
        <div class="area-block">
        <div class='anim'>
            <div class='circle' id='circle'>
                <img src='${music[singer][song].artistImage}' id='image-ani' class="card-img-top" alt="..." height="200">
            </div>
        </div>
            <div class='img'>
                <div class='audio-text'>
                    <h2 class='mb-1 mt-3'>${singer.toUpperCase()}</h2>
                    <h5>${music[singer][song].songName}</h5>
                </div>
            </div>
            <div class="audio">
                <audio src="${music[singer][song].songAudio}" controls id='aud' onpause='pauseAudio("${singer}","${song}")'
                    onplay='audio("${singer}","${song}")'></audio>
            </div>
        </div>
    </div>
    </div>
    `
    document.getElementById('aud').play();
    document.getElementById('circle').style.backgroundImage = "url('imagesartist/image 2.png')";

}
function pauseAudio(artist, song) {
    document.getElementById('circle').style.backgroundImage = "none"
    document.getElementById('image-ani').setAttribute('class', '');
    event.target.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].innerHTML = `<h5>${music[artist][song].songName}</h5>`
}
function audio(artist, song) {

    document.getElementById('circle').style.backgroundImage = "url('imagesartist/image 2.png')";
    document.getElementById('image-ani').setAttribute('class', 'animate')
    event.target.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].innerHTML = `<marquee direction='rtl'><h5>${music[artist][song].songName}</h5></marquee>`;

}
function back() {
    document.getElementById('circle').style.backgroundImage = "none"
    document.getElementById('dlt').style.display = 'none';
    document.getElementById('details').innerHTML = '';
    audioPage.style.display = 'none';
    main.style.display = 'flex';
    
    mainPage.style.display = 'flex';
    navbar.style.display = 'flex';
    document.getElementById('aud').src = '';
}
function back1() {
    document.getElementById('dlt').style.display = 'none';
    document.getElementById('details').innerHTML = '';
    audioPage.style.display = 'none';
    main.style.display = 'flex';
    mainPage.style.display = 'flex';

    navbar.style.display = 'flex';
}


function expand(check, btn) {
    let firstBtn= document.getElementById('changeContent');
    console.log(firstBtn);

    if (check === 'expand') {
        btn.style.display = "none";
    } else {
        firstBtn.style.display = "block";
    }
}