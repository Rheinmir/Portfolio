pipeline {
    agent { label 'docker' }

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
                docker stop portfolio-docker || true
                docker rm portfolio-docker || true
                docker rmi portfolio-app || true

                docker build -t portfolio-app .
                docker run -d --name portfolio-docker -p 8080:80 portfolio-app
                """
            }
        }
    }
}


