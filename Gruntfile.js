module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            dist: {
                options: {
                    paths: ["stylesheets"],
                    compress: true,
                    optimization: 2,
                    cleancss: true
                },
                files: [{"stylesheets/styles.css": "less/styles.less"}]
            }
        },

        autoprefixer: {
            options: {
                browsers: [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 20',
                    'Firefox >= 24',
                    'Explorer >= 8',
                    'iOS >= 6',
                    'Opera >= 12',
                    'Safari >= 6'
                ]
            },
            simplecss: {
                src: 'stylesheets/styles.css'
            }
        },

        watch: {
            scripts: {
                files: ['less/*.less'],
                tasks: ['less','autoprefixer']
            }
        },

    });

    // grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['watch']);
};
