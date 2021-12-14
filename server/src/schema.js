const { makeSchema, asNexusMethod } = require('nexus');

const { DateTimeResolver } = require('graphql-scalars');

const DateTime = asNexusMethod(DateTimeResolver, 'date');

const {Query} = require('./models');

const { UserMutation, UserType, UserInputType } = require('./models/User');

const schema = makeSchema({
	types: [
	  	Query,
		
		UserMutation,
		UserType,
		UserInputType,

		DateTime,
	],
	outputs: {
		schema: __dirname + '/../schema.graphql',
		typegen: __dirname + '/generated/nexus.ts',
	},
	sourceTypes: {
		modules: [
			{
				module: '@prisma/client',
				alias: 'prisma',
			},
		],
	},
});
  
module.exports = {
	schema: schema
};