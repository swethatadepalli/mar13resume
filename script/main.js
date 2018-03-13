function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true)
xhr.onreadystatechange=function(){
  if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
};
xhr.send(); //null message
}
getfile("resources/data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  })


    var right_child=document.querySelector(".content_child");
  function career(info){
    var h2=document.createElement("h2");
    h2.textContent="Career Objective";
    right_child.appendChild(h2);
    var hr=document.createElement("hr");
    right_child.appendChild(hr);
    var career_info=document.createElement("p");
    career_info.textContent=info.objective;
    right_child.appendChild(career_info);
  }

  function education(edu){
    var edu_title=document.createElement("h2");
  edu_title.textContent="Educational Qualifications"
right_child.appendChild(edu_title);
var hr=document.createElement("hr");
right_child.appendChild(hr);
var ol=document.createElement("ol");
right_child.appendChild(ol);
for(var i=0; i<edu.length; i++)
{
  var li =document.createElement("li");
li.textContent=edu[i].degree;
ol.appendChild(li);
var p=document.createElement("p");
p.textContent=edu[i].college;

ol.appendChild(p);
  console.log(edu[i].data.length);
  var sub_ul=document.createElement("ul");
  p.appendChild(sub_ul);
for(var j=0; j<edu[i].data.length; j++){
  var sub_li=document.createElement("li");
  sub_li.textContent=edu[i].data[j];
  sub_ul.appendChild(sub_li);
  }
}
/*function skills(skill){
  var skill_title=document.createElement("<h2>");
  skill_title.textContent="skills";
  right_child.appendChild(skill_title);
  skill_hr=document.createElement("hr");
  right_child.appendChild(hr);
  var table=document.createElement("table");
  right_child.appendChild(table);
  var row="";
  console.log(skill.length);
  for(var i=0; i<skill.length; i++){
    row+="<tr><td>"+skill[i].name+"</td><td>"+skill[i].info+"</td><tr>"
  }
table.innerHTML=row;
}*/
}
