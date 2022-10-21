# Workshop

## Voraussetzungen

- [GitHub Account](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
- [Azure Account](https://portal.azure.com/)
  - [Credits für TT Devs](https://my.visualstudio.com) 
- Visual Studio Code
  - Powershell: winget install Microsoft.VisualStudioCode
  - [Download](https://code.visualstudio.com/download)
- [Azure Static Web App extension für VSCode](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps)
- Git
  - Powershell: winget install Git.Git
  - [Download](https://www.git-scm.com/downloads)  

## Repository

### Repository erstellen  
![grafik](https://user-images.githubusercontent.com/18726190/197127547-e376ccfb-4ea6-4a88-85ce-98278532650b.png)  

### Repository klonen
`git clone <Repository URL>`

## Static Web App erstellen

1. In VSCode klick auf ![grafik](https://user-images.githubusercontent.com/18726190/197128293-98b8e62d-54d7-45a0-9c74-45b38bce63ff.png)
2. "Sign in to Azure..."
3. Subscription Microsoft Azure Sponsorship öffnen
4. Rechtsklick auf __Static Web Apps__ und __Create Static Web App... (Advanced)__ auswählen
5. 
| Setting | Value |
| --- | --- |
| Ressource Group | TechDay |
| Name | Appname-Kürzel (fictional-happines-tschl) |
| Pricing option | Free |
| Region | West Europe |
| Build preset | Angular |
| Location Application Code | / |
| Location Api | api |
| Location Build output | dist/angular-basic |
  
### Microsoft Quickstart
[https://learn.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=angular](https://learn.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=angular)  

## Extended Self Learning

[Preview Deployments](https://learn.microsoft.com/en-us/azure/static-web-apps/review-publish-pull-requests)
[Azure AD Auth einschalten](https://learn.microsoft.com/en-us/azure/static-web-apps/authentication-authorization?tabs=invitations)


  
***  
***        

# Angular basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [Angular](https://angular.io/) apps in minutes. Use this repo with the [Angular quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=angular) to build and customize a new static site.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Project setup

```bash
npm install
```

### Start the dev server

```bash
npm run swa:start
```

> Note: This command will use the local configuration file `swa-cli.config.json`.

### Run unit tests

```bash
npm test
```

### Run e2e tests

```bash
npm run e2e
```

### Lints and fixes files

```bash
npm run lint
```

### Compiles and minifies for production

```bash
npm run build
```

### Login to Azure

```bash
npm run swa:login
```

### Deploy to Azure

```bash
npm run swa:deploy
```
