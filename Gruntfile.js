// Generated on 2015-10-29 using generator-angular-jade-stylus 0.8.7
'use strict';

module.exports = function (grunt) {

var glob = require('glob');
var shuffle = require('knuth-shuffle').knuthShuffle;
var serveStatic = require('serve-static');

function scriptsAndStylesheets () {
  var scripts = shuffle(glob.sync('**/*.js', { cwd: '.tmp' }));
  var styles = shuffle(glob.sync('**/*.css', { cwd: '.tmp' }));
  console.log('scripts', scripts, '\nstyles', styles);
  return { SCRIPTS: scripts, STYLES: styles };
}
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '**/*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // // Automatically inject Bower components into the app
    //
    // // Using wiredep instead
    //
    // bowerInstall: {
    //   target: {
    //     src: ['app/index.jade']
    //   }
    // },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['dist/*.html']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist/*',
            '!dist/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    concat: {
      server: {
        src: [
          'app/modules/**/*.js',
          '!app/modules/**/*_spec.js'
        ],
        dest: '.tmp/assets/javascripts/modules.js'
      },
      dist: {
        src: ['app/modules/**/*.js'],
        dest: 'dist/assets/javascripts/modules.js'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'concat:server',
        'stylus:server'
      ],
      dist: [
        'stylus:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9090,
        hostname: 'localhost',
        livereload: 35728,
        middleware: function(connect) {
          return [
            connect().use('/bower_components',
            serveStatic('./bower_components')),
            serveStatic('.tmp'),
            serveStatic('app')
          ];
        }
      },
      livereload: {
        options: {
          open: 'http://localhost:9090',
          base: [
            '.tmp',
            'app'
          ]
        }
      },
      test: {
        options: {
          open: false
        }
      },
      dist: {
        options: {
          base: 'dist'
        }
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      app: {
        files: [
          {
            cwd: 'app',
            dest: 'dist',
            expand: true,
            src: [
              'assets/images/favicon.ico',
              'robots.txt',
              'modules/**/*.{eot,ttf,woff}'
            ]
          }
        ]
      }
    },

    // The following *min tasks produce minified files in the dist folder
    cssmin: {
      options: {
        root: 'app'
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.html', '**/*.html'],
          dest: 'dist'
        }]
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          src: 'app/assets/images/**/*.{png,jpg,jpeg,gif}',
          dest: 'dist/assets/images'
        }]
      }
    },

    jade: {
      options: {
        doctype: 'html',
        pretty: true
      },
      main: {
        files: [
          {
            dest: '.tmp/index.html',
            src: 'app/index.jade'
          }
        ],
        options: {
          data: scriptsAndStylesheets
        }
      },
      others: {
        files: [{
          cwd: 'app',
          dest: '.tmp',
          expand: true,
          ext: '.html',
          src: 'modules/**/*.jade'
        }]
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js'
        ]
      }
    },

    // Test settings
    karma: {
      unit: {
        options: {
          configFile: 'karma.conf.js',
          // browsers: ['PhantomJS', 'Chrome'],
          singleRun: true
        }
      }
    },

    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            'dist/**/*.js',
            'dist/**/*.css',
            'dist/**/*.{png,jpg,jpeg,gif,webp,svg}',
            'dist/**/fonts/*'
          ]
        }
      }
    },

    stylus: {
      test: {
        options: {
          linenos: true,
          compress: false
        },
        files: {
          '.tmp/assets/styles/main.css': ['app/assets/styles/**/*.styl'],
          '.tmp/assets/styles/modules.css': ['app/modules/**/*.styl']
        }
      },
      server: {
        options: {
          compress: false
        },
        files: {
          '.tmp/assets/styles/main.css': ['app/assets/styles/**/*.styl'],
          '.tmp/assets/styles/modules.css': ['app/modules/**/*.styl']
        }
      },
      dist: {
        options: {
          compress: true
        },
        files: {
          '.tmp/assets/styles/main.css': ['app/assets/styles/**/*.styl'],
          '.tmp/assets/styles/modules.css': ['app/modules/**/*.styl']
        }
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'app/assets/images',
          src: '**/*.svg',
          dest: 'dist/assets/images'
        }]
      }
    },

    tags: {
      build: {
        src: ['app/modules/**/']
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: 'dist/index.html',
      options: {
        root: 'app',
        dest: 'dist',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['dist/**/*.html'],
      css: ['dist/styles/**/*.css'],
      options: {
        assetsDirs: ['dist']
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: 'bower.json',
        tasks: ['wiredep']
      },
      copy: {
        files: ['app/**', '!app/**/*.styl', '!app/**/*.jade']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      jade: {
        files: ['app/modules/**/*.jade', 'app/*.jade'],
        tasks: ['jade', 'wiredep:app']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.tmp/**/*.html',
          '.tmp/styles/**/*.css',
          '.tmp/**/*.js',
          'app/assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      stylus: {
        files: [
          'app/modules/**/*.styl',
          'app/assets/styles/**/*.styl'
        ],
        tasks: ['stylus:server', 'autoprefixer']
      }
    },

    wiredep: {
      app: {
        src: '.tmp/index.html',
        options: {
          ignorePath: /\.\./
        }
      }
    }
  });

  function serve (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }
    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'jade',
      'wiredep:app',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  }

  grunt.registerTask('serve', 'Compile then start a connect web server', serve);

  grunt.registerTask('test', [
    'clean:server',
    'stylus:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'jade',
    'wiredep:app',
    'autoprefixer',
    'ngmin',
    'cdnify',
    // 'cssmin',
    // 'uglify',
    'rev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
