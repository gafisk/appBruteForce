function bilangan_prima() {
    document.getElementById("prima").style.display = "block";
    document.getElementById("menu").style.display = "none";

}

function proses_prima() {
    prima = document.getElementById("inp_prima").value;
    if (prima < 2) {
        document.getElementById("hasil").value = prima + " bukan bilangan Prima";
    } else if (prima == 2) {
        document.getElementById("hasil").value = prima + " adalah bilangan Prima";
    } else {
        pembagi = 0;
        for (i = 1; i <= prima; i++) {
            if (prima % i == 0) {
                pembagi++
            }
        }
        if (pembagi == 2) {
            document.getElementById("hasil").value = prima + " adalah bilangan Prima";
        } else {
            document.getElementById("hasil").value = prima + " bukan bilangan Prima";
        }
    }
}

function faktorial() {
    document.getElementById("faktorial").style.display = "block";
    document.getElementById("menu").style.display = "none";

}

function proses_faktorial() {
    nilai = document.getElementById("inp_fak").value;
    angka = 1;
    faktor = 1;
    while (angka <= nilai) {
        faktor = faktor * angka;
        angka = angka + 1;
    }

    document.getElementById("f_hasil").value = faktor;

}

function pangkat() {
    document.getElementById("pangkat").style.display = "block";
    document.getElementById("menu").style.display = "none";

}

function proses_pangkat() {
    angka = document.getElementById("inp_ap").value;
    pangkatt = document.getElementById("inp_pangkat").value;

    hasil = 1;
    for (i = 0; i < pangkatt; i++) {
        hasil = hasil * angka;
    }

    document.getElementById("pp_hasil").value = angka + " Pangkat " + pangkatt + " = " + hasil;

}

function kembali() {
    document.getElementById("faktorial").style.display = "none";
    document.getElementById("pangkat").style.display = "none";
    document.getElementById("prima").style.display = "none";
    document.getElementById("menu").style.display = "block";

    prima = document.getElementById("inp_prima").value = "";
    nilai = document.getElementById("inp_fak").value = "";
    angka = document.getElementById("inp_ap").value = "";
    pangkatt = document.getElementById("inp_pangkat").value = "";

    document.getElementById("pp_hasil").value = " ";
    document.getElementById("f_hasil").value = " ";
    document.getElementById("hasil").value = " ";
}