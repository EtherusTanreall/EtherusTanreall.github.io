/*----------------------------------------------------------------------------------------------------------------------------
        Speed simulator by Etherus (Drops Guild) - Elsword BR: Aresius (IS - main user) / Etherus (RS) / Arwald (LK)
        Speed equation was achieved by using 'QTIPlot' and 'GeoGebra'
        Thanks to Elwiki for providing some efficiecy intervals/normalization values.
----------------------------------------------------------------------------------------------------------------------------*/

function calcularVelocidade(){
	var Speed = SpeedStart.value;
	var lv = Level.value;
	
	if (lv <90) {var level_multiplier = (lv*1.5) +8;
		         var speed_percentage = (Speed)/(level_multiplier)
	             var speed_limit = 70*(level_multiplier);}
	else        {var level_multiplier = 143
	             var speed_percentage = (Speed)/(level_multiplier)
	             var speed_limit = 70*(level_multiplier);}
                 
	if      (speed_percentage      <=20) {var real_speed = (speed_percentage);}
	
	else if (speed_percentage      <=35) {var real_speed=((0.3)*((speed_percentage)-20))+20;}
									   
	else if (speed_percentage     <=55) {var real_speed=((0.2)*((speed_percentage)-35))+24.5;}
									   
	else if (speed_percentage     <=70) {var real_speed=((0.1)*((speed_percentage)-55))+28.5;}

	else                              {var real_speed =30;}

	if      (Speed<0 || (Speed-parseInt(Speed))!=0 || lv<1 || (lv-parseInt(lv))!=0 || lv>99){window.alert("Tem algo errado. Reveja os valores inseridos.");}
	else {if (real_speed<30) {window.alert("Sua velocidade no jogo é de "+ (real_speed).toFixed(2) + "%");}
         else                    {window.alert("Sua velocidade no jogo é de "+ (real_speed).toFixed(2) + "%"+"\nO valor máximo para a velocidade é de 30% ou "+(speed_limit) + " " + "nesse nível"
                                  +"\nQualquer coisa acima desse valor é descartado completamente!");}
		 }

}

function limpar() {
	$("#SpeedStart").val("");
	$("#Level").val("");
}
