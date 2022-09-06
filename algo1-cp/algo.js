function go(){
    var str=document.getElementById("t1").value;
    var vowel ="aeiouAEIOU" ;
    var consonant ="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    var ctr=0;
    var ctr1=0.

    for(var x=0;x<str.length;x++){
        for(var y=0;y<vowel.length;y++){
            if(str[x]==vowel[y])
            {
                ctr++;
            }
        }
        for(var z=0;z<consonant.length;z++){
            if(str[x]==consonant[z])
            {
                ctr1++;
            }
        }
    }
    document.getElementById ("p1").innerHTML ="The Number of Vowel in Textbox is"+ ctr ;
    document.getElementById ("p2").innerHTML = " TheNumber of Consonant in Textbox is "+ ctr1 ;
}



