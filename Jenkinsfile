pipeline {
    agent { label 'dockerlinux' }

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
                docker rmi portfolio || true
                docker build -t portfolio .
                docker run -d --name portfolio -p 1050:80 portfolio
                """
            }
        }
    }
}