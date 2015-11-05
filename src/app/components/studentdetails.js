System.register(['angular2/angular2', '../pipes/studentFormatter'], function(exports_1) {
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
    var angular2_1, studentFormatter_1;
    var StudentDetails;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (studentFormatter_1_1) {
                studentFormatter_1 = studentFormatter_1_1;
            }],
        execute: function() {
            // YOUR COMPONENT ANNOTATION AND CLASS HERE...
            StudentDetails = (function () {
                function StudentDetails() {
                    this.selected = new angular2_1.EventEmitter();
                }
                StudentDetails.prototype.setSelected = function () {
                    this.selected.next(this.student);
                };
                StudentDetails = __decorate([
                    angular2_1.Component({
                        selector: 'studentdetails',
                        inputs: ['student', 'isselected'],
                        outputs: ['selected'],
                        directives: [angular2_1.NgClass],
                        pipes: [studentFormatter_1.StudentFormatter],
                        template: "\n\t<div (click)=\"setSelected()\" [ng-class]=\"{defaultPrimaryColor:isselected, student:true}\" [inner-html] =\"student |  studentFormatter\"></div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], StudentDetails);
                return StudentDetails;
            })();
            exports_1("StudentDetails", StudentDetails);
        }
    }
});
//# sourceMappingURL=studentdetails.js.map