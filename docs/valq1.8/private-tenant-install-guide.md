---
id: private-tenant-install-guide
title: ValQ Private Tenant Installation Guide
sidebar_label: ValQ1.8 Private Tenant Installation Guide
---

import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

## Introduction

### What is ValQ?

ValQ – Collaborate is a self-service business modelling software enabling users to instantly model, visualize, plan, simulate, & analyze business performance for making accelerated real-time decisions.

### Supported platforms

### System requirements

Following are the recommended system requirements:

1. Operating System - Windows Server 2012 or later
2. Processor - 2.4 GHz Quadcore or with similar CPU Performance
3. RAM- 16 GB

### Browser compatibility

1. Edge
2. Google Chrome
3. Mozilla Firefox
4. IE 11

### Databases

1. Microsoft SQL Server - Version 2016 or latest
2. MySQL Server - 5.6 or latest
3. Maria DB - 5.5 or latest

### Architecture

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Valq Private Tenant Architecture" src={useBaseUrl('/doc-images/valq1.8/ValQ-collaborate-Private_tenant-workflow-.png')} />
  </Zoom>
</div>

Architecture

The architecture diagram above describes the components involved in ValQ - Private tenant setup.

## Installation Prerequisites

### 1.  **Private Tenant - License Key**

- Go to your [ValQ-Account](https://valqdev.wpengine.com/my-account) and login with the Account credentials you received in the email
- Go to **Private Tenant** tab to view the **Product Subscription** details.
- Copy the **Key Code**. This is your **License key** that you will need in the **ValQ Management Console** [License Key](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#e7bf9ec65c9a43bea4c9caacd816b2a9) configuration section.
- **Tenant Info** section displays information about your *Plan, Expiry Date, Users Limit, and [](###Workspace)[Workspace limit](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#28ec36256e414757939376cc4940f084)*.  You can find information about your license on the Tenant Info section.

### 2. Database

The setup in this guide uses **MySQL** as the backend Database Server. Please refer the supported databases [here](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-Review-16ea0d50fd744c3cb9aa9010eb1ea11e#b394f88036d14bab83b28ac1c1dd0db4).

### 3. Office 365 App

Create an **Azure app** in your **Office 365 Tenant** for the **SSO configuration**

1. Login into your [Azure Portal](https://portal.azure.com) account
2. Click on **Manage Azure Active Directory** menu item
3. Click **App registrations** in the left sub menu
4. Click **New Registration** tab in the top left menu bar. 

![valq1.8/MicrosoftTeams-image_(5).png](valq1.8/MicrosoftTeams-image_(5).png)

Register a new app

- Enter an **Application name** to be displayed to the users
- In the section **Who can use this application, s**elect **Accounts in this organizational directory only**
- In the section **Redirect URI**
    - Select **Web**
    - Enter the **URL** of the **Virtual Machine** where we are going to install the **ValQ private tenant**.

    Note: Use the **https** protocol.

- Click **Register**

Azure AD assigns a unique application and client ID to your app. 

The portal opens your application's **Overview** page. 

Please do the below configuration from Azure Portal

- Authentication
    - Go to **Authentication > Implicit grant** section
    - Ensure that both the checkboxes **Access Tokens** and **ID tokens** are ticked.
- API permissions
    - Go to **API permissions**
    - In the **Microsoft Graph** API/Permission name, add
        1. openid
        2. profile
        3. User.Read

5. Go to the **Overview** section, copy and save the **Application (client) ID** and **Directory (tenant) ID**.

These 2 IDs are needed during **ValQ Management Console** configuration.

ValQ Private tenant uses https protocol and requires an SSL Certificate while configuration. 

## Installation

1. Download **ValQ Collaborate** by clicking on the download link mentioned in the mail sent to you upon a successful purchase.

    ![valq1.8/download_valq.png](valq1.8/download_valq.png)

2. Click on the **ValQ_Collaborate_1.8** Installer and *Run as administrator*

![valq1.8/valQ_installer.png](valq1.8/valQ_installer.png)

valQ_installer

3. Click **Next** to continue with the installation setup.

![valq1.8/Installation_setup.png](valq1.8/Installation_setup.png)

Installation Setup

4. Read and Accept the License Agreement

![valq1.8/3.License_Agreement.png](valq1.8/3.License_Agreement.png)

License Agreement

5 .Choose the **Installation Directory** path to install **ValQ**. Click **Next**.

![valq1.8/5.Installation_directory.png](valq1.8/5.Installation_directory.png)

Installation directory path

6. **ValQ Port Assignment**

- Enter the **ValQ Server HTTP Port**, default value is **80**
- Enter the **ValQ Server SSL Port**, default value is **443**
- Click **Next**

![valq1.8/valQ_port.png](valq1.8/valQ_port.png)

ValQ Port assignment

5. Enter **ValQ Management Server Port**. Click **Next**.

![valq1.8/val_management_server_port.png](valq1.8/val_management_server_port.png)

ValQ Management Server Port

6. Set the **ValQ Management Console Password**

![valq1.8/valq_management_console_passwd.png](valq1.8/valq_management_console_passwd.png)

ValQ Management Console Password

7. Click **Next** to start the installation process.

![valq1.8/9.Ready_to_install.png](valq1.8/9.Ready_to_install.png)

Ready_to_install

8.The average time to complete the installation process is approximately 10 minutes.

![valq1.8/installation_progress_bar.png](valq1.8/installation_progress_bar.png)

Installation progress bar

9. Click **Finish** to complete the installation.

![valq1.8/installation_wizard_completion.png](valq1.8/installation_wizard_completion.png)

finished_installing_valq

- The end of installation launches a **Readme File**, and **ValQ Management Console.**
- Click **Finish** and close the Readme file.
- **ValQ Management Console** login page is launched, close the page to complete the Certificate Configuration in the next section.

Installation Completed Checklist
- ValQ Server HTTP and SSL port assigment
- ValQ Management Server Port assignment
- Created password for ValQ Management Console
- ValQ Collaborate installed in the chosen installation directory path

![valq1.8/11.installed.png](valq1.8/11.installed.png)

ValQ installed

## Certificate Configuration

1.Update **Nginx configuration files**

- Go to the **{ValQ installation directory} ****on your machine
- Go to  **nginx > nginx > conf** folder
- Replace the **Nginx Server** existing *Security Certificate and KEY files with the [SSL Certificates](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#05752a892828439e8f368ab40cf841de) keys*
    - The new SSL certificate keys must be of the *same name and in the same format as the original server keys*
    - *The file should not contain Pass Phrase.*

![valq1.8/update_Nginx_conf_files.png](valq1.8/update_Nginx_conf_files.png)

Update_Nginx_conf_files

2.Restart the **Nginx Service**

- Go to **{ValQ installation directory} > nginx**
- Right click on **Manager-windows.exe** and r*un as administrator*

![valq1.8/open_manager_windows_nginx.png](valq1.8/open_manager_windows_nginx.png)

Nginx Manager window

- Go to **Manage Servers** tab
- Click on **Nginx** service
- Click on the **Restart** button on the right

![valq1.8/Nginx_restart.png](valq1.8/Nginx_restart.png)

- **Close** the **Manager-windows**

**Nginx** service has been restarted and the SSL certificates have been updated

## ValQ Management Console

- You can open the **ValQ Management Console** **Login Page** in 2 ways:
    - Open up the browser and type the URL: `[localhost/config](http://localhost/config)` or
    - Go to the **{ValQ installation directory} > ValQ Management Console**

![valq1.8/valq_management_console_launcher.png](valq1.8/valq_management_console_launcher.png)

- Enter the Management **[Console Password](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#75fb81e5092a4edab5201b6f858e4ad9)** that you created during installation process to login.

![valq1.8/ValQ_Management_Console.png](valq1.8/ValQ_Management_Console.png)

ValQ Management Console

This screen allows you to specify configurations for the **ValQ API**

![valq1.8/ValQ_Management_Console_welcome.png](valq1.8/ValQ_Management_Console_welcome.png)

Api_installer_welcome

- Click **Setup Configuration**

### Configuration Settings

### 1. License Key

Enter the **[License key](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#c693e77c0d5f4d7fbc6747d728107ce6)** in the text box area and click **Next**.

![valq1.8/License_key.png](valq1.8/License_key.png)

License_key

### 2. General Configuration

![valq1.8/general_configuration.png](valq1.8/general_configuration.png)

- Enter the **ValQ Server Public URL** and **Port** number.
- Choose the **Log level** as *info*, *war*, or *error*
- Enter your **Office 365 Tenant ID** generated in the **[Office 365 app](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#0ca6e78c8f7d48de8f6ab1ef2336801f)** section
- Enter your **Office 365 Client ID** generated in the **[Office 365 app](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#0ca6e78c8f7d48de8f6ab1ef2336801f)** section

Click **Save**.

### 3. Database Configuration

![valq1.8/Database_configuration.png](valq1.8/Database_configuration.png)

Database_configuration

- Select your **Database**
- Type the **Database Server Host**
- Type the **Database Server Port**
- Enter the **Database Server Username**
- Enter the **Database Server Password**
- Enter the **Database Name** that you created in your **Backend Server**

Click **Save**.

### 4. Redis Configuration

![valq1.8/Redis_configuration.png](valq1.8/Redis_configuration.png)

- Toggle the bar to Enable or disable **Redis Cache**
- Enter the **Redis Host**
- Enter the **Redis Port** number, default value is 6380
- Choose a **Redis Password**
- Click Submit

### 5. SMTP Configuration

![valq1.8/SMTP_configuration.png](valq1.8/SMTP_configuration.png)

SMTP configuration

- Turn on the **Enable SMTP**
- Enter the SMTP details- *SMTP Host, SMTP Port, Username, Password, Encryption, and Sender Email*
- Click **Submit** to save the SMTP settings.

### Instance Configuration

An **Instance** is a runtime environment of **ValQ Server.** 

You need at least one instance of ValQ Server to complete this configuration.

![valq1.8/instance_configuration.png](valq1.8/instance_configuration.png)

Instances configuration

Create an **Instance** to start an occurrence of the **ValQ** service.

- Enter an **Instance Port** number in the range: **3000**
- Click **Save**.

Note: As you create multiple instances, Instance Manager will load balance the system resources among each instance.

### Dashboard

![valq1.8/Dashboard.png](valq1.8/Dashboard.png)

Dashboard page

The **Dashboard** displays the details of the *Database, SMTP, Instance* Status and Port number.

### Workspace

1. Create a **Private Tenant Workspace** for the **ValQ Custom Visuals**
2. Go to **ValQ Management Console > Workspace > Create Workspace**

![valq1.8/Create_Workspace.png](valq1.8/Create_Workspace.png)

Create Workspace

- Enter the **Workspace Name**
- Enter **Workspace Administrator Name**
- Enter **Workspace Administrator Email**
- Enter **Company Domain**
- Click **Add**

 You can create any number of **Workspaces** and assign these workspaces to different **Users**.

Kindly refer the [Admin Console](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#47e408b76a0d482cbf995cc344480ed0) section for more details.

 The number of users you can add to the workspace is determined by the plan that you selected during the purchase.

![valq1.8/Workspace_created.png](valq1.8/Workspace_created.png)

Workspace screen

The **Instances** can be **Created, Edited or Deleted** from this portal.

![valq1.8/Instances.png](valq1.8/Instances.png)

Instances screen

 The configuration of **ValQ Server** is completed.

---

## Post Installation

### Admin Console- Login

1. Open the browser and type the **[Private Tenant URL](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#5db81f88a5ad4af1bcc1ceddcae74548)**

![valq1.8/Admin_Portal_login.png](valq1.8/Admin_Portal_login.png)

Admin Console Login

- Click on **Sign in with Microsoft**, and enter your **username** and **password**

![valq1.8/Microsoft_Sign_in.png](valq1.8/Microsoft_Sign_in.png)

Microsoft_Sign_in_username

![valq1.8/Microsoft_Sign_in_password.png](valq1.8/Microsoft_Sign_in_password.png)

Microsoft_Sign_in_password

- Click **Sign in**

2. Choose and click on the **Private Tenant** Workspace

![valq1.8/private-tenant-workspace.png](valq1.8/private-tenant-workspace.png)

Private-tenant-workspace selection

### Admin Console- Dashboard

The **Dashboard** gives details about the Workspace that your models will belong to.

- License Details
- Profile

If you belong to multiple Workspaces, the list of workspaces will be listed in the top **dropdown menu bar.**

You can switch between the Workspaces.

### User Manager

![valq1.8/user_manager.png](valq1.8/user_manager.png)

user_manager

**Admin** user is listed by default.

To add more Members:

- Click **Add Members.** Each member will be able to access the workspace based on the **Role** assigned, such as - **Admin** or **Member**
- Enter the **Email** and click **Add**
- Click on **Bulk Upload** to import many Members from a CSV file

You have created your **Private Tenant Workspace** and added the members. You will now be able to share the **ValQ Custom Visuals** Models with the assigned Members.

---

## ValQ Collaborate custom visual in Power BI Desktop

### Add ValQ to Organization Visuals

1. Go to the **[Power BI app](https://app.powerbi.com/)** login page

![valq1.8/PowerBI-app-adminConsole.png](valq1.8/PowerBI-app-adminConsole.png)

- Click on the three dots `...` > **Settings > Admin portal**

2. Select **Organization Visuals** and Click on **Add Organizational Visual**

![valq1.8/add_org-valq-visual.png](valq1.8/add_org-valq-visual.png)

Add ValQ to Organization visuals in Power BI

- **Browse** the [visual file with the ***.pbiviz** extension](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#ac916598d9fb4a7688969ef37ff9f57a) that you downloaded from the email link
- **Name** your visual
- Upload an **icon image**
- Write a **Description** about the visual
- Toggle the **access** to this visual across the users in the organization to be **enabled** or **disabled**
- Click **Add**

You have added **ValQ visuals** to your **Organization Visuals** list

### Create a Power BI report with ValQ

1. Go to **Power BI Desktop** application

2. Click on the **Visualizations** pane

![valq1.8/get-more-visuals.png](valq1.8/get-more-visuals.png)

Get ValQ visuals

- Click on the **three dots `...`** and then click **Get more visuals**.

3. Search for the **ValQ** visuals under **[My Organizations](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#cc422de3430b4bdbac6ed03da7d50b35)** tab, and click **add**.

![valq1.8/my-org.png](valq1.8/my-org.png)

Add ValQ from My Organization visuals list

### Assign data to ValQ

1. Click on **Get Data** and import the data for your business model.
- On a successful import, a **ValQ** icon is placed in the **Visualization** pane.
- Click on the **ValQ** icon and resize the **ValQ image** to fit the window area.

![valq1.8/valQ_resize.png](valq1.8/valQ_resize.png)

ValQ image resize

2. Select the data fields in the **Fields** pane on the right.

- Add measures to the values and data category.

login to private tenant workspace from Valq

![valq1.8/selectFields_login.png](valq1.8/selectFields_login.png)

ValQ Login to workspace

Click **Login** on the **Getting started with ValQ** pop window.

4. You will be navigated to your **Workspace**.

![valq1.8/Navigate_privateTenant.png](valq1.8/Navigate_privateTenant.png)

Navigate to the Workspace

Choose the Workspace

![valq1.8/choose_workspace.png](valq1.8/choose_workspace.png)

Select the Workspace

Workspace selected

![valq1.8/workspace_selected.png](valq1.8/workspace_selected.png)

Workspace selected

Congratulations!!! You are logged into your **Private Tenant Workspace**.

![valq1.8/PowerBI_mapped_to_workspace.png](valq1.8/PowerBI_mapped_to_workspace.png)

ValQ visual connected to the Private Tenant Workspace

Your **ValQ Custom Visuals** is now mapped to the backend **Workspace.** The custom visuals data will be loaded into the configured **Database Server**.

## What Next

Simulate your business model in **Power BI** with the **ValQ-Collaborate** visuals and enjoy the features:

![valq1.8/simulate_models.png](valq1.8/simulate_models.png)

BI model simulation in ValQ Collaborate

- Share your Reports in the Workspace with other members
- Comments and Annotations
- Audit Logs
- Scenario Collaboration
- Private Tenant

![valq1.8/AdminPortal_Models_shared.png](valq1.8/AdminPortal_Models_shared.png)

Shared Model scenarios in the Workspace

## Troubleshooting steps

## Un-installation

### Uninstall ValQ

1.Go to the **{ValQ installation path}** on your machine

2.Click the **Uninstall ValQ Collaborate** application and *run as administrator*

![valq1.8/Uninstall_valQ_installer.png](valq1.8/Uninstall_valQ_installer.png)

Uninstall_valQ_installer

3.Click **Yes** to confirm the deletion of **ValQ Collaborate**

![valq1.8/Uninstall_confirm.png](valq1.8/Uninstall_confirm.png)

Uninstall_confirm

4.Uninstallation **Setup** begins and may take few minutes to complete

![valq1.8/Uninstalling-Setup_progress.png](valq1.8/Uninstalling-Setup_progress.png)

Uninstalling-Setup_progress.png

6.Click **OK** to finish uninstalling **ValQ Server**

![valq1.8/Uninstallation_complete.png](valq1.8/Uninstallation_complete.png)

Uninstallation_complete

7.Restart the System.

### Post-uninstallation step

Delete the residual files

- Go to **ValQ installation path**
- Delete all the remaining files present in the folder.

![valq1.8/Delete_residual_files.png](valq1.8/Delete_residual_files.png)

Delete residual files

ValQ Server has been successfully uninstalled.

Go to the [Installation](https://www.notion.so/ValQ-Private-Tenant-Installation-Guide-9525981b1f0b407fa7cad823856e3f04#74dbb514c542437d89127db02fc1f362) section to begin the new installation of **ValQ Collaborate**