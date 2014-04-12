module.exports = function(grunt) {

	grunt.initConfig({

		// Compiling Sass
		sass: {
			options: {
				paths: ["css"],
				ieCompat: false
			},
			dev: {
				dest: "dist/css/styles.min.css",
				src: "css/styles.sass"
			}
		},

		// Combining all JavaScript & CSS
		concat: {
			options: {
				separator: "\n"
			},
			js: {
				dest: "dist/js/app.min.js",
				src: [
					"js/app.js"
				]
			},
			css: {
				dest: "dist/styles.min.css",
				src: [
					"css/styles.css"
				]
			}
		},

		// Minifying CSS
		cssmin: {
			add_banner: {
				options: {
					banner: '/* Minified CSS */'
				},
				files: {
					'dist/css/styles.min.css': 'css/styles.css'
				}
			}
		},

		// Minifying JavaScript
		uglify: {
			options: {
				preserveComments: false,
				mangle: false
			},
			js: {
				dest: "dist/js/app.min.js",
				src: [
					"js/app.js"
				]
			}
		},

		// Watching files and folders for changes
		watch: {
			app: {
				files: ['css/**/*.sass', 'js/**/*.js'],
				tasks: ['sass', 'cssmin', 'uglify', 'concat'],
				options: {
					spawn: false
			   }
			}
		}
	});

	// Loading plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Registering plugins
	grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'concat', 'watch']);

};
