//Gruntfile
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        // Task configuration
        concat: {
            //...
        },
        copy:{
            dashboard:{
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            './bower_components/jquery/dist/jquery.min.js',
                            './bower_components/bootstrap/dist/js/bootstrap.min.js',
                        ],
                        dest: './web/assets/javascripts/',
                        filter: 'isFile',
                    }
                ]
            }
        },
        less: {
            dashboard: {
                options: {
                  compress: true,  //minifying the result
                },
                files: {
                  "./web/assets/stylesheets/bootstrap.min.css": "./app/Resources/assets/stylesheets/bootstrap.less",
                  "./web/assets/stylesheets/dashboard.min.css": "./app/Resources/assets/stylesheets/dashboard.less",
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
        },
        dashboard: {

        }
    });

    // Plugin loading
    require('load-grunt-tasks')(grunt);
    // Task definition
    grunt.registerTask('dashboard', ['less:dashboard', 'copy:dashboard']);
    grunt.registerTask('main', ['dashboard']);
    grunt.registerTask('default', ['main']);
};
