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
                            './bower_components/font-awesome/css/font-awesome.min.css',
                            './bower_components/metisMenu/dist/metisMenu.min.css',
                        ],
                        dest: './web/assets/stylesheets/',
                        filter: 'isFile',
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            './bower_components/jquery/dist/jquery.min.js',
                            './bower_components/bootstrap/dist/js/bootstrap.min.js',
                            './bower_components/metisMenu/dist/metisMenu.min.js',
                            './bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js',
                        ],
                        dest: './web/assets/javascripts/',
                        filter: 'isFile',
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            './bower_components/font-awesome/fonts/**',
                        ],
                        dest: './web/assets/fonts/',
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
                  // compiling sb-admin-2.less into sb-admin-2.min.css
                  "./web/assets/stylesheets/bootstrap.min.css": "./app/Resources/assets/stylesheets/bootstrap.less",
                  "./web/assets/stylesheets/sb-admin-2.min.css": "./app/Resources/assets/stylesheets/sb-admin-2.less",
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
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dashboard', ['less:dashboard', 'copy:dashboard']);
};
