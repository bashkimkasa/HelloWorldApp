var express = require('express')
    , app = express()
    , port = process.env.PORT || 8082
    , express_graphql = require('express-graphql')
    , { buildSchema } = require('graphql');

/**************************************************/
/********** GraphQL section - start ***************/
/**************************************************/
// GraphQL Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
var root = {
  message: () => 'Hello World!'
};

// Create  a GraphQL endpoint
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

/**************************************************/
/********** GraphQL section - end *****************/
/**************************************************/

module.exports = app;

app.listen(port, function() {
  console.log('Listening on port ' + port)
})
