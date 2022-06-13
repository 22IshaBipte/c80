var friend_array = []
function submit()
{
   var display_array = [];
   for(i=1;i<=4;i++) {
       var name = document.getElementById("name_of_the_student_"+i).value;
       console.log(name);
       friend_array.push(name)
   }
   console.log(friend_array);

   var length = friend_array.length
   console.log(length);

   for(var k=0; k<length; k++)
   {
       display_array.push("<h4>NAME - " + friend_array[k] + "</h4>");
    
   }
   console.log(display_array);

   document.getElementById("display_name_with_commas").innerHTML=display_array;

   var remove_commas = display_array.join(" ")

   document.getElementById("display_name_without_commas").innerHTML=remove_commas

   document.getElementById("submit_button").style.display="none"
   document.getElementById("sort_button").style.display="inline-block"
   

   
}

function sorting(){
    friend_array.sort()
    display_array=[]
    var length = friend_array.length
   console.log(length);

   for(var k=0; k<length; k++)
   {
       display_array.push("<h4>NAME - " + friend_array[k] + "</h4>");
    
   }
   console.log(display_array);

   document.getElementById("display_name_with_commas").innerHTML=display_array;

   var remove_commas = display_array.join(" ")

   document.getElementById("display_name_without_commas").innerHTML=remove_commas
}

