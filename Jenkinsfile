pipeline{
  agent any

  tools {nodejs "nodejs:latest"}

//   node {

//     git url: 'https://github.com/spring-projects/spring-petclinic.git'

//     // install Maven and add it to the path
//     env.PATH = "${tool 'M3'}/bin:${env.PATH}"

//     configFileProvider(
//         [configFile(fileId: 'maven-settings', variable: 'MAVEN_SETTINGS')]) {
//         sh 'mvn -s $MAVEN_SETTINGS clean package'
//     }

// }


  stages{
    stage('Git') {
      steps {
        git url: 'https://github.com/akbar-infinity/chess-game-frontend.git',
          credentialsId: 'git-creds',
          branch: 'akbar'
      }
    }

    node('LINUX_GENERAL') {
      stage ('registry set') {
        configFileProvider([configFile(fileId: '82c746e0-1479-472e-a05e-71d644c75102', variable: 'npm_config_registry')]) {
            // some block
            echo " =========== ^^^^^^^^^^^^ Reading config from pipeline script "
            sh "cat ${env.npm_config_registry}"
            echo " =========== ~~~~~~~~~~~~ ============ "
        }
      }
    }


    stage ('install modules'){
      steps{
        sh '''
          npm config set regisry https://registry.npmjs.org
          npm config ls
          npm install --verbose
        '''
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
  post {
    always {
      cleanWs()
    }
  }
}
