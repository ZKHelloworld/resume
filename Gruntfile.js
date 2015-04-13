module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {expand: true, src: './bower_components/jquery/dist/jquery.min.js', dest: 'public/js', flatten: true},
          {expand: true, src: './bower_components/angularjs/angular.min.js', dest: 'public/js', flatten: true}
        ]
      }
    },
    uglify: {
      main: {
        files: {
          'public/js/main.min.js': [
            'js/main.js',
            'js/profile.js',
            'js/experience.js',
            'js/project.js',
            'js/skill.js'
          ]
        }
      }
    },
    less: {
      main: {
        options: {
          compress: true
        },
        files: {
          'public/css/style.css': [
            'css/reset.less',
            'css/layout.less',
            'css/theme.less',
            'css/profile.less',
            'css/experience.less',
            'css/project.less',
            'css/skill.less'
          ]
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: {
            path: '.',
            options: {
              index: 'index.html'
            }
          }
        }
      }
    },
    watch: {
      js: {
        files: 'js/*.js',
        tasks: 'uglify'
      },
      less: {
        files: ['css/*.css', 'css/*.less'],
        tasks: 'less'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'uglify', 'less', 'connect', 'watch']);
};
