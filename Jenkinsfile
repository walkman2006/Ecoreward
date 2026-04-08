pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/walkman2006/Ecoreward.git'
            }
        }

        stage('List Files') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Build') {
            steps {
                echo 'Build step (for future use)'
            }
        }
    }
}
