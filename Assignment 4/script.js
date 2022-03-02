var names=new Array();
names[0]="Param";
names[1]="dev";
names[2]="anupam";
names[3]="krishna";
names[4]="lala";
names[5]="vani";
names[6]="neel";
names[7]="gurleen";
names[8]="siti";
names[9]="aditi";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
