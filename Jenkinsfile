pipeline{
  agent any

  tools {nodejs "akbar-node"}

  stages{

    stage ('install modules'){
      steps{
        sh 'npm config ls'
        sh 'npm install'
      }
    }

    stage ('test'){
      steps{
        sh 'npm test --watch=false --progress=false'
      }
    }

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
