module.exports = function(grunt) {
 
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
 
      inlinecss: {
        main: {
          options: {
          },
          files: {
            'email-responsive-no-media-queries.html': 'responsive-without-media-queries.html'
          }
        }
      }
 
    });
 
    grunt.loadNpmTasks('grunt-inline-css');
 
    grunt.registerTask('default',['inlinecss']);
 
};