const input = document.getElementById("input");
const burung = document.getElementById("burung");
const harimau = document.getElementById("harimau");
const kucing = document.getElementById("kucing");
const manusia = document.getElementById("manusia");

const generateHewan = () => {
    if (input.value.toLowerCase() =="burung"){
        burung.style.display = 'block';
        harimau.style.display = 'none';
        kucing.style.display = 'none';
        manusia.style.display = 'none';
     }
     else if (input.value.toLowerCase() =="harimau"){
        burung.style.display = 'none';
        harimau.style.display = 'block';
        kucing.style.display = 'none';
        manusia.style.display = 'none';
     }
     else if (input.value.toLowerCase() =="kucing"){
        burung.style.display = 'none';
        harimau.style.display = 'none';
        kucing.style.display = 'block';
        manusia.style.display = 'none';
     }
     else {
        burung.style.display = 'none';
        harimau.style.display = 'none';
        kucing.style.display = 'none';
        manusia.style.display = 'block';
     } 
}
