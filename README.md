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
            Link: <IP>:8080


The build stage uses the Docker task to build and push the image to the Azure Container Registry.

The deployment job uses the Kubernetes manifest task to create the imagePullSecret required by Kubernetes cluster nodes to pull from the Azure Container Registry resource. Manifest files are then used by the Kubernetes manifest task to deploy to the Kubernetes cluster.

# Links


https://github.com/dguer/fhwn19-node-app

https://fhwn19-node-app-02.azurewebsites.net/

http://52.157.87.137:8080/

