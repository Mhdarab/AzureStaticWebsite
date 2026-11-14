
# Azure Guided Projects

## Project Overview

This project demonstrates practical experience with Microsoft Azure cloud services, including hosting a static website, developing a serverless HTTP endpoint, managing access permissions, securing file sharing, monitoring costs, and using Azure CLI.

## Technologies Used

- Microsoft Azure
- Azure Blob Storage
- Azure Functions
- JavaScript and Node.js
- HTML
- Microsoft Entra ID
- Azure RBAC
- Azure Monitor
- Azure Cost Management
- Azure Cloud Shell and Azure CLI
- Git and GitHub

## 1. Static Website Hosting

Created an Azure Storage Account and enabled static website hosting using Azure Blob Storage.

Storage account: `azguidedsite2026`

Website:
https://azguidedsite2026.z1.web.core.windows.net/

## 2. Resource Tags and Locks

Organized Azure resources using tags and explored resource locks to protect resources from accidental deletion or modification.

## 3. Azure Functions

Created and deployed a serverless HTTP-triggered function using JavaScript and Node.js.

Function App: `azure-node-demo2026`

The function accepts a name and returns a JSON greeting response.

## 4. Microsoft Entra ID and RBAC

Created a test user in Microsoft Entra ID and assigned the Reader role at the resource group level.

This demonstrates the principle of least privilege.

## 5. Secure File Sharing

Created a private Blob Storage container named `secure-files`.

Uploaded `azure-test.txt` and generated a time-limited SAS URL with read-only permissions and HTTPS access.

## 6. Azure Cost Management

Explored Azure cost analysis and configured a monthly budget of €5 with an alert at 80% of the budget.

## 7. Azure Monitoring

Used Azure Activity Logs to inspect resource operations and Azure Monitor Metrics to view HTTP requests to the Function App.

## 8. Azure CLI

Used Azure Cloud Shell to manage and inspect resources.

Commands used:

```bash
az account show
az group list --output table
az resource list --resource-group rg-azure-guided-projects --output table
```

## Conclusion

This project helped me understand how Azure cloud services work together, from application hosting and serverless computing to security, cost management, monitoring, and command-line administration.



## Preparation Questions

### 1. What is an Azure resource?

An Azure resource is a service or component that we create and manage in Microsoft Azure, such as a virtual machine, storage account, or Function App.

In this project, I created several Azure resources and organized them inside a resource group.

### 2. What is Azure Blob Storage used for?

Azure Blob Storage is used to store unstructured data, such as images, documents, videos, and website files.

In my project, I used Blob Storage to host a static HTML website and store a private text file.

### 3. Why is it important to manage access permissions in a cloud environment?

Managing access permissions is important because it protects cloud resources from unauthorized access and accidental changes.

Using Microsoft Entra ID and Azure RBAC, I assigned the Reader role to a test user so they could view resources without modifying them.

### 4. What is the purpose of resource tags and locks?

Tags help organize Azure resources by adding information such as project name, environment, or owner.

Locks protect resources from accidental deletion or modification.

Both features make cloud resource management easier and safer.

### 5. Why is monitoring important in Azure?

Monitoring helps us understand how Azure services are performing and identify problems.

In this project, I used Azure Activity Logs to review resource operations and Azure Monitor Metrics to check HTTP requests to my Function App.

### 6. What is the difference between managing Azure through the portal and using Azure CLI?

Azure Portal provides a graphical interface where users can manage resources by clicking through menus.

Azure CLI allows users to manage Azure using commands. It is especially useful for automation and repetitive tasks.

During this project, I used both methods to manage and inspect my Azure resources.

### 7. Which guided project did you find most interesting, and why?

The Azure Functions project was the most interesting to me because I could write JavaScript code and deploy it to the cloud.

I also connected my static website to the Azure Function using an HTTP request. It was interesting to see how the frontend and backend communicate through Azure.

This experience helped me understand serverless computing and how cloud applications work in practice.
