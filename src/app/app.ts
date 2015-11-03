import {Component, bootstrap, NgFor} from 'angular2/angular2';
import {student, studenttrack} from './models/student';

// create a class with annotations..
@Component({
	selector: 'studenttrack-survey',
	directives:[NgFor],
	template: `
	<div class="studenttrack">
	   <h1 class="default-primary-color text-primary-color">Studenttrack {{studenttrack.name}} (<span [text-content]="getCount()"></span> attendees)</h1>
	   <div class="student" *ng-for="#student of studenttrack.getStudents()">
	     {{ student.firstname }} {{ student.lastname }} {{ student.school }}
	   </div>
	 </div>
	`,
	styles:[`
	 .student { padding:15px; }
	 .studenttrack { border:1px solid black;margin:5px;padding:0px; }
	 .studenttrack h1 { margin:0px;padding:15px;}
	`]
})
class SurveyApplication {	
	// ADD FIELD FOR THE STUDENTTRACK
	// your code here...
	
	constructor (){
		// ADD CODE HERE TO INSTANTIATE A NEW STUDENTTRACK
		// AND ADD SOME STUDENTS TO THE STUDENTTRACK
		// your code here...
	   
	   
	   // REPLACE THIS ANONYMOUS FUNCTION WITH A PHAT ARROW ONE
	   var self = this;
	   window.setInterval(function() {
		   // RANDOMLY ADD NEW ATTENDEES TO THE STUDENTTRACK
		   // your code here...
	   }, 2000);
	}
	
	getCount(){
		// ADD CODE THAT RETURNS THE NUMBER OF STUDENTS FROM THE STUDENTTRACK
		// your code here...
	}
}

// bootstrap our application..
bootstrap(SurveyApplication); 