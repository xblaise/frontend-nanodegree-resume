//$("#main").append(["blaise mcfarland"]);
var name="Blaise";
var formattedName = HTMLheaderName.replace("%data%", name);
//$("#header").append(formattedName);
var role="musician";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedName , formattedRole);


var phone="714-777-7777";
var mobile= "714-888-8888";
var email= "ixblaise@gmail.com";
var twitter = "imonethat";
var gitHub="xblaise";
var Alocation="Orange County";

var formattedGeneric = HTMLcontactGeneric.replace("%contact%", "phone");
var formattedPhone = formattedGeneric.replace("%data%", phone);
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
var formattedGithub = HTMLgithub.replace("%data%", gitHub);
var formattedLocation = HTMLlocation.replace("%data%", Alocation);
$("#footerContacts").prepend(formattedPhone,formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedLocation);
