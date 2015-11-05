System.register(['angular2/angular2', './components/studentdetails', './services/studentservice', './services/studenttrackservice'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, studentdetails_1, studentservice_1, studenttrackservice_1;
    var SurveyApplication;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (studentdetails_1_1) {
                studentdetails_1 = studentdetails_1_1;
            },
            function (studentservice_1_1) {
                studentservice_1 = studentservice_1_1;
            },
            function (studenttrackservice_1_1) {
                studenttrackservice_1 = studenttrackservice_1_1;
            }],
        execute: function() {
            // create a class with annotations..
            SurveyApplication = (function () {
                function SurveyApplication(studenttracks) {
                    this.studenttracks = studenttracks;
                }
                SurveyApplication.prototype.setSelected = function (studenttrack, student) {
                    this.currentstudent = student;
                    this.currenttrack = studenttrack;
                };
                SurveyApplication.prototype.getCount = function (studenttrack) {
                    return studenttrack.getStudents().length;
                };
                SurveyApplication = __decorate([
                    angular2_1.Component({
                        selector: 'studenttrack-survey',
                        directives: [angular2_1.CORE_DIRECTIVES, studentdetails_1.StudentDetails],
                        providers: [studentservice_1.StudentService, studenttrackservice_1.StudentTrackService],
                        template: "\n\t<div *ng-for=\"#studenttrack of studenttracks.getStudentTracks()\" class=\"studenttrack light-primary-color text-primary-color\">\n\t   <h1 class=\"dark-primary-color text-primary-color\">Studenttrack {{studenttrack.name}} (<span [text-content]=\"getCount(studenttrack)\"></span> attendees)</h1>\n\t\t<studentdetails \n\t\t\t[student]=\"student\" \n\t\t\t[isSelected]=\"currentstudent === student && currenttrack === studenttrack\"\n\t\t\t*ng-for=\"#student of studenttrack.getStudents()\" \n\t\t\t(selected)=\"setSelected(studenttrack, student)\"> \n\t\t</studentdetails>\n\t </div>\n\t",
                        styles: ["\n\t .studenttrack { border:1px solid black;margin:5px;padding:0px; }\n\t .studenttrack h1 { margin:0px;padding:15px;}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [studenttrackservice_1.StudentTrackService])
                ], SurveyApplication);
                return SurveyApplication;
            })();
            // bootstrap our application..
            angular2_1.bootstrap(SurveyApplication);
        }
    }
});
//# sourceMappingURL=app.js.map