/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {sortBy} from '../utils/jsUtils';
import {TagType, User, Tags} from './tags';

// *** ADDING DATA TO AZD GALLERY ****/
// Currently using Custom Issues on Repo 
// TODO: Define acceptable process for PR-based contributions

// *************** CARD DATA STARTS HERE ***********************
// Add your site to this list
// prettier-ignore
const Users: User[] = [

  //------- FEATURED TEMPLATES have 'featured' as a tag

  {
    title: 'WordPress with Azure Container Apps',
    description:
      'A blueprint to easily and quickly create and deploy your first scalable and secure WordPress site to Azure, leveraging Azure Container Apps with Azure Database for MariaDb.',
      preview: require('./images/apptemplate-wordpress-on-ACA.png'),
    website: 'https://github.com/kpantos',
    author: 'Konstantinos Pantos',
    source: 'https://github.com/Azure-Samples/apptemplate-wordpress-on-ACA',
    tags: ['featured','php','javascript','aca','agw','rediscache','monitor','keyvault', 'bicep'],
  },  
  {
    title: 'React Web App with C# API and MongoDB',
    description:
      'A blueprint for getting a React web app with a C# API and a MongoDB database on Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Bicep) to get up and running quickly.',
      preview: require('./images/todo-csharp.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-csharp-cosmos-sql',
    tags: ['featured','dotnetCsharp','typescript','javascript','appservice','cosmosdb','mongodb','monitor','keyvault','reactjs', 'bicep'],
  },
  {
    title: 'Rock, Paper, Orleans (RPO) - Distributed .NET',
    description:
      'Rock, Paper, Orleans (RPO) is a game built using dotnet, Orleans, and runs in Azure.The idea behind RPO is that you write a "player bot" in which you implement your player logic.',
      preview: require('./images/rock-paper-orleans.png'),
    website: 'https://rockpaperorleans.net/',
    author: 'Brady Gaster',
    source: 'https://github.com/bradygaster/RockPaperOrleans',
    tags: ['featured','dotnetCsharp','cosmosdb', 'aca', 'bicep'],
  },
  {
    title: 'Scalable Django on Azure App Service',
    description:
      'Deploy your Django web application with Microsoft Azure, for scale, using a cloud architecture with integrated monitoring and load testing.',
      preview: require('./images/pycon-django.png'),
    website: 'https://github.com/tonybaloney',
    author: 'Anthony Shaw',
    source: 'https://github.com/tonybaloney/django-on-azure',
    tags: ['featured', 'django','python', 'azuredb-postgreSQL', 'webapps','vnets', 'bicep'],
  },
  {
    title: 'React Web App with Node.js API and MongoDB',
    description:
      'A blueprint for getting a React web app with a Node.js API and a MongoDB database on Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Bicep) to get up and running quickly. This architecture is for hosting web apps and APIs without worrying about the infrastructure.',
      preview: require('./images/todo-nodejs-mongo.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-nodejs-mongo',
    tags: ['featured','bicep','nodejs','typescript','javascript','appservice','cosmosdb','monitor','keyvault', 'mongodb','reactjs'],
  },
  {
    title: 'Static React Web App + Functions with Node.js API and MongoDB',
    description:
      'A blueprint for getting a React web app with a Node.js API and a MongoDB database on Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Bicep) to get up and running quickly. This architecture is for hosting static web apps with serverless logic and functionality.',
      preview: require('./images/todo-nodejs-mongo-swa-func.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-nodejs-mongo-swa-func',
    tags: ['featured','bicep','swa','functions','nodejs','typescript','javascript','cosmosdb','monitor','keyvault', 'mongodb','reactjs', 'appservice'],
  },
  {
    title: 'Static React Web App + Functions with Python API and MongoDB',
    description:
      'A blueprint for getting a React.js web app with Python (FastAPI) API and a MongoDB API in Cosmos database onto Azure. The frontend, currently a ToDo application, is designed as a placeholder that can easily be removed and replaced with your own frontend code. This architecture is for hosting static web apps with serverless logic and functionality.',
      preview: require('./images/todo-python-mongo-swa-func.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-python-mongo-swa-func',
    tags: ['featured','bicep','swa','functions','python','typescript','javascript','cosmosdb','monitor','keyvault', 'mongodb','reactjs', 'appservice', 'fastapi'],
  },
  {
    title: 'React Web App with Python API and MongoDB',
    description:
      'A blueprint for getting a React.js web app with Python (FastAPI) API and a MongoDB API in Cosmos database onto Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Terraform) to get up and running quickly. This architecture is for hosting web apps and APIs without worrying about the infrastructure.',
      preview: require('./images/todo-python-terraform.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-python-mongo-terraform',
    tags: ['featured','python','typescript','javascript','cosmosdb','mongodb','monitor','keyvault', 'mongodb','reactjs', 'terraform', 'appservice', 'fastapi'],
  },
  {
    title: 'React Web App with Node.js API and MongoDB',
    description:
      'A blueprint for getting a React web app with a Node.js API and a MongoDB database on Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Terraform) to get up and running quickly. This architecture is for hosting web apps and APIs without worrying about the infrastructure.',
      preview: require('./images/todo-nodejs-mongo-terraform.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-nodejs-mongo-terraform',
    tags: ['featured','nodejs','typescript','javascript','cosmosdb','mongodb','monitor','keyvault', 'mongodb','reactjs', 'terraform', 'appservice'],
  },
  {
    title: 'React Web App with Python API and MongoDB',
    description:
      'A blueprint for getting a React.js web app with Python (FastAPI) API and a MongoDB API in Cosmos database onto Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Bicep) to get up and running quickly. This architecture is for hosting web apps and APIs without worrying about the infrastructure.',
      preview: require('./images/todo-python.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-python-mongo',
    tags: ['featured','bicep','python','typescript','javascript','appservice','cosmosdb','monitor','keyvault', 'mongodb','reactjs', 'fastapi'],
  },
  {
    title: 'Containerized React Web App with Node.js API and MongoDB',
    description:
      'A blueprint for getting a React web app with a Node.js API and a MongoDB database onto Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Bicep) to get up and running quickly. This architecture is for running containerized apps or microservices on a serverless platform   This architecture is for running containerized microservices without managing the servers.',
      preview: require('./images/todo-node-aca.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-nodejs-mongo-aca',
    tags: ['featured','bicep','nodejs','typescript','javascript','appservice','cosmosdb','monitor','keyvault', 'mongodb','reactjs', 'aca'],
  },
  {
    title: 'Containerized React Web App with Python API and MongoDB',
    description:
      'A blueprint for getting a React.js web app with Python (FastAPI) API and a MongoDB API in Cosmos database onto Azure. The frontend, currently a ToDo application, is designed as a placeholder that can easily be removed and replaced with your own frontend code. This architecture is for running containerized apps or microservices on a serverless platform.',
      preview: require('./images/todo-python-aca.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-python-mongo-aca',
    tags: ['featured', 'bicep','python','typescript','javascript','aca','cosmosdb','monitor','keyvault', 'mongodb','reactjs', 'fastapi'],
  },
  {
    title: 'React Web App with C# API and SQL Database ',
    description:
      'A blueprint for getting a React web app with a C# API and a SQL database on Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Bicep) to get up and running quickly.',
      preview: require('./images/todo-csharp-sql.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-csharp-sql',
    tags: ['featured', 'bicep','dotnetCsharp','typescript','javascript','appservice','azuresql','monitor','keyvault', 'mongodb','reactjs'],
  },
  {
    title: 'React Web App with Java API and MongoDB ',
    description:
      'A blueprint for getting a React.js web app with a Java API and a MongoDB database on Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Bicep) to get up and running quickly. This architecture is for hosting web apps and APIs without worrying about the infrastructure.',
      preview: require('./images/todo-java-mongo.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-java-mongo',
    tags: ['featured', 'bicep','java','typescript','appservice','cosmosdb','keyvault','monitor', 'mongodb','reactjs'],
  },
  {
    title: 'Containerized React Web App with Java API and MongoDB',
    description:
      'A blueprint for getting a React web app with a Java API and a MongoDB database on Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Bicep) to get up and running quickly. This architecture is for running containerized apps or microservices on a serverless platform.',
      preview: require('./images/todo-java-mongo-aca.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-java-mongo-aca',
    tags: ['featured', 'bicep','java','typescript','appservice','cosmosdb','keyvault','monitor', 'mongodb','reactjs'],
  },
  {
    title: 'Static React Web App + Functions with C# API and SQL Database',
    description:
      'A blueprint for getting a React web app with a C# API and a SQL database on Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Bicep) to get up and running quickly. This architecture is for hosting static web apps with serverless logic and functionality.',
      preview: require('./images/todo-csharp-sql-swa-func.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-csharp-sql-swa-func',
    tags: ['featured','bicep','swa','functions','dotnetCsharp','typescript','javascript','monitor','keyvault', 'reactjs', 'appservice', 'azuresql'],
  },
  {
    title: 'Kubernetes React Web App with Node.js API and MongoDB',
    description:
      'A blueprint for getting a React.js web app with a Node.js API and a MongoDB database on Azure. The blueprint includes sample application code (a ToDo web app) which can be removed and replaced with your own application code. Add your own source code and leverage the Infrastructure as Code assets (written in Bicep) to get up and running quickly. This architecture is for running Kubernetes clusters without setting up the control plane.',
      preview: require('./images/todo-nodejs-mongo-aks.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Dev',
    source: 'https://github.com/Azure-Samples/todo-nodejs-mongo-aks',
    tags: ['featured','bicep','nodejs','typescript','javascript','mongodb','monitor','keyvault', 'reactjs', 'appservice','cosmosdb','aks'],
  },
  {
    title: 'ChatGPT Plugin using Python (FastAPI)',
    description: 'This is a quickstart for creating a ChatGPT Plugin using Python and Azure.',
    preview: require('./images/chatgpt-plugin-python.png'),
    website:'https://github.com/Azure-Samples',
    author:'Azure Content Team',
    source: 'https://github.com/Azure-Samples/openai-plugin-fastapi',
    tags: ['featured', 'bicep','python','aca','cosmosdb','monitor', 'fastapi', 'ai'],
  }, 
  {
    title: 'ChatGPT + Enterprise Data with Azure OpenAI and Cognitive Search',
    description: 'A sample app for the Retrieval-Augmented Generation pattern running in Azure, using Azure Cognitive Search for retrieval and Azure OpenAI large language models to power ChatGPT-style and Q&A experiences.',
    preview: require('./images/chatgpt-enterprise-dotnet.png'),
    website:'https://github.com/Azure-Samples',
    author:'Azure Content Team',
    source: 'https://github.com/Azure-Samples/azure-search-openai-demo-csharp/',
    tags: ['featured', 'bicep','dotnetCsharp','aks', 'kubernetes','aca','cosmosdb','cognitivesearch', 'openai', 'chatgpt', 'rediscache', 'ai'],
  },
  {
    title: 'Simple Chat Application using Azure OpenAI',
    description: 'A sample chat app that uses Python and the Flask framework to stream ChatGPT completions as server-sent events to a simple frontend.',
    preview: require('./images/simplechat-azureopenai.png'),
    website:'https://github.com/Azure-Samples',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/chatgpt-quickstart',
    tags: ['featured', 'bicep','python','openai', 'chatgpt', 'ai', 'flask', 'aca']
  },

  //-------  ALL OTHER AZURE-SAMPLES HERE - how many do we want to feature?
  {
    title: 'Azure Health Data Services Toolkit Azure Function Quickstart',
    description:
      'This quickstart will walk you through creating a simple custom operation on top of the FHIR Service using Azure Functions. We will cover everything from deploying infrastructure, debugging locally, and deploying to Azure.',
      preview: require('./images/test.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/azure-health-data-services-toolkit-fhir-function-quickstart',
    tags: ['bicep','dotnetCsharp','ahds', 'fhir','appinsights','loganalytics', 'functions'],
  },
  {
    title: 'Enterprise-Grade Reference Architecture for JavaScript',
    description: 'A reference architecture and components for building enterprise-grade modern composable frontends (or micro-frontends) and cloud-native applications. It is a collection of best practices, architecture patterns, and functional components that can be used to build and deploy modern JavaScript applications to Azure.',
    preview: require('./images/enterprise-grade-reference-architecture-for-javascript.png'),
    website: 'https://github.com/Azure-Samples|https://github.com/anfibiacreativa',
    author: 'JavaScript Advocacy Team|Natalia Venditto',
    source: 'https://github.com/Azure-Samples/contoso-real-estate',
    tags: ['bicep', 'javascript', 'swa', 'aca', 'keyvault', 'blobstorage', 'azuredb-postgreSQL', 'cosmosdb', 'apim', 'enterprisepatterns']
  },
  

  //-------  ALL OTHER AZURE-SAMPLES HERE - how many do we want to feature?

  {
    title: 'Python (Django) Web App with PostgreSQL in VNet',
    description:
      'A restaurants review web app that uses whitenoise for static assets and PostgreSQL for the database. Ready for deployment on App Service with a PostgreSQL Flexible Server inside a VNet.',
      preview: require('./images/msdocs-django-postgresql-sample-app.png'),
    website: 'https://github.com/Azure-Samples',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/msdocs-django-postgresql-sample-app',
    tags: ['python','django', 'webapps', 'azuredb-postgreSQL', 'appservice','vnets'],
  },
  {
    title: 'Python (Django) Web App with PostgreSQL via Azure Container Apps',
    description:
      'A space tourism web app that uses PostgreSQL for the database. The web app is containerize and deploy with Azure Container Apps with secrets managed by Azure Key Vault',
      preview: require('./images/azure-django-postgres-aca.png'),
    website: 'https://github.com/Azure-Samples',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/azure-django-postgres-aca',
    tags: ['python','django', 'aca', 'azuredb-postgreSQL','bicep'],
  },
  {
    title: 'Python (Flask) Web App with PostgreSQL in VNet',
    description:
      'A restaurants review web app with a PostgreSQL database, written in the Python Flask framework plus SQL-Alchemy plus Alembic for database interactions. Ready for deployment on App Service with a PostgreSQL Flexible Server inside a VNet.',
      preview: require('./images/msdocs-flask-postgresql-sample-app.png'),
    website: 'https://github.com/Azure-Samples',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/msdocs-flask-postgresql-sample-app',
    tags: ['python','webapps', 'azuredb-postgreSQL', 'appservice','vnets','flask'],
  },
  {
    title: 'Microservices App - Dapr PubSub C# ACA ServiceBus',
    description:
      'A complete microservice application featuring Dapr Pub-Sub, deployed to Azure Container Apps and Azure Service Bus Topics with dead-lettering support.',
      preview: require('./images/test.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/pubsub-dapr-csharp-servicebus',
    tags: ['bicep','dotnetCsharp', 'aca', 'dapr','servicebus','aca'],
  },
  {
    title: 'Microservices App - Dapr PubSub Python ACA ServiceBus',
    description:
      'A complete microservice application featuring Dapr Pub-Sub, deployed to Azure Container Apps and Azure Service Bus Topics with dead-lettering support.',
      preview: require('./images/test.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/pubsub-dapr-python-servicebus',
    tags: ['bicep','python', 'aca', 'dapr','servicebus','aca'],
  },
  {
    title: 'Microservices App - Dapr PubSub Node.js ACA ServiceBus',
    description:
      'A complete microservice application featuring Dapr Pub-Sub, deployed to Azure Container Apps and Azure Service Bus Topics with dead-lettering support.',
      preview: require('./images/test.png'),
    website: 'https://github.com/Azure/azure-dev',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/pubsub-dapr-nodejs-servicebus',
    tags: ['bicep','javascript', 'nodejs', 'aca', 'dapr','servicebus','aca'],
  },
  {
    title: 'Microservices App - Dapr Bindings Cron C# ACA PostgreSQL',
    description:
      'Create microservice to demonstrate Dapr\'s bindings API to work with external systems as inputs and outputs. The service listens to input binding events from a system CRON and then outputs the contents of local data to a PostgreSQL output binding.',
      preview: require('./images/bindings-dapr-cron-postgres.png'),
      website: 'https://github.com/Azure-Samples',
      author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/bindings-dapr-csharp-cron-postgres',
    tags: ['dapr','dotnetCsharp','azuredb-postgreSQL','aca']
  },
  {
    title: 'Microservices App - Dapr Bindings Cron Python ACA PostgreSQL',
    description:
      'Create a microservice app to demonstrate Dapr\'s bindings API to work with external systems as inputs and outputs. The service listens to input binding events from a system CRON and then outputs the contents of local data to a postgreSQL output binding.',
      preview: require('./images/bindings-dapr-cron-postgres.png'),
      website: 'https://github.com/Azure-Samples',
      author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/bindings-dapr-python-cron-postgres',
    tags: ['dapr','python','azuredb-postgreSQL','aca']
  },
  {
    title: 'Microservices App - Dapr Bindings Cron Node.js ACA PostgreSQL',
    description:
      'Create a microservice app to demonstrate Dapr\'s bindings API to work with external systems as inputs and outputs. The service listens to input binding events from a system CRON and then outputs the contents of local data to a postgreSQL output binding.',
      preview: require('./images/bindings-dapr-cron-postgres.png'),
      website: 'https://github.com/Azure-Samples',
      author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/bindings-dapr-nodejs-cron-postgres',
    tags: ['dapr','nodejs','azuredb-postgreSQL','javascript','aca']
  },
  {
    title: 'Microservices App - Dapr Service Invoke Node.js ACA',
    description:
      'Create two microservices that communicate using Dapr\'s Service Invocation API. The Service Invocation API enables your applications to communicate reliably and securely by leveraging auto-mTLS and built-in retries.',
      preview: require('./images/svc-invoke-dapr.png'),
      website: 'https://github.com/Azure-Samples',
      author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/svc-invoke-dapr-nodejs',
    tags: ['dapr','nodejs','aca']
  },
  {
    title: 'Microservices App - Dapr Service Invoke Python ACA',
    description:
      'Create two microservices that communicate using Dapr\'s Service Invocation API. The Service Invocation API enables your applications to communicate reliably and securely by leveraging auto-mTLS and built-in retries.',
      preview: require('./images/svc-invoke-dapr.png'),
      website: 'https://github.com/Azure-Samples',
      author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/svc-invoke-dapr-python',
    tags: ['dapr','python','aca']
  },
  {
    title: 'Microservices App - Dapr Service Invoke C# ACA',
    description:
      'Create two microservices that communicate using Dapr\'s Service Invocation API. The Service Invocation API enables your applications to communicate reliably and securely by leveraging auto-mTLS and built-in retries.',
      preview: require('./images/svc-invoke-dapr.png'),
      website: 'https://github.com/Azure-Samples',
      author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/svc-invoke-dapr-csharp',
    tags: ['dapr','dotnetCsharp','aca']
  },
  {
    title: 'ChatGPT and Enterprise data with Azure OpenAI and Cognitive Search',
    description:
      'Demonstration of how to leverage Azure OpenAI and Cognitive Search to enable Information Search and Discovery over organizational content.',
      preview: require('./images/azure-search-openai-demo.png'),
    website: 'https://github.com/Azure-Samples',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/azure-search-openai-demo',
    tags: ['openai','chatgpt','cognitivesearch','python','typescript','bicep','nodejs', 'ai'],
  },
  {
    title: 'FastAPI on Azure Functions',
    description:
      'A simple FastAPI app deployed to Azure Functions. Can also be run and debugged locally with the Azure Functions Core Tool emulator.',
      preview: require('./images/fastapi-on-azure-functions.png'),
    website: 'https://github.com/Azure-Samples',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/fastapi-on-azure-functions',
    tags: ['python', 'fastapi', 'functions'],
  },

  //-------  ALL OTHER TEMPLATES go here, can be searched for by name
  {
    title: 'OpenAI Query based Summarization',
    description:
      'This repository contains a Python Notebook that shows you how easy it is to deploy and use Azure OpenAI along with Azure Cognitive Search, Azure Storage and Visual Studio Code to make sense of large amounts of data.',
      preview: require('./images/summarization-python-openai.png'),
    website: 'https://www.linkedin.com/in/rcarun/',
    author: 'Arun Chandrasekhar',
    source: 'https://github.com/Azure-Samples/summarization-python-openai',
    tags: ['featured','python', 'blobstorage', 'cognitivesearch', 'openai','azureai'],
  },
  {
    title: 'Spring PetClinic - Java Spring MySQL',
    description:
      'Spring PetClinic application using a set of Azure solutions. Azure App Service for app hosting, Azure Database for MySQL for storage, Azure Key Vault for securing secret and Azure Application Insights for monitoring and logging.',
      preview: require('./images/spring-petclinic-java-mysql.png'),
    website: 'https://github.com/wangmingliang-ms',
    author: 'Miller Wang',
    source: 'https://github.com/Azure-Samples/spring-petclinic-java-mysql',
    tags: ['java', 'appservice', 'azuresql', 'monitor','keyvault','appinsights','bicep','spring','thymeleaf'],
  },
  {
    title: 'Event Driven Java Application with Azure Service Bus on Azure Spring Apps',
    description:
      'A complete event-driven application that includes everything you need to build, deploy, and monitor an Azure solution. ',
      preview: require('./images/event-driven-spring-apps.png'),
    website: 'https://github.com/Azure-Samples/',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure-Samples/ASA-Samples-Event-Driven-Application',
    tags: ['java', 'servicebus', 'monitor','keyvault','azurespringapps','bicep','spring'],
  },
  {
    title: 'SAP Cloud SDK on Azure App Service Quickstart (TypeScript)',
    description:
      'This repos serves as quick-start project showcasing SAP Cloud SDK for JavaScript OData consumption running on Azure App Services. Its primary purpose is to set you up for success for your SAP extension project on Azure and reduce the lead time to your first successful deployment as much as possible with developer friendly commands.',
      preview: require('./images/app-service-javascript-sap-cloud-sdk-quickstart.png'),
    website: 'https://github.com/MartinPankraz|https://github.com/lechnerc77',
    author: 'Martin Pankraz|Christian Lechner',
    source: 'https://github.com/Azure-Samples/app-service-javascript-sap-cloud-sdk-quickstart',
    tags: ['typescript','nodejs', 'bicep', 'webapps', 'keyvault','appinsights','featured','nestjs','sap','sapcloudsdk'],
  },
  {
    title: 'Service Bus messages processing to Dataverse',
    description:
      'Starter solution to process Service Bus messages to Dataverse, C# for the Azure Functions app processing the messages, Azure Service Bus for the reception of the messages, and Azure Monitor for monitoring and logging.',
      preview: require('./images/servicebus-csharp-function-dataverse.jpg'),
    website: 'https://github.com/rpothin',
    author: 'Raphael Pothin',
    source: 'https://github.com/rpothin/servicebus-csharp-function-dataverse',
    tags: ['dotnetCsharp','functions', 'servicebus','monitor','keyvault','dataverse'],
  },
  {
    title: 'Simple Flask AZD',
    description:
      'A tiny, no-frills, template to deploy Python\'s Flask web framework to Azure App Service in the free tier.',
      preview: require('./images/simple-flask-azd.png'),
    website: 'https://github.com/tonybaloney',
    author: 'Anthony Shaw',
    source: 'https://github.com/tonybaloney/simple-flask-azd',
    tags: ['python', 'appservice', 'flask'],
  },
  {
    title: 'Function App - C# AI Text Summarize',
    description:
      'This sample shows how to take text documents as a input via BlobTrigger, does Text Summarization processing using the AI Congnitive Language service, and then outputs to another text document using BlobOutput binding.',
      preview: require('./images/test.png'),
    website: 'https://github.com/paulyuk',
    author: 'Paul Yuknewicz',
    source: 'https://github.com/Azure-Samples/function-csharp-ai-textsummarize',
    tags: ['functions','dotnetCsharp','azureai', 'bicep', 'ai'],
  },
  {
    title: 'Function App - Python AI Text Summarize',
    description:
      'This sample shows how to take text documents as a input via BlobTrigger, does Text Summarization processing using the AI Congnitive Language service, and then outputs to another text document using BlobOutput binding. Uses Azure Functions Python v2 programming model.',
      preview: require('./images/test.png'),
    website: 'https://github.com/paulyuk',
    author: 'Paul Yuknewicz',
    source: 'https://github.com/Azure-Samples/function-python-ai-textsummarize',
    tags: ['functions','python','azureai', 'bicep', 'ai'],
  },
  {
    title: 'Flask Container with CDN',
    description:
      'A simple photos website written with Python Flask and Bootstrap. Can be run locally with Docker and then deployed to Azure Container Apps with an Azure CDN in front.',
      preview: require('./images/flask-cdn-container-app.png'),
    website: 'https://github.com/pamelafox',
    author: 'Pamela Fox',
    source: 'https://github.com/pamelafox/flask-gallery-container-app',
    tags: ['python', 'flask', 'webapps', 'aca','azurecdn'],
  },
  {
    title: 'Flask Surveys Container App',
    description:
      'A survey app written with the Python Flask framework which uses Flask-SQLAlchemy with a PostgreSQL database. Can be developed locally with Docker Compose and then deployed to Azure Container Apps (using KeyVault SDK for Flask secrets).',
      preview: require('./images/flask-surveys-container-app.png'),
    website: 'https://github.com/pamelafox',
    author: 'Pamela Fox',
    source: 'https://github.com/pamelafox/flask-surveys-container-app',
    tags: ['python', 'flask', 'keyvault', 'aca','webapps','azuredb-postgreSQL'],
  },
  {
    title: 'Flask API on Azure Container Apps',
    description:
      'A simple JSON API using the Python Flask framework, designed for deployment on Azure Container Apps.',
      preview: require('./images/simple-flask-api-container.png'),
    website: 'https://github.com/pamelafox',
    author: 'Pamela Fox',
    source: 'https://github.com/pamelafox/simple-flask-api-container',
    tags: ['python', 'bicep', 'aca', 'flask'],
  },
  {
    title: 'FastAPI with API Management',
    description:
      'A FastAPI app deployed as a secured Azure Function with an API Management Policy in front, set up such that API calls require a subscription key but auto-generated documentation is publicly viewable. Project also includes 100% test coverage with Pytest plus a development workflow with ruff, isort, and black.',
      preview: require('./images/fastapi-azure-function-apim.png'),
    website: 'https://github.com/pamelafox',
    author: 'Pamela Fox',
    source: 'https://github.com/pamelafox/fastapi-azure-function-apim',
    tags: ['python', 'fastapi', 'functions', 'apim'],
  },
  {
    title: 'Flask Chart API on ACA and CDN',
    description:
      'A Charts API that renders PNGs of bar and pie charts, built with Python Flask, APIFlask, and matplotlib. Can be run locally with Docker and then deployed to Azure Container Apps with an Azure CDN in front.',
      preview: require('./images/flask-cdn-container-app.png'),
    website: 'https://github.com/pamelafox',
    author: 'Pamela Fox',
    source: 'https://github.com/pamelafox/flask-charts-api-container-app',
    tags: ['python', 'flask', 'webapps', 'aca','azurecdn'],
  },
  {
    title: 'Static Maps API Function and CDN',
    description:
      'A FastAPI app that renders map images for the given location. Deployed as a secured Azure function with an Azure CDN in front for caching.',
      preview: require('./images/staticmaps-function.png'),
    website: 'https://github.com/pamelafox',
    author: 'Pamela Fox',
    source: 'https://github.com/pamelafox/staticmaps-function',
    tags: ['python', 'functions', 'fastapi', 'monitor','azurecdn'],
  },
  {
    title: 'Jupyter Notebooks Web App on Azure Container Apps',
    description:
      'A web application used for hosting, sharing, and interacting with Jupyter Notebooks via Mercury, hosted on Azure Container Apps.',
      preview: require('./images/jupyter-mercury-aca.png'),
    website: 'https://github.com/savannahostrowski',
    author: 'Savannah Ostrowski',
    source: 'https://github.com/savannahostrowski/jupyter-mercury-aca',
    tags: ['python', 'bicep', 'webapps', 'aca','jupyter','datascience'],
  },
  {
    title: 'Python (Django) Web App with PostgreSQL and Key Vault',
    description:
      'A Python Django app on App Service with a PostgreSQL flexible server database. Database access is restricted to Azure IPs, and all administrative secrets are stored in Key Vault.',
      preview: require('./images/django-quiz-app.png'),
    website: 'https://github.com/pamelafox',
    author: 'Pamela Fox',
    source: 'https://github.com/pamelafox/django-quiz-app',
    tags: ['python', 'django', 'webapps', 'appservice', 'bicep', 'azuredb-postgreSQL', 'keyvault'],
  },
  {
    title: 'Reliable Web App Pattern for .NET',
    description: 'A multi-region enterprise web app with a 99.9% SLO and a focus on 12-factor apps and the well-architected framework. The sample app creates a concert booking application.',
    preview: require('./images/reliable-web-app-for-dotnet.png'),
    website: 'https://github.com/Azure',
    author: 'Azure Content Team',
    source: 'https://github.com/Azure/reliable-web-app-pattern-dotnet',
    tags: ['dotnetCsharp', 'bicep', 'appservice', 'keyvault', 'frontdoor', 'azuresql', 'appinsights', 'blobstorage', 'webapps', 'enterprisepatterns']
  },
  {
    title: 'FastAPI on Azure Container Apps',
    description:
      'A simple JSON API using the Python FastAPI app framework, designed for deployment on Azure Container Apps. Includes auto-configuration of gunicorn with uvicorn worker count based on CPUs available.',
    preview: require('./images/simple-fastapi-container.png'),
    website: 'https://github.com/pamelafox',
    author: 'Pamela Fox',
    source: 'https://github.com/pamelafox/simple-fastapi-container',
    tags: ['python', 'fastapi', 'bicep', 'aca'],
  },
  {
    title: 'Containerized Apps on Azure Kubernetes Service',
    description:
      'A base Azure Kubernetes Service template with placeholders to include the application source code (no application source code included) and Kubernetes manifest files.',
    preview: require('./images/basic-aks-template.png'),
    website: 'https://github.com/sabbour/',
    author: 'Ahmed Sabbour',
    source: 'https://github.com/sabbour/aks-app-template',
    tags: ['bicep', 'aks', 'kubernetes', 'keda', 'grafana', 'prometheus']
  },
];
// *************** CARD DATA ENDS HERE *******************




export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('featured'));
  return result;
}

export const sortedUsers = sortUsers();
