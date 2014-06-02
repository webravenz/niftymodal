module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      compile: {
        options: {
          paths: ["css"],
          cleancss: true
        },
        files: {
          "niftymodal.css": "css/main.less"
        }
      }
    },
    watch: {
      css: {
        files: ['css/*.less'],
        tasks: ['less']
      }
    }
//    uglify: {
//      app: {
//        files: {
//          'js/folio.js': ['js/libs/jquery.js', 'js/libs/underscore-min.js', 'js/libs/backbone-min.js', 'js/libs/mustache.js', 'js/libs/jquery.bxslider.js', 'js/models/Projet.js', 'js/views/ProjetView.js', 'js/views/Diapo.js', 'js/pages/Page.js', 'js/pages/Home.js', 'js/pages/CV.js', 'js/pages/Games.js', 'js/pages/Works.js', 'js/App.js', 'js/main.js']
//        }
//      }
//    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
//  grunt.loadNpmTasks('grunt-contrib-uglify');

};