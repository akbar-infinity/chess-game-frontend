pipeline{
  agent any

  tools {nodejs "nodejs:latest"}

  stages{

    stage ('install modules'){
      steps{
        sh 'npm config ls'
        // sh 'npm install --verbose'
      }
    }

    // stage ('code quality'){
    //   steps{
    //     sh 'npm run-script lint'
    //   }
    // }

    // stage ('build') {
    //   steps{
    //     sh 'npm run-script build --prod --build-optimizer'
    //   }
    // }
  }
  post {
    always {
      cleanWs()
    }
  }
}
