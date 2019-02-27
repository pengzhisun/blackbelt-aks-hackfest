function kubeJobRunner (config, k) {
    k.storage.enabled = false
    k.image = "lachlanevenson/k8s-kubectl:v1.8.2"
    k.tasks = [
        `echo brigade job running...`,
        `kubectl get nodes`,
        `kubectl set image deployment/heroes-web-deploy heroes-web-cntnr=pensuncb19acr.azurecr.io/azureworkshop/rating-web:${config.get("imageTag")}`
    ]
}
