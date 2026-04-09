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
                sh """
                rm -rf node_modules
                scp -i /home/ubuntu/ec2-key.pem -o StrictHostKeyChecking=no -r * ubuntu@32.236.13.48:/var/www/html/
                """
            }
        }
    }
}
