pipeline {
    agent any

    stages {

        stage ('Build Docker Image') {
            steps {
                script {
                    dockerapp = docker.build("diegodias2000:${env.BUILD_ID}", '-f ./Dockerfile ./src')
                }
            }
        }

        stage ('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://registry.hub.docker.com", 'dockerhub') {
                        dockerapp.push('latest')
                        dockerapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }

        // stage ('Deploy Kubernetes') {
        //     environment {
        //         tag_version = "${env.BUILD_ID}"
        //     }
        //     steps {
        //         script {
        //             withKubeConfig([credentialsId: 'kubeconfig']) {
        //                 sh 'sed -i "s/{{TAG}}/$tag_version/g" ./aula4/kube-news/k8s/deployment.yaml'
        //                 sh 'kubectl apply -f ./aula4/kube-news/k8s/deployment.yaml'
        //             }
        //         }
                
        //     }

        // }

    }
}