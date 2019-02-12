[s](http:google.com?ref=a)


<a href="feedback-hub:?ref=a">hf</a>


a<nolock>aa</nolock>b


[Link to space](file with space)
[Link to space](file_without_space)

#### Restrict Access to Specific Domains 
If your organization does not allow the ports and protocols to be open to all addresses on the firewall between the active software update point and the Internet, you can restrict access to the following domains, so that WSUS and Automatic Updates can communicate with Microsoft Update: 

- http://windowsupdate.microsoft.com

- http://*.windowsupdate.microsoft.com 

- https://*.windowsupdate.microsoft.com 

- http://*.update.microsoft.com 

- https://*.update.microsoft.com 



<span data-ttu-id="9fe5e-101">*a</span><span class="sxs-lookup"><span data-stu-id="9fe5e-101">*a</span></span>

<span data-ttu-id="9fe5e-102">**a</span><span class="sxs-lookup"><span data-stu-id="9fe5e-102">**a</span></span>


### <a id="debug"></a> <span data-ttu-id="63d19-309">Debuggen und Diagnose</span><span class="sxs-lookup"><span data-stu-id="63d19-309">Debugging and Diagnostics</span></span>
#### <a name="cpu-usage-tool"></a><span data-ttu-id="63d19-310">CPU-Auslastungstool</span><span class="sxs-lookup"><span data-stu-id="63d19-310">CPU Usage Tool</span></span>
<a id="#diagnostics3"></a><span data-ttu-id="63d19-311">Das CPU-Auslastungstool kann logische Aufruflisten für asynchronen Code anzeigen (auch bekannt als „Async Call Stack Stitching“ (Asynchrones Zusammenfügen von Aufruflisten)) *(Abbildung 8)*.</span><span class="sxs-lookup"><span data-stu-id="63d19-311">The CPU Usage tool can display logical call stacks for asynchronous code (aka 'Async Call Stack Stitching') *(Figure 8)*.</span></span> 
* <span data-ttu-id="63d19-312">Um logische Aufruflisten (also „zusammengefügte Aufruflisten“) anzuzeigen, aktivieren Sie die Einstellung „Asynchronen Code zusammenfügen“ im Dropdown-Filtermenü des CPU-Auslastungstools.</span><span class="sxs-lookup"><span data-stu-id="63d19-312">To see logical call stacks (i.e. 'stitched call stacks'), turn on the "Stitch Async Code" setting in the Filter drop-down menu of the CPU Usage tool.</span></span>
* <span data-ttu-id="63d19-313">Asynchroner Code, der für eine übergeordnete Funktion oder einen übergeordneten Task ausgeführt wird, wird als untergeordnetes Element in der Aufrufstruktur und in der Anzeige des Aufrufers/Aufgerufenen angezeigt.</span><span class="sxs-lookup"><span data-stu-id="63d19-313">Asynchronous code running on behalf of a parent function or Task will appear as a child in the Call Tree and Caller/Callee views.</span></span> 
* <span data-ttu-id="63d19-314">Diese Änderung erleichtert das Navigieren von asynchronem Code und das Verstehen seiner Leistungsmerkmale.</span><span class="sxs-lookup"><span data-stu-id="63d19-314">This change makes it easier to navigate asynchronous code and understand its performance characteristics.</span></span>
  
  > [!NOTE]
  > <span data-ttu-id="63d19-315">Dieses Feature kann für die Erstellung der logischen Aufruflisten für einige asynchrone Codemuster eine ganze Weile brauchen.</span><span class="sxs-lookup"><span data-stu-id="63d19-315">This feature can take a long time to produce the logical call stacks for some async code patterns.</span></span> <span data-ttu-id="63d19-316">Sie können die Analyse abbrechen und wenn nötig die Einstellung deaktivieren.</span><span class="sxs-lookup"><span data-stu-id="63d19-316">You can cancel the analysis and turn off the setting if necessary.</span></span>
  > <span data-ttu-id="63d19-317">Dieses Verhalten ist nur während der nachträglichen Formatprofilerstellung über die Startseite des Leistungsprofilers (ALT+F2) verfügbar.</span><span class="sxs-lookup"><span data-stu-id="63d19-317">This behavior is only available during post-mortem style profiling using the ALT-F2 Performance Profiler launch page.</span></span> <span data-ttu-id="63d19-318">Wenn das CPU-Auslastungstool während des Debugvorgangs verwendet wird, zeigt es keine logischen Aufruflisten an.</span><span class="sxs-lookup"><span data-stu-id="63d19-318">When the CPU Usage tool is used during debugging, it does not shows logical call stacks.</span></span>

