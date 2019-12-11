pipeline {
    agent any
    environment {
        repo_path = '$(basename $PWD)'
        dev_branch = 'streak2'
        prod_branch  = 'master'
        folder_name = 'Frex'
        workspace_dir = 'Frex/gamification-claim-rewards'
        private_ip = '10.20.1.11'
    }
    stages {
        stage('Sync') {
            steps {
                script{
                    echo "branch..." + env.GIT_BRANCH
                    sh 'ssh ubuntu@${private_ip} "rm -rf ${folder_name}; mkdir ${folder_name};"'
                    sh 'ssh ubuntu@${private_ip} "cd ${folder_name}; git clone git@gitlab-cgi.stackroute.in:cgi-wave14/gamification-claim-rewards.git;"'
                    if(env.GIT_BRANCH == dev_branch){
                        echo 'development...'
                        sh 'ssh ubuntu@${private_ip} "cd ${workspace_dir}; git checkout ${dev_branch}"'
                    }
                    if(env.GIT_BRANCH == prod_branch){
                        echo 'production...'
                        sh 'ssh ubuntu@${private_ip} "cd ${workspace_dir}; git checkout ${prod_branch}"'
                    }
                }
            }
        }
        stage('Set Up') {
            steps {
                script{
                    if(env.GIT_BRANCH == dev_branch){
                        sh 'ssh ubuntu@${private_ip} "cd ~/${workspace_dir}; source build-script.sh"'
                    }
                    if(env.GIT_BRANCH == prod_branch){
                        sh 'ssh ubuntu@${private_ip} "cd ~/${workspace_dir}; source build-script.sh"'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script{
                    if(env.GIT_BRANCH == dev_branch){
                        sh 'ssh ubuntu@${private_ip} "cd ~/${workspace_dir}; source test-script.sh"'
                    }
                    if(env.GIT_BRANCH == prod_branch){
                        sh 'ssh ubuntu@${private_ip} "cd ~/${workspace_dir}; source test-script.sh"'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script{
                    echo env.GIT_BRANCH
                    if(env.GIT_BRANCH==prod_branch){
                        sh 'ssh ubuntu@10.20.1.11 "cd ~/${workspace_dir}; source deploy-script.sh"'
                    }
                }
            }
        }
        stage('Status Check') {
            steps {
                script{
                    echo env.GIT_BRANCH
                    if(env.GIT_BRANCH==prod_branch){
                        sh 'ssh ubuntu@10.20.1.11 "cd ~/${workspace_dir}; source deployStatus-script.sh"'
                    }
                }
            }
        }
    }
}
