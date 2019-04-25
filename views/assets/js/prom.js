
        var formValid = document.getElementById('ajouter');
  
      var taux=document.getElementById('prom');
      var misstaux = document.getElementById('misstaux');


      var id=document.getElementById('idP');
      var missid = document.getElementById('missid');



      var deb=document.getElementById('dd');
      var missdeb = document.getElementById('missdeb');


      var fin=document.getElementById('df');
      var missfin = document.getElementById('missfin');

      formValid.addEventListener('click', validation_3);
      
           function validation_3(event)
      {


                      if (id.validity.valueMissing )
                    {
                        event.preventDefault();
                        missid.textContent = 'champ obligatoire';
                        missid.style.color = 'red';
                    }

                   


                    if(fin.validity.valueMissing )
                    {

                       event.preventDefault();
                        missfin.textContent = 'champ obligatoire';
                        missfin.style.color = 'red';
                    }

                    if (deb.validity.valueMissing )
                    {
                        event.preventDefault();
                        missdeb.textContent = 'champ obligatoire';
                        missdeb.style.color = 'red';
                 
                    
                    } 

                   
                    if(taux.validity.valueMissing )
                    {

                       event.preventDefault();
                        misstaux.textContent = 'champ obligatoire';
                        misstaux.style.color = 'red';
                    }

                
                   
                       
                    

    }



/**********************************************/
 function surligne (champ,erreur)
   {
    if(erreur)
    
      champ.style.background=' #FFDAB9';

    else 
      champ.style.background="";
   }

/**********************************************/






 function surligne_2 (champ,erreur)
   {
    if(erreur)
    
      champ.style.background=' #ffff99';

    else 
      champ.style.background="";
   }



/**********************************************/
    function verifierPseudo(champ)
  {
     if(champ.value.length<2)
     {
      surligne(champ,true);
      return false;
     }


     else 
     {
      surligne(champ,false);
      return true;
     }
  }


/**********************************************/


   function verifierTaux(champ)
  {
   
     if(!champ.value)
     {
      surligne(champ,true);
       misstaux.textContent = 'champ obligatoire';
        misstaux.style.color = 'red';
        x=0;
       return false;
     }


     if(champ.value>100)
     {
      surligne_2(champ,true);
       misstaux.textContent = 'Remise ne peut pas depasser 100%';
        misstaux.style.color = '#ffcc00';

        
      return false;
     }

     if(champ.value<10)
     {
      surligne_2(champ,true);
       misstaux.textContent = 'Remise ne peut pas etre inferieure à 10%';
       misstaux.style.color = '#ffcc00';
     
      return false;
     }

    

    else 
       {
         surligne(champ,false);
         misstaux.textContent ="";
         
         return true;
     }
  }
/**********************************************/

   function verifierID(champ)
  {
     
     if(!champ.value)
     {
      surligne(champ,true);
       missid.textContent = 'champ obligatoire';
       missid.style.color = ' red';
       x=1;
      return false;
     
     }

   
    /* else if(champ.value && x==1)
     {
      surligne(champ,false);
         missid.textContent ="";
            champ.style.background="  #98FB98"; 
      return true;
     }
    */

     else
     {
       surligne(champ,false);
         missid.textContent ="";
            //champ.style.background=" #EEE8AA"; 
     }
  }
  /************************************************/
  function verifierDebut(champ)
  { 
     

     if(!champ.value)
     {
      surligne(champ,true);
       missdeb.textContent = 'champ obligatoire';
        missdeb.style.color = 'red';
       return false;
     }

     else 
     {
      surligne(champ,false);
      missdeb.textContent ="hm";
      return true;
     }
  }
  /****************************************/

   function verifierFin(champ)
  {
     
    
      if(!champ.value)
     {
      surligne(champ,true);
       missfin.textContent = 'champ obligatoire';
       missfin.style.color = ' red';
      return false;
     }

   
     else 
     {
      surligne(champ,false);
      missfin.textContent ="";
      
      return true;
     }
  }

