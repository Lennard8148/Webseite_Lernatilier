let slideIndex = 1;
showSlides(slideIndex);

// Funktion zum Weiterschalten (vor/zurück)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Funktion, um den aktuellen Slide anhand des Indikators zu setzen
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Hauptfunktion zum Anzeigen der Slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Wenn der Index größer als die Anzahl der Slides ist, zurück zum ersten Slide
    if (n > slides.length) { 
        slideIndex = 1 
    }

    // Wenn der Index kleiner als 1 ist, zum letzten Slide springen
    if (n < 1) { 
        slideIndex = slides.length 
    }

    // Alle Slides ausblenden
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Entfernt die "active"-Klasse von allen Indikatoren
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Zeigt den aktuellen Slide an und markiert den entsprechenden Indikator
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
