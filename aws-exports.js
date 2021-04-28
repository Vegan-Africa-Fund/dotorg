import config from './config'

const amplifyConfig = {
    aws_appsync_region: "ap-south-1",
    aws_appsync_graphqlEndpoint: config.aws.GRAPHQL_ENDPOINT,
    aws_appsync_authenticationType: config.aws.AUTH_TYPE,
    aws_appsync_apiKey: config.aws.API_KEY
}

export default amplifyConfig;