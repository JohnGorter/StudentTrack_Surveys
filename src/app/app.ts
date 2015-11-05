import {Component, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {StudentDetails} from './components/studentdetails';
import {student, studenttrack} from './models/student';
import { StudentService } from './services/studentservice';
import { StudentTrackService } from './services/studenttrackservice';
import { DemoFormSku } from './form';

// create a class with annotations..
@Component({
	selector: 'studenttrack-survey',
	directives:[FORM_DIRECTIVES, CORE_DIRECTIVES, StudentDetails, DemoFormSku],
	providers:[StudentService, StudentTrackService],
	template: `
	<demo-form-sku></demo-form-sku>
	<div *ng-for="#studenttrack of studenttracks.getStudentTracks()" class="studenttrack light-primary-color text-primary-color">
	   <h1 class="dark-primary-color text-primary-color">Studenttrack {{studenttrack.name}} (<span [text-content]="getCount(studenttrack)"></span> attendees)</h1>
		<studentdetails 
			[student]="student" 
			[isSelected]="currentstudent === student && currenttrack === studenttrack"
			*ng-for="#student of studenttrack.getStudents()" 
			(deleted)="removeStudent(studenttrack, student)"
			(selected)="setSelected(studenttrack, student)"> 
		</studentdetails>
		
	 </div>
	`,
	styles:[`
	 .studenttrack { border:1px solid black;margin:5px;padding:0px; }
	 .studenttrack h1 { margin:0px;padding:15px;}
	`]
})
class SurveyApplication {	
	
	studenttracks:StudentTrackService;
	currentstudent:student;
	currenttrack:studenttrack;
	
	constructor (studenttracks: StudentTrackService){
	  this.studenttracks = studenttracks;
	}

    removeStudent(track, student){
		track.removeStudent(student);
	}

	setSelected(studenttrack:studenttrack, student:student){
		this.currentstudent = student;
		this.currenttrack = studenttrack;
	}
	
	getCount(studenttrack:studenttrack){
		return studenttrack.getStudents().length;
	}
}

// bootstrap our application..
bootstrap(SurveyApplication); 