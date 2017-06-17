function calcularCritico(){
	var Critical = CriticalStart.value;
	var lv = Level.value;
	
	if (lv <90) {var level_multiplier = (lv*1.5) +8;
		         var critical_rate = (Critical)/(level_multiplier)
	             var maximum_critical = 140*(level_multiplier);}
	else        {var level_multiplier = 143
	             var critical_rate = (Critical)/(level_multiplier)
	             var maximum_critical = 140*(level_multiplier);}
                 
	if      (critical_rate      <=40) {var real_critical = (critical_rate);}
	
	else if (critical_rate      <=75) {var real_critical=((0.8)*((critical_rate)-40))+40;}
									   
	else if (critical_rate     <=105) {var real_critical=((0.6)*((critical_rate)-68))+63.8;}
									   
	else if (critical_rate     <=140) {var real_critical=((0.4)*((critical_rate)-86))+78.4;}

	else                              {var real_critical =100;}

	if      (Critical<0 || (Critical-parseInt(Critical))!=0 || lv<1 || (lv-parseInt(lv))!=0 || lv>99){window.alert("Tem algo errado. Reveja os valores inseridos.");}
	else {if (real_critical<100) {window.alert("Sua chance de crítico no jogo é de "+ (real_critical).toFixed(2) + "%");}
         else                    {window.alert("Sua chance de crítico no jogo é de "+ (real_critical).toFixed(2) + "%"+"\nO valor máximo para a chance de critico é de 100% ou "+(maximum_critical) + " " + "nesse nível"
                                  +"\nQualquer coisa acima desse valor é descartado completamente!");}
		 }

}

function limpar() {
	$("#CriticalStart").val("");
	$("#Level").val("");
}