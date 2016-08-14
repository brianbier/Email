module.exports = function(grunt) {
 
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
 
      inlinecss: {
        main: {
          options: {
          },
          files: {
            'email-inlined.html': 'sample-grunt-use-email.html'
          }
        }
      }
 
    });
 
    grunt.loadNpmTasks('grunt-inline-css');
 
    grunt.registerTask('default',['inlinecss']);
 
};