/* Popis applikace */
function Applikace(variable) {
	this.variable = variable;
	this.funkce = function() {
		return variable;
	};
}
var novaApplikace = new Applikace("hodnota");
alert(novaApplikace.funkce());