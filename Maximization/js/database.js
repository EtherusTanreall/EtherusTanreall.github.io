/*----------------------------------------------------------------------------------------------------------------------------
        Maximization simulator by Etherus (Drops Guild) - Elsword BR: Aresius (IS - main user) / Etherus (RS) / Arwald (LK)
        Maximizaiton equation was achieved by using 'QTIPlot' and 'GeoGebra'
        Thanks to Elwiki for providing some efficiecy intervals/normalization values.
----------------------------------------------------------------------------------------------------------------------------*/

function calcularMaximizacao(){
	var Maximization = MaxStart.value;
	var lv = Level.value;
	
	if (lv <90) {var level_multiplier = (lv*1.5) +8;
		         var maximization_percentage = (Maximization)/(level_multiplier)
	             var maximization_limit = 160*(level_multiplier);}
	else        {var level_multiplier = 143
	             var maximization_percentage = (Maximization)/(level_multiplier)
	             var maximization_limit = 160*(level_multiplier);}
                 
	if      (maximization_percentage      <=40) {var real_maximization = (maximization_percentage);}
	
	else if (maximization_percentage      <=80) {var real_maximization=((0.75)*((maximization_percentage)-40))+40;}
									   
	else if (maximization_percentage     <=120) {var real_maximization=((0.5)*((maximization_percentage)-75))+65;}
									   
	else if (maximization_percentage     <=160) {var real_maximization=((0.25)*((maximization_percentage)-90))+82.5;}

	else                              {var real_maximization =100;}
	
    maximization_probability=(-0.18+(11135.7*(Math.sqrt(2/Math.PI)/117.12)*Math.pow(Math.E, -(2*Math.pow((real_maximization-153.34)/117.12 ,2)))));
	
	if      (Maximization<0 || (Maximization-parseInt(Maximization))!=0 || lv<1 || (lv-parseInt(lv))!=0 || lv>99){window.alert("Tem algo errado. Reveja os valores inseridos.");}
	else {if (real_maximization<100) {window.alert("Sua maximização no jogo é de "+ (real_maximization).toFixed(2) + "%."
	                                            +"\nProbabilidade de dar o ataque máximo: "+ (maximization_probability).toFixed(2) + "% (valor aproximado).");}
         else                        {window.alert("Sua maximização no jogo é de "+ (real_maximization).toFixed(2) + "%."
		                                        +"\nProbabilidade de dar o ataque máximo: "+ (maximization_probability).toFixed(2) + "% (valor aproximado)."
												+"\nO valor máximo para a maximização é de 100% ou " +(maximization_limit) +" nesse nível."
												+"\nQualquer coisa acima desse valor será descaratdo completamente!");}
		 }

}

function limpar() {
	$("#MaxStart").val("");
	$("#Level").val("");
}
