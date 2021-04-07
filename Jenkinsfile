pipeline{
  agent any

  tools {nodejs "akbar-node"}

  environment{
    VERSION = "1.3.0"
    ORG = "akbar-infinity"
    APP_NAME = "chess-game-frontend"
  }

  stages{

    // stage('Checkout') {
    //   steps {
    //     checkout scm
    //   }
    // }

    stage ('install modules'){
      steps{
        sh 'npm install --verbose'
      }
    }

    stage ('code quality'){
      steps{
        sh "npm run-script sonar-scanner -- " +
        "-Dsonar.host.url=http://103.141.116.112:9000 " +
        "-Dsonar.login=admin " +
        "-Dsonar.password=Akbar@123 " +
        "-Dsonar.projectKey=${env.ORG}_${env.APP_NAME} " +
        "-Dsonar.projectName=${env.APP_NAME} " +
        "-Dsonar.projectVersion=1.0 " +
        "-Dsonar.sourceEncoding=UTF-8 " +
        "-Dsonar.sources=src " +
        "-Dsonar.exclusions=**/node_modules/** " +
        "-Dsonar.tests=src " +
        "-Dsonar.test.inclusions=**/*.spec.ts " +
        "-Dsonar.typescript.lcov.reportPaths=coverage/lcov.info " +
        "-Dsonar.pullrequest.base=master " +
        "-Dsonar.pullrequest.branch=${env.BRACH_NAME} " +
        "-Dsonar.pullrequest.key=${env.CHANGE_ID} " +
        "-Dsonar.pullrequest.provider=github " +
        "-Dsonar.pullrequest.github.repository=${env.ORG}/${env.APP_NAME} " +
        "-Dsonar.pullrequest.github.endpoint=https://github.com"
      }
    }

    stage ('build') {
      steps{
        sh 'npm run-script build -- --prod --aot --build-optimizer'
      }
    }
  }

  post {

    success {
      echo "build is successfull"
      echo "branch :  ${env.BRANCH_NAME}"
      echo "git branch ${GIT_BRANCH}"
      echo "build id : ${BUILD_ID} ${env.BUILD_ID}"
      echo "build number: ${BUILD_NUMBER} ${env.BUILD_NUMBER}"
      echo "commit : ${GIT_COMMIT} ${env.GIT_COMMIT}"
      echo "version ${VERSION}"
    }

    failure {
      echo "build failed"
    }

    always {
      cleanWs()
    }
  }
}
