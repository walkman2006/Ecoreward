pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/walkman2006/Ecoreward.git'
            }
        }

        stage('Deploy') {
            steps {
                bat """
                scp -i C:\\ProgramData\\Jenkins\\.ssh\\ec2-key.pem -o StrictHostKeyChecking=no -r * ubuntu@15.134.35.54:/home/ubuntu/app/
                """
            }
        }
    }
}