<figure><center><img src="media/CPUUsage_CallStackStitching.png" alt="Logical Call Stack Tree with Call Stack Stitching in effect"><figcaption><span data-ttu-id="63d19-319"><em>(Abbildung 8) Struktur der logischen Aufrufliste mit aktivierter Aufruflistenzusammenfügung</em></span><span class="sxs-lookup"><span data-stu-id="63d19-319"><em>(Figure 8) Logical Call Stack Tree with Call Stack Stitching in effect</em></span></span></figcaption></center></figure><span data-ttu-id="63d19-320">

<a id="#diagnostics"></a> Das CPU-Auslastungstool (verfügbar über das Fenster „Diagnosetools“ während des Debuggens mit F5 und im Leistungsprofiler über ALT+F2) zeigt nun eine Quellzeilenhervorhebung basierend auf der CPU-Nutzung von bestimmten Codezeilen an *(Abbildung 9)*.</span><span class="sxs-lookup"><span data-stu-id="63d19-320">

<a id="#diagnostics"></a> The CPU Usage tool (available during F5 Debugging in the Diagnostic Tools window and in the ALT-F2 Performance Profiler) now displays source line highlighting based on the CPU consumption of specific lines of code *(Figure 9)*.</span></span>  
  
* <span data-ttu-id="63d19-321">Wenn Sie die Ansichten „Aufrufstruktur“ oder „Aufrufer/Aufgerufener“ des CPU-Auslastungstools anzeigen, wird die ausgewählte Funktion mit der CPU-Nutzung angezeigt, die für jede Quellzeile der Funktion gilt.</span><span class="sxs-lookup"><span data-stu-id="63d19-321">When you view the Call Tree or Caller/Callee views of the CPU Usage tool, the source for the selected function is displayed with CPU consumption indicated on each source line of the function.</span></span>  
* <span data-ttu-id="63d19-322">Wenn die CPU-Leistung einer Funktion bedenklich ist, können Sie nun genau bestimmen, welche Quellzeilen der Funktion die CPU-Auslastung verursacht haben, als die Funktion ausgeführt wurde.</span><span class="sxs-lookup"><span data-stu-id="63d19-322">If CPU performance of a function is a concern, now you can determine specifically what source lines of the function are responsible for the CPU consumption when the function was executing.</span></span>  
  
  

This is a test **Translatable Content** without brackets and with spaces on both ends

This is a test **[Translatable Content]** with brackets and with spaces on both ends

This is a test**Translatable Content**without brackets and without spaces on both ends

This is a test **[Translatable Content]** with brackets and without spaces on both ends

This is a test **Translatable Content**without brackets and with a space before the tag

This is a test **[Translatable Content]** with brackets and with a space before the tag

This is a test**Translatable Content** without brackets and with a space after the tag

This is a test **[Translatable Content]** with brackets and with a space after the tag

This is a test without brackets and with a space before the tag (no text after tag) **Translatable Content**

This is a test with brackets and with a space before the tag (no text after tag) **[Translatable Content]**

This is a test without brackets and without spaces before the tag (no text after tag)**Translatable Content**

This is a test with brackets and without spaces before the tag (no text after tag)**[Translatable Content]**

**Translatable Content** This is a test without brackets and with a space after the tag (no text before tag)

**[Translatable Content]** This is a test with brackets and with a space after the tag (no text before tag)

**Translatable Content**This is a test without brackets and without spaces after the tag (no text before tag)

**[Translatable Content]** This is a test with brackets and without spaces after the tag (no text before tag)

This is a test without brackets and with a space before the tag (period after tag) **Translatable Content**.

