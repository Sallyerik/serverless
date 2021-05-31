// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "56a6i2mr1nupspgtvmjt35m2km",     // CognitoClientID
  "api_base_url": "https://8tmon780tk.execute-api.ap-southeast-2.amazonaws.com/LAB",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-serverless.auth.ap-southeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1zr35b93e91y7.amplifyapp.com"                                      // AmplifyURL
};

export default config;
