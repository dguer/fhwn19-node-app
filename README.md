# fhwn19-node-app

- Create a container registry

az acr create --resource-group fhwn19-node-app --name containerNoderApp --sku Basic

-Create a Kubernetes cluster

az aks create --resource-group fhwn19-node-app --name fhwn19-node-app --node-count 1 --enable-addons monitoring

- Create new pipeline
-> select Deploy to Azure Kubernetes Service

-Show external IP
-> View Environments
    -> click to deployed app
        -> select services
            -> select & copy ecternal IP address
            Link: 52.157.87.137:8080

# Links


https://github.com/dguer/fhwn19-node-app

https://fhwn19-node-app-02.azurewebsites.net/

