pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/walkman2006/Ecoreward.git'
            }
        }

        stage('Deploy to EC2') {
            steps {
                bat '''
                scp -i C:\\Users\\ttkis\\.ssh\\ec2-key.pem -o StrictHostKeyChecking=no -r * ubuntu@15.134.35.54:/var/www/html/
                '''
            }
        }
    }
}
