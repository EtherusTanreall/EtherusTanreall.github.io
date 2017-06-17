/*----------------------------------------------------------------------------------------------------------------------------
        Critical Rate simulator by Etherus (Drops Guild) - Elsword BR: Aresius (IS - main user) / Etherus (RS) / Arwald (LK)
        Speed equation was achieved by using 'QTIPlot' and 'GeoGebra'
        Thanks to Elwiki for providing some efficiecy intervals/normalization values.
----------------------------------------------------------------------------------------------------------------------------*/

function calcularDamageReduction(){
	var DmgRed = DmgRedStart.value;
	var lv = Level.value;
	
	if (lv <90) {var level_multiplier = (lv*1.5) +8;
		         var DmgRed_percentage = (DmgRed)/(level_multiplier)
	             var DmgRed_limit = 70*(level_multiplier);}
	else        {var level_multiplier = 143
	             var DmgRed_percentage = (DmgRed)/(level_multiplier)
	             var DmgRed_limit = 95*(level_multiplier);}
                 
	if      (DmgRed_percentage      <=20) {var real_DmgRed = (DmgRed_percentage);}
	
	else if (DmgRed_percentage      <=45) {var real_DmgRed=((0.5)*((DmgRed_percentage)-20))+20;}
									   
	else if (DmgRed_percentage     <=70) {var real_DmgRed=((0.35)*((DmgRed_percentage)-45))+32.5;}
									   
	else if (DmgRed_percentage     <=95) {var real_DmgRed=((0.15)*((DmgRed_percentage)-70))+41.25;}

	else                              {var real_DmgRed =45;}

	if      (DmgRed<0 || (DmgRed-parseInt(DmgRed))!=0 || lv<1 || (lv-parseInt(lv))!=0 || lv>99){window.alert("Tem algo errado. Reveja os valores inseridos.");}
	else {if (real_DmgRed<45) {window.alert("Sua Redução de dano no jogo é de "+ (real_DmgRed).toFixed(2) + "%");}
         else                    {window.alert("Sua Redução de dano no jogo é de "+ (real_DmgRed).toFixed(2) + "%"+"\nO valor máximo para a Redução de dano é de 45% ou "+(DmgRed_limit) + " " + "nesse nível"
                                  +"\nQualquer coisa acima desse valor é descartado completamente!");}
		 }

}

function limpar() {
	$("#DmgRedStart").val("");
	$("#Level").val("");
}