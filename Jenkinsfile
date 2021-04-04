pipeline{
  agent any

  tools {nodejs "akbar-node"}

  environment{
    VERSION = "1.3.0"
  }

  stages{

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

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
      githubPRStatusPublisher buildMessage: message(failureMsg: githubPRMessage('Can\'t set status; build failed.'), successMsg: githubPRMessage('Can\'t set status; build succeeded.')), statusMsg: githubPRMessage('${GITHUB_PR_COND_REF}runended'), statusVerifier: allowRunOnStatus('SUCCESS'), unstableAs: 'FAILURE'
    }
    success {
      echo "build is successfull"
      echo "branch :  ${env.BRANCH_NAME}"
      echo "git branch ${GIT_BRANCH}"
      echo "build id : ${BUILD_ID} ${env.BUILD_ID}"
      echo "build number: ${BUILD_NUMBER} ${env.BUILD_NUMBER}"
      echo "commit : ${GIT_COMMIT} ${env.GIT_COMMIT}"
      echo "version ${VERSION}"
      sh "which curl"
      echo GIT_TOKEN

      withCredentials([
        usernamePassword(credentials: 'git-api-token', usernameVariable: USER, passwordVariable: PASSWD)
      ]) {
      sh '''
        curl "https://api.GitHub.com/repos/akbar-infinity/chess-game-frontend/statuses/$GIT_COMMIT?access_token=${PASSWD}" \
        -H "Content-Type: application/json" \
        -X POST \
        -d "{\"state\": \"success\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"http://206.189.129.97:8080/job/chess-app/$BUILD_NUMBER/console\"}"
      '''
      }


    }
    failure {
      echo "build failed"
      // withCredentials([
      //   usernamePassword(credentials: 'git-api-token', usernameVariable: USER, passwordVariable: PASSWD)
      // ]) {
      // sh '''
      //   curl "https://api.GitHub.com/repos/akbar-infinity/chess-game-frontend/statuses/${GIT_COMMIT}?access_token=${PASSWD}" \
      //   -H "Content-Type: application/json" \
      //   -X POST \
      //   -d "{\"state\": \"failure\",\"context\": \"continuous-integration/jenkins\", \"description\": \"Jenkins\", \"target_url\": \"http://206.189.129.97:8080/job/chess-app/$BUILD_NUMBER/console\"}"
      // '''
      // }

    }
  }
}
