pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Pull Source') {
            steps {
                sh 'git status'
            }
        }

        stage('Build & Deploy') {
            steps {
                sh """
                docker stop portfolio || true
                docker rm portfolio || true
                docker rmi portfolio-app || true

                docker build -t portfolio-app .
                docker run -d --name portfolio -p 8080:80 portfolio-app
                """
            }
        }
    }
}
