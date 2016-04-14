//Gruntfile
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        // Task configuration
        concat: {
            //...
        },
        less: {
            development: {
                options: {
                  compress: true,  //minifying the result
                },
                files: {
                  //compiling frontend.less into frontend.css
                  "./web/assets/stylesheets/backend.css": "./app/Resources/assets/stylesheets/backend.less"
                }
            }
        },
        uglify: {
            //...
        },
        phpunit: {
            //...
        },
        watch: {
            //...
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task definition
    grunt.registerTask('default', ['watch']);
};
