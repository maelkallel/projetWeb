var formValid = document.getElementById('ajouter');
      /**************************************************************/
      var max=document.getElementById('max');
      //var desValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
      var misscap = document.getElementById('misscap');
      formValid.addEventListener('click', validation_cap);
       function validation_cap(event)
       {
                //Si le champ est vide
                if (max.validity.valueMissing)
                {
                    event.preventDefault();
                    misscap.textContent = 'CHAMP MANQUANT';
                    misscap.style.color = 'red';
                //Si le format de données est incorrect
                }

                else
                { 
                  misscap.textContent = 'CORRECT';
                    misscap.style.color = 'green';
                }
        }
      /*************************************************************/
      var des=document.getElementById('des');
      //var desValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
      var missdes = document.getElementById('missdes');
      formValid.addEventListener('click', validation_des);
       function validation_des(event)
       {
                //Si le champ est vide
                if (des.validity.valueMissing)
                {
                    event.preventDefault();
                    missdes.textContent = 'Description MANQUANTE';
                    missdes.style.color = 'red';
                //Si le format de données est incorrect
                }
                else
                { 
                   missdes.textContent = 'CORRECT';
                    missdes.style.color = 'green';
                }
        }
      /******************************************************/
      var  titre = document.getElementById('title');
      var titreValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
      var misstitre = document.getElementById('misstitre');
      formValid.addEventListener('click', validation);
      function validation(event){
                //Si le champ est vide
                if (titre.validity.valueMissing){
                    event.preventDefault();
                    misstitre.textContent = 'TITLE MANQUANT';
                    misstitre.style.color = 'red';
                //Si le format de données est incorrect
                }else if (titreValid.test(titre.value) == false){
                    event.preventDefault();
                    misstitre.textContent = 'Format incorrect';
                    misstitre.style.color = 'orange';
                }else
                { 
                     misstitre.textContent = 'CORRECT';
                    misstitre.style.color = 'green';
                }
            }

       /******************************************************************/

      var  dd = document.getElementById('dd');
       var missdeb = document.getElementById('missdeb');
       formValid.addEventListener('click', validation_3);
      var  df = document.getElementById('df');
       var missfin = document.getElementById('missfin');
     
   /**************************************************************************/
    function validation_3(event)
      {
                         if (deb.validity.valueMissing)
                    {
                        event.preventDefault();
                        missdeb.textContent = 'DATE DEBUT';
                        missdeb.style.color = 'red';
                 
                    
                    } else 
                    {
                      
                         missdeb.textContent = 'CORRECT';
                        missdeb.style.color = 'green';
                    }
                
                    if (fin.validity.valueMissing)
                    {
                        event.preventDefault();
                        missfin.textContent = 'DATE FIN';
                        missfin.style.color = 'red';
                       

                   
                    } else 
                    {
                       if(deb.value>fin.value)
                       {
                                 missfin.textContent = 'INCORRECT';
                        missfin.style.color = 'green';     
                       }
                       else
                       {
                         missfin.textContent = 'CORRECT';
                        missfin.style.color = 'green';
                       }
                       
                    }

                   

                   
                    
                    
            
            
            
            

        }