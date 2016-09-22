### 3. Specify a destination location

1. In the **Select restore instance** screen specify details of where to restore the virtual machine.

  - Specify the virtual machine name: In a given cloud service, the virtual machine name should be unique. We don't support over-writing existing VM. 
  - Select a cloud service for the VM: This is mandatory for creating a VM. You can choose to either use an existing cloud service or create a new cloud service.

        Whatever cloud service name is picked should be globally unique. Typically, the cloud service name gets associated with a public-facing URL in the form of [cloudservice].cloudapp.net. Azure will not allow you to create a new cloud service if the name has already been used. If you choose to create select create a new cloud service, it will be given the same name as the virtual machine – in which case the VM name picked should be unique enough to be applied to the associated cloud service.

        We only display cloud services and virtual networks that are not associated with any affinity groups in the restore instance details. [Learn More](../virtual-network/virtual-networks-migrate-to-regional-vnet.md).

2. Select a storage account for the VM: This is mandatory for creating the VM. You can select from existing storage accounts in the same region as the Azure Backup vault. We don’t support storage accounts that are Zone redundant or of Premium storage type.





    this should be code
    
    
```
explicit code
```



        code block 1

# heading


    code block 2
    
    
# heading

- list
  
    code under list

- list

      code under list 2

- list

        code under list 3