This is a test with brackets and with a space before the tag (period after tag) **[Translatable Content]**.

This is a test without brackets and without spaces before the tag (period after tag)**Translatable Content**.

This is a test with brackets and without spaces before the tag (period after tag)**[Translatable Content]**.

This is a test with Japanese content, without brackets and without spaces before the tag (Japanese period after tag) これはテストであり、**Translatable Content**。

This is a test with Japanese content, with brackets and without spaces before the tag (Japanese period after tag) これはテストであり、**[Translatable Content]**。

This is a test with Japanese content, without brackets and without spaces before the tag (Japanese period after tag) これはテストであり**Translatable Content**句読点記号などがあります。

This is a test with Japanese content, with brackets and without spaces before the tag (Japanese period after tag) これはテストであり **[Translatable Content]** 句読点記号などがあります。



你好，**[你好]**。


thistargetdoesnothavespaces**testcontent**beforeoraftertheboldtags

thistargetdoesnothavespaces **testcontent**beforeoraftertheboldtags

thistargetdoesnothavespaces **testcontent** beforeoraftertheboldtags

thistargetdoesnothavespaces**[testcontent]**beforeoraftertheboldtags

thistargetdoesnothavespaces**[testcontent]** beforeoraftertheboldtags

thistargetdoesnothavespaces **[testcontent]** beforeoraftertheboldtags


thistargetdoesnothavespaces**【testcontent】**beforeoraftertheboldtags

thistargetdoesnothavespaces**【testcontent】** beforeoraftertheboldtags

thistargetdoesnothavespaces **【testcontent】** beforeoraftertheboldtags


thistargetdoesnothavespaces **[testcontent]**.

thistargetdoesnothavespaces **[testcontent]**。


