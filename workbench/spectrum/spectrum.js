var Spectrum = function(){
    this.colours = [[[79,15,15],[122,53,53],[165,102,102],[214,164,164]],[[79,16,15],[122,54,53],[165,103,102],[214,165,164]],[[79,17,15],[122,56,53],[165,104,102],[214,166,164]],[[79,18,15],[122,57,53],[165,105,102],[214,167,164]],[[79,19,15],[122,58,53],[165,106,102],[214,168,164]],[[79,20,15],[122,59,53],[165,108,102],[214,169,164]],[[79,21,15],[122,60,53],[165,109,102],[214,169,164]],[[79,22,15],[122,61,53],[165,110,102],[214,170,164]],[[79,23,15],[122,62,53],[165,111,102],[214,171,164]],[[79,24,15],[122,64,53],[165,112,102],[214,172,164]],[[79,25,15],[122,65,53],[165,113,102],[214,173,164]],[[79,26,15],[122,66,53],[165,114,102],[214,173,164]],[[79,27,15],[122,67,53],[165,115,102],[214,174,164]],[[79,28,15],[122,68,53],[165,116,102],[214,175,164]],[[79,29,15],[122,69,53],[165,117,102],[214,176,164]],[[79,31,15],[122,70,53],[165,118,102],[214,177,164]],[[79,32,15],[122,72,53],[165,119,102],[214,178,164]],[[79,33,15],[122,73,53],[165,120,102],[214,178,164]],[[79,34,15],[122,74,53],[165,121,102],[214,179,164]],[[79,35,15],[122,75,53],[165,122,102],[214,180,164]],[[79,36,15],[122,76,53],[165,123,102],[214,181,164]],[[79,37,15],[122,77,53],[165,124,102],[214,182,164]],[[79,38,15],[122,78,53],[165,125,102],[214,182,164]],[[79,39,15],[122,80,53],[165,126,102],[214,183,164]],[[79,40,15],[122,81,53],[165,127,102],[214,184,164]],[[79,41,15],[122,82,53],[165,129,102],[214,185,164]],[[79,42,15],[122,83,53],[165,130,102],[214,186,164]],[[79,43,15],[122,84,53],[165,131,102],[214,187,164]],[[79,44,15],[122,85,53],[165,132,102],[214,187,164]],[[79,45,15],[122,86,53],[165,133,102],[214,188,164]],[[79,47,15],[122,88,53],[165,134,102],[214,189,164]],[[79,48,15],[122,89,53],[165,135,102],[214,190,164]],[[79,49,15],[122,90,53],[165,136,102],[214,191,164]],[[79,50,15],[122,91,53],[165,137,102],[214,192,164]],[[79,51,15],[122,92,53],[165,138,102],[214,192,164]],[[79,52,15],[122,93,53],[165,139,102],[214,193,164]],[[79,53,15],[122,94,53],[165,140,102],[214,194,164]],[[79,54,15],[122,96,53],[165,141,102],[214,195,164]],[[79,55,15],[122,97,53],[165,142,102],[214,196,164]],[[79,56,15],[122,98,53],[165,143,102],[214,196,164]],[[79,57,15],[122,99,53],[165,144,102],[214,197,164]],[[79,58,15],[122,100,53],[165,145,102],[214,198,164]],[[79,59,15],[122,101,53],[165,146,102],[214,199,164]],[[79,60,15],[122,102,53],[165,147,102],[214,200,164]],[[79,61,15],[122,104,53],[165,148,102],[214,201,164]],[[79,63,15],[122,105,53],[165,150,102],[214,201,164]],[[79,64,15],[122,106,53],[165,151,102],[214,202,164]],[[79,65,15],[122,107,53],[165,152,102],[214,203,164]],[[79,66,15],[122,108,53],[165,153,102],[214,204,164]],[[79,67,15],[122,109,53],[165,154,102],[214,205,164]],[[79,68,15],[122,110,53],[165,155,102],[214,205,164]],[[79,69,15],[122,112,53],[165,156,102],[214,206,164]],[[79,70,15],[122,113,53],[165,157,102],[214,207,164]],[[79,71,15],[122,114,53],[165,158,102],[214,208,164]],[[79,72,15],[122,115,53],[165,159,102],[214,209,164]],[[79,73,15],[122,116,53],[165,160,102],[214,210,164]],[[79,74,15],[122,117,53],[165,161,102],[214,210,164]],[[79,75,15],[122,118,53],[165,162,102],[214,211,164]],[[79,76,15],[122,120,53],[165,163,102],[214,212,164]],[[79,77,15],[122,121,53],[165,164,102],[214,213,164]],[[79,79,15],[122,122,53],[165,165,102],[214,214,164]],[[77,79,15],[121,122,53],[164,165,102],[213,214,164]],[[76,79,15],[120,122,53],[163,165,102],[212,214,164]],[[75,79,15],[118,122,53],[162,165,102],[211,214,164]],[[74,79,15],[117,122,53],[161,165,102],[210,214,164]],[[73,79,15],[116,122,53],[160,165,102],[210,214,164]],[[72,79,15],[115,122,53],[159,165,102],[209,214,164]],[[71,79,15],[114,122,53],[158,165,102],[208,214,164]],[[70,79,15],[113,122,53],[157,165,102],[207,214,164]],[[69,79,15],[112,122,53],[156,165,102],[206,214,164]],[[68,79,15],[110,122,53],[155,165,102],[205,214,164]],[[67,79,15],[109,122,53],[154,165,102],[205,214,164]],[[66,79,15],[108,122,53],[153,165,102],[204,214,164]],[[65,79,15],[107,122,53],[152,165,102],[203,214,164]],[[64,79,15],[106,122,53],[151,165,102],[202,214,164]],[[63,79,15],[105,122,53],[150,165,102],[201,214,164]],[[61,79,15],[104,122,53],[148,165,102],[201,214,164]],[[60,79,15],[102,122,53],[147,165,102],[200,214,164]],[[59,79,15],[101,122,53],[146,165,102],[199,214,164]],[[58,79,15],[100,122,53],[145,165,102],[198,214,164]],[[57,79,15],[99,122,53],[144,165,102],[197,214,164]],[[56,79,15],[98,122,53],[143,165,102],[196,214,164]],[[55,79,15],[97,122,53],[142,165,102],[196,214,164]],[[54,79,15],[96,122,53],[141,165,102],[195,214,164]],[[53,79,15],[94,122,53],[140,165,102],[194,214,164]],[[52,79,15],[93,122,53],[139,165,102],[193,214,164]],[[51,79,15],[92,122,53],[138,165,102],[192,214,164]],[[50,79,15],[91,122,53],[137,165,102],[192,214,164]],[[49,79,15],[90,122,53],[136,165,102],[191,214,164]],[[48,79,15],[89,122,53],[135,165,102],[190,214,164]],[[47,79,15],[88,122,53],[134,165,102],[189,214,164]],[[45,79,15],[86,122,53],[133,165,102],[188,214,164]],[[44,79,15],[85,122,53],[132,165,102],[187,214,164]],[[43,79,15],[84,122,53],[131,165,102],[187,214,164]],[[42,79,15],[83,122,53],[130,165,102],[186,214,164]],[[41,79,15],[82,122,53],[129,165,102],[185,214,164]],[[40,79,15],[81,122,53],[127,165,102],[184,214,164]],[[39,79,15],[80,122,53],[126,165,102],[183,214,164]],[[38,79,15],[78,122,53],[125,165,102],[182,214,164]],[[37,79,15],[77,122,53],[124,165,102],[182,214,164]],[[36,79,15],[76,122,53],[123,165,102],[181,214,164]],[[35,79,15],[75,122,53],[122,165,102],[180,214,164]],[[34,79,15],[74,122,53],[121,165,102],[179,214,164]],[[33,79,15],[73,122,53],[120,165,102],[178,214,164]],[[32,79,15],[72,122,53],[119,165,102],[178,214,164]],[[31,79,15],[70,122,53],[118,165,102],[177,214,164]],[[29,79,15],[69,122,53],[117,165,102],[176,214,164]],[[28,79,15],[68,122,53],[116,165,102],[175,214,164]],[[27,79,15],[67,122,53],[115,165,102],[174,214,164]],[[26,79,15],[66,122,53],[114,165,102],[173,214,164]],[[25,79,15],[65,122,53],[113,165,102],[173,214,164]],[[24,79,15],[64,122,53],[112,165,102],[172,214,164]],[[23,79,15],[62,122,53],[111,165,102],[171,214,164]],[[22,79,15],[61,122,53],[110,165,102],[170,214,164]],[[21,79,15],[60,122,53],[109,165,102],[169,214,164]],[[20,79,15],[59,122,53],[108,165,102],[169,214,164]],[[19,79,15],[58,122,53],[106,165,102],[168,214,164]],[[18,79,15],[57,122,53],[105,165,102],[167,214,164]],[[17,79,15],[56,122,53],[104,165,102],[166,214,164]],[[16,79,15],[54,122,53],[103,165,102],[165,214,164]],[[15,79,15],[53,122,53],[102,165,102],[164,214,164]],[[15,79,16],[53,122,54],[102,165,103],[164,214,165]],[[15,79,17],[53,122,56],[102,165,104],[164,214,166]],[[15,79,18],[53,122,57],[102,165,105],[164,214,167]],[[15,79,19],[53,122,58],[102,165,106],[164,214,168]],[[15,79,20],[53,122,59],[102,165,108],[164,214,169]],[[15,79,21],[53,122,60],[102,165,109],[164,214,169]],[[15,79,22],[53,122,61],[102,165,110],[164,214,170]],[[15,79,23],[53,122,62],[102,165,111],[164,214,171]],[[15,79,24],[53,122,64],[102,165,112],[164,214,172]],[[15,79,25],[53,122,65],[102,165,113],[164,214,173]],[[15,79,26],[53,122,66],[102,165,114],[164,214,173]],[[15,79,27],[53,122,67],[102,165,115],[164,214,174]],[[15,79,28],[53,122,68],[102,165,116],[164,214,175]],[[15,79,29],[53,122,69],[102,165,117],[164,214,176]],[[15,79,31],[53,122,70],[102,165,118],[164,214,177]],[[15,79,32],[53,122,72],[102,165,119],[164,214,178]],[[15,79,33],[53,122,73],[102,165,120],[164,214,178]],[[15,79,34],[53,122,74],[102,165,121],[164,214,179]],[[15,79,35],[53,122,75],[102,165,122],[164,214,180]],[[15,79,36],[53,122,76],[102,165,123],[164,214,181]],[[15,79,37],[53,122,77],[102,165,124],[164,214,182]],[[15,79,38],[53,122,78],[102,165,125],[164,214,182]],[[15,79,39],[53,122,80],[102,165,126],[164,214,183]],[[15,79,40],[53,122,81],[102,165,127],[164,214,184]],[[15,79,41],[53,122,82],[102,165,129],[164,214,185]],[[15,79,42],[53,122,83],[102,165,130],[164,214,186]],[[15,79,43],[53,122,84],[102,165,131],[164,214,187]],[[15,79,44],[53,122,85],[102,165,132],[164,214,187]],[[15,79,45],[53,122,86],[102,165,133],[164,214,188]],[[15,79,47],[53,122,88],[102,165,134],[164,214,189]],[[15,79,48],[53,122,89],[102,165,135],[164,214,190]],[[15,79,49],[53,122,90],[102,165,136],[164,214,191]],[[15,79,50],[53,122,91],[102,165,137],[164,214,192]],[[15,79,51],[53,122,92],[102,165,138],[164,214,192]],[[15,79,52],[53,122,93],[102,165,139],[164,214,193]],[[15,79,53],[53,122,94],[102,165,140],[164,214,194]],[[15,79,54],[53,122,96],[102,165,141],[164,214,195]],[[15,79,55],[53,122,97],[102,165,142],[164,214,196]],[[15,79,56],[53,122,98],[102,165,143],[164,214,196]],[[15,79,57],[53,122,99],[102,165,144],[164,214,197]],[[15,79,58],[53,122,100],[102,165,145],[164,214,198]],[[15,79,59],[53,122,101],[102,165,146],[164,214,199]],[[15,79,60],[53,122,102],[102,165,147],[164,214,200]],[[15,79,61],[53,122,104],[102,165,148],[164,214,201]],[[15,79,63],[53,122,105],[102,165,150],[164,214,201]],[[15,79,64],[53,122,106],[102,165,151],[164,214,202]],[[15,79,65],[53,122,107],[102,165,152],[164,214,203]],[[15,79,66],[53,122,108],[102,165,153],[164,214,204]],[[15,79,67],[53,122,109],[102,165,154],[164,214,205]],[[15,79,68],[53,122,110],[102,165,155],[164,214,205]],[[15,79,69],[53,122,112],[102,165,156],[164,214,206]],[[15,79,70],[53,122,113],[102,165,157],[164,214,207]],[[15,79,71],[53,122,114],[102,165,158],[164,214,208]],[[15,79,72],[53,122,115],[102,165,159],[164,214,209]],[[15,79,73],[53,122,116],[102,165,160],[164,214,210]],[[15,79,74],[53,122,117],[102,165,161],[164,214,210]],[[15,79,75],[53,122,118],[102,165,162],[164,214,211]],[[15,79,76],[53,122,120],[102,165,163],[164,214,212]],[[15,79,77],[53,122,121],[102,165,164],[164,214,213]],[[15,79,79],[53,122,122],[102,165,165],[164,214,214]],[[15,77,79],[53,121,122],[102,164,165],[164,213,214]],[[15,76,79],[53,120,122],[102,163,165],[164,212,214]],[[15,75,79],[53,118,122],[102,162,165],[164,211,214]],[[15,74,79],[53,117,122],[102,161,165],[164,210,214]],[[15,73,79],[53,116,122],[102,160,165],[164,210,214]],[[15,72,79],[53,115,122],[102,159,165],[164,209,214]],[[15,71,79],[53,114,122],[102,158,165],[164,208,214]],[[15,70,79],[53,113,122],[102,157,165],[164,207,214]],[[15,69,79],[53,112,122],[102,156,165],[164,206,214]],[[15,68,79],[53,110,122],[102,155,165],[164,205,214]],[[15,67,79],[53,109,122],[102,154,165],[164,205,214]],[[15,66,79],[53,108,122],[102,153,165],[164,204,214]],[[15,65,79],[53,107,122],[102,152,165],[164,203,214]],[[15,64,79],[53,106,122],[102,151,165],[164,202,214]],[[15,63,79],[53,105,122],[102,150,165],[164,201,214]],[[15,61,79],[53,104,122],[102,148,165],[164,201,214]],[[15,60,79],[53,102,122],[102,147,165],[164,200,214]],[[15,59,79],[53,101,122],[102,146,165],[164,199,214]],[[15,58,79],[53,100,122],[102,145,165],[164,198,214]],[[15,57,79],[53,99,122],[102,144,165],[164,197,214]],[[15,56,79],[53,98,122],[102,143,165],[164,196,214]],[[15,55,79],[53,97,122],[102,142,165],[164,196,214]],[[15,54,79],[53,96,122],[102,141,165],[164,195,214]],[[15,53,79],[53,94,122],[102,140,165],[164,194,214]],[[15,52,79],[53,93,122],[102,139,165],[164,193,214]],[[15,51,79],[53,92,122],[102,138,165],[164,192,214]],[[15,50,79],[53,91,122],[102,137,165],[164,192,214]],[[15,49,79],[53,90,122],[102,136,165],[164,191,214]],[[15,48,79],[53,89,122],[102,135,165],[164,190,214]],[[15,47,79],[53,88,122],[102,134,165],[164,189,214]],[[15,45,79],[53,86,122],[102,133,165],[164,188,214]],[[15,44,79],[53,85,122],[102,132,165],[164,187,214]],[[15,43,79],[53,84,122],[102,131,165],[164,187,214]],[[15,42,79],[53,83,122],[102,130,165],[164,186,214]],[[15,41,79],[53,82,122],[102,129,165],[164,185,214]],[[15,40,79],[53,81,122],[102,127,165],[164,184,214]],[[15,39,79],[53,80,122],[102,126,165],[164,183,214]],[[15,38,79],[53,78,122],[102,125,165],[164,182,214]],[[15,37,79],[53,77,122],[102,124,165],[164,182,214]],[[15,36,79],[53,76,122],[102,123,165],[164,181,214]],[[15,35,79],[53,75,122],[102,122,165],[164,180,214]],[[15,34,79],[53,74,122],[102,121,165],[164,179,214]],[[15,33,79],[53,73,122],[102,120,165],[164,178,214]],[[15,32,79],[53,72,122],[102,119,165],[164,178,214]],[[15,31,79],[53,70,122],[102,118,165],[164,177,214]],[[15,29,79],[53,69,122],[102,117,165],[164,176,214]],[[15,28,79],[53,68,122],[102,116,165],[164,175,214]],[[15,27,79],[53,67,122],[102,115,165],[164,174,214]],[[15,26,79],[53,66,122],[102,114,165],[164,173,214]],[[15,25,79],[53,65,122],[102,113,165],[164,173,214]],[[15,24,79],[53,64,122],[102,112,165],[164,172,214]],[[15,23,79],[53,62,122],[102,111,165],[164,171,214]],[[15,22,79],[53,61,122],[102,110,165],[164,170,214]],[[15,21,79],[53,60,122],[102,109,165],[164,169,214]],[[15,20,79],[53,59,122],[102,108,165],[164,169,214]],[[15,19,79],[53,58,122],[102,106,165],[164,168,214]],[[15,18,79],[53,57,122],[102,105,165],[164,167,214]],[[15,17,79],[53,56,122],[102,104,165],[164,166,214]],[[15,16,79],[53,54,122],[102,103,165],[164,165,214]],[[15,15,79],[53,53,122],[102,102,165],[164,164,214]],[[16,15,79],[54,53,122],[103,102,165],[165,164,214]],[[17,15,79],[56,53,122],[104,102,165],[166,164,214]],[[18,15,79],[57,53,122],[105,102,165],[167,164,214]],[[19,15,79],[58,53,122],[106,102,165],[168,164,214]],[[20,15,79],[59,53,122],[108,102,165],[169,164,214]],[[21,15,79],[60,53,122],[109,102,165],[169,164,214]],[[22,15,79],[61,53,122],[110,102,165],[170,164,214]],[[23,15,79],[62,53,122],[111,102,165],[171,164,214]],[[24,15,79],[64,53,122],[112,102,165],[172,164,214]],[[25,15,79],[65,53,122],[113,102,165],[173,164,214]],[[26,15,79],[66,53,122],[114,102,165],[173,164,214]],[[27,15,79],[67,53,122],[115,102,165],[174,164,214]],[[28,15,79],[68,53,122],[116,102,165],[175,164,214]],[[29,15,79],[69,53,122],[117,102,165],[176,164,214]],[[31,15,79],[70,53,122],[118,102,165],[177,164,214]],[[32,15,79],[72,53,122],[119,102,165],[178,164,214]],[[33,15,79],[73,53,122],[120,102,165],[178,164,214]],[[34,15,79],[74,53,122],[121,102,165],[179,164,214]],[[35,15,79],[75,53,122],[122,102,165],[180,164,214]],[[36,15,79],[76,53,122],[123,102,165],[181,164,214]],[[37,15,79],[77,53,122],[124,102,165],[182,164,214]],[[38,15,79],[78,53,122],[125,102,165],[182,164,214]],[[39,15,79],[80,53,122],[126,102,165],[183,164,214]],[[40,15,79],[81,53,122],[127,102,165],[184,164,214]],[[41,15,79],[82,53,122],[129,102,165],[185,164,214]],[[42,15,79],[83,53,122],[130,102,165],[186,164,214]],[[43,15,79],[84,53,122],[131,102,165],[187,164,214]],[[44,15,79],[85,53,122],[132,102,165],[187,164,214]],[[45,15,79],[86,53,122],[133,102,165],[188,164,214]],[[47,15,79],[88,53,122],[134,102,165],[189,164,214]],[[48,15,79],[89,53,122],[135,102,165],[190,164,214]],[[49,15,79],[90,53,122],[136,102,165],[191,164,214]],[[50,15,79],[91,53,122],[137,102,165],[192,164,214]],[[51,15,79],[92,53,122],[138,102,165],[192,164,214]],[[52,15,79],[93,53,122],[139,102,165],[193,164,214]],[[53,15,79],[94,53,122],[140,102,165],[194,164,214]],[[54,15,79],[96,53,122],[141,102,165],[195,164,214]],[[55,15,79],[97,53,122],[142,102,165],[196,164,214]],[[56,15,79],[98,53,122],[143,102,165],[196,164,214]],[[57,15,79],[99,53,122],[144,102,165],[197,164,214]],[[58,15,79],[100,53,122],[145,102,165],[198,164,214]],[[59,15,79],[101,53,122],[146,102,165],[199,164,214]],[[60,15,79],[102,53,122],[147,102,165],[200,164,214]],[[61,15,79],[104,53,122],[148,102,165],[201,164,214]],[[63,15,79],[105,53,122],[150,102,165],[201,164,214]],[[64,15,79],[106,53,122],[151,102,165],[202,164,214]],[[65,15,79],[107,53,122],[152,102,165],[203,164,214]],[[66,15,79],[108,53,122],[153,102,165],[204,164,214]],[[67,15,79],[109,53,122],[154,102,165],[205,164,214]],[[68,15,79],[110,53,122],[155,102,165],[205,164,214]],[[69,15,79],[112,53,122],[156,102,165],[206,164,214]],[[70,15,79],[113,53,122],[157,102,165],[207,164,214]],[[71,15,79],[114,53,122],[158,102,165],[208,164,214]],[[72,15,79],[115,53,122],[159,102,165],[209,164,214]],[[73,15,79],[116,53,122],[160,102,165],[210,164,214]],[[74,15,79],[117,53,122],[161,102,165],[210,164,214]],[[75,15,79],[118,53,122],[162,102,165],[211,164,214]],[[76,15,79],[120,53,122],[163,102,165],[212,164,214]],[[77,15,79],[121,53,122],[164,102,165],[213,164,214]],[[79,15,79],[122,53,122],[165,102,165],[214,164,214]],[[79,15,77],[122,53,121],[165,102,164],[214,164,213]],[[79,15,76],[122,53,120],[165,102,163],[214,164,212]],[[79,15,75],[122,53,118],[165,102,162],[214,164,211]],[[79,15,74],[122,53,117],[165,102,161],[214,164,210]],[[79,15,73],[122,53,116],[165,102,160],[214,164,210]],[[79,15,72],[122,53,115],[165,102,159],[214,164,209]],[[79,15,71],[122,53,114],[165,102,158],[214,164,208]],[[79,15,70],[122,53,113],[165,102,157],[214,164,207]],[[79,15,69],[122,53,112],[165,102,156],[214,164,206]],[[79,15,68],[122,53,110],[165,102,155],[214,164,205]],[[79,15,67],[122,53,109],[165,102,154],[214,164,205]],[[79,15,66],[122,53,108],[165,102,153],[214,164,204]],[[79,15,65],[122,53,107],[165,102,152],[214,164,203]],[[79,15,64],[122,53,106],[165,102,151],[214,164,202]],[[79,15,63],[122,53,105],[165,102,150],[214,164,201]],[[79,15,61],[122,53,104],[165,102,148],[214,164,201]],[[79,15,60],[122,53,102],[165,102,147],[214,164,200]],[[79,15,59],[122,53,101],[165,102,146],[214,164,199]],[[79,15,58],[122,53,100],[165,102,145],[214,164,198]],[[79,15,57],[122,53,99],[165,102,144],[214,164,197]],[[79,15,56],[122,53,98],[165,102,143],[214,164,196]],[[79,15,55],[122,53,97],[165,102,142],[214,164,196]],[[79,15,54],[122,53,96],[165,102,141],[214,164,195]],[[79,15,53],[122,53,94],[165,102,140],[214,164,194]],[[79,15,52],[122,53,93],[165,102,139],[214,164,193]],[[79,15,51],[122,53,92],[165,102,138],[214,164,192]],[[79,15,50],[122,53,91],[165,102,137],[214,164,192]],[[79,15,49],[122,53,90],[165,102,136],[214,164,191]],[[79,15,48],[122,53,89],[165,102,135],[214,164,190]],[[79,15,47],[122,53,88],[165,102,134],[214,164,189]],[[79,15,45],[122,53,86],[165,102,133],[214,164,188]],[[79,15,44],[122,53,85],[165,102,132],[214,164,187]],[[79,15,43],[122,53,84],[165,102,131],[214,164,187]],[[79,15,42],[122,53,83],[165,102,130],[214,164,186]],[[79,15,41],[122,53,82],[165,102,129],[214,164,185]],[[79,15,40],[122,53,81],[165,102,127],[214,164,184]],[[79,15,39],[122,53,80],[165,102,126],[214,164,183]],[[79,15,38],[122,53,78],[165,102,125],[214,164,182]],[[79,15,37],[122,53,77],[165,102,124],[214,164,182]],[[79,15,36],[122,53,76],[165,102,123],[214,164,181]],[[79,15,35],[122,53,75],[165,102,122],[214,164,180]],[[79,15,34],[122,53,74],[165,102,121],[214,164,179]],[[79,15,33],[122,53,73],[165,102,120],[214,164,178]],[[79,15,32],[122,53,72],[165,102,119],[214,164,178]],[[79,15,31],[122,53,70],[165,102,118],[214,164,177]],[[79,15,29],[122,53,69],[165,102,117],[214,164,176]],[[79,15,28],[122,53,68],[165,102,116],[214,164,175]],[[79,15,27],[122,53,67],[165,102,115],[214,164,174]],[[79,15,26],[122,53,66],[165,102,114],[214,164,173]],[[79,15,25],[122,53,65],[165,102,113],[214,164,173]],[[79,15,24],[122,53,64],[165,102,112],[214,164,172]],[[79,15,23],[122,53,62],[165,102,111],[214,164,171]],[[79,15,22],[122,53,61],[165,102,110],[214,164,170]],[[79,15,21],[122,53,60],[165,102,109],[214,164,169]],[[79,15,20],[122,53,59],[165,102,108],[214,164,169]],[[79,15,19],[122,53,58],[165,102,106],[214,164,168]],[[79,15,18],[122,53,57],[165,102,105],[214,164,167]],[[79,15,17],[122,53,56],[165,102,104],[214,164,166]],[[79,15,16],[122,53,54],[165,102,103],[214,164,165]]];
    this.element = document.getElementById('spectrum');
    for( var i = 0; i < this.colours.length;i++ ){
        var row = document.createElement('ul');

        row.setAttribute('data-colour', JSON.stringify(this.colours[i]));
        for( var j = 0; j < this.colours[i].length;j++){
            row.innerHTML += '<li style="background-color: rgb(' + this.colours[i][j].join(',') + ')"></li>'
        }
        this.element.appendChild(row);
    }

    $('ul','#spectrum').on('click', function(){
        $(this).remove();
    });

    $('#done').on('click', function(){
        var data = [];
        $('ul','#spectrum').each(function(){

            data.push(($(this).data('colour')));
        });
        document.write(JSON.stringify(data));
    });
};

new Spectrum();