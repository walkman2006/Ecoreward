pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/walkman2006/Ecoreward.git'
            }
        }

        stage('Deploy to EC2') {
            steps {
                bat """
                rmdir /s /q node_modules 2>nul
                scp -i C:\\ProgramData\\Jenkins\\.ssh\\ec2-key.pem -o StrictHostKeyChecking=no -r * ubuntu@32.236.13.48:/var/www/html/
                """
            }
        }
    }
}
