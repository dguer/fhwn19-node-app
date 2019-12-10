# fhwn19-node-app

*Create a container registry
az acr create --resource-group fhwn19-node-app --name containerNoderApp --sku Basic

*Create a Kubernetes cluster
az aks create --resource-group fhwn19-node-app --name fhwn19-node-app --node-count 1 --enable-addons monitoring

