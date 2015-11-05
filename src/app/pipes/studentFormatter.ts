import { Pipe } from 'angular2/angular2';
import { student } from './models/student';

@Pipe({
	name:'studentFormatter'
})
export class StudentFormatter {
	 transform(value:student, args:string[]) : any {
    	return "<b>Naam: " + value.firstname + " " + value.lastname + "</b><br/>School: " + value.school; 
	 }
}