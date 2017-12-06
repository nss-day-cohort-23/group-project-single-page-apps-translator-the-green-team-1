module.exports = function(grunt){
    
    grunt.initConfig({
        jshint: {
            files: ['assets/js/**/*.js'],
            options: {
                predef: ["document", "console", "$"],//Ignore these even though we haven't defined them
                esnext: true, //Telling to use latest version of javascript
                globalstrict: true,
                globals: {},
                browserify: true
            }
        },
        sass: {
            dist: {
                files: {
                    'assets/css/main.css': 'assets/sass/sass.scss'
                }
            }
        }, 
        watch: {
            javascripts: {
                files: ['assets/js/**/*.js'],
                tasks: ['jshint', 'browserify']
            },
            sass: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['sass']
            }
        },
        browserify: {
            'assets/dist/bundle.js': ['assets/js/main.js']
        }
    });

    require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask("default", ['jshint', 'sass', 'browserify', 'watch']);//Will do by default when you excecute grunt.
//'jshint',
}