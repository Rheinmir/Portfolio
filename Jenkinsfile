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
// docker run -d \
//   --name agent-docker \
//   --restart unless-stopped \
//   -v /var/run/docker.sock:/var/run/docker.sock \
//   -v agent_home:/home/jenkins/agent \
//   jenkins/inbound-agent \
//   -url http://host.docker.internal:8080 \
//   -workDir /home/jenkins \
//   e8ed4c6783e917dfed02bbe4a4ce3f194ad89c0709704863d6ef4351b8581742 \
//   agent-docker



