module.exports = function(grunt) {
  grunt.initConfig({
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'images',
          src: ['**/*.png', '**/*.jpg'],
          dest: 'images-min/'
        }]
      }
    },

    compass: {
      options: {
        config: 'config.rb'
      },
      dev: {
        options: {
          environment: 'development'
        }
      },
      clean: {
        options: {
          clean: true
        }
      },
      dist: {
        options: {
          environment: 'production',
          imagesDir: 'images-min',
          outputStyle: 'compressed',
          noLineComments: true,
          force: true
        }
      }
    },

    watch: {
      styles: {
        files: 'sass/**/*.scss',
        tasks: ['compass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['compass:clean', 'compass:dist', 'imagemin']);
};

