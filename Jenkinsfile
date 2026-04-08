pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/walkman2006/Ecoreward.git'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh '''
                scp -o StrictHostKeyChecking=no -r * ubuntu@15.135.91.104:/var/www/html/
                '''
            }
        }
    }
}
