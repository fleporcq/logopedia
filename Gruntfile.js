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
                            './bower_components/bootstrap/dist/css/bootstrap.min.css',
                            './bower_components/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css',
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
            //...
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task definition
    grunt.registerTask('default', ['watch']);
};
