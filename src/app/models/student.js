System.register([], function(exports_1) {
    var student, studenttrack;
    return {
        setters:[],
        execute: function() {
            // COMPLETE THE STUDENT CLASS
            // expose firstname, lastname and school properties
            student = (function () {
                function student() {
                }
                return student;
            })();
            exports_1("student", student);
            // COMPLETE THE STUDENTTRACK CLASS
            // expose name property, expose addStudentToTrack and getStudents methods
            studenttrack = (function () {
                function studenttrack() {
                }
                return studenttrack;
            })();
            exports_1("studenttrack", studenttrack);
        }
    }
});
//# sourceMappingURL=student.js.map