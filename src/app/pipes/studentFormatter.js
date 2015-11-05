System.register(['angular2/angular2'], function(exports_1) {
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
    var angular2_1;
    var StudentFormatter;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            StudentFormatter = (function () {
                function StudentFormatter() {
                }
                StudentFormatter.prototype.transform = function (value, args) {
                    return "<b>Naam: " + value.firstname + " " + value.lastname + "</b><br/>School: " + value.school;
                };
                StudentFormatter = __decorate([
                    angular2_1.Pipe({
                        name: 'studentFormatter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], StudentFormatter);
                return StudentFormatter;
            })();
            exports_1("StudentFormatter", StudentFormatter);
        }
    }
});
//# sourceMappingURL=studentFormatter.js.map