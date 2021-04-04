pipeline{
  agent any

  tools {nodejs "akbar-node"}

  environment{
    VERSION = "1.3.0"
  }

  stages{

    stage ('install modules'){
      steps{
        sh 'echo "hi"'
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
      echo "branch :  ${env.BRANCH_NAME}"
      echo "build id : ${BUILD_ID} ${env.BUILD_ID}"
      echo "build number: ${BUILD_NUMBER} ${env.BUILD_NUMBER}"
      echo "commit : ${GIT_COMMIT} ${env.GIT_COMMIT}"
      echo "version ${VERSION}"
    }
    failure {
      echo "build failed"
    }
  }
}
