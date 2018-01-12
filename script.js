// creating a template
class Media {

	constructor(Title, Author, Genre, Publisher, Image, Rating) {
		this.Title = Title;
		this.Author = Author;
		this.Genre = Genre;
		this.Publisher =Publisher;
		this.Image = Image;
		this.Rating = Rating;
		
	}

	text(elId) {
		var place = document.getElementById(elId);
		place.innerHTML += "<img src='" + this.Image + "' class='pic'>";
		place.innerHTML += "<div class='text'>" + this.Title + "</br> from: " + this.Author + 
		"</br>Genre: " + this.Genre + "</br>Publisher: " + this.Publisher + "</br>" + this.Rating + " </div>";
	}
}

Genre = ["Rock", "Pop", "Crimi", "Horror", "Comedy", "Drama", "Documentary", "Children", "Belletristik"];

// Inserting the Data in the Col________________________________________
var Book1 = new Media("Woodwalkers", "Katja Brandis", Genre[8],
	"Bild","img/Woodwalkers.jpg",);
Book1.text("one");

var Book2 = new Media("Woodwalkers", "Katja Brandis", Genre[8],
	"Bild","img/Woodwalkers.jpg",);
Book1.text("two");

var Book3 = new Media("Woodwalkers", "Katja Brandis", Genre[8],
	"Bild","img/Woodwalkers.jpg",);
Book1.text("three");

var Book4= new Media("Woodwalkers", "Katja Brandis", Genre[8],
	"Bild","img/Woodwalkers.jpg",);
Book1.text("four");

var Book5 = new Media("Woodwalkers", "Katja Brandis", Genre[8],
	"Bild","img/Woodwalkers.jpg",);
Book1.text("five");

var Book6 = new Media("Woodwalkers", "Katja Brandis", Genre[8],
	"Bild","img/Woodwalkers.jpg",);
Book1.text("six");