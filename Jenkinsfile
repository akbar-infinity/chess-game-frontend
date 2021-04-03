pipeline{
  agent any

  tools {nodejs "nodejs:latest"}

  stages{
    stage('Git') {
      steps {
        git url: 'https://github.com/akbar-infinity/chess-game-frontend.git',
          credentialsId: 'git-creds',
          branch: 'akbar'
      }
    }
    stage ('install modules'){
      steps{
        sh '''
          npm config set regisry https://registry.npmjs.org
          npm install
        '''
      }
    }
    stage ('test'){
      steps{
        sh '''
          $(npm bin)/ng test --single-run --browsers Chrome_no_sandbox
        '''
      }
      post {
          always {
            junit "test-results.xml"
          }
      }
    }
    stage ('code quality'){
      steps{
        sh '$(npm bin)/ng lint'
      }
    }
    stage ('build') {
      steps{
        sh '$(npm bin)/ng build --prod --build-optimizer'
      }
    }
    // stage ('build image') {
    //   steps{
    //     sh '''
    //       rm -rf node_modules
    //       oc start-build angular-5-example --from-dir=. --follow
    //     '''
    //   }
    // }
  }
  post {
    always {
      cleanWs()
    }
  }
}
