var visitorFirstName = prompt("Who enters the laboratory?");
var visitorSurname = prompt("What is your surname?");
var visitorFullName = visitorFirstName + " " + visitorSurname;
var visitorFrom = prompt("I see " + visitorFullName + " and from where do you come?")
var visitorFullNameAndFrom = visitorFullName + " of " + visitorFrom;
var visitorQuest = prompt("And what is your quest " + visitorFullNameAndFrom + "?");
var meanAirSpeed = prompt("And as a test of your cognitive acumen I must query, . . . What is the mean airspeed velocity of an unlaiden swallow?") 
var message = "Welcome, " + visitorFullNameAndFrom + ", this is my laboratory.";
message += " Please feel free to look around and take rest here, it has surely been a long and arduous journey from " + visitorFrom;
message += " And there can be no doubt you will need much energy before you " + visitorQuest.toUpperCase() + "!!!"
message += ", Just be careful what you touch. "
message += " Like the inhabitants of " + visitorFrom + " Some of the experiments here are far from stable."
message += " Oh, and might I suggest you view our book on swallows. . . I'm afraid " + meanAirSpeed + " is not at all correct." 
document.write(message);
