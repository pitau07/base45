const base45 = require('base45');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("---------------------------------------------");
console.log("Encoder/Decoder base 45");
console.log("---------------------------------------------");

questionChoice();



function questionChoice(){
	rl.question("\nVoici les options possibles\n1 => Encoder en base 45 \n2 => Decoder base 45 \n3 => Quitter \n\nTapez votre choix: ", function(choice) {
		if(choice === '1'){
			rl.question("\nEntrez votre chaîne à encoder:\n", function(text) {
				const encoded = base45.encode(text);
				console.log("=====>\n" + encoded);
				
				questionChoice();
			});
		}
		else if (choice === '2'){
			rl.question("\nEntrez votre chaîne à decoder:\n", function(encoded) {
				const text = base45.decode(encoded).toString('utf-8');
				console.log("=====>\n" + text);
				
				questionChoice();
			});
		}
		else if (choice === '3'){
			rl.close();
		}
		else {
			console.log("\nVotre choix est incorrect.");
			
			questionChoice();
		}
	});
}