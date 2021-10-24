// Include the AWS SDK module
const AWS = require('aws-sdk');
// Instantiate a DynamoDB document client with the SDK
let dynamodb = new AWS.DynamoDB.DocumentClient();
// Use built-in module to get current date & time
let date = new Date();
// Store date and time in human-readable format in a variable
let now = date.toISOString();
// Define handler function, the entry point to our code for the Lambda service
// We receive the object that triggers the function as a parameter
exports.handler = async (event) => {
   
    // Create JSON object with parameters for DynamoDB and store in a variable
    let params = {
        TableName:'HelloWorldDatabase',
         Key: {
            ID: '1'
          }
    };
    // Using await, make sure object writes to DynamoDB table before continuing execution
    let body = await dynamodb.get(params).promise();
    
    if(body && body.Item != undefined){ 
        const response = {
            statusCode: 200,
            body: body.Item.text
        }; 
        return response;
        
    }else{
        
        return{
            statusCode: 500,
            body: undefined
        };
    } 
};