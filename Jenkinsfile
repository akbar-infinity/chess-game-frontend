pipeline{
  agent any

  tools {nodejs "nodejs:latest"}

  stages{

    // stage('Git') {
    //   steps {
    //     git url: 'https://github.com/akbar-infinity/chess-game-frontend.git',
    //       credentialsId: 'git-creds',
    //       branch: 'akbar'
    //   }
    // }

    stage ('install modules'){
      steps{
        sh '''
          npm config ls
        '''
        // sh 'npm adduser --registry http://oms.in:4873'
        sh 'npm install --verbose'
      }
    }
    stage ('test'){
      steps{
        sh '''
          npm test --browsers Chrome_no_sandbox
        '''
      }
      // post {
      //     always {
      //       junit "test-results.xml"
      //     }
      // }
    }
    stage ('code quality'){
      steps{
        sh 'npm run-script lint'
      }
    }
    stage ('build') {
      steps{
        sh 'npm run-script build --prod --build-optimizer'
      }
    }
  }
  // post {
  //   always {
  //     cleanWs()
  //   }
  // }
}
