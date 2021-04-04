pipeline{
  agent any

  tools {nodejs "akbar-node"}

  stages{

    stage ('install modules'){
      steps{
        sh 'npm config ls'
        // sh 'npm install'
      }
    }

    // stage ('code quality'){
    //   steps{
    //     sh 'npm run-script lint'
    //   }
    // }

    // stage ('build') {
    //   steps{
    //     sh 'npm run-script build --prod --aot --build-optimizer'
    //   }
    // }
  }
  post {
    always {
      cleanWs()
    }
    success {
      echo "build is successfull"
      steps{
        sh 'echo "Hello"'
      }
    }
    failure {
      echo "build failed"
    }
  }
}