a ``` b
a ``\` b

*a**


[![C# logo][guilin.jpg]](#an-110-ado-net-docu)



In the following table, each language image is a link to detail about using the language with SQL Server. Each link jumps to a later section in this article.

| &nbsp; | &nbsp; | &nbsp; |
| :-- | :-- | :-- |
| &nbsp; [![C# logo][image-ref-320-csharp]](#an-110-ado-net-docu) | &nbsp; [![ORM Entity Framework, of .NET Framework][image-ref-333-ef]](#an-116-csharp-ef-orm) | &nbsp; [![Java logo][image-ref-330-java]](#an-130-jdbc-docu) |
| &nbsp; [![Node.js logo][image-ref-340-node]](#an-140-node-js-docu) | &nbsp; [**`ODBC for C++`**](#an-160-odbc-cpp-docu) | &nbsp; [![PHP logo][image-ref-360-php]](#an-170-php-docu) |
| &nbsp; [![Python logo][image-ref-370-python]](#an-180-python-docu) | &nbsp; [![Ruby logo][image-ref-380-ruby]](#an-190-ruby-docu) | &nbsp; ... |
| &nbsp; | &nbsp; | <br />|


In members that accept a `searchPattern` parameter, the search string can be any combination of literal characters and two wildcard characters; * and ?. This parameter does not recognize regular expressions. For more information, see the <xref:System.IO.Directory.EnumerateDirectories%28System.String%2CSystem.String%29> method or any other method that uses the `searchPattern` parameter.  


a`s
d`f

[!code-cpp[a](`)]
[!code-csharp[`](b)]
 
 
 
 <Proxy 伺服器 FQDN>
 
  <Proxy FQDN>



[a](b)
[a] (b)
 
 
 
### Optimierung  
  
|Option|Zweck|  
|------------|-----------|  
|[\/filealign](../../../csharp/language-reference/compiler-options/filealign-compiler-option.md)|Gibt die Größe der Abschnitte in der Ausgabedatei an.|  
|[\/optimize](../../../csharp/language-reference/compiler-options/optimize-compiler-option.md)|Aktiviert\/deaktiviert Optimierungen.|  
  
  
 
 
 # header
 a
 # header
 b
 
 
# Create VM

linux|asdf
---|---
[!INLCUDE]|[]|sfs


 
 
 
 - list
 # header inside list
 
 
 - list 2
   # header inside list 2
 
 
 1. a
    1. b
        * c
    <pre><code>
    d
    # e
    f
    </code></pre>
        * g
    <pre><code>
    h
    </code></pre>
    i
    <pre><code>
    j
    </code></pre>
 
 
 
 
 
 
 <span> and `code </span> overlapping each` other
 
 <span> and \`code </span> overlapping each` other






# <a name="create-app-v-virtual-environments-in-system-center-configuration-manager"></a><span data-ttu-id="146e5-103">Erstellen virtueller App-V-Umgebungen in System Center Configuration Manager</span>

<span data-ttu-id="146e5-104">*Gilt für: System Center Configuration Manager (Current Branch)*</span>

<span data-ttu-id="146e5-105">In einer virtuellen App-V-Umgebung (Microsoft Application Virtualization) in System Center Configuration Manager (Configuration Manager) können bereitgestellte virtuelle Anwendungen auf Windows-Clientcomputern ein Dateisystem und die Registrierung gemeinsam nutzen.</span> <span data-ttu-id="146e5-106">Im Gegensatz zu virtuellen Standardanwendungen können diese Anwendungen Daten gemeinsam verwenden.</span> <span data-ttu-id="146e5-107">Virtuelle Umgebungen werden bei der Installation der Anwendung bzw. bei der nächsten Auswertung der auf den Client-PCs installierten Anwendungen auf Clientcomputern erstellt oder geändert.</span> <span data-ttu-id="146e5-108">Sie können diese Anwendungen mit Prioritäten versehen. Falls dann mehrere Anwendungen versuchen, ein Dateisystem oder einen Registrierungswert zu ändern, hat die Anwendung mit der höchsten Priorität Vorrang.</span>  

> [!IMPORTANT]  
>  <span data-ttu-id="146e5-109">Verlassen Sie sich bei der Sicherheit, z.B. beim Schutz vor Antischadsoftware, nicht auf virtuelle App-V-Umgebungen.</span>  

 <span data-ttu-id="146e5-110">Gehen Sie wie folgt vor, um in Configuration Manager eine virtuelle App-V-Umgebung zu erstellen.</span>  







**a** b*.cs **c**. d **e** f


*** a ***

a *b *


*cdn**



**a *b* c**

**a ***b* c**

**The file has a * .pfile* file name extension**



+ 1
+ 2
+ 3


<tu id="104">*适用范围：System Center Configuration Manager (Current Branch)*</tu>


<tu id="105">可以使用 System Center Configuration Manager (Configuration Manager) 中的应用配置策略来分发用户运行应用时可能需要的设置。</tu> <tu id="106">例如，应用可能要求用户指定以下详细信息：</tu>
- <tu id="107">自定义端口号</tu>
- <tu id="108">语言设置</tu>
- <tu id="109">安全设置</tu>
- <tu id="110">公司徽标之类的品牌设置</tu>



<div style="display:none">
HIDDEN DIV
</div>





### <a name="to-create-a-boundary"></a>创建边界  

1.  在 Configuration Manager 控制台中，单击“管理” > “层次结构尊重” > “边界”  

2.  在“主页”  选项卡上的“创建”  组中，单击“创建边界” **Boundary.**。  




`IHttpRequestFeature`  
   Defines the structure of an HTTP request, including the ** protocol **, path, query string, headers, and body.

`IHttpResponseFeature`
   Defines the structure of an HTTP response, including the status code, headers, and body of the response.





adfa
    * a
    * b



## Test

- a

        b
        
      + c


### Test 2


# a

    - b



![alt text](url.png "Title Text")




c:\a\b\c\.


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
        
        
# heading

1. a

  - b

        c

        
# heading

1. a
    - b

        c


# html test

<ul>
<li>Always present in Tablet mode.

    Not available in Desktop mode. Title bar back button can be enabled, instead. See [PC, Laptop, Tablet](#PC).

    Users can switch between running in Tablet mode and Desktop mode by going to **Settings &gt; System &gt; Tablet mode** and setting **Make Windows more touch-friendly when using your device as a tablet**.</li>
